
import { series } from "./data.js";
import { Serie }  from "./models/Serie.js";

console.log("Series cargadas:", series.length);

const tbody = document.getElementById("series-body") as HTMLTableSectionElement | null;
const avgEl = document.getElementById("avg-seasons") as HTMLParagraphElement | null;

if (!tbody) {
  console.error("No se encontró <tbody id='series-body'> en el HTML");
} else {
  tbody.innerHTML = series.map((s: Serie) => `
    <tr>
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    </tr>
  `).join("");

  const avg = series.reduce((sum: number, s: Serie) => sum + s.seasons, 0) / (series.length || 1);
  if (avgEl) avgEl.textContent = `Promedio de temporadas: ${avg.toFixed(2)}`;
}
