using MANDAT.BusinessLogic.Base;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Services
{
    public class StudentService : BaseService, IStudentManager
    {
        public StudentService(ServiceDependencies serviceDependencies) : base(serviceDependencies)
        {  }

        public List<StudentDTO> GetAllStudents()
        {
            return ExecuteInTransaction(db =>
            {
                 var students = db.Students
                                  .Get()
                                  .Include(u => u.User)
                                  .Where(student => student.User.IsDeleted.Equals(false))
                                  .Select(student => new StudentDTO
                                  {
                                     Username = student.User.Username,
                                     Email = student.User.Email,
                                     PhoneNumber = student.User.PhoneNumber,
                                     PasswordHash = student.User.PasswordHash,
                                     CreatedAt = student.User.CreatedAt,
                                     IsActive = student.User.IsActive,
                                     Bio = student.User.Bio,
                                     EducationalInstitution = student.User.EducationalInstitution,
                                     StudentGrade = student.StudentGrade,
                                     StudentSchoolQualification = student.StudentSchoolQualification
                                  }).ToList();
                return students;
            });
        }

        public StudentDTO GetStudentById(Guid studentId)   // one student
        {
            return ExecuteInTransaction(db =>
            {
                var student = db.Students
                                 .Get()
                                 .Include(u => u.User)
                                 .Where(student => student.User.IsDeleted.Equals(false) && student.Id.Equals(studentId))
                                 .Select(student => new StudentDTO
                                 {
                                     Username = student.User.Username,
                                     Email = student.User.Email,
                                     PhoneNumber = student.User.PhoneNumber,
                                     PasswordHash = student.User.PasswordHash,
                                     CreatedAt = student.User.CreatedAt,
                                     IsActive = student.User.IsActive,
                                     Bio = student.User.Bio,
                                     EducationalInstitution = student.User.EducationalInstitution,
                                     StudentGrade = student.StudentGrade,
                                     StudentSchoolQualification = student.StudentSchoolQualification
                                 }).FirstOrDefault();
                return student;
            });
        }


        public List<StudentDTO> GetStudentsByName(string name)
        {
            return ExecuteInTransaction(db =>
            {
                var students = db.Students
                                 .Get()
                                 .Include(u => u.User)
                                 .Where(student => student.User.IsDeleted.Equals(false) && student.User.Username.Equals(name))
                                 .Select(student => new StudentDTO
                                 {
                                     Username = student.User.Username,
                                     Email = student.User.Email,
                                     PhoneNumber = student.User.PhoneNumber,
                                     PasswordHash = student.User.PasswordHash,
                                     CreatedAt = student.User.CreatedAt,
                                     IsActive = student.User.IsActive,
                                     Bio = student.User.Bio,
                                     EducationalInstitution = student.User.EducationalInstitution,
                                     StudentGrade = student.StudentGrade,
                                     StudentSchoolQualification = student.StudentSchoolQualification
                                 })
                                  .ToList();
                return students;
            });

        }


        public List<StudentDTO> GetStudentsByLocation(Guid locationId)
        {
            return ExecuteInTransaction(db =>
            {
                var students = db.Students
                                 .Get()
                                 .Include(u => u.User)
                                 .ThenInclude(l => l.Adress)
                                 .Where(student => student.User.IsDeleted.Equals(false) && student.User.Adress.Id.Equals(locationId))
                                 .Select(student => new StudentDTO
                                 {
                                     Username = student.User.Username,
                                     Email = student.User.Email,
                                     PhoneNumber = student.User.PhoneNumber,
                                     PasswordHash = student.User.PasswordHash,
                                     CreatedAt = student.User.CreatedAt,
                                     IsActive = student.User.IsActive,
                                     Bio = student.User.Bio,
                                     EducationalInstitution = student.User.EducationalInstitution,
                                     StudentGrade = student.StudentGrade,
                                     StudentSchoolQualification = student.StudentSchoolQualification
                                 })
                                  .ToList();
                return students;
            });
        }

        public List<MentorsForStudentDTO> GetMentorsForStudent(Guid studentId)
        {
            return ExecuteInTransaction(db =>
            {
                var mentors = db.Matches
                                .Get()
                                .Include(m => m.Mentor)
                                .ThenInclude(u => u.User)
                                .Where(match => match.StudentId.Equals(studentId) && match.Status.Equals(true))
                                .Select(match => new MentorsForStudentDTO
                                {
                                    Username = match.Mentor.User.Username,
                                    Email = match.Mentor.User.Email,
                                    PhoneNumber = match.Mentor.User.PhoneNumber,
                                    PasswordHash = match.Mentor.User.PasswordHash,
                                    CreatedAt = match.Mentor.User.CreatedAt,
                                    IsActive = match.Mentor.User.IsActive,
                                    IsDeleted = match.Mentor.User.IsDeleted,
                                    Bio = match.Mentor.User.Bio,
                                    EducationalInstitution = match.Mentor.User.EducationalInstitution,
                                })
                                .ToList();
                return mentors;
            });

        }

        public StudentDTO Update(Guid studentId, StudentDTO student)
        {
            return ExecuteInTransaction(db =>
            {
                var updateStudent = db.Students
                                       .Get()
                                       .Include(u => u.User)
                                       .Where(st => st.Id.Equals(studentId))
                                       .FirstOrDefault();
                updateStudent.User.Username = student.Username;
                updateStudent.User.Email = student.Email;
                updateStudent.User.PhoneNumber = student.PhoneNumber;
                updateStudent.User.PasswordHash = student.PasswordHash;
                updateStudent.User.CreatedAt = student.CreatedAt;
                updateStudent.User.IsActive = student.IsActive;
                updateStudent.User.Bio = student.Bio;
                updateStudent.User.EducationalInstitution = student.EducationalInstitution;
                updateStudent.StudentGrade = student.StudentGrade; 
                updateStudent.StudentSchoolQualification = student.StudentSchoolQualification;


                db.Students.Update((Student)updateStudent);
                db.SaveChanges();

                var updatedStudent = GetStudentById(studentId);
                
                return updatedStudent;
            });
        }

        public bool SoftDelete(Guid studentId)
        {
            return ExecuteInTransaction(db =>
            {
                var selectedStudent = db.Students
                                        .Get()
                                        .Include(u => u.User)
                                        .Where(st => st.Id.Equals(studentId))
                                        .FirstOrDefault();

                if (selectedStudent == null)
                    return false;   
               
                selectedStudent.User.IsDeleted = true;
                db.Students.Update(selectedStudent);
                db.SaveChanges();
                return true;
            });
        }

    }
}
