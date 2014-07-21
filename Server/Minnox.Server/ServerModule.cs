using Minnox.Server.Connectors;
using Minnox.Server.Data;
using Ninject.Modules;
using Ninject.Web.Common;

namespace Minnox.Server
{
    class ServerModule : NinjectModule
    {
        public override void Load()
        {
            Kernel.Bind<IGateConnector>().To<Connectors.Gate.FakeGateConnector>().InSingletonScope();
            Kernel.Bind<IDatabaseContext>().To<DatabaseContext>().InRequestScope();
        }
    }
}
