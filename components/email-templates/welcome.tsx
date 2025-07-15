interface WelcomeEmailTemplateProps {
  email: string
  name?: string
  role?: string
  church?: string
}

export function WelcomeEmailTemplate({ email, name }: WelcomeEmailTemplateProps) {
  const currentYear = new Date().getFullYear()
  const greeting = name ? `Hello ${name},` : 'Hello,'
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Tablet Notes Beta</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #4A6D8C 0%, #5A7DB5 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: 1px;">WELCOME TO TABLET NOTES BETA</h1>
      </div>
      <div style="padding: 20px 0;">
        <p style="font-size: 16px; margin-bottom: 20px;">${greeting}</p>
        <p style="font-size: 16px;">Thank you for joining Tablet Notes Beta. You're now part of a select community of believers who will help shape a tool designed to deepen engagement with spiritual teachings.</p>
      </div>
      <div style="margin-bottom: 25px;">
        <h2 style="color: #4A6D8C; font-size: 20px; margin-bottom: 10px;">YOUR BETA JOURNEY</h2>
        <p style="font-size: 16px;">You've secured one of our limited beta spots, giving you early access to Tablet Notes before our public launch. Your insights and feedback during this phase will directly shape the app's development.</p>
      </div>
      <div style="margin-bottom: 25px;">
        <h2 style="color: #4A6D8C; font-size: 20px; margin-bottom: 10px;">YOUR NEXT STEPS</h2>
        <ol style="font-size: 16px; padding-left: 20px;">
          <li>Watch for your download invitation — <strong>Coming this week (July 18th launch)</strong></li>
          <li>Install Tablet Notes — We'll provide simple instructions</li>
          <li>Record your first sermon — Experience the full capture-to-reflection journey</li>
          <li>Share your thoughts — Your feedback link will be in the app</li>
        </ol>
      </div>
      <div style="margin-bottom: 25px;">
        <h2 style="color: #4A6D8C; font-size: 20px; margin-bottom: 10px;">TIMELINE</h2>
        <ul style="font-size: 16px; padding-left: 20px;">
          <li><strong>July 18th, 2025</strong> — Beta launch with download invitations</li>
          <li><strong>August 2025</strong> — Feature refinement based on your feedback</li>
          <li><strong>September 2025</strong> — Public launch with your 3 months of Premium access</li>
        </ul>
      </div>
      <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #b3d9ff;">
        <h3 style="color: #2c5282; margin-top: 0;">FEATURES DESIGNED FOR DEEPER ENGAGEMENT</h3>
        <ul style="font-size: 16px; padding-left: 20px;">
          <li>One-Tap Recording: Be fully present during worship while Tablet Notes captures every word</li>
          <li>Live Note-Taking: Record your insights alongside the message as the Spirit moves you</li>
          <li>AI Transcription: Revisit the exact words that touched your heart, perfectly preserved</li>
          <li>Smart Summaries: Reflect on key teachings with AI-generated insights and application points</li>
          <li>Scripture Detection: Deepen study with automatic Bible verse recognition and references</li>
          <li>Cloud Sync: Access your spiritual library across all your devices</li>
        </ul>
      </div>
      <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #ffeaa7;">
        <h3 style="color: #856404; margin-top: 0;">YOUR BETA COMMUNITY BENEFITS</h3>
        <ul style="font-size: 16px; padding-left: 20px; color: #856404;">
          <li>First Access: Be among the first to experience Tablet Notes</li>
          <li>Shape the Future: Your feedback directly influences development</li>
          <li>Premium Preview: Test all premium features before anyone else</li>
          <li>3 Months Free: Enjoy Premium access after public launch</li>
          <li>Direct Support: Get priority assistance from our team</li>
        </ul>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://tabletnotes.app/community" style="background: #4A6D8C; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">JOIN OUR BETA COMMUNITY</a>
      </div>
      <div style="margin: 30px 0;">
        <p style="color: #666; font-size: 16px;">We're grateful to have you with us on this journey. Tablet Notes was born from our own desire to more deeply engage with spiritual teachings, and we're excited to see how it enhances your connection to the Word.</p>
        <p style="color: #4A6D8C; font-size: 16px; font-weight: bold; margin: 15px 0 0 0;">With gratitude,<br>The Tablet Notes Team</p>
      </div>
      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
        <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">
          You're receiving this email because you signed up for Tablet Notes Beta.<br>
          Have questions? Reply directly to this email - we read every message.<br>
          Tablet Notes | <a href="https://tabletnotes.app/privacy" style="color: #4A6D8C;">Privacy Policy</a> | <a href="https://tabletnotes.app/terms" style="color: #4A6D8C;">Terms of Service</a>
        </p>
      </div>
      <div style="border-top: 1px solid #e7e5e4; margin-top: 30px; padding-top: 20px; text-align: center;">
        <p style="color: #a8a29e; font-size: 12px;">&copy; ${currentYear} Tablet Notes. All rights reserved.</p>
      </div>
    </body>
    </html>
  `
}
