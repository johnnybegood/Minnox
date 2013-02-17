using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Minnox.Interfaces.Contracts;
using NUnit.Framework;
using Rhino.Mocks;

namespace Minnox.Tests.HouseRules
{
    [TestFixture]
    public class InterfaceServiceTest
    {
        private MockRepository _mockRepository;

        [SetUp]
        public void Setup()
        {
            _mockRepository = new MockRepository();
        }

        [Test]
        public void GetShouldReturnAllInterfaces()
        {
            var repository = _mockRepository.StrictMock<IInterfaceRepository>();
            var service = new InterfaceService(repository);

            var objToReturn = new List<IInterfaceDefinition>
                                  {
                                      _mockRepository.Stub<IInterfaceDefinition>(), 
                                      _mockRepository.Stub<IInterfaceDefinition>()
                                  };
            objToReturn.First().Stub(d => d.Description).Return(new DefinitionDescription { Name = "TEST" });

            With.Mocks(_mockRepository)
                .Expecting(() => repository.Expect(r => r.GetAll()).Return(objToReturn))
                .Verify(() =>
                            {
                                var actual = service.Get().ToList();

                                actual.Should().HaveCount(2);
                                actual.Should().ContainSingle(i => i.Description != null && i.Description.Name == "TEST");
                            });
        }
    }

    public interface IInterfaceRepository
    {
        IEnumerable<IInterfaceDefinition> GetAll();
    }

    public class InterfaceService
    {
        private readonly IInterfaceRepository _repository;

        public InterfaceService(IInterfaceRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<IInterfaceDefinition> Get()
        {
            return _repository.GetAll();
        }
    }
}
