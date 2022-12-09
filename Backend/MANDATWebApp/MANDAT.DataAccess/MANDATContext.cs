﻿using MANDAT.Entities.Entities;
using Microsoft.EntityFrameworkCore;

namespace MANDAT.DataAccess
{
    public class MANDATContext: DbContext
    {
        public MANDATContext(DbContextOptions<MANDATContext> options) : base(options) { }
        
        public DbSet<IdentityUser> IdentityUsers { get; set; }

        public DbSet<IdentityUserToken> IdentityUserTokens { get; set; }

       // public DbSet<IdentityUserTokenConfirmation> IdentityUserTokenConfirmations { get; set; }

        public DbSet<IdentityRole> IdentityRoles { get; set; }
        public DbSet<Adress> Adresses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Mentor> Mentors { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            if (!builder.IsConfigured)
            {
                builder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Initial Catalog=MandatProjectDatabase;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //1-1 (IdentityUserToken - IdentityUser)
            builder.Entity<IdentityUserToken>()
                .HasOne(t => t.User)
                .WithOne(u => u.Token);

            //1-M (IdentityRole - IdentityUser)
            builder.Entity<IdentityRole>()
                .HasMany(r => r.Users)
                .WithOne(u => u.Role);

            //1-1 (Adress - IdentityUser)
            builder.Entity<Adress>()
                .HasOne(a => a.User)
                .WithOne(u => u.Adress);

            //1-1 (Student - IdentityUser)
            builder.Entity<Student>()
                .HasOne(s => s.User)
                .WithOne(u => u.Student);

            //1-1 (Mentor - IdentityUser)
            builder.Entity<Mentor>()
                .HasOne(m => m.User)
                .WithOne(u => u.Mentor);

            //1-M (Student - Recenzie)
            builder.Entity<Student>()
                 .HasMany(s => s.Reviews)
                 .WithOne(r => r.Student);

            //1-M (Mentor - Recenzie)
            builder.Entity<Mentor>()
                 .HasMany(s => s.Reviews)
                 .WithOne(r => r.Mentor);
        }

    }
}