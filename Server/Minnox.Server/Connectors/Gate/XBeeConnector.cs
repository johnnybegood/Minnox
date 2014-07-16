using Minnox.Server.Models;
using NETMF.OpenSource.XBee;
using NETMF.OpenSource.XBee.Api;
using System;
using System.Threading;

namespace Minnox.Server.Connectors.Gate
{
    class XBeeConnector : IGateConnector
    {
        private const string lockPort = "D0";
        private static byte[] powerOnCommand = new byte[] { 0x05 };
        private static byte[] powerOffCommand = new byte[] { 0x04 };

        private IXBeeConnection _connection;
        private XBeeApi _api;

        public void OpenGate(byte[] gateAddress)
        {
            var address = new XBeeAddress64(gateAddress);

            _api.BeginSend(new RemoteAtCommand(lockPort, address, powerOnCommand));
            Thread.Sleep(2000);
            _api.BeginSend(new RemoteAtCommand(lockPort, address, powerOffCommand));
        }

        public void Connect(string port)
        {
            _connection = new SerialConnection(port, 9600);
            _connection.Open();
            _api = new XBeeApi(_connection);
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (_connection != null)
                        _connection.Close();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources. 
        // ~XBeeConnector() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: tell GC not to call its finalizer when the above finalizer is overridden.
            // GC.SuppressFinalize(this);
        }
        #endregion

    }
}
