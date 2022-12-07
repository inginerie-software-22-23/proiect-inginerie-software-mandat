using MANDAT.BusinessLogic.Services;
using MANDAT.Common.DTOs;
using MANDAT.Common.Features.PasswordHashing;
using MANDAT.Common.Interfaces;
using MANDAT.DataAccess;
using MANDATWebApp.Code.Base;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;

namespace MANDATWebApp.Code.ExtensionMethods
{
    public static class ServiceCollectionExtensionMethods
    {
        public static IServiceCollection AddPresentation(this IServiceCollection services)
        {
            services.AddScoped<ControllerDependencies>();
            return services;
        }

        public static IServiceCollection AddMANDATAppBusinessLogic(this IServiceCollection services)
        {
      
            services.AddScoped<IUserManager, UserManagerService>();
            services.AddScoped<IHashAlgo, HashAlgo>();
            services.AddScoped<ITokenManager, TokenManager>();
            // services.AddScoped<aici adaugam serviciu>();...

            return services;
        }
        public static IServiceCollection AddMANDATAppCurrentUser(this IServiceCollection services)
        {
            services.AddScoped(s =>
            {
                var accessor = s.GetService<IHttpContextAccessor>();
                var httpContext = accessor.HttpContext;
                var claims = httpContext.User.Claims;


                var userIdClaim = claims?.SingleOrDefault(c => c.Type == "Id")?.Value;
                var isParsingSuccessful = Guid.TryParse(userIdClaim, out Guid id);
                var userEmail = claims?.SingleOrDefault(e => e.Type == ClaimTypes.Email)?.Value;
                var userName = claims?.SingleOrDefault(e => e.Type == ClaimTypes.Name)?.Value;

                var uow = s.GetService<UnitOfWork>()!;
                //var userImage = uow.IdentityUsers
                //    .Get()
                //    .SingleOrDefault(ui => ui.Email == userEmail)?.UserImage; pentru imagine de profil
                return new CurrentUserDto
                {
                    isAuthenticated = httpContext.User.Identity.IsAuthenticated,
                    Email = userEmail,
                    FirstName = userName,
                    Id = Guid.TryParse(userIdClaim, out var userIdClaimAsGuid) ?
                            userIdClaimAsGuid : null,
                   // UserImage = userImage


                };
            });

            return services;
        }
    }
}
