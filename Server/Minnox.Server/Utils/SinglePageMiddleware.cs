using Microsoft.Owin;
using System.Linq;
using System.Threading.Tasks;

namespace Minnox.Server.Utils
{
    /// <summary>
    /// Redirect all pages to the root page
    /// </summary>
    public class SinglePageMiddleware : OwinMiddleware
    {
        private PathString[] _ignorePaths;
        private static PathString _rootPath = new PathString("/");

        /// <summary>
        /// Constructor for <see cref="SinglePageMiddleware"/>
        /// </summary>
        /// <param name="next"></param>
        /// <param name="ignorePaths">Paths to ignore</param>
        public SinglePageMiddleware(OwinMiddleware next, params PathString[] ignorePaths) : base(next)
        {
            _ignorePaths = ignorePaths;
        }

        public async override Task Invoke(IOwinContext context)
        {
            var path = context.Request.Path;

            if (!path.Equals(_rootPath) && !_ignorePaths.Any(s => path.StartsWithSegments(s)))
            {
                context.Request.Path = _rootPath;
            }

            await Next.Invoke(context);
        }
    }
}
