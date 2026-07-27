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
  const chips = document.querySelectorAll(".filter-chip");
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