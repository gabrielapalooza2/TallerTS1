
import { series } from "./data.js";
import { Serie }  from "./models/Serie.js";

const tbody = document.getElementById("series-body") as HTMLTableSectionElement;
const avgEl = document.getElementById("avg-seasons") as HTMLParagraphElement;
const detailContainer = document.getElementById("series-detail") as HTMLDivElement;

function renderTable(lista: Serie[]): void {

  tbody.innerHTML = lista.map((s: Serie) => `
    <tr data-id="${s.id}" style="cursor:pointer">
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    </tr>
  `).join("");
}

function renderAverage(lista: Serie[]): void {
  const avg = lista.reduce((sum: number, s: Serie) => sum + s.seasons, 0) / (lista.length || 1);
  avgEl.textContent = `Promedio de temporadas: ${avg.toFixed(2)}`;
}

function renderDetail(s: Serie): void {

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

function wireRowClicks(): void {
 
  tbody.addEventListener("click", (ev) => {
    const tr = (ev.target as HTMLElement).closest("tr");
    if (!tr) return;
    const id = Number(tr.getAttribute("data-id"));
    const selected = series.find((x: Serie) => x.id === id);
    if (selected) renderDetail(selected);
  });
}


renderTable(series);
renderAverage(series);

if (series.length > 0) renderDetail(series[0]);
wireRowClicks();
