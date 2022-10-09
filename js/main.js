window.addEventListener("load", () => {
    
    botaoCalular = document.addEventListener('click',executarCalculo)
    
    const botao_buscar_pokemon = document.querySelector("#buscarPokemon")
    botao_buscar_pokemon.addEventListener("click",executa_busca) 

    
  });



function executarCalculo() {
   totalCalculado  =   buscaCalculo()
   informarResultado(totalCalculado)
}

function buscaCalculo() {    
  
    let totalValores = 0
    elemento = document.querySelectorAll(".valor__Digitado__Soma")
    for(i=0; i < elemento.length; i++){
        let e = elemento[i];
        if (isNaN(e.value) ) {
           alert("Deve ser informado valor numérico. Por favor verifique!!")
           e.value = null
           e.focus();
           return false
        }
        totalValores += Number(e.value)
     }
     return totalValores
}

function informarResultado(valor) {    
    resultadoSoma = document.querySelector("#resultado_soma")
    resultadoSoma.innerHTML  = valor    
}






function executa_busca() {
    buscarEMostrarPersonagem()
}

async function buscarEMostrarPersonagem() {
    const idPersonagem = pegaValorDoInput("#identificadorPersonagem")
     const personagem   = await buscaPersonagemNaApi(idPersonagem)
     console.log(personagem)
    montarTelaComDadosDoPersonagem(personagem)    
 }
 
 function pegaValorDoInput(seletorInput) {
     const valor = document.querySelector(seletorInput).value 
     return valor
 
 }
 
 async function buscaPersonagemNaApi(numeroPersonagem) {
     const url = "https://pokeapi.co/api/v2/pokemon/"+numeroPersonagem
     const response = await fetch(url)
     const responseData = await response.json()
     return responseData
 }
 
 function montarTelaComDadosDoPersonagem(personagem) {
         
     const elementoImagem = document.querySelector("#imagemPokemon")
     elementoImagem.src = personagem.sprites.front_default

     const resultado_nome = document.querySelector("#resultado_nome")
     resultado_nome.innerHTML = "Nome: "+personagem.id+" - "+personagem.name

   
      }