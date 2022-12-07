using MANDAT.BusinessLogic.Base;
using MANDAT.Common.Configurations;
using MANDAT.Common.Exceptions;
using MANDAT.Common.External.Auth;
using MANDAT.Common.Features.Login;
using MANDAT.Common.Features.Register;
using MANDAT.Common.Interfaces;
using MANDAT.Entities.Entities;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MANDAT.BusinessLogic.Services
{
    public class UserManagerService : BaseService, IUserManager
    {
        private readonly IHashAlgo _hashAlgo;
        private readonly ITokenManager _tokenManager;
        private readonly SignInKeySetting _signInKeySetting;
        public UserManagerService(IHashAlgo hashAlgo, ServiceDependencies dependencies,  ITokenManager tokenManager, SignInKeySetting signInKeySetting) :base(dependencies)
        {
            _hashAlgo = hashAlgo;
            _tokenManager = tokenManager;
            _signInKeySetting = signInKeySetting;
        }

        
        public async Task<IdentityUser> GetUserById(Guid id)
        {
            //var user = await uow.IdentityUsers.Where(u => u.Id.Equals(id)).SingleOrDefaultAsync();
            //return user;
            return null;
        }

        public async Task<IdentityUser> GetUserByEmail(string email)
        {
            //var user = await uow.IdentityUsers.Where(u => u.Email.Equals(email)).SingleOrDefaultAsync();
            //return user;
            return null;
        }

        public async Task<Guid> GetUserByUsername(string username)
        {
            //var user = await uow.IdentityUsers.Where(u => u.Username.Equals(username)).FirstOrDefaultAsync();
            //return user.Id;
            var guid = new Guid();
            return guid;
        }

        //public Task<T> GetUserSelectedProperties<T>(string uniqueIdentifier, Expression<Func<IdentityUser, T>> selector, CancellationToken cancellationToken = default)
        //{
        //    var selectedUserPropertiesObject = uow.IdentityUsers
        //      .AsNoTracking()
        //      .Where(u => u.Username.Equals(uniqueIdentifier) || u.Email.Equals(uniqueIdentifier))
        //      .Select(selector)
        //      .SingleOrDefaultAsync(cancellationToken);

        //    return selectedUserPropertiesObject;
        //}

        public async Task<IdentityUserToken> GetUserTokenByRefreshToken(string refreshtoken)
        {
            ///where refreshtokentime is still valid/ where numberofrefreshes < maxallowedtokenrefresh?
            //var userTokenObj = await uow.IdentityUserTokens.Where(ut => ut.RefreshTokenValue.Equals(refreshtoken)).SingleOrDefaultAsync();
            //return userTokenObj;
            return null;
        }

       // public async Task<T> GetUserTokensSelectedProperties<T>(string tokenValue, Expression<Func<IdentityUserTokenConfirmation, T>> selector, CancellationToken cancellationToken = default)
       // {
            //var selectedUserTokenPropertiesObject = await uow.IdentityUserTokenConfirmations.AsNoTracking().Where(utc => utc.ConfirmationToken.Equals(tokenValue)).Select(selector).SingleOrDefaultAsync(cancellationToken);
            //return selectedUserTokenPropertiesObject;
            //return ;
       // }

        public async Task<TokenWrapper> Login(LoginCommand loginCommand)
        {



            //IdentityUser user = await uow.IdentityUsers.Where(u => u.Username.Equals(loginCommand.UniqueIdentifier) || u.Email.Equals(loginCommand.UniqueIdentifier)).SingleOrDefaultAsync();
            //user = await uow.IdentityUsers.Include(u => u.IdentityUserRoles).ThenInclude(ur => ur.IdentityRole).Where(u => u.Id.Equals(user.Id)).SingleOrDefaultAsync();
            //List<string> roles = user.IdentityUserRoles.Select(ur => ur.IdentityRole.Name).ToList();

            //var newJti = Guid.NewGuid().ToString();
            //var tokenHandler = new JwtSecurityTokenHandler();
            ////usersecret
            //var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_signInKeySetting.SecretSignInKeyForJwtToken));
            ////int usedRefreshes = -1;
            //var tokenresult = await _tokenManager.GenerateTokenAndRefreshToken(signinKey, user, roles, tokenHandler, newJti);
            ////var refreshToken = _tokenManager.GenerateRefreshToken();


            ////????

            //TokenWrapper tokenwrapper = new TokenWrapper();
            //tokenwrapper.Token = tokenresult.Item1;
            //tokenwrapper.RefreshToken = tokenresult.Item2;


            //return tokenwrapper;
            return null;


        }


        public async Task<IdentityUser> Register(RegisterCommand registerCommand)
        {
            //var user = await uow.IdentityUsers.Where(u => u.Email.Equals(registerCommand.Email)).SingleOrDefaultAsync();
            //if (user != null)
            //{
            //    string message = "Username=" + registerCommand.Email + " already registered";
            //    throw new UserAlreadyRegisteredException(nameof(IdentityUser), message);
            //}
            //else
            //{
            //    var registerUser = new IdentityUser();
            //    registerUser.Id = Guid.NewGuid();
            //    registerUser.Email = registerCommand.Email;
            //    registerUser.PhoneNumber = registerCommand.PhoneNumber;
            //    registerUser.Username = registerCommand.FirstName + registerCommand.LastName;
            //    registerUser.PhoneNumberCountryPrefix = registerCommand.PhoneNumberCountryPrefix;
            //    string result = _hashAlgo.CalculateHashValueWithInput(registerCommand.Password);
            //    if (result != null)
            //    {
            //        registerUser.PasswordHash = result;
            //        uow.Set<IdentityUser>().Add(registerUser);


            //        //  var id = await uow.IdentityUsers.Where(u => u.Email.Equals(registerCommand.Email)).Select(u => u.Id).SingleOrDefaultAsync();
            //        var roleid = Guid.NewGuid();
            //        uow.Set<IdentityRole>().Add(new IdentityRole(UserRoleType.Admin, roleid));
            //        uow.Set<IdentityUserIdentityRole>().Add(new IdentityUserIdentityRole(registerUser.Id, roleid));
            //        await uow.SaveChangesAsync();

            //        return registerUser;
            //    }

            //}

            return null;
        }



        public async Task<IdentityUser> updateUser(IdentityUser user)
        {

            //uow.Set<IdentityUser>().Update(user);
            //await uow.SaveChangesAsync();
            //return user;
            return user;
        }

        public async Task<IdentityUser> UpdateUserPassword(IdentityUser user, string password)
        {
            //string updatedPassword = _hashAlgo.CalculateHashValueWithInput(password);
            //if (updatedPassword != null)
            //{
            //    user.PasswordHash = updatedPassword;
            //    await uow.SaveChangesAsync();

            //    return user;
            //}
            return null;
        }

        public async Task<IdentityUser> GetUserByIdentityUserTokenConfirmation(string token)
        {
            //var identityUserTokenConfirmationObj = await uow.IdentityUserTokenConfirmations.Where(utc => utc.ConfirmationToken.Equals(token) && utc.ConfirmationTypeId.Equals(ConfirmationTokenType.RESET_PASSWORD)).SingleOrDefaultAsync();
            //var user = await uow.IdentityUsers.Where(u => u.Id.Equals(identityUserTokenConfirmationObj.UserId)).SingleOrDefaultAsync();
            //return user;
            return null;
        }
    }
}
