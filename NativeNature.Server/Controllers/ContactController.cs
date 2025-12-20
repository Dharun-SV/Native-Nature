using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using NativeNature.Server.Model;


namespace NativeNature.Server.Controllers
{
    public class ContactController : Controller
    {
        [HttpPost]
        [Route("contact/sendEmail")]
        public async Task<IActionResult> Send([FromBody] ContactRequest model)
        {
            try
            {
                var mail = new MailMessage
                {
                    From = new MailAddress("yourmail@gmail.com", "Native & Nature"),
                    Subject = "New Contact Form Message",
                    IsBodyHtml = true,
                    Body = $@"
                        <h3>New Contact Message</h3>
                        <p><b>Name:</b> {model.Name}</p>
                        <p><b>Email:</b> {model.Email}</p>
                        <p><b>Phone:</b> {model.Phone}</p>
                        <p><b>Subject:</b> {model.Subject}</p>
                        <p><b>Message:</b> {model.Message}</p>
                    "
                };

                mail.To.Add("yourmail@gmail.com");

                using var smtp = new SmtpClient("smtp.gmail.com", 587)
                {
                    Credentials = new NetworkCredential(
                        "yourmail@gmail.com",
                        "YOUR_APP_PASSWORD"
                    ),
                    EnableSsl = true
                };

                await smtp.SendMailAsync(mail);

                return Ok(new { message = "Mail sent successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
