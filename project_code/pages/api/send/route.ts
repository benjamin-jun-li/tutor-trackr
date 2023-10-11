import  EmailTemplate from '../../../components/emailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;
        const data = await resend.emails.send({
            from: "tutortrackr.official@gmail.com",
            to: email,
            subject: 'TutorTrackr: Reset your password',
            react: EmailTemplate() as ReactElement
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
