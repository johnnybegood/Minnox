using System;

namespace Minnox
{
    public abstract class Connection
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}