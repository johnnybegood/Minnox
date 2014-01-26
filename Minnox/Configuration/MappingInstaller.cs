using Castle.Facilities.Logging;
using Castle.Facilities.TypedFactory;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Minnox.Engines;
using Minnox.Messaging;
using Minnox.Server.Engines;

namespace Minnox.Configuration
{
    public class MappingInstaller: IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container
                .AddFacility<LoggingFacility>(f => f.UseLog4Net())
                .AddFacility<TypedFactoryFacility>()
                .Register(Component.For<IConnectorFactory>().AsFactory())
                .Register(Component.For<IWorkerFactory>().ImplementedBy<WorkerFactory>().LifestyleSingleton())
                .Register(Classes.FromThisAssembly().BasedOn<IConnector>())
                .Register(Classes.FromThisAssembly().BasedOn(typeof (IWorker<>)).WithService.Base())
                .Register(Component.For<IPublisher>().ImplementedBy<Publisher>())
                .Register(Component.For<IQueryEngine>().ImplementedBy<QueryEngine>());
        }
    }
}
