import {Card} from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {lusitana} from '@/app/ui/fonts';
import {invoices, revenue, customers} from '../lib/placeholder-data';
import {formatCurrency} from '../lib/utils';

export default async function Page() {
  const ultimasFacturas = customers.map((customer) => {
    const currentInvoice = invoices.find((invoice) => invoice.customer_id === customer.id);
    const amount = currentInvoice ? currentInvoice.amount : 3000;

    return {
      ...customer,
      amount: amount.toString(),
    };
  });

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={ultimasFacturas} />
      </div>
    </main>
  );
}
