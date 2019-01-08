export function createLandingPage() {
    document.body.innerHTML =
        `<header id="header" class="header">
            <nav>
                <a href="#header">Главная</a>
                <a href="#rules">Правила</a>
                <a href="#screenshots">Скриншоты</a>
            </nav>
            <!--<div id="playerName" class="playerName"></div>-->
            <div class="container">
                <div class="row">
                    <div class="col">
                        <!--<a name="main"></a>-->
                        <div id="header__content" class="header__content">
                            <h1><img src="img/magic-way-arc-blue.png" alt="MAGIC WAY"></h1>
                            <h2>игра для настоящих принцесс</h2>
                            <div class="header__content-description--wrap">
                                <p class="header__content-description">Сказочное Королевство было заколдовано злым волшебником Аргусом. Всех сказочных героев от превратил в чудовищ и сделал своими слугами.  Единственный способ вернуть Королевству и его жителям свободу - пройти Волшебный Путь и сразиться со злом. Только Настоящая Принцесса способна на это.<br> Стань Настоящей Принцессой и спаси Сказочное Королевство от злого Аргуса с помощью своей красоты, доброты и ума.
                                </p>
                            </div>
                            <button id="startGame" class="button startGame">играть</button>
                        </div>
    
                    </div>
                </div>
            </div>
        </header>
        <main id="main">
            <section id="rules" class="rules section">
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                           <figure class="rules__content-item">
                                <figcaption><h3>Выбор персонажа</h3></figcaption>
                                <img src="img/choice.png" alt="персонажи">
                                <article>
                                    Прежде чем начать игру тебе нужно выбрать имя и внешность. Меняй одежду, аксессуары, цвет волос. Найди лучший вариант.
                                </article>
                            </figure> 
                        </div>        
                        <div class="col-md">
                            <figure class="rules__content-item">
                                <figcaption><h3>Заклинания</h3></figcaption>
                                <img src="img/spells.png" alt="заклинания">
                                <article>
                                    Для того, чтобы расколдовать жителей Сказочного Королевства воспользуйся заклинаниями. <span>Flowers</span> возвращает красоту. <span>Hearts</span> разрушает злость. <span>Health</span> помогает тебе восстановать силы. <span>Extra</span> обЪединяет в себе заклинания <span>Flowers</span> и <span>Hearts</span>, но его можно использовать только 1 раз для каждого сражения.
                                </article>
                            </figure>
                        </div>
                        <div class="col-md">
                            <figure class="rules__content-item">
                                <figcaption><h3>Задания</h3></figcaption>
                                <img src="img/tasks.png" alt="задания">
                                <article>
                                    Выбранное заклинание подействует, если ты сумеешь решить задания. Здесь тебе понадобятся все твои знания.
                                </article>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section id="screenshots" class="screenshots section">
                <div class="screenshots__content">
                    <h3>Скриншоты</h3>
                    <img src="img/screenshot1.jpg" alt="screenshot 1" class="screenshots__content-item">
                    <img src="img/screenshot2.jpg" alt="screenshot 2" class="screenshots__content-item">
                    <img src="img/screenshot3.jpg" alt="screenshot 3" class="screenshots__content-item">
                    <img src="img/screenshot4.jpg" alt="screenshot 4" class="screenshots__content-item">
                </div>
            </section>
        </main>
        <footer class="footer">
            <h3>Olga Naranovich</h3>
            <a href="https://github.com/OlgaNaranovich" target="_blank"><img src="img/github-logo-small.svg" alt="github" width="45" height="45"/></a>
        </footer>`
}
