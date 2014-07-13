namespace Minnox.Server.Connectors.Gate
{
    public enum Commands
    {
        Log, // Status updates
        StatusOk, // Generic Response when command received successfully
        StatusError, // Error

        TriggerManualCommand, // Command to manual trigger gate release
        ScheduleCommand, //Command to schedule gate release
        ReadConfigCommand, // Command requesting current config
        ReadConfigResponse // Response to ReadConfigCommand 
    }
}