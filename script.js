document.addEventListener("DOMContentLoaded", function() {
  loadPage('./pages/men.html');
});

function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error loading page:", error));
}


