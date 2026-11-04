import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  honeypot: z.string().max(0, "Bot detected"), // anti-spam
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    const { fullName, email, service, budget, message } = result.data;

    // Optional Formspree forwarding if endpoint is provided
    const FORMSPREE_ID = process.env.FORMSPREE_ID || "xbdpprvo";
    if (FORMSPREE_ID) {
      try {
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            _replyto: email,
            service,
            budget: budget || "Not specified",
            message,
            _subject: `New Inquiry from ${fullName} - ${service}`,
          }),
        });
      } catch (err) {
        console.warn("Formspree forward warning:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${fullName}! Your inquiry regarding "${service}" has been received. Chamroeun SARAN will review your project and reply shortly.`,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please reach out via Telegram or email directly.",
      },
      { status: 500 }
    );
  }
}

