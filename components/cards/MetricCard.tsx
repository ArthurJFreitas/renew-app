export default function MetricCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  );
}
