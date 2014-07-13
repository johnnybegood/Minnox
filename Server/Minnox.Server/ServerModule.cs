using Minnox.Server.Connectors;
using Ninject.Modules;

namespace Minnox.Server
{
    class ServerModule : NinjectModule
    {
        public override void Load()
        {
            Kernel.Bind<IGateConnector>().To<Connectors.Gate.Connector>().InSingletonScope();
        }
    }
}
