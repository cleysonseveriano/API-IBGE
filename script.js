function buscarRegioes(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes") 
    .then(resposta => resposta.json()) //Resolve o JSON
    .then(resposta => {
        resposta.forEach(function(regiao){
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`
        })
    }) //Preenche o select
    // Por padrçao a requisição é do tipo get
} buscarRegioes()

function buscarEstados(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados?orderBy=nome`)
    .then(resposta => resposta.json())
    .then(resposta => {
        estados.innerHTML = `<option disabled selected>Escolha uma região</option>`
        resposta.forEach(function(estado){
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        })
    })
}

function buscarCidades(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios?orderBy=nome`)
    .then(resposta => resposta.json())
    .then(resposta => {
        cidades.innerHTML = `<option disabled selected>Escolha uma região</option>`
        resposta.forEach(function(cidade){
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`
        })
    })
}