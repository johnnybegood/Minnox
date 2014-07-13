using System;
using CommandMessenger;
using CommandMessenger.TransportLayer;
using Minnox.Server.Models;

namespace Minnox.Server.Connectors.Gate
{
    internal class Connector : IGateConnector
    {
        private const int DefaultTimeout = 2000;
        private SerialTransport _transport;
        private CmdMessenger _messenger;

        /// <summary>
        /// Connect to gate
        /// </summary>
        /// <param name="port"></param>
        public void Connect(string port)
        {
            var serialSettings = new SerialSettings { PortName = "COM3", BaudRate = 115200, DtrEnable = false };

            _transport = new SerialTransport { CurrentSerialSettings = serialSettings };
            _messenger = new CmdMessenger(_transport) { BoardType = BoardType.Bit16 };

            _transport.CurrentSerialSettings.PortName = port;
            _messenger.StartListening();
        }

        /// <summary>
        /// Open the gate manually
        /// </summary>
        public void OpenGate()
        {
            if (_messenger == null)
                throw new InvalidOperationException("Unable to open gate, connection has not been opend. Call connect() first.");

            _messenger.SendCommand(new SendCommand((int)Commands.TriggerManualCommand,(int)Commands.StatusOk, DefaultTimeout));
        }

        public GateSettings Status()
        {
            return new GateSettings { DeviceTime = DateTime.Now };
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (_messenger != null)
                    {
                        _messenger.StopListening();
                        _messenger.Dispose();
                    }

                    if (_transport != null)
                    {
                        _transport.Dispose();
                    }
                }

                disposedValue = true;
            }
        }

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
