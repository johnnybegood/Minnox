namespace Minnox
{
    public interface IWorker<out T> where T : Connection
    {
        void Init(Connection connection);

        void Start();
        string ShortName { get; }
        void Stop();
    }
}