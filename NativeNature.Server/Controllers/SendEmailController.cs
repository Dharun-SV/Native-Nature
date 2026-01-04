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
                var from = smtpSection["From"];
                var to = smtpSection["To"];
                var user = smtpSection["Username"];
                var pass = smtpSection["Password"];

                using var mail = new MailMessage();
                mail.From = new MailAddress(from);
                mail.To.Add(to);
                mail.Subject = model.subject ?? "Contact Form Message";
                mail.IsBodyHtml = true;

                mail.Subject = "📩 New Support Enquiry | NativeNature";

                mail.Body = $@"
<!DOCTYPE html>
<html>
<body style='font-family: Arial, sans-serif; background:#f6f6f6; padding:20px;'>

  <div style='max-width:600px; background:#ffffff; margin:auto; padding:20px; border-radius:6px;'>

    <!-- Title -->
    <h2 style='color:#2e7d32; margin-bottom:10px; text-align:center;'>
      New Enquiry Received
    </h2>

    <p style='font-size:14px; color:#555;'>
      A new enquiry has been submitted via the <b>NativeNature Contact Page</b>.
    </p>

    <!-- Details -->
    <table style='width:100%; border-collapse:collapse; margin-top:15px;'>

      <tr>
        <td style='padding:8px; font-weight:bold; width:120px;'>Name</td>
        <td style='padding:8px;'>{model.name}</td>
      </tr>

      <tr style='background:#f2f2f2;'>
        <td style='padding:8px; font-weight:bold;'>Email</td>
        <td style='padding:8px;'>{model.email}</td>
      </tr>

      <tr>
        <td style='padding:8px; font-weight:bold;'>Phone</td>
        <td style='padding:8px;'>{model.phone}</td>
      </tr>

      <tr style='background:#f2f2f2;'>
        <td style='padding:8px; font-weight:bold;'>Subject</td>
        <td style='padding:8px;'>{model.subject}</td>
      </tr>

    </table>

    <!-- Message -->
    <h3 style='margin-top:20px;'>Message</h3>
    <div style='background:#f2f2f2; padding:12px; border-radius:4px; white-space:pre-line;'>
      {model.message}
    </div>

    <hr style='margin:25px 0;' />

    <p style='font-size:12px; color:#777;'>
      Sent from: NativeNature Website<br/>
      Date: {DateTime.Now:dd MMM yyyy, hh:mm tt}
    </p>

  </div>

</body>
</html>";

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
