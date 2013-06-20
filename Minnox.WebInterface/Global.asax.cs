using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Castle.Windsor;
using Minnox.WebInterface.App_Start;

namespace Minnox.WebInterface
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801
    public class MvcApplication : System.Web.HttpApplication
    {
        private static IWindsorContainer _container;

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ContainerConfig.RegisterDepencyResolver(GlobalConfiguration.Configuration);
            ContainerConfig.RegisterMappers(GlobalConfiguration.Configuration);
        }
        protected void Application_End()
        {
            ContainerConfig.ReleaseContainer(GlobalConfiguration.Configuration);
        }
    }
}