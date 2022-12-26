using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Interfaces
{
    public interface IAnnouncementManager
    {

        List<AllAnnouncementsDto> GetAllAnnouncements();
        List<AllAnnouncementsDto> GetAllAnnouncementByMentorId(Guid mentorId);
        List<AllAnnouncementsDto> GetAllAnnouncementBySubject(string subject);
        List<AllAnnouncementsDto> GetAllAnnouncementByPrice(int price);
        List<AllAnnouncementsDto> GetAllAnnouncementByType(bool MeetingType);
        Announcement Create(CreateAnnouncementDto createAnnouncementDto);
        bool Update(Guid id, UpdateAnnouncementDto updateAnnouncementDto);
        bool DeleteAnnouncement(Guid id);
    }
}
