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

    const descriptionRow = document.createElement("div");
    descriptionRow.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "gap-4",
      "lg:opacity-0",
      "lg:group-hover:opacity-100",
      "lg:transform",
      "lg:-translate-y-2",
      "lg:group-hover:translate-y-0",
      "transition-all",
      "duration-500",
      "lg:max-h-0",
      "lg:group-hover:max-h-20",
      "overflow-hidden",
      "mt-3"
    );

    // Description Text
    const description = document.createElement("p");
    description.classList.add(
      "text-light",
      "text-xs",
      "leading-relaxed",
      "flex-1"
    );
    description.textContent = community.action;

    // Button
    const detailButton = document.createElement("button");
    detailButton.classList.add(
      "bg-[#F09319]",
      "text-white",
      "rounded-full",
      "w-8",
      "h-8",
      "flex",
      "items-center",
      "justify-center",
      "hover:bg-[#FFB900]",
      "transition-all",
      "cursor-pointer"
    );
    detailButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7l-10 10m0-10h10v10" /></svg>`;
    detailButton.onclick = () => openModal(index);

    // Assemble
    descriptionRow.appendChild(description);
    descriptionRow.appendChild(detailButton);

    cardBody.appendChild(title);
    cardBody.appendChild(descriptionRow);

    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  });
}

// Modal management functions
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalTitle = document.getElementById("modal-title");
  const data = communityData[index];

  if (!modal || !modalContent || !modalTitle) {
    console.error("Modal elements not found");
    return;
  }

  // Set the title
  modalTitle.textContent = data.name;

  // Create grid layout container
  const contentContainer = document.createElement("div");
  contentContainer.className = "grid grid-cols-1 lg:grid-cols-2 gap-4";

  // Left column for actions (spans 3 rows)
  const actionColumn = document.createElement("div");
  actionColumn.className = "lg:row-span-3 bg-white/50 rounded-lg p-4";
  const actions = data.action
    .split(",")
    .map(
      (action) =>
        `<span class="block text-sm bg-[#D7CCAE] text-[#2A2019] capitalize rounded-md p-4 m-1">${action.trim()}</span>`
    )
    .join("");
  actionColumn.innerHTML = `<div class="mx-1 font-semibold mb-2 text-[#22412E]">Aksi</div>${actions}`;

  // Right column top for region
  const regionColumn = document.createElement("div");
  regionColumn.className = "bg-white/50 rounded-lg p-4";
  const regions = data.region
    .split(",")
    .map(
      (region) =>
        `<span class="inline-block text-sm border-[#2A2019] border-1 text-[#2A2019] px-2 py-1 rounded-md m-1">${region.trim()}</span>`
    )
    .join("");
  regionColumn.innerHTML = `<div class="mx-1 font-semibold mb-2 text-[#22412E]">Wilayah</div>${regions}`;

  // Right column middle for activities
  const activitiesColumn = document.createElement("div");
  activitiesColumn.className = "bg-white/50 rounded-lg p-4";
  const activities = data.activities
    .split(",")
    .map(
      (activity) =>
        `<span class="inline-block text-sm border-[#2A2019] border-1 text-[#2A2019] px-2 py-1 rounded-md m-1">${activity.trim()}</span>`
    )
    .join("");
  activitiesColumn.innerHTML = `<div class="font-semibold mb-2 text-[#22412E]">Kegiatan</div>${activities}`;

  // Right column bottom for Instagram link
  const instagramColumn = document.createElement("div");
  instagramColumn.className =
    "bg-white/50 rounded-lg p-4 flex flex-col items-start justify-between";
  instagramColumn.innerHTML = `
    <div class="font-semibold text-[#22412E]">Kunjungi Instagram:</div>
    <div class="flex flex-col gap-4 items-start mt-2">
      <p class="text-xs">${data.instagram}</p>
      <a href="${data.instagram}" target="_blank" class="text-white p-2 rounded transition-all items-center gap-2 block" style="background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
          <path d="M16.5 7.5v.01"/>
        </svg>
      </a>
    </div>
  `;

  // Clear previous content and assemble
  modalContent.innerHTML = "";
  contentContainer.appendChild(actionColumn);
  contentContainer.appendChild(regionColumn);
  contentContainer.appendChild(activitiesColumn);
  contentContainer.appendChild(instagramColumn);
  modalContent.appendChild(contentContainer);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Call generateCards function on page load
generateCards();
