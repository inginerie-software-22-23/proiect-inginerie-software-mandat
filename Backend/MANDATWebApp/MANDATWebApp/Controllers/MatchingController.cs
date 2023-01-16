using MANDAT.BusinessLogic.Interfaces;
using MANDAT.BusinessLogic.Services;
using MANDAT.Common.DTOs;
using MANDATWebApp.Code.Base;
using Microsoft.AspNetCore.Mvc;

namespace MANDATWebApp.Controllers
{
    public class MatchingController : BaseController
    {
        private readonly IMatchingService _matchingService;
        public MatchingController(ControllerDependencies dependencies,
            IMatchingService matchingService) 
            : base(dependencies)
        {
            _matchingService = matchingService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAMatch(Guid mentorId, Guid studentId)
        {
            var result = _matchingService.NewMatching(mentorId, studentId);
            return Ok(result);
        }

        [HttpGet("AcceptedRequest")]

        public List<ViewStudentMatchDTO> ViewStudentAcceptedRequests(Guid studentId)
        {
            var result = _matchingService.AcceptedRequests(studentId);
            return result;
        }

        [HttpGet("RejectedRequest")]

        public List<ViewStudentMatchDTO> ViewStudentRejectedRequests(Guid studentId)
        {
            var result = _matchingService.RejectedRequests(studentId);
            return result;
        }

        [HttpGet("ViewStudentWaitingRequests/{studentId}")]

        public List<ViewStudentMatchDTO> ViewStudentWaitingRequests(Guid studentId)
        {
            var result = _matchingService.InWaitingRequests(studentId);
            return result;
        }


        [HttpGet("AllRequest")]

        public List<ViewMentorMatchDTO> ViewMentorAllRequests(Guid mentorId)
        {
            var result = _matchingService.AllMentorRequests(mentorId);
            return result;
        }


        [HttpGet("MentorAcceptedRequest")]

        public List<ViewMentorMatchDTO> ViewMentorAcceptedRequests(Guid mentorId)
        {
            var result = _matchingService.MentorAcceptedRequests(mentorId);
            return result;
        }

        [HttpGet("MentorRejectedRequest/{email}")]


        public List<ViewMentorMatchDTO> ViewMentorRejectedRequests(string email)
        {
            var result = _matchingService.MentorRejectedRequests(email);
            return result;
        }

        [HttpGet("ViewMentorWaitingRequests/{email}")]

        public List<ViewMentorMatchDTO> ViewMentorWaitingRequests(string email)
        {
            var result = _matchingService.MentorInWaitingRequests(email);
            return result;
        }

        [HttpPatch]
        public IActionResult RespondToRequests(Guid mentorId, Guid studentId, bool response)
        {
            var result = _matchingService.RespondToRequests(mentorId, studentId, response);
            return Ok(result);
        }


        [HttpDelete]
        public IActionResult DeleteRequests(Guid mentorId, Guid studentId)
        {
            var result = _matchingService.DeleteRequests(mentorId, studentId);
            return Ok(result);
        }

    }
}
