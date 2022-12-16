using MANDAT.BusinessLogic.Base;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Services
{
    public class MentorManager : BaseService, IMentorManager
    {
        public MentorManager(ServiceDependencies serviceDependencies) : base(serviceDependencies)
        {  }

        public List<AllMentorsDto> GetAllMentors()
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Mentors.Get()
                                            .Include(m => m.User)
                                            .ThenInclude(r => r.Role)
                                            .Select(m => new AllMentorsDto
                                            {
                                                MentorIdentityCardFront = m.MentorIdentityCardFront,
                                                MentorIdentityCardBack = m.MentorIdentityCardBack,
                                                UserImage = m.User.UserImage,
                                                Username = m.User.Username,
                                                Email = m.User.Email,
                                                PhoneNumber = m.User.PhoneNumber,
                                                PasswordHash = m.User.PasswordHash,
                                                CreatedAt = m.User.CreatedAt,
                                                IsActive = m.User.IsActive,
                                                IsDeleted = m.User.IsDeleted,
                                                Bio = m.User.Bio,
                                                EducationalInstitution = m.User.EducationalInstitution,
                                                RoleName = uow.IdentityRoles.Get().Where(r => r.Id.Equals(m.User.RoleId)).Select(r => r.Name).Single()
                                            })
                                            .ToList();

            });
        }

        public List<MentorByIdViewByMentorAdminDTO> GetMentorByIdForMentorAdminView(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Mentors.Get()
                                        .Include(m => m.User)
                                        .ThenInclude(r => r.Role)
                                        .Where(m => m.Id.Equals(mentorId))
                                        .Select(m => new MentorByIdViewByMentorAdminDTO
                                        {
                                            MentorIdentityCardFront = m.MentorIdentityCardFront,
                                            MentorIdentityCardBack = m.MentorIdentityCardBack,
                                            UserImage = m.User.UserImage,
                                            Username = m.User.Username,
                                            Email = m.User.Email,
                                            PhoneNumber = m.User.PhoneNumber,
                                            PasswordHash = m.User.PasswordHash,
                                            CreatedAt = m.User.CreatedAt,
                                            IsActive = m.User.IsActive,
                                            IsDeleted = m.User.IsDeleted,
                                            Bio = m.User.Bio,
                                            EducationalInstitution = m.User.EducationalInstitution,
                                        })
                                        .ToList();
            });
        }


        public List<MentorByIdViewByStudentDTO> GetMentorByIdForStudentView(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Mentors.Get()
                                        .Include(m => m.User)                     
                                        .Where(m => m.Id.Equals(mentorId))
                                        .Select(m => new MentorByIdViewByStudentDTO
                                        {
                                            UserImage = m.User.UserImage,
                                            Username = m.User.Username,
                                            Email = m.User.Email,
                                            Bio = m.User.Bio,
                                            EducationalInstitution = m.User.EducationalInstitution,
                                        })
                                        .ToList();
            });
        }

        public List<MentorByIdViewByStudentDTO> GetMentorByName(string username)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Mentors.Get()
                                        .Include(m => m.User)
                                        .Where(m => m.User.Username.Equals(username))
                                        .Select(m => new MentorByIdViewByStudentDTO
                                        {
                                            UserImage = m.User.UserImage,
                                            Username = m.User.Username,
                                            Email = m.User.Email,
                                            Bio = m.User.Bio,
                                            EducationalInstitution = m.User.EducationalInstitution,
                                        })
                                        .ToList();
            });
        }


        public List<MentorByIdViewByStudentDTO> GetMentorsByLocation(Guid locationId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Mentors.Get()
                                        .Include(m => m.User)
                                        .ThenInclude(u => u.Adress)
                                        .Where(m => m.User.Adress.Id.Equals(locationId))
                                        .Select(m => new MentorByIdViewByStudentDTO
                                        {
                                            UserImage = m.User.UserImage,
                                            Username = m.User.Username,
                                            Email = m.User.Email,
                                            Bio = m.User.Bio,
                                            EducationalInstitution = m.User.EducationalInstitution,
                                        })
                                        .ToList();
            });
        }

        public List<GetStudentsForMentorDTO> GetStudentsForMentor(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Matches.Get()
                                           .Include(s => s.Student)
                                           .ThenInclude(ma => ma.User)
                                           .Where(ma => ma.MentorId.Equals(mentorId) && ma.Status.Equals(true))
                                           .Select(ma => new GetStudentsForMentorDTO
                                           {
                                               UserImage = ma.Student.User.UserImage,
                                               Username = ma.Student.User.Username,
                                               Email = ma.Student.User.Email,
                                               PhoneNumber = ma.Student.User.PhoneNumber,
                                               PasswordHash = ma.Student.User.PasswordHash,
                                               CreatedAt = ma.Student.User.CreatedAt,
                                               IsActive = ma.Student.User.IsActive,
                                               IsDeleted = ma.Student.User.IsDeleted,
                                               Bio = ma.Student.User.Bio,
                                               EducationalInstitution = ma.Student.User.EducationalInstitution,
                                               StudentGrade = ma.Student.StudentGrade,
                                               StudentSchoolQualification = ma.Student.StudentSchoolQualification
                                           })
                                           .ToList();
            });

        }

        public bool Update(Guid id, MentorUpdateDTO mentorUpdateDTO)
        {
            return ExecuteInTransaction(uow =>
            {
                var mentor = uow.Mentors.Get().Include(m => m.User)
                                                .Where(m => m.Id.Equals(id))
                                                .SingleOrDefault();
                mentor.MentorIdentityCardBack = mentorUpdateDTO.MentorIdentityCardBack;
                mentor.MentorIdentityCardFront = mentorUpdateDTO.MentorIdentityCardFront;
                mentor.User.UserImage = mentorUpdateDTO.UserImage;
                mentor.User.Username = mentorUpdateDTO.Username;
                mentor.User.PhoneNumber = mentorUpdateDTO.PhoneNumber;
                mentor.User.PasswordHash = mentorUpdateDTO.PasswordHash;
                mentor.User.CreatedAt = mentorUpdateDTO.CreatedAt;
                mentor.User.IsActive = mentorUpdateDTO.IsActive;
                mentor.User.IsDeleted = mentorUpdateDTO.IsDeleted;
                mentor.User.Bio = mentorUpdateDTO.Bio;
                mentor.User.EducationalInstitution = mentorUpdateDTO.EducationalInstitution;
                mentor.User.RoleId = mentorUpdateDTO.RoleId;

                uow.Mentors.Update(mentor);
                uow.SaveChanges();
                return true;
            });
        }

        public bool ManagerIsDeleted(Guid id, bool isDeleted)
        {
            return ExecuteInTransaction(uow =>
            {
                var mentor = uow.Mentors.Get().Include(m => m.User)
                                                .Where(m => m.Id.Equals(id))
                                                .SingleOrDefault();
                mentor.User.IsDeleted = isDeleted;
                uow.Mentors.Update(mentor);
                uow.SaveChanges();
                return isDeleted;
            });
        }

    }
}
