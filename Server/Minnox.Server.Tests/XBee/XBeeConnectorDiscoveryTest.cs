using Microsoft.VisualStudio.TestTools.UnitTesting;
using Minnox.Server.Connectors.Gate;

namespace Minnox.Server.Tests.XBee
{
    [TestClass]
    [Ignore]
    public class XBeeConnectorDiscoveryTest
    {
        [TestMethod]
        public void DiscoverGates()
        {
            var connector = new XBeeConnector();
            connector.Connect("COM4");
            var x = connector.Discover();
            connector.Disconnect();
            Assert.IsNotNull(x);
        }
    }
}
