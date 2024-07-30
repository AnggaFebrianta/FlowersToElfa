window.onload = () => {
  // Create a new Audio object
  const audio = new Audio('Savetik_1722353535.mp3');

  // Attempt to play the audio
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
  });

  // Add a fade-out effect to the container
  document.body.classList.add('fade-out');

  // Ensure the class removal matches the CSS transition duration
  setTimeout(() => {
    document.body.classList.remove('container');
  }, 1000); // Duration should match the CSS transition duration

  // Add a smooth scroll effect when the page loads
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Add a pulsating animation effect to elements with the class 'pulsate'
  const pulsateElements = document.querySelectorAll('.pulsate');
  pulsateElements.forEach(element => {
    element.classList.add('pulsating');
  });

  // Optionally, trigger a visual effect on page load
  setTimeout(() => {
    const flowerElements = document.querySelectorAll('.flower');
    flowerElements.forEach((flower, index) => {
      setTimeout(() => {
        flower.classList.add('flower-appear');
      }, index * 200); // Staggered animation
    });
  }, 500); // Delay before starting the flower animation
};

// Function to handle the send message action if needed
function sendMessage() {
  // Example action
  alert('Message sent!');
}
