// navbar js start
let navbar = document.querySelector("#navbar");
document.querySelector("#hum").onclick = () => {
  navbar.style.left = "1px";
};

let cancel = document.querySelector("#navbar");
document.querySelector("#cancel").onclick = () => {
  navbar.style.left = "-100%";
};
// navbar js ends

// searchbar js start
let searchBar = document.querySelector("#search-bar");
let hideSearchbar = document.querySelector("#search");
hideSearchbar.addEventListener("click", () => {
  if (searchBar.style.display == "flex") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "flex";
  }
});
let cancelSearchbar = document.querySelector("#cancel-seach-bar");
cancelSearchbar.onclick = function cancel() {
  searchBar.style.display = "none";
};
// searchbar js ends

const searchItem = () => {
  const searchBox = document.getElementById("search-box").value.toUpperCase();
  const cafeItems = document.getElementById("drink-items");
  const product = document.querySelectorAll(".drink-products");
  const fName = document.getElementsByTagName("h2");

  for (i = 0; i < fName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];
    if (match) {
      let textValue = match.textContext || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "block";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
