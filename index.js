module.exports = function easyAlert(message, height, width, background, fontColor, borderWidth, borderRadius, top, left){
    const customAlert = document.createElement('section');
    const root = document.getElementById('root');

    customAlert.innerText = message;
    customAlert.style = `
        height: ${height}px; 
        width: ${width}px;
        background: ${background};
        color: ${fontColor};
        border: ${borderWidth}px;
        border-radius: ${borderRadius}
        position: fixed;
        top: ${top};
        left: ${left};`

    root.appendChild(customAlert);
}