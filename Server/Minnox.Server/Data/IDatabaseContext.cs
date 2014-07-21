using Minnox.Server.Models.Gate;
using System.Data.Entity;

namespace Minnox.Server.Data
{
    public interface IDatabaseContext
    {
        IDbSet<GateDevice> GateDevices { get; set; }
    }
}