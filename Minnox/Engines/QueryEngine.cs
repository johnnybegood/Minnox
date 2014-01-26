using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Minnox.Connectors.MusicPlayerDaemon;
using Minnox.Server.Engines;

namespace Minnox.Engines
{
    public class QueryEngine : IQueryEngine
    {
        private static readonly List<Connection> InternalConnections = new List<Connection>
                {
                    new MusicPlayerDaemonConnection
                    {
                        Id = new Guid("AD65C7E1-EFDA-46BD-B868-899467A6316B"),
                        Name = "Muziek Gelijkvloers",
                        EndPoint = new IPEndPoint(IPAddress.Parse("192.168.0.23"), 6600)
                    }
                };

        public IQueryable<Connection> Connections
        {
            get
            {
                return InternalConnections.AsQueryable();
            }
        }
    }
}
