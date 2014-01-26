
using System;
using System.Net;
using Microsoft.QualityTools.Testing.Fakes;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Minnox.Connectors.MusicPlayerDaemon;

namespace Minnox.Tests.Connectors.MusicPlayerDaemon
{
    [TestClass]
    public class MusicPlayerDaemonWorkerTest
    {
        [TestMethod]
        public void StartMakesConnection()
        {
            //Arrange
            var connectionInitiaded = false;
            IPEndPoint actualServer = null;
            using (ShimsContext.Create())
            {
                Libmpc.Fakes.ShimMpcConnection.AllInstances.Connect = connection =>
                {
                    connectionInitiaded = true;
                    actualServer = connection.Server;
                };

                var mpdConnection = new MusicPlayerDaemonConnection {Name = "Test", EndPoint = new IPEndPoint(IPAddress.Loopback, 5000)};

                //Act
                var worker = new MusicPlayerDaemonWorker();
                worker.Init(mpdConnection);
                worker.Start();

                //Assert
                Assert.IsTrue(connectionInitiaded);
                Assert.AreEqual(actualServer, mpdConnection.EndPoint);
            }
        }

        [TestMethod]
        [ExpectedException(typeof(Exception), "Test Exception")]
        public void StartUnreachableServer()
        {
            //Arrange
            using (ShimsContext.Create())
            {
                var exception = new Exception("Test Exception");

                Libmpc.Fakes.ShimMpcConnection.AllInstances.Connect = connection => { throw exception; };
                var mpdConnection = new MusicPlayerDaemonConnection { Name = "Test", EndPoint = new IPEndPoint(IPAddress.Loopback, 5000) };

                //Act
                var worker = new MusicPlayerDaemonWorker();
                worker.Init(mpdConnection);
                worker.Start();
            }
        }
    }
}
