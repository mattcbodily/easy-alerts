module.exports = {
    customAlert: function(message, height, width, background, fontColor, borderWidth, borderRadius, top, left){
        const customAlert = document.createElement('section');
    
        customAlert.innerText = message;
        customAlert.style = `
            height: ${height}px; 
            width: ${width}px;
            background: ${background};
            color: ${fontColor};
            border: ${borderWidth}px;
            border-radius: ${borderRadius};
            position: fixed;
            top: ${top};
            left: ${left};`
    
        document.body.appendChild(customAlert);
    },
    textAlert: function(alertObj){
        const textAlert = document.createElement('section');

        textAlert.innerText = alertObj.message;
        textAlert.style = `
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
            position: relative;`
        
        const close = document.createElement('span');

        close.innerText = 'x';
        close.style = `
            position: absolute;
            top: 0px;
            right: 5px;
            line-height: 20px;
            cursor: pointer;`
    },
    imageAlert: function(){

    },
    imageTextAlert: function(){

    }
}