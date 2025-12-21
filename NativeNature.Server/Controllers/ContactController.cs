using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NativeNature.Server.Model;

namespace NativeNature.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpPost("sendEmail")]
        public IActionResult Send([FromBody] ContactRequest model)
        {
            // Here you can send email or save to database
            return Ok(new { message = "Mail sent successfully" });
        }
    }
}
