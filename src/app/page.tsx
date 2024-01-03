import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input"
import { Mail, User } from "lucide-react";

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
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 "
            >
              Your photo
              <span className=" block mt-0.5 text-sm font-normal text-zinc-500">This will be displayed on your profile</span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div></div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div></div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 "
            >
              Bio
              <span className=" block mt-0.5 text-sm font-normal text-zinc-500">Write a short introduction</span>
            </label>
            <div></div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 "
            >
              Portfolio projects
              <span className=" block mt-0.5 text-sm font-normal text-zinc-500">Share a few snippets of your work</span>
            </label>
            <div></div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}
