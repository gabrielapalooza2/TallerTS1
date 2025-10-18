import { series } from "./data.js";
const tbody = document.getElementById("series-body");
const avgEl = document.getElementById("avg-seasons");
const detailContainer = document.getElementById("series-detail");
function renderTable(lista) {
    tbody.innerHTML = lista.map((s) => `
    <tr data-id="${s.id}" style="cursor:pointer">
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    </tr>
  `).join("");
}
function renderAverage(lista) {
    const avg = lista.reduce((sum, s) => sum + s.seasons, 0) / (lista.length || 1);
    avgEl.textContent = `Promedio de temporadas: ${avg.toFixed(2)}`;
}
function renderDetail(s) {
    detailContainer.innerHTML = `
    <div class="card shadow-sm">
      <img src="${s.imageUrl}" class="card-img-top" alt="${s.name}">
      <div class="card-body">
        <h5 class="card-title">${s.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${s.channel} • ${s.seasons} seasons</h6>
        <p class="card-text" style="text-align:justify">${s.description}</p>
        <a class="card-link" href="${s.website}" target="_blank" rel="noopener">Sitio oficial</a>
      </div>
    </div>
  `;
}
function wireRowClicks() {
    tbody.addEventListener("click", (ev) => {
        const tr = ev.target.closest("tr");
        if (!tr)
            return;
        const id = Number(tr.getAttribute("data-id"));
        const selected = series.find((x) => x.id === id);
        if (selected)
            renderDetail(selected);
    });
}
renderTable(series);
renderAverage(series);
if (series.length > 0)
    renderDetail(series[0]);
wireRowClicks();
