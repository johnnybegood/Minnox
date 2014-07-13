﻿using Minnox.Server.Connectors;
using System.Net.Http;
using System.Web.Http;

namespace Minnox.Server.Api
{
    [RoutePrefix("api/gate")]
    public class GateController : ApiController
    {
        private IGateConnector _gateConnector;

        public GateController(IGateConnector gateConnector)
        {
            _gateConnector = gateConnector;
        }

        [Route("open")]
        [HttpGet()]
        public HttpResponseMessage OpenGate()
        {
            _gateConnector.OpenGate();

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }
    }
}
