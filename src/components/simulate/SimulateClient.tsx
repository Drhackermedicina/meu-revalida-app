"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { auth, db } from "@/lib/firebase";

interface SimulateClientProps {
  stationId: string;
}

export default function SimulateClient({ stationId }: SimulateClientProps) {
  // Tipando corretamente o estado
  const [data, setData] = useState<{ stationId: string } | null>(null);

  useEffect(() => {
    setData({ stationId });
  }, [stationId]);

  return (
    <div>
      <h1>Simulação para estação: {stationId}</h1>
      {/* Renderize o conteúdo real aqui */}
    </div>
  );
}
