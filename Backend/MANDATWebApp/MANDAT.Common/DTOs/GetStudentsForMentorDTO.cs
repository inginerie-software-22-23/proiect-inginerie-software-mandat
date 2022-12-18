﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.Common.DTOs
{
    public class GetStudentsForMentorDTO
    {
        public byte[] UserImage { get; set; } = null!;
        public string Username { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string PasswordHash { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string Bio { get; set; } = null!;
        public string EducationalInstitution { get; set; } = null!;
        public int StudentGrade { get; set; }
        public string StudentSchoolQualification { get; set; }
    }
}
