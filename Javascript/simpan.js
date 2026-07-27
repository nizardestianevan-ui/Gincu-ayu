// Javascript/simpan.js
// Fitur simpan tempat dari halaman Rekomendasi, lalu ditampilkan di halaman Tersimpan.
// Data disimpan di localStorage (browser) dengan key "savedPlaces".
// Terpisah dari main.js dan rekomendasi.js supaya tidak menimpa logika lain.

const STORAGE_KEY = "savedPlaces";

// ---------- helper localStorage ----------
function getSavedPlaces() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function setSavedPlaces(places) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(places));
}

function isSaved(id) {
  return getSavedPlaces().some((p) => p.id === id);
}

function addSavedPlace(place) {
  const places = getSavedPlaces();
  if (!places.some((p) => p.id === place.id)) {
    places.push(place);
    setSavedPlaces(places);
  }
}

function removeSavedPlace(id) {
  const places = getSavedPlaces().filter((p) => p.id !== id);
  setSavedPlaces(places);
}

// ---------- bagian untuk halaman REKOMENDASI (tombol simpan di tiap kartu) ----------
function initSaveButtons() {
  const saveButtons = document.querySelectorAll(".save-btn");
  if (saveButtons.length === 0) return; // bukan halaman Rekomendasi, lewati

  saveButtons.forEach((btn) => {
    const id = btn.dataset.id;

    // set tampilan awal sesuai status tersimpan
    updateSaveButtonUI(btn, isSaved(id));

    btn.addEventListener("click", () => {
      const place = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        tag: btn.dataset.tag,
        loc: btn.dataset.loc,
        desc: btn.dataset.desc,
        rating: btn.dataset.rating,
        query: btn.dataset.query,
      };

      if (isSaved(place.id)) {
        removeSavedPlace(place.id);
        updateSaveButtonUI(btn, false);
      } else {
        addSavedPlace(place);
        updateSaveButtonUI(btn, true);
      }
    });
  });
}

function updateSaveButtonUI(btn, saved) {
  if (saved) {
    btn.textContent = "♥";
    btn.classList.add("bg-amber-500");
    btn.classList.remove("bg-white/10");
  } else {
    btn.textContent = "♡";
    btn.classList.remove("bg-amber-500");
    btn.classList.add("bg-white/10");
  }
}

// ---------- bagian untuk halaman TERSIMPAN (render daftar tempat) ----------
function renderSavedGrid() {
  const grid = document.getElementById("savedGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return; // bukan halaman Tersimpan, lewati

  const places = getSavedPlaces();

  if (places.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = places
    .map(
      (p) => `
    <article class="place-card bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:border-amber-400/40">
      <iframe
        class="w-full h-[210px] border-0 block"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=${p.query}&output=embed"
      ></iframe>
      <div class="p-6">
        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="font-bold text-lg text-white">${p.name}</h3>
          <span class="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 whitespace-nowrap">${p.tag}</span>
        </div>
        <div class="flex items-center gap-1.5 text-xs text-green-300 mb-3">📍 ${p.loc}</div>
        <p class="text-sm leading-relaxed text-green-100/80 mb-4">${p.desc}</p>
        <div class="flex items-center justify-between gap-3">
          <div class="text-sm font-semibold text-amber-300 flex items-center gap-1">
            <span class="text-amber-400">★</span> ${p.rating}
          </div>
          <div class="flex items-center gap-2">
            <button
              class="remove-btn text-sm font-semibold text-red-300 hover:text-white hover:bg-red-500/80 px-3 py-2 rounded-lg transition"
              data-id="${p.id}"
            >
              Hapus
            </button>
            <a
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
              href="https://www.google.com/maps?q=${p.query}"
              target="_blank"
              rel="noopener"
              >Buka di Maps →</a
            >
          </div>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  // pasang event listener tombol hapus setelah kartu dirender
  grid.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeSavedPlace(btn.dataset.id);
      renderSavedGrid(); // render ulang setelah dihapus
    });
  });
}

// ---------- jalankan sesuai halaman yang aktif ----------
document.addEventListener("DOMContentLoaded", () => {
  initSaveButtons(); // aktif kalau ada .save-btn (halaman Rekomendasi)
  renderSavedGrid(); // aktif kalau ada #savedGrid (halaman Tersimpan)
});