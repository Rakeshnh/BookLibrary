function category() {
  const items = document.querySelectorAll(".category-item");

  items.forEach(item => {
    if (item.style.display === "none") {
      item.style.display = "list-item";  
    } else {
      item.style.display = "none";  
    }
  });
}



function searchBook() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();

    const categoryMap = {
        "fantasy": "../Booktrolley/Fantacy.html",
        "poetry": "../Booktrolley/Poetry.html",
        "drama": "../Booktrolley/Drama.html",
        "graphic novel": "../Booktrolley/Graphic Novel.html",
        "science": "../Booktrolley/Science.html"
    };

    if (categoryMap[input]) {
        window.location.href = categoryMap[input];
    } 
}


document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBook();
    }
});