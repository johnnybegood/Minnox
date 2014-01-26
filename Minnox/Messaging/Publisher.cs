using Castle.Core.Logging;

namespace Minnox.Messaging
{
    public class Publisher : IPublisher
    {
        private readonly ILogger _logger;

        public Publisher(ILogger logger)
        {
            _logger = logger;
        }

        public void Publish(string source, string action, object data = null)
        {
            _logger.Info(string.Format("Published message '{0}.{1}': {2}", source, action, data));
        }
    }
}
