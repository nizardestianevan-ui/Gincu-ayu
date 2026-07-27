gsap.from("#navbar", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.remove("bg-transparent");

        navbar.classList.add(
            "bg-green-600/90",
            "backdrop-blur-md",
            "shadow-xl"
        );
    } else {
        navbar.classList.remove(
            "bg-green-600/90",
            "backdrop-blur-md",
            "shadow-xl"
        );

        navbar.classList.add("bg-transparent");
    }
});
gsap.from("#heroTitle", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#heroText", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.fromTo(
    "#heroBtn",
    {
        scale: 0.8,
        opacity: 0
    },
    {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)"
    }
);
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");

    gsap.to("#sidebar", {
        x: "0",
        duration: 0.4,
        ease: "power3.out"
    });
});

closeBtn.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
    gsap.to("#sidebar", {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
            overlay.classList.add("hidden");
        }
    });
}

const currentPage = window.location.pathname.split("/").pop();

const menuLinks = document.querySelectorAll("#sidebarMenu a");

menuLinks.forEach(link => {
    const href = link.getAttribute("href").split("/").pop();

    if (href === currentPage) {
        link.classList.add(
            "bg-amber-500",
            "text-white",
            "font-semibold",
            "rounded-xl"
        );
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const chips = dsocument.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".place-card");
 
  const activeClasses = ["bg-amber-500", "text-white"];
  const inactiveClasses = ["bg-slate-800", "text-green-100"];
 
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // reset semua chip ke kondisi tidak aktif
      chips.forEach((c) => {
        c.classList.remove(...activeClasses, "is-active");
        c.classList.add(...inactiveClasses);
      });
 
      // set chip yang diklik jadi aktif
      chip.classList.remove(...inactiveClasses);
      chip.classList.add(...activeClasses, "is-active");
 
      const filter = chip.dataset.filter;
 
      cards.forEach((card) => {
        const tag = card.dataset.tag;
        const match = filter === "Semua" || tag === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");
 
  let currentIndex = 0;
  const totalSlides = slides.length;
  const AUTO_DELAY = 5000; // 5 detik
  let autoTimer = null;
 
  function goToSlide(index) {
    // pastikan index selalu dalam batas 0 - (totalSlides - 1)
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
 
    currentIndex = index;
 
    // geser track ke kiri/kanan sesuai index slide aktif
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
 
    updateDots();
  }
 
  function startAutoSlide() {
    autoTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, AUTO_DELAY);
  }
 
  function resetAutoSlide() {
    clearInterval(autoTimer);
    startAutoSlide();
  }
 
  function updateDots() {
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.remove("bg-white/40");
        dot.classList.add("bg-amber-400");
      } else {
        dot.classList.remove("bg-amber-400");
        dot.classList.add("bg-white/40");
      }
    });
  }
 
  // tombol kanan -> slide berikutnya
  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    resetAutoSlide();
  });
 
  // tombol kiri -> slide sebelumnya
  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    resetAutoSlide();
  });
 
  // klik langsung ke titik indikator
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.dataset.index, 10));
      resetAutoSlide();
    });
  });
 
  // navigasi pakai tombol keyboard kiri/kanan
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      goToSlide(currentIndex + 1);
      resetAutoSlide();
    }
    if (e.key === "ArrowLeft") {
      goToSlide(currentIndex - 1);
      resetAutoSlide();
    }
  });
 
  // dukungan geser (swipe) di layar sentuh
  let touchStartX = 0;
 
  track.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });
 
  track.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
 
    if (diff > 50) {
      goToSlide(currentIndex + 1); // geser ke kiri -> slide berikutnya
      resetAutoSlide();
    }
    if (diff < -50) {
      goToSlide(currentIndex - 1); // geser ke kanan -> slide sebelumnya
      resetAutoSlide();
    }
  });
 
  // inisialisasi tampilan awal + mulai auto-slide
  goToSlide(0);
  startAutoSlide();
});
 


const filterButtons = document.querySelectorAll(".filter-chip");
const placeCards = document.querySelectorAll(".place-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => {
            btn.classList.remove("bg-amber-500", "text-white", "font-semibold");

            btn.classList.add("bg-slate-800", "text-green-100");
        });

        button.classList.remove("bg-slate-800", "text-green-100");

        button.classList.add("bg-amber-500", "text-white", "font-semibold");

        const filter = button.dataset.filter;

        placeCards.forEach(card => {
            if (filter === "Semua" || card.dataset.tag === filter) {
                card.classList.remove("hidden");

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    }
                );
            } else {
                card.classList.add("hidden");
            }
        });
    });
});