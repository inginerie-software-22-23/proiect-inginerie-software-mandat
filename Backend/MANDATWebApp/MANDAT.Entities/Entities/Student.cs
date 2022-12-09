﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.Entities.Entities
{
    public partial class Student

    {
        [ForeignKey("User")]
        public Guid Id { get; set; }
        public int StudentGrade { get; set; }
        public string StudentSchoolQualification{ get; set; }

        public virtual IdentityUser User { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}