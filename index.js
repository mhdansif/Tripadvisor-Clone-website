// Scroll-to-next-section
function scrollToNextSection() {
  const nextSection = document.querySelector('.next-section');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Header toggle on scroll
const headerFull = document.getElementById("headerFull");
const headerCompact = document.getElementById("headerCompact");
const subNav = document.querySelector(".sub-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerFull.classList.add("hidden");
    headerCompact.classList.remove("hidden");
    subNav.classList.remove("hidden");
  } else {
    headerFull.classList.remove("hidden");
    headerCompact.classList.add("hidden");
    subNav.classList.add("hidden");
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const card = document.querySelector('.card');

  const cardWidth = card.getBoundingClientRect().width;
  const gap = parseInt(getComputedStyle(card).marginRight) || 20;
  const scrollAmount = (cardWidth + gap) * 4;  // Scroll 4 cards at a time

  let currentPosition = 0;

  function updateArrowVisibility() {
    const maxScroll = -(track.scrollWidth - track.parentElement.offsetWidth);
    leftArrow.style.display = currentPosition < 0 ? 'block' : 'none';
    rightArrow.style.display = currentPosition > maxScroll ? 'block' : 'none';
  }

  leftArrow.addEventListener('click', () => {
    currentPosition += scrollAmount; 
    if (currentPosition > 0) currentPosition = 0; 
    track.style.transform = `translateX(${currentPosition}px)`;
    updateArrowVisibility();
  });

  rightArrow.addEventListener('click', () => {
    const maxScroll = -(track.scrollWidth - track.parentElement.offsetWidth);
    currentPosition -= scrollAmount; 
    if (currentPosition < maxScroll) currentPosition = maxScroll; 
    track.style.transform = `translateX(${currentPosition}px)`;
    updateArrowVisibility();
  });

  updateArrowVisibility(); // Initial check
});


  const countryToCurrency = {
    LK: "LKR",
    US: "USD",
    UK: "GBP",
    CA: "CAD",
    AU: "AUD",
    NZ: "NZD",
    IN: "INR",
    JP: "JPY",
    CN: "CNY",
    DE: "EUR",
    FR: "EUR",
    IT: "EUR",
    BR: "BRL",
    ZA: "ZAR",
    SG: "SGD",
    MX: "MXN",
    KR: "KRW",
    SE: "SEK",
    NO: "NOK",
    RU: "RUB"
  };

  function updateCurrency() {
    const countrySelect = document.getElementById("countrySelect");
    const currencySelect = document.getElementById("currencySelect");

    const selectedCountry = countrySelect.value;
    const correspondingCurrency = countryToCurrency[selectedCountry];

    if (correspondingCurrency) {
      currencySelect.value = correspondingCurrency;
    }
  }



    let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.a-carousel-track');
  const cards = document.querySelectorAll('.a-card');

  if (!track || cards.length === 0) return;

  const cardStyle = getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth;
  const marginLeft = parseFloat(cardStyle.marginLeft || 0);
  const marginRight = parseFloat(cardStyle.marginRight || 0);
  const totalCardWidth = cardWidth + marginLeft + marginRight;

  const visibleCards = 4;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > cards.length - visibleCards) {
    currentIndex = cards.length - visibleCards;
  }

  const moveX = -(totalCardWidth * currentIndex);
  track.style.transform = `translateX(${moveX}px)`;
}