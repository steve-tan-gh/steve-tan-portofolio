// File: app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ambil API key dari environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
// Alamat email tujuan Anda
const toEmail = "stevetan26022005@gmail.com"; // GANTI DENGAN EMAIL ANDA

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Kirim email menggunakan Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Alamat ini wajib dari Resend untuk free tier
      to: [toEmail],
      subject: `Pesan Baru dari ${name} via Portfolio`,
      reply_to: email, // Agar saat Anda membalas, emailnya langsung ke pengirim
      html: `
        <h1>Pesan dari Form Kontak</h1>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Gagal mengirim email." }, { status: 500 });
    }

    return NextResponse.json({ message: "Email berhasil dikirim!", data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada server." }, { status: 500 });
  }
}