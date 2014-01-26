namespace Minnox
{
    public interface IPublisher
    {
        void Publish(string source, string action, object data = null);
    }
}