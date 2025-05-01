function generate() {
    var activeCaptcha = "";
    var captchaLength = 6;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < captchaLength; i++) {
        var randomCharacter = charset.charAt(Math.floor(Math.random() * charset.length));
        activeCaptcha += randomCharacter;
    }
    var canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 50;
    var ctx = canvas.getContext('2d');
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(activeCaptcha, 10, 30);
    document.getElementById('image').innerHTML = '';
    document.getElementById('image').appendChild(canvas);
    document.getElementById('captcha_key').value = activeCaptcha;
}

function printmsg() {
    var userCaptcha = document.getElementById('captcha').value;
    var captchaKey = document.getElementById('captcha_key').value;
    if (userCaptcha === captchaKey) {
        alert("Captcha verified successfully.");
    } else {
        alert("Invalid Captcha.");
    }
}
