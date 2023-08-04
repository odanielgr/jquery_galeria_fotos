// Seletor JQuery ---> $() 

$(document).ready(function() {
    $("header button").click(function() { // Ao clicar (função .click) no botão do cabeçalho "header button" 
        $("form").slideDown()             // O "form" aparece com o efeito de .slideDown (para baixo)
    })

    $("#btn-cancelar").click(function() { // Ao clicar (função .click) no botão cancelar
        $("form").slideUp()               // O "form" sobe com o efeito .slideUp (para cima)
    })

    $("form").on("submit", function(e) {
        e.preventDefault()
        const urlImagem = $("#url-nova-imagem").val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${urlImagem}" />`).appendTo(novoItem)

        $(`<div class="imagem-link-style"> 
            <a href="${urlImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem)

        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(800) // Transição de surgir o elemento
        $("#url-nova-imagem").val("")
    })
})