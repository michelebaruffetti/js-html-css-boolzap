$(document).ready(function() {

    // intercetto il tasto invio
    $('.text-message').keypress(function()
    {
        if (event.which == 13 ) {
            console.log('hai premuto invio');

            // leggo il contenuto dell'input text-message e lo salvo in una variabile
            var user_text = $('.text-message').val();
            console.log(user_text);

            // copio l'elemento template in una variabile e tolgo la classe template
            var new_user_message = $('.template').clone().removeClass('template');
            console.log(new_user_message);


            // // inserisco il testo copiato dall'input (ma non riesco a inserirlo in un elemento del div copiato)
            new_user_message.text(user_text);
            // console.log(new_user_message);

            // appendo il nuovo messaggio

            $('.main-talk').append(new_user_message);

        };
    });




});
