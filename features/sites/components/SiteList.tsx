"use client";
import { useSites } from "../hooks/useSites";
import SiteCard from "@/components/cards/SiteCard";

type Species = {
  name: string;
  population: number;
}

export type Site = {
  id: string;
  name: string;
  location: string;
  biodiversity_score: number;
  soil_quality: number;
  biodiversity_trend: { year: number; value: number }[];
  vegetation_index: { month: string; value: number }[];
  soil_moisture: { month: string; moisture: number }[];
  species: { name: string; population: number; trend: number }[];
  co2_recovery: { year: number; value: number }[];
  co2_estimated: number;
  endangered_species: number;
  map_url: string;
};


export default function SiteList() {
  const { sites, loading } = useSites();

  if (loading) return <p>Loading sites...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sites:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sites.map((s: Site) => (
          <SiteCard key={s.id} site={s} />
        ))}
      </div>
    </div>

  );
}
