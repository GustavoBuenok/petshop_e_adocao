$(document).ready(function(){
    console.log("Arquivo 'enhance.js' utilizando jQuery com sucesso!");

   
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