// Get all buttons and content area
const buttons = document.querySelectorAll('.menu-container button');
const contentArea = document.getElementById('content-area');

// Section data
const sections = {
  about: `
    <h1>About Me ! 𐔌՞. .՞𐦯</h1>
    <p>I'm Trine Morales ! Currently a sophomore BS Information Technology student at University of Santo Tomas. I live in the Philippines and love appreciating its nature! My hobbies are photography, watching movies, and listening to music. </p>
  `,
  skills: `
  `,
  projects: `
  `,
  recommendations: `
  `
};

// Button click events
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sectionKey = button.getAttribute('data-section');
    contentArea.style.opacity = 0;

    setTimeout(() => {
      contentArea.innerHTML = sections[sectionKey];
      contentArea.style.opacity = 1;
    }, 300);
  });
});

// ========= ADD NEW RECOMMENDATION FEATURE =========
const form = document.getElementById('recommendationForm');
const recommendText = document.getElementById('recommendText');
const recommendSection = document.getElementById('recommendations');

// Popup elements
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the recommendation text
  const newText = recommendText.value.trim();
  if (newText === '') return;

  // Create a new recommendation card
  const newCard = document.createElement('div');
  newCard.classList.add('recommend-card');
  newCard.textContent = `“${newText}”`;

  // Add it to the existing list
  recommendSection.appendChild(newCard);

  // Clear the input field
  recommendText.value = '';

  // Show confirmation popup
  popup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
