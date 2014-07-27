using Minnox.Server.Connectors;
using Minnox.Server.Data;
using Minnox.Server.Models.Gate;
using System;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Minnox.Server.Api
{
    [RoutePrefix("api/gate")]
    public class GateController : ApiController
    {
        private IGateConnector _gateConnector;
        private static byte[] gate1adress = new byte[] { 0x00, 0x13, 0xA2, 0x00, 0x40, 0xB7, 0xDB, 0x09 };
        private IDatabaseContext _db;

        public GateController(IGateConnector gateConnector, IDatabaseContext db)
        {
            _gateConnector = gateConnector;
            _db = db;
        }

        [Route("open")]
        [HttpGet()]
        public HttpResponseMessage OpenGate()
        {
            _gateConnector.OpenGate(gate1adress);

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }

        [Route("")]
        [HttpGet()]
        public GateDevice[] Index()
        {
            return _db.GateDevices.ToArray();
        }

        [Route("Discover")]
        [HttpGet()]
        public DiscoveredGate[] Discover()
        {
            var knowAdresses = _db.GateDevices.Select(dev => dev.Adress);
            var discoverdAdresses = _gateConnector.Discover();

            return discoverdAdresses
                .Where(d => !knowAdresses.Contains(d.Address))
                .ToArray();
        }
    }
}
