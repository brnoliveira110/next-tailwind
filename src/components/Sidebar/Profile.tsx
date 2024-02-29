import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../Button'

export const Profile = () => {
    return (
        <div className='flex items-center gap-3'>
            <Image src='/imageProfile.png' className='rounded-full'
                width={50}
                height={50}
                alt="imagem do perfil" />

            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Caio Santana
                </span>
                <span className="text-sm truncate text-zinc-500" title="caio@email.com.br">caio@email.com.br</span>
            </div>
            <div className='ml-auto'>
                <Button type="button" variant='ghost'>
                    <LogOut className="h-5 w-5 text-zinc-500" />
                </Button>
            </div>
        </div>
    )
}
