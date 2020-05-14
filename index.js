const ReactDOM = require('react-dom');

module.exports = function easyAlert(message, height, width, background, fontColor, borderWidth, borderRadius){
    const customAlert = document.createElement('section');
    const node = ReactDOM.findDOMNode(this);

    customAlert.innerText = message;
    customAlert.style = `
        height: ${height}px; 
        width: ${width}px;
        background: ${background};
        color: ${fontColor};
        border: ${borderWidth}px;
        border-radius: ${borderRadius};
        position: fixed;
        top: 0;
        right: 0;`

    node.append(customAlert);
}