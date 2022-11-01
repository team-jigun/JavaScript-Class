window.onload = () =>{
    const title = document.querySelector('h1.title')

    title.addEventListener('click', event =>{
        const titleValue = title.innerText;

        const subTitle = document.querySelector('h1.subTitle')
        const subTitleVaule = subTitle.innerText;
        
        title.innerText = subTitleVaule;
        subTitle.innerText = titleValue;
    })
}