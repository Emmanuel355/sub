import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest, context: any) {
    //displays one user and used for editing

    const {params} = context;
    const id = params['id']


    try {
        const list = await prisma.user.findUnique({where: {id: id}});
        return NextResponse.json(list);
    } catch (e) {
        return NextResponse.json({status: 'error', data: e})

    }

}

export async function PUT(req: NextRequest, context: any) {
    //performs an update of the data
    const {params} = context;
    const id = params['id']

    const {name, description} = await req.json();

    try {
        if (name === '') {
            return NextResponse.json({status: 'error', data: 'Email and name are required'})
        }

        const updateUser = await prisma.user.update({
            where: {
                id: id
            }, data: {
                name: name,
                description: description,

            }
        });

        return NextResponse.json({status: 'success', data: updateUser})
    } catch (error: any) {

        return NextResponse.json({status: 'error', data: 'error'})
    }
}

export async function DELETE(req: NextRequest, context: any) {

    //performs delete operation for the data
    const {params} = context;
    const id = params['id']


    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: id
            },
        });

        return NextResponse.json({message: 'deleted'})
    } catch (e) {
        return NextResponse.json({status: 'error', data: 'error'})
    }

}

