module.exports = function easyAlert(message, height, width, background, fontColor, borderWidth, borderRadius){
    const customAlert = document.createElement('section');
    const root = document.getElementById('root');

    customAlert.innerText = message;
    customAlert.style = `
        height: ${height}px; 
        width: ${width}px;
        background: ${background};
        color: ${fontColor};
        border: ${borderWidth}px;
        border-radius: ${borderRadius}`

    root.appendChild(customAlert);
}