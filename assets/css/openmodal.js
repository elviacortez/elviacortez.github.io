document.getElementById('open-modal').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
     document.getElementById('modal').style.display = 'none';
  }
}
