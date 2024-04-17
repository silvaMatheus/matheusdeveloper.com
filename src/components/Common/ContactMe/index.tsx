'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export interface ContactFormFields {
    name: string;
    email: string;
    message: string;
}

export default function ContactMe() {
    const [fields, setFields] = useState<ContactFormFields>({ name: '', email: '', message: '' });
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    const onSubmit = async () => {
        try {
            const isProd = process.env.NODE_ENV === 'production';
            const base = isProd ? 'https://matheusdeveloper.com' : 'http://localhost:3000';

            await fetch(`${base}/${pathname}/api/send/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: fields.name,
                    email: fields.email,
                    message: fields.message,
                }),
            });

            // setIsEmailSent(true);
            // setShowToast(true);
        } catch (e) {
            console.error(e);
            // setIsEmailSent(false);
            // setShowToast(true);
        }
    };
    return (
        <div className="flex h-96 gap-5">
            <form onSubmit={handleSubmit} className="h-full w-full space-y-4 ">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-white" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={fields.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-white" htmlFor="name">
                        Nome
                    </Label>
                    <Input
                        placeholder="Nome"
                        type="name"
                        name="name"
                        id="name"
                        required
                        value={fields.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label className="text-white" htmlFor="email">
                        Message
                    </Label>
                    <Textarea
                        name="message"
                        id="message"
                        value={fields.message}
                        onChange={handleChange}
                        placeholder="Type your message here."
                    />
                </div>
                <Button
                    className="w-full border-black bg-white  text-black hover:border hover:border-white hover:text-white"
                    type="submit"
                >
                    Submit
                </Button>
                <div className="text-center text-white">OR</div>
                <Button className=" flex w-full gap-5  border-black bg-white text-black hover:border hover:border-white hover:text-white">
                    <CalendarIcon />
                    Agende uma call
                </Button>
            </form>
        </div>
    );
}
