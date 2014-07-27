using Minnox.Server.Models.Gate;
using System;
using System.Collections.Generic;

namespace Minnox.Server.Connectors
{
    public interface IGateConnector
    {
        void Connect(string port);
        void Disconnect();

        void OpenGate(byte[] gateAddress);
        IEnumerable<DiscoveredGate> Discover();
    }
}