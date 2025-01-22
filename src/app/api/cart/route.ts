import { NextRequest, NextResponse } from "next/server";

let cart: any[] = []; // Temporary in-memory store

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    cart.push(body); // Add the product to the cart
    return NextResponse.json({ message: "Product added successfully!", cart });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add product." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(cart); // Fetch all products in the cart
}
