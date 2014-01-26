using System.Collections.Generic;
using System.Linq;

namespace Minnox.Server.Engines
{
    public interface IQueryEngine
    {
        IQueryable<Connection> Connections { get; }
    }
}