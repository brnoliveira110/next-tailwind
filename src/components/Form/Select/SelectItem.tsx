import * as Select from "@radix-ui/react-select"
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from "lucide-react"


export type SelectItemProps = Select.SelectItemProps

export const SelectItem = (props: SelectItemProps) => {
    return (
        <SelectPrimitive.Item
            value="br"
            className="flex items-center gap-2 px-3 py-2.5 justify-between overflow-hidden outline-none data-[highlighted]:bg-zinc-50"
        >
            <SelectPrimitive.ItemText className="text-black">
                Brazil
            </SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
            </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
    )
}
