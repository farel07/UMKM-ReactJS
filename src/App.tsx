import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { DetailPage } from "./components/DetailPage";
import { umkmData } from "./data/umkmData";

export default function App() {
  const [selectedUMKMId, setSelectedUMKMId] = useState<number | null>(null);

  const selectedUMKM = selectedUMKMId
    ? umkmData.find((umkm) => umkm.id === selectedUMKMId)
    : null;

  if (selectedUMKM) {
    return (
      <DetailPage
        umkm={selectedUMKM}
        onBack={() => setSelectedUMKMId(null)}
      />
    );
  }

  return <HomePage onDetailClick={setSelectedUMKMId} />;
}
