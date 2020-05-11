$(document).ready(function() {

    var orario = ora_messaggio;
    $(document).find('.ora, .data').text(orario);


    // intercetto il tasto invio
    $('.text-message').keypress(function()
    {
        if (event.which == 13 ) {


            // leggo il contenuto dell'input text-message e lo salvo in una variabile
            var user_text = $('.text-message').val();
            console.log(user_text);



            // copio l'elemento template in una variabile e tolgo la classe template
            var new_user_message = $('.template').clone().removeClass('template');
            console.log(new_user_message);


            // // inserisco il testo copiato dall'input nel 'p' all'interno del div template precedentemente clonato
            new_user_message.find('p').text(user_text);

            var orario = ora_messaggio;
            new_user_message.find('.ora').text(orario);

            // appendo il nuovo messaggio clonato, tolto della classe template e con la variabile copiata nel 'p'

            $('.main-talk').append(new_user_message);

            // svuoto text-message (non funziona)
            $('.text-message').val(" ");


            // autorisposta ad un tempo determinato

            setTimeout(function() {
                // clonare template 1 (risposta) e rimuovere la classe risposta
                var new_answer_message = $('.template1').clone().removeClass('template1');
                // prendere il 'p' dentro la copia di template e metterci una riposta.
                new_answer_message.find('p').text('miao');

                var orario = ora_messaggio;
                new_answer_message.find('.ora').text(orario);

                // appendo il messaggio al main-talk
                $('.main-talk').append(new_answer_message);

            }, 3000);
        };
    });


// FUNZIONE CHE CALCOLA L'orario

    function ora_messaggio(){
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        return time;
    };

});
