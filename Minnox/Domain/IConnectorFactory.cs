using System.Collections.Generic;

namespace Minnox
{
    public interface IConnectorFactory
    {
        IEnumerable<IConnector> GetConnectors();
    }
}