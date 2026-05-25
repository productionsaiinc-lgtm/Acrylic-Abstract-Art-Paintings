const seller = {
  email: "mel.cormier@mail.com",
  paypalBusinessEmail: "mel.cormier@mail.com",
  currency: "CAD",
};

const artImages = [
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

const titles = [
  "Blush Grove",
  "Rose Garden Study",
  "Soft Bloom Detail",
  "Pink Bloom Pair",
  "Petal Contrast",
  "Dark Floral Accent",
  "Blush Petal Closeup",
  "Black Canvas Bloom",
  "Floral Wall Study",
  "Pink Edge",
  "Petal Light",
  "Midnight Petals",
  "Copper Cell Study",
  "Rose Pour Detail",
  "Rose Current",
  "Copper Drift",
  "Marbled Rose",
  "Wine Vein",
  "Black Cherry Detail",
  "Cream Edge Flow",
  "Merlot Cell Study",
  "Rose Marble Detail",
  "Abstract Pour Study",
  "Orchid Pour",
  "Garnet Detail",
  "Garnet Wake",
  "Marble Edge",
  "Crimson Flow",
  "Black Cherry Motion",
  "Petal Smoke",
  "Raspberry Edge",
  "Marble Rush",
  "Deep Pour Detail",
  "Dark Rose Cell",
  "Deep Bloom",
  "Textured Garnet",
  "Molten Rose",
  "Ribbon Flame",
  "Rose Cell Closeup",
  "Wild Current",
  "Wild Current Detail",
  "Rose Lightning",
  "Crimson Spark",
  "Crushed Garnet",
  "Marbled Flame Detail",
  "Black Rose Flow",
  "Merlot Wave",
  "Soft Cell Study",
  "Blush Terrain",
  "Blush Terrain Detail",
  "Bright Bloom",
  "Garden Accent",
  "Garden Accent Detail",
];

const categories = [
  "floral", "floral", "floral", "floral", "floral", "floral", "floral", "floral", "floral", "floral", "floral", "floral",
  "statement", "fluid", "fluid", "fluid", "fluid", "fluid", "fluid", "fluid", "fluid", "fluid", "fluid", "fluid",
  "fluid", "fluid", "statement", "fluid", "fluid", "fluid", "fluid", "statement", "fluid", "fluid", "fluid", "statement",
  "fluid", "fluid", "fluid", "fluid", "statement", "statement", "fluid", "fluid", "statement", "fluid", "fluid", "statement",
  "fluid", "fluid", "floral", "floral", "floral",
];

const prices = [
  149, 99, 99, 125, 125, 125, 99, 125, 149, 99, 99, 149,
  299, 149, 179, 199, 179, 179, 199, 149, 149, 179, 149,
  199, 149, 249, 299, 149, 199, 225, 199, 299, 179, 179, 249,
  329, 179, 225, 199, 149, 349, 249, 199, 179, 299, 179, 199,
  349, 179, 199, 400, 149, 125,
];

const descriptions = {
  floral: "Floral-inspired acrylic abstract with layered brush texture, soft motion, and decorative wall-art presence.",
  fluid: "Fluid acrylic abstract with marbled cells, organic movement, and layered color transitions.",
  statement: "High-impact acrylic statement piece with bold contrast, deep color, and strong gallery-wall energy.",
};

const artworks = artImages.map((fileName, index) => {
  const category = categories[index] || "fluid";
  return {
    id: `AA-${String(index + 1).padStart(3, "0")}`,
    title: titles[index] || `Acrylic Abstract ${index + 1}`,
    image: `gallery/${fileName}`,
    category,
    size: "Size to be confirmed",
    price: prices[index] || 149,
    status: "Available",
    description: descriptions[category],
  };
});

const galleryGrid = document.querySelector("#galleryGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const modal = document.querySelector("#artModal");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

function formatPrice(price) {
  if (!price) return "Price available by request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: seller.currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function paypalUrl(artwork) {
  if (!artwork.price || seller.paypalBusinessEmail.includes("example.com")) return "";
  const params = new URLSearchParams({
    cmd: "_xclick",
    business: seller.paypalBusinessEmail,
    item_name: `${artwork.id} - ${artwork.title}`,
    amount: String(artwork.price),
    currency_code: seller.currency,
    landing_page: "Billing",
    solution_type: "Sole",
    useraction: "commit",
  });
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
}

function paypalButtonText(artwork) {
  return paypalUrl(artwork) ? "Pay with PayPal or card" : "Request PayPal invoice";
}

function startArtworkInquiry(artwork, message) {
  document.querySelector("#interestSelect").value = "A painting from the gallery";
  contactForm.elements.message.value = message;
  contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startPaypalInvoice(artwork) {
  startArtworkInquiry(
    artwork,
    `I would like to buy ${artwork.id} - ${artwork.title} through PayPal. Please send the PayPal invoice details.`
  );
}

function renderGallery(filter = "all") {
  galleryGrid.innerHTML = "";
  const visibleArt = artworks.filter((artwork) => filter === "all" || artwork.category === filter);

  visibleArt.forEach((artwork) => {
    const card = document.createElement("article");
    card.className = "art-card";
    card.innerHTML = `
      <button class="art-preview" type="button" aria-label="View ${artwork.title}" data-art-id="${artwork.id}">
        <picture>
          <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
        </picture>
      </button>
      <div class="art-card-body">
        <div class="card-meta">
          <span class="status-pill">${artwork.status}</span>
          <span>${artwork.id}</span>
        </div>
        <div>
          <h3>${artwork.title}</h3>
          <p>${formatPrice(artwork.price)}</p>
        </div>
        <div class="card-actions">
          <button class="card-action" type="button" data-art-id="${artwork.id}">View</button>
          <button class="card-action paypal-action" type="button" data-paypal-id="${artwork.id}">
            ${paypalButtonText(artwork)}
          </button>
        </div>
      </div>
    `;
    galleryGrid.append(card);
  });
}

function openModal(artwork) {
  const paypal = paypalUrl(artwork);
  document.querySelector("#modalImage").src = artwork.image;
  document.querySelector("#modalImage").alt = artwork.title;
  document.querySelector("#modalStatus").textContent = `${artwork.status} / ${artwork.id}`;
  document.querySelector("#modalTitle").textContent = artwork.title;
  document.querySelector("#modalDescription").textContent = artwork.description;
  document.querySelector("#modalSize").textContent = artwork.size;
  document.querySelector("#modalPrice").textContent = formatPrice(artwork.price);

  const inquiry = document.querySelector("#modalInquiry");
  const paypalButton = document.querySelector("#modalPaypal");
  inquiry.href = `#contact`;
  inquiry.dataset.artId = artwork.id;
  paypalButton.dataset.artId = artwork.id;

  if (paypal) {
    paypalButton.href = paypal;
    paypalButton.textContent = "Pay with PayPal or card";
    paypalButton.target = "_blank";
    paypalButton.classList.remove("is-hidden");
  } else {
    paypalButton.href = "#contact";
    paypalButton.textContent = "Request PayPal invoice";
    paypalButton.removeAttribute("target");
    paypalButton.classList.remove("is-hidden");
  }

  modal.showModal();
}

galleryGrid.addEventListener("click", (event) => {
  const paypalButton = event.target.closest("[data-paypal-id]");
  if (paypalButton) {
    const artwork = artworks.find((item) => item.id === paypalButton.dataset.paypalId);
    if (!artwork) return;
    const paypal = paypalUrl(artwork);
    if (paypal) {
      window.open(paypal, "_blank", "noopener");
      return;
    }
    startPaypalInvoice(artwork);
    return;
  }

  const button = event.target.closest("[data-art-id]");
  if (!button) return;
  const artwork = artworks.find((item) => item.id === button.dataset.artId);
  if (artwork) openModal(artwork);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

document.querySelector("[data-close]").addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.querySelector("#modalInquiry").addEventListener("click", (event) => {
  const artwork = artworks.find((item) => item.id === event.currentTarget.dataset.artId);
  if (!artwork) return;
  modal.close();
  startArtworkInquiry(
    artwork,
    `I am interested in ${artwork.id} - ${artwork.title}. Please confirm availability and PayPal payment details.`
  );
});

document.querySelector("#modalPaypal").addEventListener("click", (event) => {
  const artwork = artworks.find((item) => item.id === event.currentTarget.dataset.artId);
  if (!artwork || paypalUrl(artwork)) return;
  event.preventDefault();
  modal.close();
  startPaypalInvoice(artwork);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const submitButton = contactForm.querySelector("button[type='submit']");

  if (formData.get("_honey")) return;

  formStatus.className = "form-status";
  formStatus.textContent = "Opening your email app...";
  submitButton.disabled = true;

  const subject = formData.get("_subject") || "Acrylic abstract painting inquiry";
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Interested in: ${formData.get("interest")}`,
    "",
    formData.get("message"),
  ].join("\n");
  const params = new URLSearchParams({ subject, body });

  window.location.href = `mailto:${seller.email}?${params.toString()}`;
  formStatus.className = "form-status success";
  formStatus.textContent = "Your email app should open with the inquiry ready to send.";
  submitButton.disabled = false;
});

renderGallery();
