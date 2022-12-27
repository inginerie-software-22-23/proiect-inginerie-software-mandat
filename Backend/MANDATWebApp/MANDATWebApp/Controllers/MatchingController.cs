using MANDAT.BusinessLogic.Interfaces;
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

        [HttpGet("InWaitingRequest")]

        public List<ViewStudentMatchDTO> ViewStudentWaitingRequests(Guid studentId)
        {
            var result = _matchingService.InWaitingRequests(studentId);
            return result;
        }
    }
}
