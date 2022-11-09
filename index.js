window.onload = () => {
  const title = document.querySelector(".title");

  title.addEventListener("click", (event) => {
    const titleValue = title.innerHTML;
    const subTitle = document.querySelector(".subTitle");
    const subTitleValue = subTitle.innerHTML;

    title.innerText = subTitleValue;
    subTitle.innerText = titleValue;
  });
};
