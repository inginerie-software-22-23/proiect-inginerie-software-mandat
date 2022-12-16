using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Models
{
    public class NewReviewModel
    {
        public string Message { get; set; } = null!;
        public int StarsNumber { get; set; } = 0;
        public Guid MentorId { get; set; }
        public Guid StudentId { get; set; }
    }
}
