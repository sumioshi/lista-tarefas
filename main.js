$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        event.preventDefault();
        const nomeTarefa = $('#nomeTarefa').val();
        if (nomeTarefa.trim() !== '' && isNaN(nomeTarefa)) {
            $('#tarefa-cadastrada').append('<li>' + nomeTarefa + '</li>');
            $('#nomeTarefa').val('');
        }
    });
    $('#tarefa-cadastrada').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
}); 