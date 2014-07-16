using System;

namespace Minnox.Server.Connectors
{
    public interface IGateConnector : IDisposable
    {
        void OpenGate(byte[] gateAddress);
        void Connect(string port);
    }
}