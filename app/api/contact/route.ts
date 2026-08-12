import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "support@mitratechservices.in";

    // 1. Check if SMTP configuration exists in environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;
    const smtpUser = process.env.SMTP_USER || "support@mitratechservices.in";
    const smtpPass = process.env.SMTP_PASS;

    let emailSent = false;
    let deliveryMessage = "Inquiry recorded on server.";

    if (smtpHost && smtpUser && smtpPass && smtpPass.trim() !== "") {
      try {
        // Transporter with Nodemailer
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // SSL for 465, STARTTLS for 587
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false, // Prevents self-signed cert issues
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 30px; border-radius: 12px;">
            <h2 style="color: #38bdf8; border-bottom: 2px solid #334155; padding-bottom: 10px;">
              📩 New Project Inquiry - Mitratech Services
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #94a3b8; width: 180px;">Client Full Name:</td>
                <td style="padding: 10px; color: #ffffff; font-size: 16px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #94a3b8;">Email Address:</td>
                <td style="padding: 10px; color: #38bdf8; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #94a3b8;">Phone Number:</td>
                <td style="padding: 10px; color: #ffffff; font-size: 16px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #94a3b8;">Service Requested:</td>
                <td style="padding: 10px; color: #a855f7; font-weight: bold; font-size: 16px;">${service}</td>
              </tr>
              ${
                budget
                  ? `<tr>
                      <td style="padding: 10px; font-weight: bold; color: #94a3b8;">Estimated Budget:</td>
                      <td style="padding: 10px; color: #4ade80;">${budget}</td>
                    </tr>`
                  : ""
              }
            </table>

            <div style="margin-top: 25px; background-color: #1e293b; padding: 20px; border-radius: 8px; border-left: 4px solid #38bdf8;">
              <h3 style="margin-top: 0; color: #cbd5e1;">Project Details & Vision:</h3>
              <p style="white-space: pre-line; color: #e2e8f0; font-size: 15px; leading-height: 1.6;">
                ${message}
              </p>
            </div>

            <p style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
              Sent automatically via Mitratech Services Website Inquiry Engine to ${recipientEmail}
            </p>
          </div>
        `;

        await transporter.sendMail({
          from: `"Mitratech Services Website" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `🚨 New Lead (${service}): ${fullName}`,
          html: htmlContent,
        });

        emailSent = true;
        deliveryMessage = `Email successfully dispatched to ${recipientEmail} via Hostinger SMTP.`;
      } catch (smtpErr: any) {
        console.error("[SMTP_DELIVERY_ERROR]", smtpErr);
        if (smtpErr.code === "EAUTH") {
          return NextResponse.json(
            {
              success: false,
              error: `Hostinger SMTP authentication failed for ${smtpUser}. Please check your email password in .env.local.`,
              authError: true,
            },
            { status: 401 }
          );
        }
      }
    }

    // Console logging for server tracking
    console.log("==========================================");
    console.log(`[INQUIRY RECORDED] -> Target: ${recipientEmail}`);
    console.log(`Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);
    console.log(`SMTP Status: ${emailSent ? "Delivered" : "Logged on Server"}`);
    console.log("==========================================");

    return NextResponse.json(
      {
        success: true,
        emailSent,
        message: "Thank you! Your project inquiry has been received.",
        recipientEmail,
        details: deliveryMessage,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please try again or email support@mitratechservices.in directly." },
      { status: 500 }
    );
  }
}
