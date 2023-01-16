using MANDAT.BusinessLogic.Features.Login;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.BusinessLogic.Services;
using MANDAT.Common.Exceptions;
using MANDAT.Common.Features.RefreshLoginToken;
using MANDAT.Common.Features.Register;
using MANDAT.Entities.Entities;
using MANDATWebApp.Code.Base;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace MANDATWebApp.Controllers
{
    public class AccountsController : BaseController
    {
        private readonly IUserManager _userAccountService;
        private readonly ITokenManager _tokenManager;

        public AccountsController(ControllerDependencies dependencies,
            IUserManager userAccountService,
            ITokenManager tokenManager)
            : base(dependencies)
        {
            _userAccountService = userAccountService;
            _tokenManager = tokenManager;
        }
        [HttpPost("register")]
        public IActionResult Register(RegisterCommand registerCommand)
        {
            try
            {
                _userAccountService.Register(registerCommand);
                return Ok();
            }
            catch (UserAlreadyRegisteredException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginCommand loginCommand)
        {

            try
            {
                var result = _userAccountService.Login(loginCommand);
                return Ok(result);

            }
            catch (NotFoundException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
            catch (IncorrectPasswordException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
            catch (ExceededMaximumAmountOfLoginAttemptsException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("idUser/{email}")]
        public async Task<IActionResult> GetGuidForUser(string email)
        {
            var id = _userAccountService.GetUserByTheEmail(email);
            return Ok(id);
        }

        [HttpPost]
        [Route("refresh-token")]
        public async Task<IActionResult> RefreshLoginToken([FromBody] RefreshTokenCommand refreshTokenCommand, CancellationToken cancellationToken)
        {
            try
            {
                var result = await _tokenManager.Handle(refreshTokenCommand, cancellationToken);
                return Ok(result);
            }
            catch (IntervalOfRefreshTokenExpiredException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
            catch (MaximumRefreshesExceededException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetUserInfoByEmail/{email}")]
        public IActionResult GetUserInfoByEmail(string email)
        {
            var result = _userAccountService.GetUserInfoByEmail(email);
            return Ok(result);
        }

        [HttpGet("userGuid/{email}")]
        public IActionResult GetUserGuid(string email)
        {
            var result = _userAccountService.GetUserByTheEmail(email);
            return Ok(result);
        }

        [HttpDelete]
        [Route("DeleteTokenAsync/{email}")]
        public async Task<IActionResult> DeleteTokenAsync(string email)
        {
            if (!await _tokenManager.DeleteToken(email))
            {
                return NotFound();
            }
            return Ok();

        }

        }


        [HttpGet("GetUserByEmail/{email}")]
        public IActionResult GetUserByEmail (string email)
        {
            var result = _userAccountService.GetUserIdByEmail(email);
            return Ok(result);
        }

    }
}
