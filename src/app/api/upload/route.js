import Image from "@/models/image";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { url } = req.json();

    const newImage = new Image({ url });
    await newImage.save();
    return NextResponse.json({ message: "ذخیره شد" }, { stauts: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}
