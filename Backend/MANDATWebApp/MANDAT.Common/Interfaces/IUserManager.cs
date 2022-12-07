using MANDAT.Common.External.Auth;
using MANDAT.Common.Features.Login;
using MANDAT.Common.Features.Register;
using MANDAT.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.Common.Interfaces
{
    public interface IUserManager
    {
        //Task<T> GetUserSelectedProperties<T>(string uniqueIdentifier, Expression<Func<IdentityUser, T>> selector, CancellationToken cancellationToken = default);
        //Task<T> GetUserTokensSelectedProperties<T>(string tokenValue, Expression<Func<IdentityUserTokenConfirmation, T>> selector, CancellationToken cancellationToken = default);
        Task<IdentityUser> GetUserById(Guid id);
        Task<IdentityUser> GetUserByEmail(string email);
        Task<Guid> GetUserByUsername(string username);

        Task<TokenWrapper> Login(LoginCommand loginCommand);
        Task<IdentityUser> Register(RegisterCommand registerCommand);
        Task<IdentityUserToken> GetUserTokenByRefreshToken(string refreshtoken);
        Task<IdentityUser> updateUser(IdentityUser user);
        Task<IdentityUser> UpdateUserPassword(IdentityUser user, string password);
        // Task<bool> saveAsync();


    }
}
