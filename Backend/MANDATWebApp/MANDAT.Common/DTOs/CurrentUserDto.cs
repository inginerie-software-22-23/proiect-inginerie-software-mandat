using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.Common.DTOs
{
    public class CurrentUserDto
    {
        public CurrentUserDto()
        {
            Roles = new List<string>();
        }

        public Guid? Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public bool isAuthenticated { get; set; }
        public bool isAdmin { get; set; }
        public byte[]? UserImage { get; set; } = null!;
        public List<string> Roles { get; set; }

    }
}

