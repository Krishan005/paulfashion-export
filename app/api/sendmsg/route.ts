import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from 'resend';

const resend = new Resend(process.env.SMS_KEY);


export async function POST(req: NextRequest) {
  const { name, email, message, phone } = await req.json();

  try {

    resend.emails.send({
      from: 'info@paulfashion.in',
      to: email,
      subject: 'Welcome to Paul Fashion',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to us. We will get back to you soon.</p>
       

        If want to connect directly with us, you can reach us at <a href="mailto:info@paulfashion.in">info@paulfashion.in</a>
        or call us at <a href="tel:+91 7044221504">+91 7044221504</a>.

         <p>Best regards,<br/>Paul Fashion</p>
        `
    });


    resend.emails.send({
      from: 'info@paulfashion.in',
      to: "paulfashion.export@gmail.com",
      subject: 'Lead Message',
      html: `
    Company Detials:<br/>
    Name: ${name}<br/>
    Email: ${email}<br/>
    Message: ${message}<br/>
    Phone: ${phone}<br/>

    Want to connect with your company directly

  `
    });



    return NextResponse.json(
      { message: "Email sent successfully", data: email },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
