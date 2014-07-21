namespace Minnox.Server.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class GateDevice : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.GateDevices",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Adress = c.Binary(),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.GateDevices");
        }
    }
}
