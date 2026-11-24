import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Szorny } from "./types/monsterType";
import { UserSzornyLista } from "./components/user";

function App() {
  const [menu, setMenu] = useState("index");
  const [szornyek, setSzorny] = useState<Szorny[]>([]);

  useEffect(() => {
    async function fetchSzornyek() {
      try {
        const response = await fetch("http://localhost:3000/szornyek");
        const data: Szorny[] = await response.json();
        setSzorny(data)
      } catch (error) {
        console.log("Hiba történt: " + error.message);
      }
    }
    fetchSzornyek();
  }, [])

  return (
    <>
      <UserSzornyLista szorny={szornyek}></UserSzornyLista>
    </>
  )
}

export default App
