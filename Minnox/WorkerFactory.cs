using Castle.MicroKernel;

namespace Minnox
{
    public class WorkerFactory : IWorkerFactory
    {
        private readonly IKernel _container;

        public WorkerFactory(IKernel container)
        {
            _container = container;
        }

        public IWorker<Connection> CreateFor(Connection connection)
        {
            var type = typeof(IWorker<>).MakeGenericType(connection.GetType());
            var worker = (IWorker<Connection>) _container.Resolve(type);
            worker.Init(connection);

            return worker;
        }
    }
}
