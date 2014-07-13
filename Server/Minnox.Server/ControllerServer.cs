using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Hosting;
using Microsoft.Owin.StaticFiles;
using Minnox.Server.Connectors;
using Ninject;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using Owin;
using System;
using System.Diagnostics;
using System.Web.Http;

namespace Minnox.Server
{
    public class MinnoxServer
    {
        private IGateConnector _connector;
        private IKernel _kernel;
        private IDisposable _webApp;

        public const string Url = "http://localhost:5080";

        public MinnoxServer(IGateConnector connector, IKernel kernel)
        {
            _connector = connector;
            _kernel = kernel;
        }

        public void Start(bool launchBrowser = false)
        {
            //_connector = new GateConnector();
            _connector.Connect("COM3");

            var httpConfiguration = new HttpConfiguration();
            httpConfiguration.MapHttpAttributeRoutes();

            _webApp = WebApp.Start(Url, builder =>
                builder
                        .Use<SinglePageMiddleware>(new[] { new PathString("/bower_components"), new PathString("/css"), new PathString("/js"), new PathString("/api") })
                        .UseFileServer(new FileServerOptions { FileSystem = new PhysicalFileSystem("../../Static") })
                        .UseNinjectMiddleware(() => _kernel)
                        .UseNinjectWebApi(httpConfiguration));

            if (launchBrowser)
                Process.Start(Url);
        }

        public void Stop()
        {
            _connector.Dispose();
        }
    }
}