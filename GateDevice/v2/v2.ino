#include <CmdMessenger.h>
#include <config.h>

//Config
const int outputPin = 2;
const int outputLed = 13;
const int inputPin = 7;
long outputLength = 2 * 1000;

//Private variables
int currentOutput = LOW;
long lastTriggerTime = 0;
long schedule = 0;
CmdMessenger cmdMessenger = CmdMessenger(Serial);

//Commands
enum
{
  kLog, // Outgoing command to send status updates
  kOk, // Generic Response when command received successfully
  kError, // Error
  
  kTriggerManualCommand, // Incomming command to manual trigger gate release
  kScheduleCommand, // Incomming command to schedule gate release
  kReadConfigCommand, // Incomming command requesting current config
  kReadConfigResponse // Response to kReadConfigCommand 
};

//Errors
enum
{
  errUnkownCommand,
  errTimeNotSet
};

void setup() {
  // put your setup code here, to run once:
  pinMode(outputPin, OUTPUT);
  pinMode(outputLed, OUTPUT);
  pinMode(inputPin, INPUT);

  Serial.begin(9600);

  cmdMessenger.attach(unkownCommand);
  cmdMessenger.attach(kTriggerManualCommand, onTriggerManualCommand);
  cmdMessenger.attach(kReadConfigCommand, sendConfig);
  cmdMessenger.sendCmd(kLog, "Gate system has started!");
}

void loop() {
  // put your main code here, to run repeatedly:
  cmdMessenger.feedinSerialData();

  if (checkManualButton() || scheduledTriggered()) {
    openLock();
  }

  closeLockOnTimeout();
}

bool checkManualButton() {
  // Check if the gate is manually triggered by button
  int buttonState = digitalRead(inputPin);
  bool triggered = buttonState == HIGH;

  return triggered;
}

bool scheduledTriggered() {
  if (schedule == 0) {
    return false;  //Do nothing when no schedule is defined
  }

  long now = millis();
  bool triggered = (now - schedule) <= 0;

  if (triggered) {
    schedule = 0;  //Reset schedule
  }

  return triggered;
}

void onTriggerManualCommand()
{
  openLock();
  cmdMessenger.sendCmd(kOk);
} 

void sendConfig()
{
  cmdMessenger.sendCmd(kError, (int)errTimeNotSet);
}

void unkownCommand()
{
  cmdMessenger.sendCmd(kError, (int)errUnkownCommand);
}

void openLock() {

  if (currentOutput == LOW) //If gate is already open, ignore
  {
    currentOutput = HIGH;
    digitalWrite(outputPin, currentOutput);
    digitalWrite(outputLed, currentOutput);

    lastTriggerTime = millis();

    cmdMessenger.sendCmd(kLog, "Released Gate");
  }
}

void closeLockOnTimeout() {
  if (lastTriggerTime > 0)
  {
    long now = millis();

    if ((now - lastTriggerTime) > outputLength) {
      digitalWrite(outputPin, LOW);
      digitalWrite(outputLed, LOW);

      currentOutput = LOW;
      lastTriggerTime = 0;

      cmdMessenger.sendCmd(kLog, "Closed Gate Release");
    }
  }
}


