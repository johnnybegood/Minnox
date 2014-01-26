using System;
using System.Collections.Generic;
using System.Linq;
using Minnox.Server.Engines;

namespace Minnox.Service
{
    public class WorkerRunner
    {
        private readonly IWorkerFactory _workerFactory;
        private readonly IPublisher _publisher;
        private readonly IQueryEngine _queryEngine;
        private List<IWorker<Connection>> _workers;

        public WorkerRunner(IWorkerFactory workerFactory, IPublisher publisher, IQueryEngine queryEngine)
        {
            _workerFactory = workerFactory;
            _publisher = publisher;
            _queryEngine = queryEngine;
        }

        public void Start()
        {

            var connections = _queryEngine.Connections;
            _workers = connections
                .Select(c => _workerFactory.CreateFor(c))
                .Where(w => w != null)
                .ToList();

            foreach (var worker in _workers)
            {
                try
                {
                    worker.Start();
                    _publisher.Publish(worker.ShortName, "Started");
                }
                catch (Exception ex)
                {
                    _publisher.Publish(worker.ShortName, "Start Failed", ex);
                }
            }
        }

        public void Stop()
        {
            foreach (var worker in _workers)
            {
                try
                {
                    worker.Stop();
                    _publisher.Publish(worker.ShortName, "Stopped");
                }
                catch (Exception ex)
                {
                    _publisher.Publish(worker.ShortName, "Stop Failed", ex);
                }
            }
        }
    }
}
