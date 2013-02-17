using Minnox.Interfaces.Contracts;

namespace Minnox.Interfaces.MPD
{
    public class PlayerDefinition : IInterfaceDefinition
    {
        private static readonly DefinitionDescription DefinitionDescription = new DefinitionDescription
                                                                {
                                                                    Description = "Music Player Daemon",
                                                                    Name = "MPD"
                                                                };

        public DefinitionDescription Description { get { return DefinitionDescription;  } }
    }
}
