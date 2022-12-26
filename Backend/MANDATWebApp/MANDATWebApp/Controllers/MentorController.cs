using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;
using System.ComponentModel;
using System.Globalization;

namespace MANDATWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        private readonly IMentorManager mentorManager;
        public MentorController(IMentorManager mentorManager)
        {
            this.mentorManager = mentorManager;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllMentors()
        {
            var mentorList = mentorManager.GetAllMentors();
            return Ok(mentorList);
        }

        [HttpGet("byIdViewMentAdm/{mentorId}")]
        public async Task<IActionResult> GetMentorByIdMentorAdminView([FromRoute] Guid mentorId)
        {
            var mentor = mentorManager.GetMentorByIdForMentorAdminView(mentorId);
            return Ok(mentor);
        }


        [HttpGet("byIdViewStud/{mentorId}")]
        public async Task<IActionResult> GetMentorByIdStudView([FromRoute] Guid mentorId)
        {
            var mentor = mentorManager.GetMentorByIdForStudentView(mentorId);
            return Ok(mentor);
        }

        [HttpGet("byName/{name}")]///////////  !!!!
        public  List<MentorByIdViewByStudentDTO> GetMentorByHisName([FromRoute]string name)
        {
            var mentor = mentorManager.GetMentorByName(name);
            return mentor;
        }

        [HttpGet("byIdLocation/{locationId}")]
        public async Task<IActionResult> GetMentorsByTheLocation([FromRoute] Guid locationId)
        {
            var mentors = mentorManager.GetMentorsByLocation(locationId);
            return Ok(mentors);
        }

        [HttpGet("mentorsLocations")]
        public async Task<IActionResult> GetMentorsByLocations()
        {
            var mentors = mentorManager.GetMentorsLocations();
            return Ok(mentors);
        }

        [HttpGet("studentsByIdMentor/{mentorId}")]
        public async Task<IActionResult> GetAllStudentsForMentorId([FromRoute] Guid mentorId)
        {
            var students = mentorManager.GetStudentsForMentor(mentorId);
            return Ok(students);
        }

        [HttpGet("phone")]
        public async Task<IActionResult> GetMentorPhoneNumber(Guid studentId, Guid mentorId)
        {
            var result = mentorManager.GetMentorPhoneNumber(studentId, mentorId);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateMentor(Guid Id, [FromBody] MentorUpdateDTO mentorUpdateDTO)
        {
            var result = mentorManager.Update(Id,mentorUpdateDTO);
            return Ok(result);
        }

        [HttpPut("mentorItems")]
        public async Task<IActionResult> UpdateMentorItems(Guid Id, [FromBody] MentorUpdateItemsDTO mentorUpdateItemsDTO)
        {
            var result = mentorManager.UpdateMentor(Id,mentorUpdateItemsDTO);
            return Ok(result);
        }

        [HttpPatch]
        public IActionResult EditReview(Guid id, bool isDeleted)
        {
            var result = mentorManager.ManagerIsDeleted(id, isDeleted);
            return Ok(result);
        }

    }
}
