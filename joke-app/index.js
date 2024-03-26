
const joker = () => {

    fetch("https://api.blablagues.net/?rub=blagues").then((res) => res.json()).then((code) => {
        let blag = code.data.content

        title.textContent = blag.text_head
        blague.textContent = blag.text_hidden !== "" ? blag.text_hidden : blag.text;
    })
}

window.addEventListener("click", () => {
    joker();
})






