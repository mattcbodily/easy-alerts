module.exports = function easyAlert(message, height, width, background, fontColor, borderWidth, borderRadius){
    const customAlert = document.createElement('section');
    const App = document.querySelector('.App');

    customAlert.innerText = message;
    customAlert.style = `
        height: ${height}px; 
        width: ${width}px;
        background: ${background};
        color: ${fontColor};
        border: ${borderWidth}px;
        border-radius: ${borderRadius} 
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: calc(${height}px / -2);
        margin-left: calc(${width}px / -2);`

    App.appendChild(customAlert);
}