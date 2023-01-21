using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MANDAT.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddTableMatch : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Matches",
                columns: table => new
                {
                    MentorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StudentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MatchDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matches", x => new { x.StudentId, x.MentorId });
                    table.ForeignKey(
                        name: "FK_Matches_Mentors_MentorId",
                        column: x => x.MentorId,
                        principalTable: "Mentors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Matches_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Matches_MentorId",
                table: "Matches",
                column: "MentorId");

            ////////
            migrationBuilder.CreateTable(
               name: "VideoMeetingsDetails",
               columns: table => new
               {
                   MentorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                   StudentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                   MeetingTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                   Link = table.Column<string>(type: "nvarchar(max)", nullable: false),
                   Dial = table.Column<string>(type: "nvarchar(max)", nullable: false),
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_VideoMeetingsDetails", x => new { x.StudentId, x.MentorId });
                   table.ForeignKey(
                       name: "FK_VideoMeetingsDetails_Mentors",
                       column: x => x.MentorId,
                       principalTable: "Mentors",
                       principalColumn: "Id",
                       onDelete: ReferentialAction.Cascade);
                   table.ForeignKey(
                       name: "FK_VideoMeetingsDetails_Students",
                       column: x => x.StudentId,
                       principalTable: "Students",
                       principalColumn: "Id",
                       onDelete: ReferentialAction.NoAction);
               });

            migrationBuilder.CreateIndex(
                name: "IX_VideoMeetingsDetails_MentorId",
                table: "VideoMeetingsDetails",
                column: "MentorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Matches");
            migrationBuilder.DropTable(
                name: "VideoMeetingsDetails");
        }
    }
}
