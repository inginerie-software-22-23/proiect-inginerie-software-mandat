using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.Common.DTOs
{
    public class CurrentUserDto
    {
   
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public byte[]? UserImage { get; set; }
        public string Roles { get; set; } = null!;

    }
}

