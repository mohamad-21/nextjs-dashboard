import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Customers",
};


export default async function Page({searchParams}: {
  searchParams?: {
    q?: string
  }
}) {
  const query = searchParams?.q || '';
  const customers = await fetchFilteredCustomers(query);

  return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CustomersTable customers={customers} />
			</div>
		</div>
	);
}
