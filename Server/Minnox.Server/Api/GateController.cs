using Minnox.Server.Connectors;
using System.Net.Http;
using System.Web.Http;

namespace Minnox.Server.Api
{
    [RoutePrefix("api/gate")]
    public class GateController : ApiController
    {
        private IGateConnector _gateConnector;
        private static byte[] gate1adress = new byte[] { 0x00, 0x13, 0xA2, 0x00, 0x40, 0xB7, 0xDB, 0x09 };

        public GateController(IGateConnector gateConnector)
        {
            _gateConnector = gateConnector;
        }

        [Route("open")]
        [HttpGet()]
        public HttpResponseMessage OpenGate()
        {
            _gateConnector.OpenGate(gate1adress);

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }
    }
}
