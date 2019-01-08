import {drawBG} from "../../screens/battle/battle";
// import {createSetupOfHero} from './modal-dialog_setupHero.js';

export function setupHero() {
    let playerName = localStorage.getItem('playerName');

    const player = document.createElement('div');
    player.className = 'player';
    document.body.appendChild(player);
    player.innerText = `${playerName}`;

    const setupOfHero = document.createElement('div');
    setupOfHero.id = 'setupOfHero';
    setupOfHero.className = 'setupOfHero';
    document.body.appendChild(setupOfHero);

    setupOfHero.innerHTML = `
        <h3>Добро пожаловать, <span>Принцесса ${playerName}</span> !
            <p>Выбери себе платье и прическу</p>
        </h3>
        <div class="princess">
            <div class="princess__result">
                <div class="princess__result-img">
                    <img class="dress" src="./img/princess/dress/dress1.png" alt="">
                    <img class="face" src="./img/princess/face.png" alt="">
                    <img class="hair" src="./img/princess/hair/hair1-big.png" alt="">
                </div>
            </div>
            <div class="princess__setup">
                <div class="princess__setup-hair">
                    <div class="princess__setup-arrow princess__setup-arrow--hair">
                        <div id="setupHair-prev" class="prev"></div>
                        <div id="setupHair-next" class="next"></div>
                    </div>
                    <img src="./img/princess/hair/hair1.png" alt="">
                    <img src="./img/princess/hair/hair2.png" alt="">
                    <img src="./img/princess/hair/hair3.png" alt="">
                </div>
                <div class="princess__setup-dress">
                    <div class="princess__setup-arrow princess__setup-arrow--dress">
                        <div id="setupDress-prev" class="prev"></div>
                        <div id="setupDress-next" class="next"></div>
                    </div>
                    <img id="sprite-dress" src="./img/princess/dress/sprite-dress-smaller.png" alt="">
                </div>
            </div>
        </div>
        <input type="submit" value="Сохранить" id="save" class="button button-success">
    `;
    const setupHairPrev = document.getElementById('setupHair-prev');
    console.log(setupHairPrev);
    const setupHairNext = document.getElementById('setupHair-next');
    console.log(setupHairNext);
    setupHairPrev.addEventListener('click', function () {

    });

    const save = document.getElementById('save');
    console.log(save);
    save.addEventListener('click', function () {
        document.body.innerHTML = '';
        drawBG();
    });
}



