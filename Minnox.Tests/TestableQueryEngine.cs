using System.Collections.Generic;
using System.Linq;
using Minnox.Server.Engines;

namespace Minnox.Tests
{
    public class TestableQueryEngine : IQueryEngine
    {
        private readonly List<Connection> _connections = new List<Connection>();

        public IQueryable<Connection> Connections
        {
            get { return _connections.AsQueryable(); }
        }

        public TestableQueryEngine AddTestData(Connection connection)
        {
            _connections.Add(connection);

            return this;
        }
    }
}
