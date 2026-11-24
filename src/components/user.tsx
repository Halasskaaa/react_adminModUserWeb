import type { Szorny } from "../types/monsterType";

interface SzornyProps {
    szorny: Szorny[];
}

export function UserSzornyLista({ szorny }: SzornyProps) {
    <div>
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Szint (1-10)</th>
                    <th>Max. HP (15-100)</th>
                    <th>Barátságos-e</th>
                    <th>Veszélyességi szintje</th>
                    <th>Kreálás ideje</th>
                </tr>
            </thead>
            <tbody>
                {szorny.map((szornyek) => (
                    <tr>
                        <td>{szornyek.nev}</td>
                        <td>{szornyek.szint}</td>
                        <td>{szornyek.maxHp}</td>
                        <td>{szornyek.baratsagosE ? "Barátságos" : "Nem barátságos"}</td>
                        <td>{szornyek.veszSzint}</td>
                        <td>{szornyek.krealasiIdo.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}