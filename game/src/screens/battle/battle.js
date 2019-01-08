export function drawBG() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = 960;
    canvas.height = 600;
    document.body.appendChild(canvas);

    const image = new Image();
    image.src = './img/bg1.png';
    console.log(image);
    image.addEventListener('load', function () {
        ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight, 0, 0, canvas.width, canvas.height);
        console.log(this.naturalWidth);
        console.log(this.naturalHeight);
    });
}

