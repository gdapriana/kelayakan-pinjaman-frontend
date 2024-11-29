"use client";

import { useState } from "react";
import { FormInput } from "@/app/(root)/predict/_components/form";
import { FileInput, FlaskConical } from "lucide-react";
import { Pie } from "@/app/(root)/predict/_components/pie";

export default function Page() {
  const [result, setResult] = useState<undefined | number>(undefined);
  const [profile, setProfile] = useState<undefined | { name: string }>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="w-full md:h-full flex flex-col justify-start md:justify-center md:items-center items-stretch md:flex-row">
      <div className="md:w-1/2 p-4 md:p-6 md:h-full flex flex-col justify-center items-center">
        <h1 className="font-bold flex justify-center items-center gap-1 mb-4 text-2xl">
          <FileInput /> Input Data
        </h1>
        <FormInput loading={{ loading, setLoading }} setResult={setResult} setProfile={setProfile} />
      </div>
      <div className="md:w-1/2 p-4 md:p-6 md:h-full flex flex-col justify-center items-center">
        <h1 className="font-bold flex justify-center items-center gap-1 mb-4 text-2xl">
          <FlaskConical /> Result
        </h1>
        {loading && <div>Loading...</div>}
        {!result && !loading && <span>Please input data first!</span>}
        {result && profile && !loading && <Pie result={result} profile={profile} />}
      </div>
    </main>
  );
}
