import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_name, user_email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gufrankgna@gmail.com",
        pass: "jfia kyyv mfgr vega", // Using the App Password provided by the user
      },
    });

    try {
      await transporter.sendMail({
        from: `"${user_name}" <${user_email}>`,
        to: "gufrankgna@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New Message from Portfolio Website</h3>
          <p><strong>Name:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
