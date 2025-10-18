import { series } from "./data.js";
console.log("Series cargadas:", series.length);
const tbody = document.getElementById("series-body");
const avgEl = document.getElementById("avg-seasons");
if (!tbody) {
    console.error("No se encontró <tbody id='series-body'> en el HTML");
}
else {
    tbody.innerHTML = series.map((s) => `
    <tr>
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    </tr>
  `).join("");
    const avg = series.reduce((sum, s) => sum + s.seasons, 0) / (series.length || 1);
    if (avgEl)
        avgEl.textContent = `Promedio de temporadas: ${avg.toFixed(2)}`;
}
