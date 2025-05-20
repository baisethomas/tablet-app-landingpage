export function WelcomeEmailTemplate({ email }: { email: string }) {
  // Get the current year for the copyright
  const currentYear = new Date().getFullYear()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Tablet App</title>
    </head>
    <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://yourdomain.com/images/tablet-logo.png" alt="Tablet App Logo" style="max-width: 120px;" />
      </div>
      
      <h2 style="color: #292524; font-size: 24px; margin-bottom: 20px;">Welcome to Tablet App!</h2>
      
      <p style="color: #57534e; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
        Thank you for joining our beta program. We're excited to have you on board!
      </p>
      
      <p style="color: #57534e; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
        We'll keep you updated on our launch and send you early access when we're ready.
      </p>
      
      <div style="background-color: #f5f5f4; border-radius: 8px; padding: 15px; margin: 25px 0;">
        <p style="color: #44403c; font-size: 14px; margin: 0;">
          <strong>Your email:</strong> ${email}
        </p>
      </div>
      
      <p style="color: #57534e; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
        In the meantime, if you have any questions, feel free to reply to this email.
      </p>
      
      <p style="color: #57534e; font-size: 16px; line-height: 1.5; margin-bottom: 5px;">
        Best regards,
      </p>
      <p style="color: #57534e; font-size: 16px; line-height: 1.5; margin-top: 0;">
        The Tablet App Team
      </p>
      
      <div style="border-top: 1px solid #e7e5e4; margin-top: 30px; padding-top: 20px; text-align: center;">
        <p style="color: #a8a29e; font-size: 12px;">
          &copy; ${currentYear} Tablet App. All rights reserved.
        </p>
        <p style="color: #a8a29e; font-size: 12px;">
          You're receiving this email because you signed up for updates about Tablet App.
          <br>
          <a href="#" style="color: #78716c;">Unsubscribe</a> | <a href="#" style="color: #78716c;">Privacy Policy</a>
        </p>
      </div>
    </body>
    </html>
  `
}
