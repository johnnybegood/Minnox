using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Minnox.Server.Data
{
    class DatabaseConfiguration : DbConfiguration
    {
        public DatabaseConfiguration()
        {
            SetDefaultConnectionFactory(new LocalDbConnectionFactory("v11.0"));
        }
    }
}
