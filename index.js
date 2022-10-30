window.onload = () => {
  const title = document.querySelector("h1.title");

  title.addEventListener("click", (e) => {
    const titleValue = title.textContent;

    const subTitle = document.querySelector("h1.subTitle");
    const subTitleValue = subTitle.textContent;

    title.textContent = subTitleValue;
    subTitle.textContent = titleValue;
  });
};
