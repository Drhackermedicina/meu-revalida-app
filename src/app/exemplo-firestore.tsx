// ...exemplo de uso...
import { db, auth } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function ExemploFirestore() {
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "minhaColecao"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
    fetchData();
  }, []);

  return <div>Veja o console para os dados do Firestore!</div>;
}
