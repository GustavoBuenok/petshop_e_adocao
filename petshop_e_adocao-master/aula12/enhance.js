//Este arquivo contem apenas as melhorias feitas no Jquery
//Ele não vai substituir nenhuma funcionalidade(feature) do nosso live.js que contem o nosso codigo principal e JavaScript puro.

$(document).ready(function(){
    console.log("Arquivo 'enhance.js' utilizando jQuery com sucesso!");

    const carousel = $('#promo-carousel');
    //O carrossel do bootstrap junto do jquery funciona como uma lista de imagens e texto sendo passados, e não como a pista que vimos no js puro.

    if(carousel){
        console.log("tudo ok!")
    } else {
        console.log("Problema de atualização do bootstrap ou jquery, verificar nova versão!");
    }
});

//Accordion - acordeão 

const faq = $('#faq-petshop');

if(faq.length > 0){
    //O bootstrap dispara eventos customizados quando um item do acordeão é clicado, vamos ouvir esse evento para adicionar nossa lógica 
    faq.on('shown.bs.collapse', function(event){
        //event é a div aberta com o conteudo aparecendo 
        const pergAberta = $(event.target).prev('.accordion-header').find('button').text().trim();
        console.log(`O usuário abriu a pergunta: ${pergAberta}` )
    } )
}