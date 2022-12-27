using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Interfaces
{
    public interface IMatchingService
    {
        Match NewMatching(Guid mentorId, Guid studentId);
        List<ViewStudentMatchDTO> InWaitingRequests(Guid studentId);
        List<ViewStudentMatchDTO> AcceptedRequests(Guid studentId);
        List<ViewStudentMatchDTO> RejectedRequests(Guid studentId);
    }
}
