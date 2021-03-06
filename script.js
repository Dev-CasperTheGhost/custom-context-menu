const menu = document.getElementById("menu");

addEventListener("contextmenu", (e) => {
  // prevent default to not show the default menu
  e.preventDefault();

  menu.style.display = "none";

  // allow the menu to animate
  setTimeout(() => {
    menu.style.display = "block";
    menu.style.top = `${e.y}px`;
    menu.style.left = `${e.x}px`;
  }, 10);
});

addEventListener("click", (e) => {
  // Only close the menu when clicking else where from the menu (body, other elements, etc)
  if (!menu.contains(e.target)) {
    menu.style.display = "none";
  }
});
