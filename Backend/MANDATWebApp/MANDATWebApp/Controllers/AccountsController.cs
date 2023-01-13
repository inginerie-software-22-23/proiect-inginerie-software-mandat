using MANDAT.BusinessLogic.Features.Login;
using MANDAT.BusinessLogic.Interfaces;
using MANDAT.Common.Exceptions;
using MANDAT.Common.Features.Register;
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
        public  IActionResult Register(RegisterCommand registerCommand)
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
        public async Task<IActionResult> Login([FromBody] LoginCommand loginCommand)
        {

            try
            {
                var result =  _userAccountService.Login(loginCommand);
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
    }
}
