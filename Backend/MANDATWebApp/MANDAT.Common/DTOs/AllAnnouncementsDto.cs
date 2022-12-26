using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.Common.DTOs
{
    public class AllAnnouncementsDto
    {
        public string Subject { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public bool MeetingType { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
