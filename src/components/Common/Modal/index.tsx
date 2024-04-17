'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
    const router = useRouter();

    const handleOnOpenChange = (open: boolean) => {
        if (!open) {
            router.back();
        }
    };

    return (
        <Dialog open onOpenChange={handleOnOpenChange}>
            <DialogContent className="flex h-fit w-full flex-col bg-black sm:w-4/12">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold tracking-tight text-white">
                        Contate-me
                    </DialogTitle>
                    <DialogDescription className="mt-6 text-sm leading-8 text-[#9898A3]">
                        Estou aqui para te ajudar a alcançar o sucesso com soluções sob medida. Não
                        deixe suas ideias no papel. Entre em contato ou agende um horário comigo, e
                        vamos iniciar essa jornada criativa juntos!
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
