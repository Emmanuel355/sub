import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";


export async function GET(req: NextRequest) {
    //displays all data in the database
    try {
        const list = await prisma.user.findMany()
        return NextResponse.json(list)
    } catch (e) {
        return NextResponse.error()

    }
}

export async function POST(req: NextRequest) {
    //receives post requests


    const {name, email, description} = await req.json();

    try {

        if (name === '' || email === '') {
            return NextResponse.json({status: 'error', data: 'Email and name are required'})
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                description
            },
        })

        return NextResponse.json({status: 'success', data: user})

    } catch (error: any) {
        //return Email error response if email already exists
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {

            return NextResponse.json({status: 'error', data: 'Email already in use'})
        }
        return NextResponse.json({status: 'error', data: 'error'})

    }
}
