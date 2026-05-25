const artworks = [
  {
    title: "Smiling Character",
    date: "May 2026",
    image: "assets/artwork/smiling-character.jpg",
    alt: "A smiling character drawn in black marker on lined paper"
  },
  {
    title: "Playful Creature",
    date: "May 2026",
    image: "assets/artwork/playful-creature.jpg",
    alt: "A playful creature drawn in black marker on lined paper"
  },
  {
    title: "Brown Character",
    date: "May 2026",
    image: "assets/artwork/brown-character.jpg",
    alt: "A brown rounded character with black hair-like strokes"
  }
];

const chalisaPages = [
  {
    title: "Hanuman Chalisa",
    note: "Add Vani's scanned verse pages to assets/hanuman-chalisa/ and list them here.",
    image: "",
    alt: ""
  },
  {
    title: "Bal Vihar, age 6-7",
    note: "The flip book is ready for the handwritten pages once the images are in the folder.",
    image: "",
    alt: ""
  }
];

const galleryGrid = document.querySelector("#galleryGrid");
const dialog = document.querySelector("#artDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMeta = document.querySelector("#dialogMeta");
const closeDialog = document.querySelector("#closeDialog");
const book = document.querySelector("#book");
const previousPage = document.querySelector("#previousPage");
const nextPage = document.querySelector("#nextPage");
const bookCounter = document.querySelector("#bookCounter");
const pageDots = document.querySelector("#pageDots");

let currentSpread = 0;

function openArtwork(artwork) {
  dialogImage.src = artwork.image;
  dialogImage.alt = artwork.alt;
  dialogTitle.textContent = artwork.title;
  dialogMeta.textContent = artwork.date;
  dialog.showModal();
}

function renderGallery() {
  artworks.forEach((artwork) => {
    const card = document.createElement("button");
    card.className = "art-card";
    card.type = "button";
    card.innerHTML = `
      <img src="${artwork.image}" alt="${artwork.alt}">
      <span>
        <h3>${artwork.title}</h3>
        <p>${artwork.date}</p>
      </span>
    `;
    card.addEventListener("click", () => openArtwork(artwork));
    galleryGrid.append(card);
  });
}

function createBookPage(page, index) {
  const pageElement = document.createElement("section");
  pageElement.className = `book-page${page.image ? "" : " empty-page"}`;
  pageElement.setAttribute("aria-label", `Page ${index + 1}`);

  if (page.image) {
    pageElement.innerHTML = `
      <img src="${page.image}" alt="${page.alt}">
      <span>
        <h3>${page.title}</h3>
        <p>${page.note}</p>
      </span>
    `;
    return pageElement;
  }

  pageElement.innerHTML = `
    <strong>${page.title}</strong>
    <p>${page.note}</p>
  `;
  return pageElement;
}

function renderDots(totalSpreads) {
  pageDots.innerHTML = "";

  for (let index = 0; index < totalSpreads; index += 1) {
    const dot = document.createElement("button");
    dot.className = `dot${index === currentSpread ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to spread ${index + 1}`);
    dot.addEventListener("click", () => {
      currentSpread = index;
      renderBook();
    });
    pageDots.append(dot);
  }
}

function renderBook() {
  const totalSpreads = Math.ceil(chalisaPages.length / 2);
  const firstPageIndex = currentSpread * 2;
  const visiblePages = chalisaPages.slice(firstPageIndex, firstPageIndex + 2);

  book.innerHTML = "";
  visiblePages.forEach((page, index) => {
    book.append(createBookPage(page, firstPageIndex + index));
  });

  if (visiblePages.length === 1) {
    book.append(createBookPage({ title: "", note: "", image: "", alt: "" }, firstPageIndex + 1));
  }

  previousPage.disabled = currentSpread === 0;
  nextPage.disabled = currentSpread === totalSpreads - 1;
  bookCounter.textContent = `Spread ${currentSpread + 1} of ${totalSpreads}`;
  renderDots(totalSpreads);
}

previousPage.addEventListener("click", () => {
  currentSpread = Math.max(0, currentSpread - 1);
  renderBook();
});

nextPage.addEventListener("click", () => {
  const totalSpreads = Math.ceil(chalisaPages.length / 2);
  currentSpread = Math.min(totalSpreads - 1, currentSpread + 1);
  renderBook();
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

renderGallery();
renderBook();
