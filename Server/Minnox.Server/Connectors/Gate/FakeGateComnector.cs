﻿namespace Minnox.Server.Connectors.Gate
{
    public class FakeGateConnector : IGateConnector
    {
        public void OpenGate(byte[] gateAddress)
        {
            //Do nothing
        }

        public void Connect(string port)
        {
           //Do nothing
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).          
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources. 
        // ~FakeGateConnector() {
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
