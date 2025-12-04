import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // if using shadcn, or use divs
import { Site } from "@/features/sites/components/SiteList";

type SiteCardProps = {
  site: Site
}

export default function SiteCard({ site }: SiteCardProps) {
  return (
    <Link href={`/dashboard/${site.id}`}>
      <Card className="bg-white border border-gray-600 p-4 rounded-xl shadow hover:border-gray-400 transition cursor-pointer">
        <CardHeader className="text-lg font-semibold">{site.name}</CardHeader>
        <CardContent className="text-sm">
          <div>Location: {site.location}</div>  
          <div>Biodiversity: {site.biodiversity_score}</div>
          <div>Soil: {site.soil_quality}</div>
        </CardContent>
      </Card>
    </Link>
  );
}
