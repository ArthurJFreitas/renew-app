
type BirdSpeciesCardProps = {
  species: {
    name: string;
    population: number;
  }[]
}

export default function BirdSpeciesCard({ species = [] }: BirdSpeciesCardProps) {
  const totalSpecies = species.length;
  const totalIndividuals = species.reduce((acc, s) => acc + (s.population || 0), 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
      <div className="text-sm text-muted-foreground">Bird species</div>
      <div className="mt-2">
        <div className="font-semibold">{totalSpecies} species</div>
        <div className="text-sm">Individuals: {totalIndividuals}</div>
      </div>

      <ul className="mt-3 space-y-1 text-sm">
        {species.slice(0, 6).map((s, i) => (
          <li key={i} className="flex justify-between">
            <span>{s.name}</span>
            <span className="font-medium">{s.population}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
