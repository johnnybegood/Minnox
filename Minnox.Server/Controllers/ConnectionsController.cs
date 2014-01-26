using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Minnox.Server.Engines;
namespace Minnox.Server.Controllers
{
    public class ConnectionsController : ApiController
    {
        private readonly IQueryEngine _queryEngine;

        public ConnectionsController(IQueryEngine queryEngine)
        {
            _queryEngine = queryEngine;
        }

        // GET api/values
        public IEnumerable<Connection> Get()
        {
            return _queryEngine.Connections.ToList();
        }

        // GET api/values/{guid}
        public Connection Get(Guid id)
        {
            return _queryEngine.Connections.FirstOrDefault(c => c.Id == id);
        }

        //// POST api/values
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}
