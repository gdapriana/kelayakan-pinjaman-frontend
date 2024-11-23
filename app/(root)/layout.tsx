import {ReactNode} from "react";
import {Navbar} from "@/app/(root)/_components/navbar";

export default function Layout({children}: {children: ReactNode}) {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-stretch">
      <Navbar />
      <div className="grow basis-0 overflow-auto">
        {children}
      </div>
    </main>
  )
}