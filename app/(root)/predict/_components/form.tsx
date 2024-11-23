
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Dispatch, SetStateAction} from "react";

export const backupSchema = z.object({
  name: z.string().min(2),
  pendapatan: z.string().min(1, 'cannot be empty').default('').refine((val) => !isNaN(Number(val)), { message: 'Invalid number' }),
  usia: z.string().min(1, 'cannot be empty').default('').refine((val) => !isNaN(Number(val)), { message: 'Invalid number' }),
  tanggungan: z.string().min(1, 'cannot be empty').default('').refine((val) => !isNaN(Number(val)), { message: 'Invalid number' }),
  pengeluaran: z.string().min(1, 'cannot be empty').default('').refine((val) => !isNaN(Number(val)), { message: 'Invalid number' }),
  aset: z.string().min(1, 'cannot be empty').default('').refine((val) => !isNaN(Number(val)), { message: 'Invalid number' }),
})

export const FormInput = ({setResult, setProfile}: { setResult: Dispatch<SetStateAction<undefined | number>>; setProfile: Dispatch<SetStateAction<undefined | { name: string }>> }) => {

  const form = useForm<z.infer<typeof backupSchema>>({
    resolver: zodResolver(backupSchema),
    defaultValues: {
      name: "",
      pendapatan: "",
      usia: "",
      tanggungan: "",
      pengeluaran: "",
      aset: "",
    },
  })

  async function onSubmit(values: z.infer<typeof backupSchema>) {
    const name = values.name
    const pendapatan: number = parseFloat(values.pendapatan)
    const usia: number = parseFloat(values.usia)
    const tanggungan: number = parseFloat(values.tanggungan)
    const pengeluaran: number = parseFloat(values.pengeluaran)
    const aset: number = parseFloat(values.aset)
    const data = { pendapatan, usia, tanggungan, pengeluaran, aset }

    await fetch(`${process.env.NEXT_PUBLIC_SERVER}/predict`, {method: "POST", headers: { 'Content-type': 'application/json' }, cache: 'no-cache', body: JSON.stringify(data)})
      .then(res => res.json())
      .then(data => {
        setProfile({ name })
        setResult(data.result)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-start items-stretch gap-4 max-w-xl">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel className="line-clamp-1">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />


        <h1 className="font-bold text-2xl mt-2">Your Personal Data</h1>
        <FormField
          control={form.control}
          name="pendapatan"
          render={({field}) => (
            <FormItem>
              <FormLabel className="line-clamp-1">Revenue (Pendapatan) in million/month (ex: 1, 2, ...)</FormLabel>
              <FormControl>
                <Input placeholder="Revenue (Pendapatan)" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <div className="md:grid md:grid-cols-2 flex flex-col justify-start items-stretch gap-4">
          <FormField
            control={form.control}
            name="usia"
            render={({field}) => (
              <FormItem>
                <FormLabel className="line-clamp-1">Age (usia) in year (ex: 1, 2, ...)</FormLabel>
                <FormControl>
                  <Input placeholder="Age (usia)" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tanggungan"
            render={({field}) => (
              <FormItem>
                <FormLabel className="line-clamp-1">Dependents (tanggungan) in individual (ex: 1, 2, ...)</FormLabel>
                <FormControl>
                  <Input placeholder="Dependents (tanggungan)" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pengeluaran"
            render={({field}) => (
              <FormItem>
                <FormLabel className="line-clamp-1">Outcome (pengeluaran) in million/month (ex: 1, 2, ...)</FormLabel>
                <FormControl>
                  <Input placeholder="Outcome (pengeluaran)" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="aset"
            render={({field}) => (
              <FormItem>
                <FormLabel className="line-clamp-1">Assets (aset) in million (ex: 1, 2, ...)</FormLabel>
                <FormControl>
                  <Input placeholder="Assets (aset)" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-8">Check</Button>
      </form>
    </Form>
  )
}