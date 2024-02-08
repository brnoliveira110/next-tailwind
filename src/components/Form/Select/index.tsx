'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
    children: ReactNode
    placeholder: string
}


export const Select = ({ children, placeholder, ...props }: SelectProps) => {
    return (
        <>
            <SelectPrimitive.Root {...props}>
                <SelectPrimitive.Trigger className="flex h-11 items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 outline-none" >
                    <SelectPrimitive.Value placeholder={placeholder} className="text-black" />
                    <SelectPrimitive.Icon>
                        <ChevronDown className="h-5 w-5 text-zinc-500" />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content
                        side="bottom"
                        position="popper"
                        sideOffset={8}
                        className='z-10 w-[--radix-select-trigger-width]  rouded-lg border border-zinc-200 bg-white  shadow-sm  animate-slideDownAndFade'
                    >
                        <SelectPrimitive.Viewport>
                            {children}
                        </SelectPrimitive.Viewport>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>

            </SelectPrimitive.Root>
        </>
    )
}
