using Minnox.Interfaces.Contracts;

namespace Minnox.Interfaces.IP2IR
{
    public class InfraredDefinition : IInterfaceDefinition
    {
        private static readonly DefinitionDescription DefinitionDescription = new DefinitionDescription
                                                                                   {
                                                                                       Description = "Interface to IR",
                                                                                       Name = "IP2IR"
                                                                                   };

        public DefinitionDescription Description
        {
            get { return DefinitionDescription; }
        }
    }
}
