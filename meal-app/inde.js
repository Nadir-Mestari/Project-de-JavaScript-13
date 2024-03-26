
fetch("data.json").then((req) => req.json())

const myHeaders = new Headers();

const init = {
    methode: "GET",
    headers: myHeaders,
    mode: "corp",
    cach: "default"

}

