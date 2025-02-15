import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/lib/mongoDB";
import Product from "@/models/Product";

export async function GET(req: NextRequest) {
  try {
    await connectMongo();
    const products = await Product.find();
    return NextResponse.json({ status: "Success", data: products });
  } catch (error) {
    console.error("Error in /api/products (GET): ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
