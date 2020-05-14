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
    textAlert: function(){

    },
    imageAlert: function(){

    },
    imageTextAlert: function(){
        
    }
}