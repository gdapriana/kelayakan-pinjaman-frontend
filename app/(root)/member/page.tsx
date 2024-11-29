"use client";

import { Member } from "@/lib/utils";
import Image from "next/image";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion as m } from "framer-motion";

const members: Member[] = [
  { name: "I Komang Gede Apriana", nim: "2108561031" },
  { name: "I Komang Sutrisna Eka Wijaya", nim: "2108561032" },
];

export default function Page() {
  return (
    <main className="w-full gap-8 md:h-full flex flex-col justify-start md:justify-center items-center px-4 md:px-6">
      <h1 className="font-bold mt-8 md:mt-0 text-2xl">Group Project Member</h1>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {members.map((member: Member, index: number) => {
          return (
            <m.div
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ ease: "anticipate", duration: 2, delay: index * 0.5 }}
              key={index}
              className="flex flex-col justify-start items-center gap-4"
            >
              <div className="w-52 border aspect-square rounded-full flex justify-center items-center">
                {member.profile && (
                  <Image
                    src={member.profile}
                    alt="profile"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                )}
                {!member.profile && <User className="w-[70%] h-[70%] object-cover" />}
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <h1 className="font-bold text-xl">{member.name}</h1>
                <Badge>{member.nim}</Badge>
              </div>
            </m.div>
          );
        })}
      </div>
    </main>
  );
}
