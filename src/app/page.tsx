import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input"
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-9000">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between pb-5  border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zin-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700">Save</button>
          </div>
        </div>
        <form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2"
            >
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Caio" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Bruno" />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="text-sm font-medium text-zinc-700" />
              </Input.Prefix>
              <Input.Control id="email" type="email" defaultValue="teste@email.com" />
            </Input.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="text-sm font-medium text-zinc-700" />
              </Input.Prefix>
              <Input.Control id="email" type="email" defaultValue="teste@email.com" />
            </Input.Root>
          </div>
        </form>
      </div>
    </>
  )
}
