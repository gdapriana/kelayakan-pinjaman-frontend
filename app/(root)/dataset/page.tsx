import { Dataset } from "@/lib/utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
  const dataset: Dataset = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/dataset`)
    .then((response: Response) => response.json())
    .then((dataset) => dataset);

  return (
    <main className="w-full md:h-full flex flex-col justify-start md:justify-center md:items-center items-stretch md:flex-row">
      <div className="h-full gap-8 w-full flex flex-col justify-start items-center p-4">
        <header>
          <h1 className="font-extrabold text-3xl">Dataset</h1>
        </header>

        <Table>
          <TableCaption>List of dataset total {dataset.total} data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Pendapatan</TableHead>
              <TableHead>Usia</TableHead>
              <TableHead>Tanggungan</TableHead>
              <TableHead>Pengeluaran</TableHead>
              <TableHead>Aset</TableHead>
              <TableHead>Kelayakan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataset.dataset.map((data, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Badge variant="secondary">{data["pendapatan (jt/bln)"]}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{data["usia (tahun)"]}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{data["tanggungan (orang)"]}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{data["pengeluaran (jt/bln)"]}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{data["aset (juta)"]}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">{data.kelayakan}</Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
