using Minnox.Server.Models.Gate;
using System.Collections.Generic;
using System.Threading;
using System;

namespace Minnox.Server.Connectors.Gate
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

        public IEnumerable<DiscoveredGate> Discover()
        {
            Thread.Sleep(1000);
            yield return new DiscoveredGate { Address = new byte[] { 0x10, 0x10, 0x10, 0x10, 0x10 }, FriendlyName = "FAKE" };
        }

        public void Disconnect()
        {
            //Do nothing
        }
    }
}
