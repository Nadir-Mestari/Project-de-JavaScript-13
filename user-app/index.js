
let userdata = [];

const data = async () => {

    await fetch("https://randomuser.me/api/?results=24")
        .then((req) => req.json())
        .then((code) => userdata = code.results)

    console.log(userdata)
}


const datamap = async () => {
    await data();

    const datecalc = (date) => {
        let today = new Date();
        //Date.parse sert à convertire le date en miliseconde passé depuit le 1 janvier 1970
        let timestamp = Date.parse(today)

        let time = Date.parse(date)

        return (Math.ceil((time - timestamp) / 8.64e7));
    }

    const daten = (date) => {
        let pars = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
        return pars;
    }

    document.body.innerHTML = userdata.map((user) => `
    <div class="card">
    <img src=${user.picture.large} alt="image de ${user.name.first}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${user.location.city} ${daten(user.dob.date)}</p>
    <em>Menmebre depuit : ${Math.abs(datecalc(user.registered.date))} jours</em>
    </div>
    `

    )
}
datamap();
