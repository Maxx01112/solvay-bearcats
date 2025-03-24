document.getElementById('buttonStart').addEventListener('click', function() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('hiddenContent').classList.remove('hidden');
  playSound();
});

document.getElementById('buttonReveal').addEventListener('click', function() {
  document.getElementById('hiddenContent').style.display = 'none';
  document.getElementById('finalMessage').classList.remove('hidden');
  showRandomImage();
});

function playSound() {
  var sound = document.getElementById('creepySound');
  sound.play();
}

function showRandomImage() {
  const random = Math.random();
  const imageDiv = document.getElementById('randomImage');
  
  // Display a random creepy image or effect
  if (random > 0.5) {
    imageDiv.style.backgroundImage = 'url("creepy-image2.jpg")'; // Another creepy image
  } else {
    imageDiv.style.backgroundImage = 'url("creepy-image3.jpg")'; // Third creepy image
  }
  imageDiv.style.opacity = 1;
}
