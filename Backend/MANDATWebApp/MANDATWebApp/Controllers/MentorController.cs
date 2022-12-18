﻿using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("byIdViewMentAdm/{id}")]
        public async Task<IActionResult> GetMentorByIdMentorAdminView([FromRoute] Guid mentorId)
        {
            var mentor = mentorManager.GetMentorByIdForMentorAdminView(mentorId);
            return Ok(mentor);
        }


        [HttpGet("byIdViewStud/{id}")]
        public async Task<IActionResult> GetMentorByIdStudView([FromRoute] Guid mentorId)
        {
            var mentor = mentorManager.GetMentorByIdForStudentView(mentorId);
            return Ok(mentor);
        }

        [HttpGet("byName/{name}")]///////////  !!!!
        public async Task<IActionResult> GetMentorByHisName([FromRoute]string name)
        {
            var mentor = mentorManager.GetMentorByName(name);
            return Ok(mentor);
        }

        [HttpGet("byIdLocation/{id}")]
        public async Task<IActionResult> GetMentorsByTheLocation([FromRoute] Guid locationId)
        {
            var mentors = mentorManager.GetMentorsByLocation(locationId);
            return Ok(mentors);
        }

        [HttpGet("studentsByIdMentor/{id}")]
        public async Task<IActionResult> GetAllStudentsForMentorId([FromRoute] Guid mentorId)
        {
            var students = mentorManager.GetStudentsForMentor(mentorId);
            return Ok(students);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateMentor([FromBody] Guid Id,MentorUpdateDTO mentorUpdateDTO)
        {
            var result = mentorManager.Update(Id,mentorUpdateDTO);
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
