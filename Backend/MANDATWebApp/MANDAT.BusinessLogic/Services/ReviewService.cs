﻿using MANDAT.BusinessLogic.Base;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.BusinessLogic.Models;
using MANDAT.Entities.Entities;
using MANDAT.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Services
{
    public class ReviewService : BaseService, IReview
    {
        public ReviewService (ServiceDependencies dependencies) : base(dependencies) { }

        public Review NewReview (NewReviewModel reviewModel)
        {
            return ExecuteInTransaction( uow =>
            {
                var student = uow.Students.Get().FirstOrDefault(s => s.User.Email == reviewModel.StudentEmail);
                var mentor = uow.Mentors.Get().FirstOrDefault(s => s.User.Email == reviewModel.MentorEmail);
                var review = new Review();
                review.Id = Guid.NewGuid();
                review.StudentId = student.Id;
                review.MentorId = mentor.Id;
                review.Message = reviewModel.Message;
               // review.CommentDate = DateTime.UtcNow;
                review.StarsNumber = reviewModel.StarsNumber;
                review.ReviewStatus = reviewModel.ReviewStatus;
                uow.Reviews.Insert(review);
                uow.SaveChanges();
                return  review;
            });
        }
        public async Task<bool> DeleteReview(Guid id)
        {

            return ExecuteInTransaction(uow =>
            {

                var comment =  uow.Reviews.Get()
                                                .Where(cd => cd.Id.Equals(id))
                                                .Single();
                if (comment == null)
                {
                    return false;
                }
                uow.Reviews.Delete(comment);
                uow.SaveChanges();
                return true;

            });
        }

        public List<ViewMentorReview> ViewMentorReviewsDesc(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Mentor)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.MentorId.Equals(mentorId) && cd.ReviewStatus.Equals(StatusReview.ReviewMentor.ToString()))
                                             .Select(cd => new ViewMentorReview
                                             {
                                                 StudentName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(cd.StudentId))
                                                          .Select(u => u.Username)
                                                          .Single(),
                                                 Message = cd.Message,
                                                 StarsNumber = cd.StarsNumber,
                                                 UserImage = uow.IdentityUsers.Get().Where(u => u.Id.Equals(cd.StudentId)).Select(u => u.UserImage).Single(),
                                             })
                                             .OrderByDescending(cd => cd.StarsNumber)
                                             .ToList();
            });
        }
        public List<ViewMentorReview> ViewMentorReviewsAsc(Guid mentorId)//review made by students for given mentor
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Mentor)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.MentorId.Equals(mentorId) && cd.ReviewStatus.Equals(StatusReview.ReviewMentor.ToString()))
                                             .Select(cd => new ViewMentorReview
                                             {
                                                 StudentName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(cd.StudentId))
                                                          .Select(u => u.Username)
                                                          .Single(),
                                                 Message = cd.Message,
                                                 StarsNumber = cd.StarsNumber,
                                                 UserImage = uow.IdentityUsers.Get().Where(u => u.Id.Equals(cd.StudentId)).Select(u => u.UserImage).Single(),
                                             })
                                             .OrderBy(cd => cd.StarsNumber)
                                             .ToList();
            });
        }

        public List<ViewStudentReview> ViewStudentReviewsDesc(Guid studentId)//review made by mentors for given student
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Student)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.StudentId.Equals(studentId) && cd.ReviewStatus.Equals(StatusReview.ReviewStudent.ToString()))
                                             .Select(cd => new ViewStudentReview
                                             {
                                                 MentorName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(cd.MentorId))
                                                          .Select(u => u.Username)
                                                          .Single(),
                                                 Message = cd.Message,
                                                 StarsNumber = cd.StarsNumber,
                                                 UserImage = uow.IdentityUsers.Get().Where(u => u.Id.Equals(cd.MentorId)).Select(u => u.UserImage).Single(),
                                             })
                                             .OrderByDescending(cd => cd.StarsNumber)
                                             .ToList();
            });
        }
        public List<ViewStudentReview> ViewStudentReviewsAsc(Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Student)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.StudentId.Equals(studentId) && cd.ReviewStatus.Equals(StatusReview.ReviewStudent.ToString()) )
                                             .Select(cd => new ViewStudentReview
                                             {
                                                 MentorName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(cd.MentorId))
                                                          .Select(u => u.Username)
                                                          .Single(),
                                                 Message = cd.Message,
                                                 StarsNumber = cd.StarsNumber,
                                                 UserImage = uow.IdentityUsers.Get().Where(u => u.Id.Equals(cd.MentorId)).Select(u => u.UserImage).Single(),
                                             })
                                             .OrderBy(cd => cd.StarsNumber)
                                             .ToList();
            });
        }

        public List<ViewStudentReviewWithId> ViewAllStudentReviewsDesc(Guid studentId)//reviews made by current student 
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Student)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.StudentId.Equals(studentId) && cd.ReviewStatus.Equals(StatusReview.ReviewMentor.ToString()))
                                             .Select(cd => new ViewStudentReviewWithId
                                             {
                                                 Id = cd.Id,
                                                 MentorName = uow.IdentityUsers.Get()
                                                         .Where(u => u.Id.Equals(cd.MentorId))
                                                          .Select(u => u.Username)
                                                          .Single(),
                                                 Message = cd.Message,
                                                 StarsNumber = cd.StarsNumber,
                                                 UserImage = uow.IdentityUsers.Get().Where(u => u.Id.Equals(cd.MentorId)).Select(u => u.UserImage).Single(),
                                             })
                                             .OrderByDescending(cd => cd.StarsNumber)
                                             .ToList();
            });
        }
        
        public double GetMentorStarsAverageRating(Guid id)
        {
            double averageRating = UnitOfWork.Reviews.Get().Where(sr => sr.MentorId.Equals(id) && sr.ReviewStatus.Equals(StatusReview.ReviewMentor.ToString())).Average(cd => cd.StarsNumber);
            return averageRating;
        }
        public double GetStudentStarsAverageRating(Guid id)
        {
            double averageRating = UnitOfWork.Reviews.Get().Where(sr => sr.StudentId.Equals(id) && sr.ReviewStatus.Equals(StatusReview.ReviewStudent.ToString())).Average(cd => cd.StarsNumber);
            return averageRating;
        }

        public string EditReviewComment(Guid id, string message)
        {
            return ExecuteInTransaction(uow =>
            {
                var comment = uow.Reviews.Get()
                                                          .Where(cd => cd.Id.Equals(id))
                                                          .SingleOrDefault();
                comment.Message = message;
                uow.Reviews.Update(comment);
                uow.SaveChanges();
                return message;
            });
        }
    }
}
