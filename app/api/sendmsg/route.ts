import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fromData from "form-data";
import mailGun from "mailgun.js"

  const mailgun = new mailGun(fromData);
  const mg = mailgun.client({username: 'api', key: "pubkey-2a65345274c85c544546c2a041bf7a81" });

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
     mg.messages.create('sandbox-123.mailgun.org', {
  	from: "Excited User <mailgun@sandbox90df0ba9f3204465a319d668db989f56.mailgun.org>",
  	to: ["test@example.com"],
  	subject: "Hello",
  	text: "Testing some Mailgun awesomeness!",
  	html: "<h1>Testing some Mailgun awesomeness!</h1>"
  })
  .then(msg => console.log(msg)) // logs response data
          .catch(err => console.log(err)); // logs any error
      
      

    return NextResponse.json(
      { message: "Email sent successfully" },
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
