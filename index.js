window.onload = () => {
  const title = document.querySelector(".title");

  title.innerHTML = "안녕하세요? 이렇게 바꾸면 되는걸까요?";
  console.log(title);
  title.addEventListener("click", (event) => {
    const titleValue = title.innerText;
    const subTitle = document.querySelector("h1.subTitle");
    const subTitleValue = subTitle.innerText;

    title.innerText = subTitleValue;
    subTitle.innerText = titleValue;
    subTitleValue;
    console.log(titleValue);
    console.log(subTitleValue);
  });
};
