// Navbar
const checkbox = document.querySelector(".nav-mobile input");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const navToggle = document.querySelector(".nav-mobile");

checkbox.addEventListener("click", function () {
  navLinksMobile.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY === 0) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
});

document.addEventListener("click", function (e) {
  if (!navToggle.contains(e.target) && !navLinksMobile.contains(e.target)) {
    navLinksMobile.classList.remove("active");
    checkbox.checked = false;
  }
});

// Realita
const swiper = new Swiper(".realita-swiper", {
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const communityData = [
  {
    name: "Greenpeace Indonesia",
    action:
      "Kampanye lingkungan, edukasi, aksi kreatif tanpa kekerasan, dan advokasi isu lingkungan.",
    region:
      "12 kota besar (Jakarta, Bandung, Semarang, Yogyakarta, Malang, Surabaya, Bali, Padang, Pekanbaru, Pontianak, Jayapura, Sorong)",
    activities:
      "Relawan bisa ikut kampanye, edukasi ke sekolah, aksi lapangan, hingga membuat kampanye sendiri. Terbuka untuk semua usia, termasuk pelajar SMA.",
    instagram: "https://www.instagram.com/greenpeaceid/",
    image: "greenpeace-indonesia.png",
  },
  {
    name: "Greeneration Foundation",
    action:
      "Edukasi, kampanye, mentoring, dan aksi nyata pengelolaan sampah serta konsumsi ramah lingkungan.",
    region: "Nasional, terbuka untuk siapa saja.",
    activities:
      "Program mentoring, kampanye digital, aksi EcoRanger, Citarum Repair, Driving Refill Solution, dan relawan Greeneration Buddies yang terbuka untuk umum.",
    instagram: "https://www.instagram.com/greenerationid",
    image: "greeneration.png",
  },
  {
    name: "Lindungi Hutan",
    action: "Penanaman pohon dan kampanye penghijauan.",
    region:
      "Banyak kota di Indonesia, bisa ikut secara langsung atau donasi bibit.",
    activities:
      "Penanaman pohon bersama, edukasi, monitoring pohon, dan pemberdayaan petani bibit.",
    instagram: "https://www.instagram.com/lindungihutan/",
    image: "lindungi-hutan.png",
  },
  {
    name: "Indonesia Indah Foundation (IIF)",
    action: "Hari Bersih Indonesia, edukasi lingkungan, dan program relawan.",
    region: "Nasional.",
    activities:
      "Bersih-bersih sampah, edukasi di sekolah, dan kampanye perubahan perilaku ramah lingkungan.",
    instagram: "https://www.instagram.com/iifoundation/",
    image: "indonesia-indah-foundation.png",
  },
  {
    name: "EcoNusa",
    action: "Penanaman mangrove dan aksi pembersihan pantai.",
    region: "Jayapura, Papua.",
    activities:
      "Komunitas Pemuda Peduli Lingkungan Asri dan Bersih (Pepelingasih) Jayapura secara rutin mengadakan penanaman mangrove di pesisir serta aksi bersih-bersih pantai.",
    instagram: "https://www.instagram.com/econusa.id/",
    image: "econusa.png",
  },
];

// Function to generate cards dynamically
function generateCards() {
  const cardsContainer = document.getElementById("cards-container");

  communityData.forEach((community, index) => {
    const card = document.createElement("div");
    card.classList.add(
      "bg-[url(./assets/aksi-kampanye/" + community.image + ")]",
      "rounded-xl",
      "h-[400px]",
      "bg-cover",
      "bg-bottom",
      "flex",
      "justify-center",
      "items-end",
      "shadow-xl",
      "overflow-hidden",
      "group"
    );

    const cardBody = document.createElement("div");
    cardBody.classList.add(
      "card-body",
      "bg-white-400",
      "bg-clip-padding",
      "backdrop-filter",
      "backdrop-blur-sm",
      "bg-opacity-10",
      "p-5",
      "text-white",
      "w-full",
      "transition-all",
      "duration-500"
    );

    const title = document.createElement("h3");
    title.classList.add(
      "font-semibold",
      "text-xl",
      "group-hover:opacity-100",
      "opacity-100",
      "transition-opacity",
      "duration-300"
    );
    title.textContent = community.name;

    const description = document.createElement("p");
    description.classList.add(
      "text-light",
      "text-xs",
      "leading-relaxed",
      "mt-3",
      "lg:opacity-0",
      "lg:group-hover:opacity-100",
      "lg:transform",
      "lg:group-hover:translate-y-0",
      "transition-all",
      "duration-500",
      "lg:max-h-0",
      "lg:group-hover:max-h-40",
      "overflow-hidden"
    );
    description.textContent = community.action;

    const detailButton = document.createElement("button");
    detailButton.classList.add(
      "bg-blue-500",
      "text-white",
      "py-2",
      "px-4",
      "rounded",
      "mt-4",
      "hover:bg-blue-600",
      "transition-all"
    );
    detailButton.textContent = "Detail";
    detailButton.onclick = () => openModal(index);

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(detailButton);

    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  });
}

// Modal management functions
function openModal(index) {
  const modal = document.getElementById("modal");
  const data = communityData[index];

  document.getElementById("modal-title").innerText = data.name;
  document.getElementById("modal-action").innerText = `Aksi: ${data.action}`;
  document.getElementById("modal-region").innerText = `Wilayah: ${data.region}`;
  document.getElementById(
    "modal-activities"
  ).innerText = `Kegiatan: ${data.activities}`;
  document
    .getElementById("modal-redirect-btn")
    .setAttribute("href", data.instagram);

  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

// Call generateCards function on page load
generateCards();
