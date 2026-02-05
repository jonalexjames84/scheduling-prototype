import { Sidebar } from '@/components/dashboard/Sidebar';

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0f1629]">
      <Sidebar />
      <main className="flex-1 p-4 pt-16 pb-24 md:p-8 md:pt-8 md:pb-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
