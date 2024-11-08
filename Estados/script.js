//https://servicodados.ibge.gov.br/api/v1/localidades/estados/rj/municipios
//https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros estados

var estadosCombobox = document.getElementById("ufcombo");
var cidadesCombobox = document.getElementById("cidadecombo");

axios('https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros')
.then(response => response.data)
.then(data => {
    for (i in data["UF"]){
        let opt = document.createElement("option")
        opt.value = (data["UF"][i]["sigla"])
        opt.innerHTML = data["UF"][i]["nome"];

        estadosCombobox.appendChild(opt);
    }
})
.catch(error => console.error(error))
mudarEstado();


estadosCombobox.addEventListener("change", mudarEstado)

function mudarEstado() {
    cidadesCombobox.textContent = "";

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadosCombobox.value}/municipios`;
    if (estadosCombobox.value == "")
        url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/ac/municipios'
    

    console.log(estadosCombobox.value)

    axios(url)
    .then(response => response.data)
    .then(data => {
        $.each(data, function(object) {
            nome = data[object].nome

            $('#cidadecombo')
                 .append($('<option>', { nome : nome })
                 .text(nome));
       });  
    })
    .catch(error => console.error(error))
}

