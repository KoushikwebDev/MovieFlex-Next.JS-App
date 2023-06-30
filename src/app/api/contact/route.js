import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/contactSchema";
import { NextResponse } from "next/server";

export async function POST(req, _res) {
  try {
    const body = await req.json();
    await dbConnect();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
