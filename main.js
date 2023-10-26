$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaTarefa = $('#tarefa').val()
        const adicionarTarefa = $('<li></li>')
        $(`<p>${novaTarefa}</p>`).appendTo(adicionarTarefa)
        $(adicionarTarefa).appendTo('ul')
        $('#tarefa').val('')
    })

    $('ul li').on('click', function() {
        $('ul li').style.textDecoration= 'line-through';  
    })
})