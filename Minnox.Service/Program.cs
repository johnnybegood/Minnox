using System;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Castle.Windsor.Installer;

namespace Minnox.Service
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting Minnox Service");

            IWindsorContainer container = new WindsorContainer();
            container.Install(FromAssembly.InThisApplication())
                .Register(Component.For<WorkerRunner>().ImplementedBy<WorkerRunner>());

            var workerRunner = container.Resolve<WorkerRunner>();
            workerRunner.Start();

            Console.WriteLine("Press RETURN to exit");
            Console.ReadLine();

            workerRunner.Stop();
        }
    }
}
