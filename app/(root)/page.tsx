'use client';

import { motion as m } from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FlaskRound, HandCoins} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full px-4 flex-col gap-6 h-full flex justify-center items-center">
      <header className="flex justify-center items-center flex-col gap-2">
        <m.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "circInOut" }}
        >
          <HandCoins className="w-10 h-10" />
        </m.div>

        <m.h1
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "circInOut" }}
          className="font-bold text-4xl text-center"
        >
          {process.env.NEXT_PUBLIC_APP}
        </m.h1>

        <m.div
          animate={{ opacity: [0, 1], y: [100, 0], width: [0, 200] }}
          transition={{ duration: 2, ease: "circInOut" }}
          className="border-b border-2 rounded-full border-primary"
        ></m.div>

        <m.p
          animate={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 2, delay: 0.5, ease: "anticipate" }}
          className="text-muted-foreground w-full max-w-xl text-center mt-2">Evaluate Your Loan Worthiness Quickly and Accurately by Analyzing Your Personal Data and Financial Profile</m.p>
      </header>
      
      <m.div
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 2, delay: 1, ease: "anticipate" }}
      >
        <Button className="rounded-full font-bold" size="lg" asChild>
          <Link href="/predict">
            <FlaskRound />
            Check Now!
          </Link>
        </Button>
      </m.div>
    </div>
  );
}
