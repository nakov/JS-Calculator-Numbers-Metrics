document.querySelectorAll('header > a').forEach(
  link => link.onclick = function() {
    hideElements("section");
    showElements(link.dataset.target);
  }
);

function hideElements(selector) {
  document.querySelectorAll(selector).forEach(e => {
    e.style.display = 'none';
  });
}

function showElements(selector) {
  document.querySelectorAll(selector).forEach(e => {
    e.style.display = 'block';
  });
}
