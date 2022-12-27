using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Globalization;

namespace MANDATWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentManager _studentManager;
        public StudentController(IStudentManager studentManager)
        {
            _studentManager = studentManager;
        }

        [HttpGet("GetAllStudents")]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = _studentManager.GetAllStudents();
            return Ok(students);
        }

        [HttpGet("GetStudentById")]
        public async Task<IActionResult> GetStudentById(Guid studentId)
        {
            var student = _studentManager.GetStudentById(studentId);
            return Ok(student);
        }


        [HttpGet("GetStudentsByName/{name}")]
        public async Task<IActionResult> GetStudentsByName([FromRoute] String name)
        {
            var student = _studentManager.GetStudentsByName(name);
            return Ok(student);
        }

        [HttpGet("GetStudentsByLocation")]
        public async Task<IActionResult> GetStudentsByLocation(Guid locationId)
        {
            var students = _studentManager.GetStudentsByLocation(locationId);
            return Ok(students);
        }

        [HttpGet("GetMentorsForStudent")]
        public async Task<IActionResult> GetMentorsForStudent(Guid studentId)
        {
            var students = _studentManager.GetMentorsForStudent(studentId);
            return Ok(students);
        }

        [HttpPut("UpdateStudent")]
        public async Task<IActionResult> UpdateStudent(Guid studentId, StudentDTO student)
        {
            var updatedStudent = _studentManager.Update(studentId, student);
            return Ok(updatedStudent);
        }
        

        [HttpPatch("SoftDelete")]
        public IActionResult SoftDelete(Guid studentId)
        {
            var result = _studentManager.SoftDelete(studentId);
            return Ok(result);
        }
    }
}
