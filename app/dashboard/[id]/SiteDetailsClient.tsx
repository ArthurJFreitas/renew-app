"use client"; 

import { useSiteDetails } from "@/features/sites/hooks/useSites";
import MetricCard from "@/components/cards/MetricCard";
import BirdSpeciesCard from "@/components/cards/BirdSpeciesCard"; 
import CO2Card from "@/components/cards/CO2Card";
import VegetationChart from "@/components/charts/VegetationChart";
import CO2Chart from "@/components/charts/CO2Chart";
import SoilMoistureChart from "@/components/charts/SoilMoistureChart";
import Header from "@/components/Header";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SiteDetails({id}: { id: string }) {
  const { site, loading } = useSiteDetails(id);

  if (loading) return <p>Loading...</p>;
  if (!site) return <p>Site not found</p>;

  return (
    <>
      <Header />
      <main className="p-8 space-y-8">
       <Link href="/dashboard" className="text-sm font-bold underline flex items-center gap-1">
         <ArrowLeft className="inline-block" /> Back to Dashboard 
       </Link>
      <h1 className="text-2xl font-bold">{site.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Biodiversity" value={site.biodiversity_score} />
        <MetricCard title="Soil Quality" value={site.soil_quality} />
        <MetricCard title="Endangered Species" value={site.endangered_species} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BirdSpeciesCard species={site.species ?? []} />
        <CO2Card estimated={site.co2_estimated} trend={site.co2_recovery.map(item => item.value)} />
        <div className="bg-white p-4 rounded-xl shadow border border-gray-600 hover:border-gray-400 transition">
          <h3 className="text-sm text-muted-foreground">Site Picture</h3>
          <div className="mt-2">
            <Image src={site.map_url} alt={`${site.name} Map`} width={400} height={300} className="rounded-md" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VegetationChart data={site.vegetation_index} />
        <CO2Chart data={site.co2_recovery}/>
        <SoilMoistureChart data={site.soil_moisture} />
      </div>
    </main>
    </>
  );
}
