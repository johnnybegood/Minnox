using System;

namespace Minnox.Server.Connectors.Gate
{
    public class Status
    {
        public DateTime TimeOnGate { get; set; }
        public DateTime[] Schedule { get; set; }
    }
}