import transporter from "@/utils/mailer";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { nom, prenom, email, telephone, sujet, description } = req.body;

  if (!nom || !prenom || !email || !telephone || !sujet || !description) {
    return res.status(400).json({ message: 'Fill form' });
  }

  try {
    const mailOptions = {
        to: "keziah.imer@epitech.eu",
        subject: "Client site web",
        text: "Nom: " + nom + "\nPrénom: " + prenom + "\nEmail: " + email + "\nTéléphone: " + telephone + "\nSujet: " + sujet + "\nDescription: " + description
    }
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: info });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
