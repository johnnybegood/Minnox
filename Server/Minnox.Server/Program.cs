using System.Diagnostics;
using Topshelf;
using Topshelf.Ninject;

namespace Minnox.Server
{
    class Program
    {
        static int Main(string[] args)
        {
            var exitCode = HostFactory.Run(host =>
            {
                //Host IoC
                host.UseNinject(new ServerModule());

                //Host Service Settings
                host.SetDescription("Minnox Server");
                host.SetDisplayName("Minnox");
                host.SetServiceName("Minnox");
                host.RunAsPrompt();
                host.StartAutomaticallyDelayed();

                //Link Service
                host.Service<MinnoxServer>(service =>
                {
                    service.ConstructUsingNinject()
                           .WhenStarted(s => s.Start(true))
                           .WhenStopped(s => s.Stop());
                });
            });

            return (int)exitCode;
        }
    }
}
