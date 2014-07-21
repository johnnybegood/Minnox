using Minnox.Server.Models.Gate;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
namespace Minnox.Server.Data
{
    [DbConfigurationType(typeof(DatabaseConfiguration))]
    public class DatabaseContext : DbContext, IDatabaseContext
    {
        public DatabaseContext() : base("MinnoxStorage")
        {
            
        }

        public IDbSet<GateDevice> GateDevices { get; set; }
    }
}
