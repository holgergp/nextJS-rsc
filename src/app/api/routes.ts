import { NextResponse } from "next/server";
import { getProducts } from "../server";

export async function GET(request: Request) {
  const products = await getProducts();

  return NextResponse.json(JSON.stringify(products));
}
