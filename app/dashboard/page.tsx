import SiteList from "@/features/sites/components/SiteList";
import Header from "@/components/Header";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <SiteList />
      </main>
    </>
  );
}
