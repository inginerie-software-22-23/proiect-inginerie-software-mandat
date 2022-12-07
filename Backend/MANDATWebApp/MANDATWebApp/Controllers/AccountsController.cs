using MANDAT.Common.Exceptions;
using MANDAT.Common.Features.Login;
using MANDAT.Common.Features.Register;
using MANDAT.Common.Interfaces;
using MANDATWebApp.Code.Base;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace MANDATWebApp.Controllers
{
    public class AccountsController : BaseController
    {
        private readonly IUserManager _userAccountService;

        public AccountsController(ControllerDependencies dependencies, IUserManager userAccountService)
            : base(dependencies)
        {
            _userAccountService = userAccountService;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterCommand registerCommand)
        {
            try
            {
                var result = await _userAccountService.Register(registerCommand);
                return Ok(result);
            }
            catch (UserAlreadyRegisteredException ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginCommand loginCommand)
        {
            var result = await _userAccountService.Login(loginCommand);
                return Ok(result);
            //try
            //{
            //    var result = await _userAccountService.Login(loginCommand);
            //    return Ok(result);

            //}
            //catch (NotFoundException ex)
            //{
            //    Console.WriteLine(ex.Message);
            //    return BadRequest(ex.Message);
            //}
            //catch (IncorrectPasswordException ex)
            //{
            //    Console.WriteLine(ex.Message);
            //    return BadRequest(ex.Message);
            //}
            //catch (ExceededMaximumAmountOfLoginAttemptsException ex)
            //{
            //    Console.WriteLine(ex.Message);
            //    return BadRequest(ex.Message);
            //}
            //catch (AccountStillLockedException ex)
            //{
            //    Console.WriteLine(ex.Message);
            //    return BadRequest(ex.Message);
            //}
        }
    }
}
