const int outputPin = 2;
const int outputLed = 13;
const int inputPin = 7;

int currentOutput = LOW;
long lastTriggerTime = 0; 
long outputLength = 2000;  //2s

void setup() {
  // put your setup code here, to run once:
  pinMode(outputPin, OUTPUT);
  pinMode(outputLed, OUTPUT);
  pinMode(inputPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int reading = digitalRead(inputPin);
  
  if (reading == HIGH)
  {
    triggerOutput();  
  }
  
  SetOutputState();
}

void triggerOutput() {
  if (currentOutput == LOW)
  {
    currentOutput = HIGH;
    lastTriggerTime = millis();
  }
}

void SetOutputState() {
  long now = millis();
  
  if ((now - lastTriggerTime) > outputLength) {
     digitalWrite(outputPin, LOW);
     digitalWrite(outputLed, LOW);
     currentOutput = LOW;
     lastTriggerTime = 0;
  }
  else if (lastTriggerTime > 0) {
    digitalWrite(outputPin, HIGH);
    digitalWrite(outputLed, HIGH);
  }
}
  
