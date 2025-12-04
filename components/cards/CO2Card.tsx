export default function CO2Card({ estimated = 0, trend = [] }: { estimated: number, trend: number[] }) {
  const latest = trend?.length ? trend[trend.length - 1] : 0;
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
      <div className="text-sm text-muted-foreground">CO₂ Recovery</div>
      <div className="mt-2">
        <div className="text-2xl font-bold">{latest} tons/year</div>
        <div className="text-sm">Estimated: {estimated} tons/year</div>
      </div>
    </div>
  );
}
