
﻿using Azure;
using MANDAT.BusinessLogic.Base;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using MANDAT.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Services
{
    public class MatchingService : BaseService, IMatchingService
    {
        public MatchingService (ServiceDependencies dependencies) : base(dependencies) { }

        public Match NewMatching(Guid mentorId, Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                var match = new Match();
                match.StudentId = studentId;
                match.MentorId = mentorId;
                match.Status = StatusMatch.Waiting.ToString();
                match.MatchDate = DateTime.Now;
                uow.Matches.Insert(match);
                uow.SaveChanges();
                return match;

            });
        }

        public List<ViewStudentMatchDTO> AcceptedRequests (Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                  .Include(s => s.Mentor)
                                  .Where(x => x.StudentId == studentId && x.Status.Equals(StatusMatch.Accepted.ToString()))
                                  .Select(x => new ViewStudentMatchDTO
                                  {
                                      FullName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Mentor.Id))
                                                         .Select(u => u.Username)
                                                         .Single(),
                                      Email = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Mentor.Id))
                                                         .Select(u => u.Email)
                                                         .Single(),
                                      MatchDate = x.MatchDate,
                                      Status = x.Status,
                                      Subject = uow.Announcements.Get().Where(s => s.MentorId.Equals(x.MentorId)).Select(s => s.Subject).Single(),
                                      Price = uow.Announcements.Get().Where(s => s.MentorId.Equals(x.MentorId)).Select(s => s.Price).Single(),
                                  }).ToList();
            });
        }

        public List<ViewStudentMatchDTO> RejectedRequests(Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                  .Include(s => s.Mentor)
                                  .Where(x => x.StudentId == studentId && x.Status.Equals(StatusMatch.Rejected.ToString()))
                                  .Select(x => new ViewStudentMatchDTO
                                  {
                                      FullName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Mentor.Id))
                                                         .Select(u => u.Username)
                                                         .Single(),
                                      Email = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Mentor.Id))
                                                         .Select(u => u.Email)
                                                         .Single(),
                                      MatchDate = x.MatchDate,
                                      Status = x.Status,
                                      Subject = uow.Announcements.Get().Where(s => s.MentorId.Equals(x.MentorId)).Select(s => s.Subject).Single(),
                                      Price = uow.Announcements.Get().Where(s => s.MentorId.Equals(x.MentorId)).Select(s => s.Price).Single(),
                                  }).ToList();
            });
        }

        public List<ViewStudentMatchDTO> InWaitingRequests(Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                  .Include(s => s.Mentor)
                                  .Where(x => x.StudentId == studentId && x.Status.Equals(StatusMatch.Waiting.ToString()))
                                  .Select(x => new ViewStudentMatchDTO
                                  {
                                      FullName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Mentor.Id))
                                                         .Select(u => u.Username)
                                                         .Single(),
                                      Email = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Mentor.Id))
                                                         .Select(u => u.Email)
                                                         .Single(),
                                      MatchDate = x.MatchDate,
                                      Status = x.Status,
                                      Subject = uow.Announcements.Get().Where(s => s.MentorId.Equals(x.MentorId)).Select(s => s.Subject).Single(),
                                      Price = uow.Announcements.Get().Where(s => s.MentorId.Equals(x.MentorId)).Select(s => s.Price).Single(),
                                  }).ToList();
            });
        }
  //Mentor Requests

        public List<ViewMentorMatchDTO> AllMentorRequests(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                  .Include(s => s.Student)
                                  .Where(x => x.MentorId == mentorId)
                                  .Select(x => new ViewMentorMatchDTO
                                  {
                                      FullName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Student.Id))
                                                         .Select(u => u.Username)
                                                         .Single(),
                                      Email = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Student.Id))
                                                         .Select(u => u.Email)
                                                         .Single(),
                                      MatchDate = x.MatchDate,
                                      Status = x.Status,

                                  }).ToList();
            });
        }

        public List<ViewMentorMatchDTO> MentorAcceptedRequests(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                  .Include(s => s.Student)
                                  .Where(x => x.MentorId == mentorId && x.Status.Equals(StatusMatch.Accepted.ToString()))
                                  .Select(x => new ViewMentorMatchDTO
                                  {
                                      FullName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Student.Id))
                                                         .Select(u => u.Username)
                                                         .Single(),
                                      Email = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Student.Id))
                                                         .Select(u => u.Email)
                                                         .Single(),
                                      MatchDate = x.MatchDate,
                                      Status = x.Status,
                                                                        
                                  }).ToList();
            });
        }

        public List<ViewMentorMatchDTO> MentorRejectedRequests(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                  .Include(s => s.Student)
                                  .Where(x => x.MentorId == mentorId && x.Status.Equals(StatusMatch.Rejected.ToString()))
                                  .Select(x => new ViewMentorMatchDTO
                                  {
                                      FullName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Student.Id))
                                                         .Select(u => u.Username)
                                                         .Single(),
                                      Email = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(x.Student.Id))
                                                         .Select(u => u.Email)
                                                         .Single(),
                                      MatchDate = x.MatchDate,
                                      Status = x.Status,

                                  }).ToList();
            });
        }

        public List<ViewMentorMatchDTO> MentorInWaitingRequests(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                   .Include(s => s.Student)
                                   .Where(x => x.MentorId == mentorId && x.Status.Equals(StatusMatch.Waiting.ToString()))
                                   .Select(x => new ViewMentorMatchDTO
                                   {
                                       FullName = uow.IdentityUsers.Get()
                                                          .Where(u => u.Id.Equals(x.Student.Id))
                                                          .Select(u => u.Username)
                                                          .Single(),
                                       Email = uow.IdentityUsers.Get()
                                                          .Where(u => u.Id.Equals(x.Student.Id))
                                                          .Select(u => u.Email)
                                                          .Single(),
                                       MatchDate = x.MatchDate,
                                       Status = x.Status,

                                   }).ToList();
            });
        }

        //update request

        public bool RespondToRequests(Guid mentorId, Guid studentId, bool response)
        {
            return ExecuteInTransaction(uow =>
            {
                var request = uow.Matches.Get()
                                            .Where(x => x.StudentId == studentId && x.MentorId == mentorId)
                                            .Include(s => s.Mentor)
                                            .SingleOrDefault();
                if (request == null)
                {
                    return false;
                }

                if (response)
                {
                    request.Status = StatusMatch.Accepted.ToString();

                }
                else
                {
                    request.Status = StatusMatch.Rejected.ToString();
                }

                
                uow.Matches.Update(request);
                uow.SaveChanges();
                return true;
            });
        

        }
        //delete request
        public bool DeleteRequests(Guid mentorId, Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                var request = uow.Matches.Get()
                                            .Where(x => x.StudentId == studentId && x.MentorId == mentorId)
                                            .SingleOrDefault();
                if (request == null)
                {
                    return false;
                }


                uow.SaveChanges();
                return true;
            });
        }



    }
}
