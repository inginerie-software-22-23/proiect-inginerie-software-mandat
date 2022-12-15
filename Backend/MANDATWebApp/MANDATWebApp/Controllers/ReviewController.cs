using MANDAT.BusinessLogic.Interfaces;
using MANDAT.BusinessLogic.Models;
using MANDATWebApp.Code.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MANDATWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : BaseController 
    {
        private readonly IReview _review; 
        public ReviewController(ControllerDependencies dependencies, IReview review)
          : base(dependencies)
        {
            _review = review;
        }

        [HttpGet]
        public List<ViewMentorReview> ViewMentorsReview(Guid id, bool asc) 
        {
            var result = new List<ViewMentorReview>();
            if (asc)
            {
                 result = _review.ViewMentorReviewsAsc(id);
            }
            else
            {
                 result = _review.ViewMentorReviewsDesc(id);
            }
            return result;
        }

        [HttpGet]
        public List<ViewStudentReview> ViewStudentsReview(Guid id, bool asc)
        {
            var result = new List<ViewStudentReview>();
            if (asc)
            {
                result = _review.ViewStudentReviewsAsc(id);
            }
            else
            {
                result = _review.ViewStudentReviewsDesc(id);
            }
            return result;
        }

        [HttpGet]
        public double MentorAverageRating(Guid id)
        {
            var result = _review.GetMentorStarsAverageRating(id);
            return result;
        }

        [HttpGet]
        public double StudentAverageRating(Guid id)
        {
            var result = _review.GetStudentStarsAverageRating(id);
            return result;
        }

        [HttpPost]
        public IActionResult AddReview(NewReviewModel reviewModel)
        {
            var result =  _review.NewReview(reviewModel);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteReviewAsync(Guid idReview)
        {
            if(!await _review.DeleteReview(idReview))
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpPatch]
        public IActionResult EditReview(Guid id, string message)
        {
            if(message == null)
            {
                return BadRequest();
            }
            var result = _review.EditReviewComment(id, message);
            return Ok(result);
        }

    }
}
