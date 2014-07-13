using System;

namespace Minnox.Server.Connectors
{
    public interface IGateConnector : IDisposable
    {
        void OpenGate();
        void Connect(string port);
    }
}