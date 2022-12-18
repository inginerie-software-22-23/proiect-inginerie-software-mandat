﻿using MANDAT.BusinessLogic.Base;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.DTOs;
using MANDAT.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace MANDAT.BusinessLogic.Services
{
    public class AnnouncementManager : BaseService, IAnnouncementManager
    {
        public AnnouncementManager(ServiceDependencies serviceDependencies) : base(serviceDependencies)
        { }

        public List<AllAnnouncementsDto> GetAllAnnouncements()
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false)
                                            .Select(m => new AllAnnouncementsDto
                                            {   Subject = m.Subject,
                                                Description = m.Description,
                                                Price = m.Price,
                                                MeetingType = m.MeetingType,
                                                Username = m.Mentor.User.Username,
                                                Email = m.Mentor.User.Email,
                                                PhoneNumber = m.Mentor.User.PhoneNumber                                      
                                                
                                            })
                                            .ToList();

            });
        }
        public List<AllAnnouncementsDto> GetAllAnnouncementByMentorId(Guid mentorId)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false && m.Mentor.User.Id.Equals(mentorId))
                                            .Select(m => new AllAnnouncementsDto
                                            {
                                                Subject = m.Subject,
                                                Description = m.Description,
                                                Price = m.Price,
                                                MeetingType = m.MeetingType,
                                                Username = m.Mentor.User.Username,
                                                Email = m.Mentor.User.Email,
                                                PhoneNumber = m.Mentor.User.PhoneNumber

                                            })
                                            .ToList();

            });
        }
        public List<AllAnnouncementsDto> GetAllAnnouncementBySubject(string subject)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false && m.Subject.Equals(subject))
                                            .Select(m => new AllAnnouncementsDto
                                            {
                                                Subject = m.Subject,
                                                Description = m.Description,
                                                Price = m.Price,
                                                MeetingType = m.MeetingType,
                                                Username = m.Mentor.User.Username,
                                                Email = m.Mentor.User.Email,
                                                PhoneNumber = m.Mentor.User.PhoneNumber

                                            })
                                            .ToList();

            });
        }
        public List<AllAnnouncementsDto> GetAllAnnouncementByPrice(int price)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false && m.Price <= price)
                                            .Select(m => new AllAnnouncementsDto
                                            {
                                                Subject = m.Subject,
                                                Description = m.Description,
                                                Price = m.Price,
                                                MeetingType = m.MeetingType,
                                                Username = m.Mentor.User.Username,
                                                Email = m.Mentor.User.Email,
                                                PhoneNumber = m.Mentor.User.PhoneNumber

                                            })
                                            .ToList();

            });
        }
        public List<AllAnnouncementsDto> GetAllAnnouncementByType(bool meetingType)
        {
            return ExecuteInTransaction(uow =>
            {
                return uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false && m.MeetingType.Equals(meetingType))
                                            .Select(m => new AllAnnouncementsDto
                                            {
                                                Subject = m.Subject,
                                                Description = m.Description,
                                                Price = m.Price,
                                                MeetingType = m.MeetingType,
                                                Username = m.Mentor.User.Username,
                                                Email = m.Mentor.User.Email,
                                                PhoneNumber = m.Mentor.User.PhoneNumber

                                            })
                                            .ToList();

            });
        }
        public Announcement Create(CreateAnnouncementDto createAnnouncementDto)
        {
            return ExecuteInTransaction(uow =>
            {
                var announcement = new Announcement();
                
                announcement.Id = new Guid();
                announcement.Description = createAnnouncementDto.Description;
                announcement.Subject = createAnnouncementDto.Subject;
                announcement.Price = createAnnouncementDto.Price;
                announcement.MeetingType = createAnnouncementDto.MeetingType;
                announcement.MentorId = createAnnouncementDto.MentorId;


                uow.Announcements.Insert(announcement);
                uow.SaveChanges();
                return announcement;
            });
        }
        public bool Update(Guid id, UpdateAnnouncementDto updateAnnouncementDto)
        {
            return ExecuteInTransaction(uow =>
            {
                var announcement = uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false && m.Id.Equals(id))
                                            .SingleOrDefault();
                announcement.Description = updateAnnouncementDto.Description;
                announcement.Subject = updateAnnouncementDto.Subject;
                announcement.Price = updateAnnouncementDto.Price;
                announcement.MeetingType = updateAnnouncementDto.MeetingType;
                
                

                uow.Announcements.Update(announcement);
                uow.SaveChanges();
                return true;
            });
        }
        public bool DeleteAnnouncement(Guid id)
        {
            return ExecuteInTransaction(uow =>
            {
                var announcements = uow.Announcements.Get()
                                            .Include(m => m.Mentor)
                                            .ThenInclude(m => m.User)
                                            .Where(m => m.Mentor.User.IsDeleted == false && m.Id.Equals(id))                                     
                                            .SingleOrDefault();
                if (announcements == null)
                {
                    return false;
                }
                
                uow.SaveChanges();
                return true;
            });
        }

    }
}
