window.document
  .querySelector(".welcome header .container .nav div .menu")
  .addEventListener("click", (event) => {
    const val = window.document.querySelector(
      ".welcome header .container .nav div .menu + ul",
    ).style.display;

    window.document.querySelector(
      ".welcome header .container .nav div .menu + ul",
    ).style.display = val === "flex" ? "none" : "flex";
  });
