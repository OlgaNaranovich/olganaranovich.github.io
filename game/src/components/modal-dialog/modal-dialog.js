import {setupHero} from './modal-dialog_template.js';
export function showModalDialog() {
    const formOverlay = document.createElement('div');
    document.body.appendChild(formOverlay);
    formOverlay.className = 'formOverlay';

    formOverlay.innerHTML = `
        <form id="playerNameForm" class="modal-frame">
            <div class="modal-frame__contextWrap">
                <span>Выбери себе имя</span>
                <input type="text" id="playerNameInput" class="playerNameInput" autofocus>
                <input type="submit" value="Ок" class="button button-success" id="buttonSuccess">
                <input type="button" name="cancel" value="Отмена" class="button button-cancel" id="buttonCancel">
            </div>  
        </form>
    `;

    const buttonSuccess = document.getElementById('buttonSuccess');
    const buttonCancel = document.getElementById('buttonCancel');
    buttonSuccess.addEventListener('click', function () {
        const playerNameInputValue = document.getElementById('playerNameInput').value;
        localStorage.setItem('playerName', playerNameInputValue);
        document.body.innerHTML = '';
        setupHero();
    });

    buttonCancel.addEventListener('click', function () {
        document.body.removeChild(formOverlay);
    });
}

