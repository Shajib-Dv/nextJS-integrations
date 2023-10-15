import { NextResponse } from "next/server"
import db from '@/db.json';

export const GET = async (req)=>{
    const {searchParams} = new URL(req.url);
    const categoryId =  searchParams.get('categoryId');

    let products = await db?.products

    if(categoryId){
      products =  products.filter(product => product.categoryId === +categoryId)
    }

    return NextResponse.json({status: 200, products})
} 


export const POST = async (req) => {
    const body =await req.json();

    

    db.products.push(body);

    return NextResponse.json({status: 200, message:"product added successfully"})
}