import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import {cn} from "@/lib/utils";

export const Pie = ({ result, profile }: { result: undefined | number; profile: undefined | { name: string } }) => {
  const data = {
    datasets: [
      {
        data: [result, 100 - result!],
        backgroundColor: [
          'rgba(67,67,67,0.2)',
          'rgba(174,174,174,0.2)',
        ],
        borderColor: [
          'rgba(174,174,174,0.2)',
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <div className="w-52">
        <Doughnut data={data}/>
      </div>
      <p className="text-lg">Dear <span className="font-bold">{profile?.name}</span>, you have <span className={cn("font-bold", result! >= 50 ? "text-green-300" : "text-red-300")}>{result}%</span> possibility to get loan</p>
    </main>
  )
}