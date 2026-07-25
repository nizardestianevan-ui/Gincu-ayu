(function(){

  const DATA = [
    {id:1, nama:"Pantai Kelingking", pulau:"Bali", kategori:"Pantai", budget:"sedang", durasi:"singkat", rating:4.9, deskripsi:"Tebing kapur menjorok ke laut biru toska dengan pasir putih tersembunyi di baliknya."},
    {id:2, nama:"Gunung Bromo", pulau:"Jawa", kategori:"Gunung", budget:"sedang", durasi:"singkat", rating:4.8, deskripsi:"Lautan pasir dan kawah aktif dengan pemandangan matahari terbit paling ikonik di Jawa."},
    {id:3, nama:"Candi Borobudur", pulau:"Jawa", kategori:"Budaya", budget:"hemat", durasi:"singkat", rating:4.9, deskripsi:"Candi Buddha terbesar di dunia, penuh relief batu berusia lebih dari seribu tahun."},
    {id:4, nama:"Danau Toba", pulau:"Sumatra", kategori:"Alam", budget:"sedang", durasi:"sedang", rating:4.7, deskripsi:"Danau vulkanik terbesar di Asia Tenggara dengan Pulau Samosir di tengahnya."},
    {id:5, nama:"Raja Ampat", pulau:"Papua", kategori:"Pantai", budget:"mewah", durasi:"panjang", rating:5.0, deskripsi:"Gugusan karst hijau di laut jernih dengan biodiversitas bawah laut terkaya di dunia."},
    {id:6, nama:"Malioboro & Kraton", pulau:"Jawa", kategori:"Budaya", budget:"hemat", durasi:"singkat", rating:4.5, deskripsi:"Jalan legendaris Yogyakarta dengan kuliner kaki lima dan istana kesultanan yang hidup."},
    {id:7, nama:"Kawah Ijen", pulau:"Jawa", kategori:"Gunung", budget:"sedang", durasi:"singkat", rating:4.7, deskripsi:"Api biru langka yang hanya terlihat dini hari di bibir kawah berbelerang."},
    {id:8, nama:"Gili Trawangan", pulau:"Nusa Tenggara", kategori:"Pantai", budget:"sedang", durasi:"sedang", rating:4.6, deskripsi:"Pulau kecil tanpa kendaraan bermotor dengan air laut jernih dan penyu liar."},
    {id:9, nama:"Taman Nasional Komodo", pulau:"Nusa Tenggara", kategori:"Alam", budget:"mewah", durasi:"sedang", rating:4.9, deskripsi:"Rumah komodo liar dan Pink Beach dengan trekking bukit sabana yang dramatis."},
    {id:10, nama:"Bukittinggi & Jam Gadang", pulau:"Sumatra", kategori:"Budaya", budget:"hemat", durasi:"singkat", rating:4.4, deskripsi:"Kota berhawa sejuk dengan menara jam ikonik dan ngarai Sianok yang hijau."},
    {id:11, nama:"Wisata Kuliner Bandung", pulau:"Jawa", kategori:"Kuliner", budget:"hemat", durasi:"singkat", rating:4.6, deskripsi:"Surga jajanan dari seblak hingga kopi kekinian di tengah udara pegunungan."},
    {id:12, nama:"Toraja", pulau:"Sulawesi", kategori:"Budaya", budget:"sedang", durasi:"sedang", rating:4.8, deskripsi:"Rumah adat Tongkonan dan upacara pemakaman adat yang jadi warisan budaya dunia."},
    {id:13, nama:"Derawan", pulau:"Kalimantan", kategori:"Pantai", budget:"mewah", durasi:"sedang", rating:4.8, deskripsi:"Kepulauan terpencil dengan danau ubur-ubur tanpa sengat dan penyu hijau."},
    {id:14, nama:"Air Terjun Sipiso-piso", pulau:"Sumatra", kategori:"Alam", budget:"hemat", durasi:"singkat", rating:4.5, deskripsi:"Air terjun setinggi 120 meter yang jatuh langsung ke lembah Danau Toba."},
    {id:15, nama:"Kuliner Malam Makassar", pulau:"Sulawesi", kategori:"Kuliner", budget:"hemat", durasi:"singkat", rating:4.5, deskripsi:"Pantai Losari dengan deretan pisang epe dan seafood bakar segar tiap malam."},
    {id:16, nama:"Kepulauan Wakatobi", pulau:"Sulawesi", kategori:"Pantai", budget:"mewah", durasi:"panjang", rating:4.9, deskripsi:"Salah satu titik selam terbaik dunia dengan terumbu karang nyaris sempurna."},
    {id:17, nama:"Ubud", pulau:"Bali", kategori:"Budaya", budget:"sedang", durasi:"sedang", rating:4.7, deskripsi:"Pusat seni dan yoga Bali, dikelilingi sawah berundak dan hutan monyet suci."},
    {id:18, nama:"Gunung Rinjani", pulau:"Nusa Tenggara", kategori:"Gunung", budget:"hemat", durasi:"panjang", rating:4.8, deskripsi:"Trekking multi-hari ke danau kawah Segara Anak dengan puncak tertinggi kedua Indonesia."}
  ];

  const ICONS = {
    "Pantai": '<circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4"/><path d="M12 34 Q 20 26 28 34 T 44 34" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 40 Q 20 32 28 40 T 44 40" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="34" cy="18" r="4" fill="currentColor"/>',
    "Gunung": '<circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4"/><path d="M14 38 L24 20 L30 30 L34 24 L42 38 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="24" cy="20" r="1.6" fill="currentColor"/>',
    "Budaya": '<circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4"/><path d="M16 40 V26 L28 16 L40 26 V40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><line x1="13" y1="40" x2="43" y2="40" stroke="currentColor" stroke-width="1.6"/>',
    "Alam": '<circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4"/><path d="M28 40 V22" stroke="currentColor" stroke-width="1.6"/><path d="M28 22 Q 20 22 20 30" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M28 28 Q 36 28 36 36" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    "Kuliner": '<circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4"/><path d="M20 16 V26 M24 16 V26 M20 26 Q20 30 22 30 V42 M24 26 Q24 30 22 30" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M36 16 C 32 20 32 26 36 30 V42" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/>'
  };

  const grid = document.getElementById('grid');
  const resultCount = document.getElementById('result-count');
  const selPulau = document.getElementById('f-pulau');
  const selKategori = document.getElementById('f-kategori');
  const selBudget = document.getElementById('f-budget');
  const selDurasi = document.getElementById('f-durasi');

  function uniqueSorted(arr, key){
    return [...new Set(arr.map(d => d[key]))].sort();
  }

  function populateSelect(select, values){
    values.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v;
      opt.className = 'bg-ink text-paper';
      select.appendChild(opt);
    });
  }

  populateSelect(selPulau, uniqueSorted(DATA, 'pulau'));
  populateSelect(selKategori, uniqueSorted(DATA, 'kategori'));

  const budgetLabel = {hemat:"Hemat", sedang:"Sedang", mewah:"Mewah"};
  const durasiLabel = {singkat:"1–2 hari", sedang:"3–5 hari", panjang:"6+ hari"};

  function calcMatch(item, f){
    let total = 0, matched = 0;
    if(f.pulau !== 'semua'){ total++; if(item.pulau === f.pulau) matched++; }
    if(f.kategori !== 'semua'){ total++; if(item.kategori === f.kategori) matched++; }
    if(f.budget !== 'semua'){ total++; if(item.budget === f.budget) matched++; }
    if(f.durasi !== 'semua'){ total++; if(item.durasi === f.durasi) matched++; }
    if(total === 0) return 100;
    return Math.round((matched/total) * 100);
  }

  function render(){
    const f = {
      pulau: selPulau.value,
      kategori: selKategori.value,
      budget: selBudget.value,
      durasi: selDurasi.value
    };

    const anyFilterActive = Object.values(f).some(v => v !== 'semua');

    let items = DATA.map(item => ({...item, match: calcMatch(item, f)}));

    if(anyFilterActive){
      items = items.filter(item => item.match > 0);
    }

    items.sort((a,b) => (b.match - a.match) || (b.rating - a.rating));

    grid.innerHTML = '';

    if(items.length === 0){
      grid.innerHTML = `
        <div class="md:col-span-2 lg:col-span-3 text-center py-16 px-5 border border-dashed border-line rounded-xl text-paperdim">
          <h4 class="font-display text-2xl text-paper mb-2.5">Belum ada yang cocok persis</h4>
          <p>Coba longgarkan salah satu kriteria, misalnya bujet atau durasi.</p>
        </div>`;
      resultCount.textContent = '0 destinasi ditemukan';
      return;
    }

    resultCount.textContent = items.length + ' destinasi ditemukan';

    items.forEach((item, idx) => {
      const isBest = anyFilterActive && idx < 3 && item.match >= 50;

      const card = document.createElement('div');
      card.className = 'relative flex flex-col gap-3.5 rounded-xl border p-5 transition-all duration-200 hover:-translate-y-1 ' +
        (isBest ? 'border-gold bg-gradient-to-br from-white/5 to-white/[0.015]' : 'border-line bg-gradient-to-br from-white/5 to-white/[0.015] hover:border-golddim');

      card.innerHTML = `
        ${isBest ? '<div class="absolute -top-2.5 right-4 bg-gold text-ink font-mono text-[0.62rem] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full">Pilihan Terbaik</div>' : ''}
        <div class="flex justify-between items-start gap-2.5">
          <div class="w-14 h-14 rounded-full border-[1.5px] border-dashed border-jade text-jade flex items-center justify-center shrink-0">
            <svg width="42" height="42" viewBox="0 0 56 56">${ICONS[item.kategori] || ICONS['Alam']}</svg>
          </div>
          <div class="text-right">
            <h4 class="font-display font-semibold text-xl">${item.nama}</h4>
            <div class="font-mono text-xs text-paperdim uppercase tracking-wide mt-0.5">${item.pulau}</div>
          </div>
        </div>
        <p class="text-paperdim text-sm flex-grow">${item.deskripsi}</p>
        <div class="flex flex-wrap gap-2">
          <span class="font-mono text-[0.68rem] uppercase tracking-wide border border-line px-2.5 py-1 rounded-full text-paperdim">${item.kategori}</span>
          <span class="font-mono text-[0.68rem] uppercase tracking-wide border border-line px-2.5 py-1 rounded-full text-paperdim">${budgetLabel[item.budget]}</span>
          <span class="font-mono text-[0.68rem] uppercase tracking-wide border border-line px-2.5 py-1 rounded-full text-paperdim">${durasiLabel[item.durasi]}</span>
        </div>
        <div class="flex justify-between items-center border-t border-dashed border-line pt-3.5 mt-1">
          <div class="font-mono text-sm text-gold flex items-center gap-1">★ ${item.rating.toFixed(1)}</div>
          ${anyFilterActive ? `
          <div class="flex items-center gap-2">
            <div class="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-jade" style="width:${item.match}%"></div>
            </div>
            <span class="font-mono text-[0.68rem] text-paperdim">${item.match}% cocok</span>
          </div>` : ''}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  document.getElementById('btn-match').addEventListener('click', render);
  document.getElementById('btn-reset').addEventListener('click', () => {
    selPulau.value = 'semua';
    selKategori.value = 'semua';
    selBudget.value = 'semua';
    selDurasi.vssalue = 'semua';
    render();
  });

  [selPulau, selKategori, selBudget, selDurasi].forEach(s => s.addEventListener('change', render));

  render();
})();