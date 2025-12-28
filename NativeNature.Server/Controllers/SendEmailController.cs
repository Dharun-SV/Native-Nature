using System;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Microsoft.Extensions.Configuration;
using NativeNature.Server.Model;

namespace NativeNature.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SendEmailController : ControllerBase
    {
        private readonly IConfiguration _config;

        public SendEmailController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost("sendEmail")]
        public IActionResult SendEmail([FromBody] ContactRequest model)
        {
            Console.WriteLine("SendEmail invoked: " + (model?.email ?? "null"));
            if (model == null)
                return BadRequest(new { message = "Invalid payload" });

            var smtpSection = _config.GetSection("Smtp");
            var host = smtpSection["Host"];

            // If SMTP not configured, return a successful simulated response
            if (string.IsNullOrEmpty(host))
            {
                return Ok(new { message = "SMTP not configured — simulated send." });
            }

            try
            {
                var port = int.TryParse(smtpSection["Port"], out var p) ? p : 25;
                var enableSsl = bool.TryParse(smtpSection["EnableSsl"], out var s) ? s : false;
                var from = smtpSection["From"] ?? model.email;
                var to = smtpSection["To"] ?? smtpSection["From"] ?? model.email;
                var user = smtpSection["Username"];
                var pass = smtpSection["Password"];

                using var mail = new MailMessage();
                mail.From = new MailAddress(from);
                mail.To.Add(to);
                mail.Subject = model.subject ?? "Contact Form Message";
                mail.Body = $"Name: {model.name}\nEmail: {model.email}\nPhone: {model.phone}\n\n{model.message}";

                using var client = new SmtpClient(host, port)
                {
                    EnableSsl = enableSsl
                };

                if (!string.IsNullOrEmpty(user))
                {
                    client.Credentials = new System.Net.NetworkCredential(user, pass);
                }

                client.Send(mail);

                return Ok(new { message = "Mail sent successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error sending email", detail = ex.Message });
            }
        }
    }
}
