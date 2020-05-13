module.exports = function easyAlert(message, height, width){
    const customAlert = document.createElement('section');
    customAlert.innerText = message;
    customAlert.style = `height: ${height}px; width: ${width}px;`

    document.body.appendChild(customAlert);
}