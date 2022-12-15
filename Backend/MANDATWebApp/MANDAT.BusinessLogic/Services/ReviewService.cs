using MANDAT.BusinessLogic.Base;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.BusinessLogic.Models;
using MANDAT.Entities.Entities;
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
                var review = new Review();
                review.Id = Guid.NewGuid();
                review.StudentId = reviewModel.StudentId;
                review.MentorId = reviewModel.MentorId;
                review.Message = reviewModel.Message;
               // review.CommentDate = DateTime.UtcNow;
                review.StarsNumber = reviewModel.StarsNumber;
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
                                             .Where(cd => cd.MentorId.Equals(mentorId))
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
        public List<ViewMentorReview> ViewMentorReviewsAsc(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Mentor)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.MentorId.Equals(mentorId))
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

        public List<ViewStudentReview> ViewStudentReviewsDesc(Guid studentId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Reviews.Get()
                                             .Include(cd => cd.Student)
                                             .ThenInclude(u => u.User)
                                             .Where(cd => cd.StudentId.Equals(studentId))
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
                                             .Where(cd => cd.StudentId.Equals(studentId))
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

        public double GetMentorStarsAverageRating(Guid id)
        {
            double averageRating = UnitOfWork.Reviews.Get().Where(sr => sr.MentorId.Equals(id)).Average(cd => cd.StarsNumber);
            return averageRating;
        }
        public double GetStudentStarsAverageRating(Guid id)
        {
            double averageRating = UnitOfWork.Reviews.Get().Where(sr => sr.StudentId.Equals(id)).Average(cd => cd.StarsNumber);
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
