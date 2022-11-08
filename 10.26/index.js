window.onload = () => {
  const title = document.querySelector("h1.title");
  const sub = document.querySelector("h1.subTitle");
  title.setAttribute("style", "color: hotpink");

  sub.addEventListener("click", () => {
    sub.innerHTML = "안녕";
  });
};
