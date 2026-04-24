import { useState } from "react";
import "./ContadorDias.scss";

export default function ContadorDias() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular(e) {
    e.preventDefault();

    const d1 = new Date(data1);
    const d2 = new Date(data2);

    const diff = Math.abs(d2 - d1);

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(dias / 365);

    setResultado(`${anos} anos, ${meses} meses e ${dias} dias`);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>📅 Contador</h1>

        <form onSubmit={calcular}>
          <input
            type="date"
            value={data1}
            onChange={(e) => setData1(e.target.value)}
            required
          />

          <input
            type="date"
            value={data2}
            onChange={(e) => setData2(e.target.value)}
            required
          />

          <button type="submit">Calcular</button>
        </form>

        <div className="resultado">{resultado}</div>
      </div>
    </div>
  );
}