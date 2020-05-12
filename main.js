$(document).ready(function() {

    var orario = ora_messaggio;
    $(document).find('.ora, .data').text(orario);


// INSERIMENTO MESSAGGIO E RISPOSTA AUTOMATICA

    // intercetto il tasto invio
    $('.text-message').keypress(function()
    {

        if (event.which == 13 && $('.text-message').val() != 0) {


            // leggo il contenuto dell'input text-message e lo salvo in una variabile
            var user_text = $('.text-message').val();
            console.log(user_text);



            // copio l'elemento template in una variabile e tolgo la classe template
            var new_user_message = $('.template').clone().removeClass('template').addClass('you');
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
                var new_answer_message = $('.template').clone().removeClass('template').addClass('your-contact');
                // prendere il 'p' dentro la copia di template e metterci una riposta.
                new_answer_message.find('p').text('miao');

                var orario = ora_messaggio;
                new_answer_message.find('.ora').text(orario);

                // appendo il messaggio al main-talk
                $('.main-talk').append(new_answer_message);

            }, 3000);
        };
    });


// RICERCA DEI CONTATTI

    // intercettare attività di tastiera nell'input di searchbar
    $('#search-input').keyup(function()
    {

    // inserire quel dato in una variabile
    var search_item = $('#search-input').val().toLowerCase().trim();
    console.log(search_item);

        // confrontare il contenuto della variabile con ogni elemento "p" contenuto dentro ".name" di ogni ".profile" e nascondo tutti i div ".profile" che non hanno elementi comuni con "search_item"

        $('.contact-list .profile').each(function(){
            var profile = $(this).find('.name p').text().toLowerCase();
            console.log('nome contatto: ' + profile);

            if (profile.includes(search_item)) {
                $(this).show();

            }else {
                $(this).hide();
            }

        });

    }
    );


// FUNZIONE CHE CALCOLA L'orario

    function ora_messaggio(){
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        return time;
    };

});
