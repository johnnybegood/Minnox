using System;
using System.Collections.Generic;

namespace Minnox
{
    public class ConnectorRegistration<T> where T: Connection
    {
        public string Name { get; set; }
    }
}