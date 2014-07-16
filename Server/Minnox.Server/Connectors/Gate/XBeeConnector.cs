using Minnox.Server.Models;
using NETMF.OpenSource.XBee;
using NETMF.OpenSource.XBee.Api;
using System;
using System.Threading;

namespace Minnox.Server.Connectors.Gate
{
    class XBeeConnector : IGateConnector
    {
        private IXBeeConnection _connection;
        private XBeeApi _api;

        public void OpenGate()
        {
            var gate1 = new XBeeAddress64(0x00, 0x13, 0xA2, 0x00, 0x40, 0xB7, 0xDB, 0x09);

            var gate1OnCommand = new RemoteAtCommand("D0", gate1, new byte[] { 0x05 });
            var gate1OffCommand = new RemoteAtCommand("D0", gate1, new byte[] { 0x04 });

            _api.BeginSend(gate1OnCommand);
            Thread.Sleep(2000);
            _api.BeginSend(gate1OffCommand);
        }

        public void Connect(string port)
        {
            _connection = new SerialConnection(port, 9600);
            _connection.Open();
            _api = new XBeeApi(_connection);
        }

        public GateSettings Status()
        {
            return new GateSettings();
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
