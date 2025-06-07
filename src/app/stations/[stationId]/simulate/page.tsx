import SimulateClient from "@/components/simulate/SimulateClient";
import { allStations } from "@/lib/station-data";

export async function generateStaticParams() {
  return allStations.map((station) => ({
    stationId: station.code,
  }));
}

interface SimulatePageProps {
  params: {
    stationId: string;
  };
}

export default function SimulatePage({ params }: SimulatePageProps) {
  return <SimulateClient stationId={params.stationId} />;
}