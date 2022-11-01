window.onload = () => {
    const title = document.querySelector('h1.title')

    title.innerHTML = "안녕하세요 이렇게 바꾸면 되는 걸까요?";

    title.addEventListener('click', evnet => {
        const titleValue = title.innerText;

        const subTitle = document.querySelector('h1.subTitle')
        const subTitleValue = subTitle.innerText;

        title.innerText = subTitleValue;
        subTitleValue.innerText = titleValue;

    });
}