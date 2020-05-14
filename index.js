module.exports = {
    customAlert: function(message, height, width, background, fontColor, borderWidth, borderRadius, top, left){
        const custom = document.createElement('section');
    
        custom.innerText = message;
        custom.style = `
            height: ${height}px; 
            width: ${width}px;
            background: ${background};
            color: ${fontColor};
            border: ${borderWidth}px;
            border-radius: ${borderRadius};
            position: fixed;
            top: ${top};
            left: ${left};`
    
        document.body.appendChild(custom);
    },
    textAlert: function(alertObj){
        const text = document.createElement('section');

        text.innerText = alertObj.message;
        text.style = `
            height: 50px;
            width: 250px;
            box-sizing: border-box;
            padding: 0px 10px;
            border: 1px solid black;
            border-radius: 5px;
            background-color: ${alertObj.backgroundColor};
            color: white;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 50px;
            position: fixed;
            top: 5px;
            right: 5px;`
        
        const close = document.createElement('span');

        close.innerText = 'x';
        close.style = `
            position: absolute;
            top: 0px;
            right: 5px;
            line-height: 20px;
            cursor: pointer;`

        text.appendChild(close);
        document.body.appendChild(text);
    },
    imageAlert: function(){

    },
    imageTextAlert: function(){

    }
}