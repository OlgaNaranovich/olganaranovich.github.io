import 'bootstrap';
import {createLandingPage} from './screens/home/home-landing-template';
import {showModalDialog} from './components/modal-dialog/modal-dialog.js';
import $ from '../node_modules/jquery/dist/jquery.min.js';
createLandingPage();
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});


const startGame = document.getElementById('startGame');

startGame.addEventListener('click', function () {
    showModalDialog();
});
