const showcaseImages = [
  "20260523_133512.jpg",
  "20260523_133515.jpg",
  "20260523_133520.jpg",
  "20260523_133522.jpg",
  "20260523_133526.jpg",
  "20260523_133528.jpg",
  "20260523_133533.jpg",
  "20260523_133536.jpg",
  "20260523_133543.jpg",
  "20260523_133548.jpg",
  "20260523_133551.jpg",
  "20260523_133601.jpg",
  "20260523_133618.jpg",
  "20260523_133628.jpg",
  "20260523_133634.jpg",
  "20260523_133639.jpg",
  "20260523_133642.jpg",
  "20260523_133649.jpg",
  "20260523_133658.jpg",
  "20260523_133702.jpg",
  "20260523_133704.jpg",
  "20260523_133712.jpg",
  "20260523_133717.jpg",
  "20260523_133733.jpg",
  "20260523_133742.jpg",
  "20260523_133748.jpg",
  "20260523_133755.jpg",
  "20260523_133807.jpg",
  "20260523_133810.jpg",
  "20260523_133813.jpg",
  "20260523_133815.jpg",
  "20260523_133817.jpg",
  "20260523_133819.jpg",
  "20260523_133821.jpg",
  "20260523_133823.jpg",
  "20260523_133824.jpg",
  "20260523_133830.jpg",
  "20260523_133832.jpg",
  "20260523_133834.jpg",
  "20260523_133845.jpg",
  "20260523_133847.jpg",
  "20260523_133849.jpg",
  "20260523_133852.jpg",
  "20260523_133855.jpg",
  "20260523_133857.jpg",
  "20260523_133859.jpg",
  "20260523_133906.jpg",
  "20260523_133918.jpg",
  "20260523_133935.jpg",
  "20260523_133952.jpg",
  "20260523_134018.jpg",
  "20260523_134043.jpg",
  "20260523_134046.jpg",
];

const showcaseGrid = document.querySelector("#showcaseGrid");
const showcaseModal = document.querySelector("#showcaseModal");

const showcaseArt = showcaseImages.map((fileName, index) => ({
  id: `SC-${String(index + 1).padStart(3, "0")}`,
  title: `Showcase Piece ${index + 1}`,
  image: `gallery/${fileName}`,
}));

showcaseArt.forEach((artwork) => {
  const card = document.createElement("article");
  card.className = "art-card";
  card.innerHTML = `
    <button type="button" aria-label="View ${artwork.title}" data-art-id="${artwork.id}">
      <picture>
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
      </picture>
      <span class="art-card-body">
        <span class="card-meta">
          <span class="status-pill">Showcase</span>
          <span>${artwork.id}</span>
        </span>
        <span>
          <h3>${artwork.title}</h3>
          <p>Portfolio display only</p>
        </span>
      </span>
    </button>
  `;
  showcaseGrid.append(card);
});

showcaseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-art-id]");
  if (!button) return;
  const artwork = showcaseArt.find((item) => item.id === button.dataset.artId);
  if (!artwork) return;
  document.querySelector("#showcaseModalImage").src = artwork.image;
  document.querySelector("#showcaseModalImage").alt = artwork.title;
  document.querySelector("#showcaseModalStatus").textContent = `Showcase only / ${artwork.id}`;
  document.querySelector("#showcaseModalTitle").textContent = artwork.title;
  document.querySelector("#showcaseModalDescription").textContent = "This page is for browsing the artwork without prices or checkout controls.";
  showcaseModal.showModal();
});

document.querySelector("[data-close]").addEventListener("click", () => showcaseModal.close());

showcaseModal.addEventListener("click", (event) => {
  if (event.target === showcaseModal) showcaseModal.close();
});
