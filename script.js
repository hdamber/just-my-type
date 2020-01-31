$(document).ready(function () {
    //hides the upper case keyboard on load
    $('#keyboard-upper-container').hide();

    // my sentence variables
    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate',
    ];

    //variables
    let sentenceIndex = 4;
    let letterIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let currentLetter = currentSentence[letterIndex];
    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);

    // let currentSentence = sentences[0];
    // let currentLetter = currentSentence[0];
    let start;
    let finish;
    let errors = 0;

    // keydown function that shows the uppercase keyboard
    $(document).keydown(function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    });

    //keyup function that shows the lowercase keyboard
    $(document).keyup(function (e) {
        $('.highlight').removeClass('highlight');
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();

        }
    });
    //highlights each letter pressed and unhighlights it when not pressed
    $(document).keypress(function (e) {
        console.log(letterIndex);
        console.log(currentSentence.length)
        $('#' + e.keyCode).addClass('highlight');
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>'); //gives a green check when correct key is typed
            letterIndex++
            $('#yellow-block').css('left', '+=17.5px') // shifts the yellow block down the sentence as a key is typed correctly 

            let currentLetter = currentSentence[letterIndex];
            $('#target-letter').text(currentLetter);
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>') //gives red 'x' when wrong key is typed


        }

        //gives a new sentence after the current sentence is finished being typed
        if (letterIndex == currentSentence.length) {
            letterIndex = 0
            sentenceIndex++
            console.log(sentenceIndex);
            $('#sentence').text(sentences[sentenceIndex]);
            currentSentence = sentences[sentenceIndex];
            currentLetter = currentSentence[letterIndex];
            $('#feedback').text('')
            $('#yellow-block').css('left', '17.5px'); //resets the yellow block to the beginning 
            $('#target-letter').text(currentLetter);






            if (sentenceIndex < sentences.length - 1) {
                finish = event.timeStamp;
                let time = (finish - start);
                time /= 60000;
                let speed = Math.round((54 / time) - (errors * 2));
                $("#next-letter").text("Your score is " + speed + " words per minute");


                setTimeout(function () {
                    let tryAgain = confirm("Do you want to try again?");
                    if (tryAgain == true) {
                        window.location.reload(); // reload the page
                    } else {
                        return;
                    };
                }, 4000);

            };
        }

    })
})
