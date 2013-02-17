using System;
using System.Collections.Generic;

namespace Minnox.HouseRules
{
    public interface IRuleService
    {
        CreateResponse Create(CreateRequest request);
    }

    public class CreateRequest
    {
        public Type TriggerInterface { get; set; }
        public string TriggerEvent { get; set; }

        public Type ActorInterface { get; set; }
        public string ActorEvent { get; set; }

        public IEnumerable<Tuple<string, string>> Mapping { get; set; }
    }

    public class CreateResponse
    {
        public Guid Id { get; set; }
    }
}
