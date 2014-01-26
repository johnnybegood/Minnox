namespace Minnox
{
    public  interface IWorkerFactory
    {
        IWorker<Connection> CreateFor(Connection connection);
    }
}
