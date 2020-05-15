const close = document.createElement('span');

close.innerText = 'x';
close.style = `
    position: absolute;
    top: 0px;
    right: 5px;
    line-height: 20px;
    cursor: pointer;`

close.addEventListener('click', function(){
    close.parentNode.remove()
});

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
            padding: 0px 1px;
            border: 1px solid black;
            border-radius: 5px;
            background-color: ${alertObj.backgroundColor};
            color: ${alertObj.textColor};
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 50px;
            position: fixed;
            top: 5px;
            right: 5px;`

        if(alertObj.timeout){
            let count = alertObj.timeout / 1000;
            const timeoutBar = document.createElement('div');
            timeoutBar.style = `
                height: 5px;
                background-color: white;
                position: absolute;
                bottom: 0;
                border-radius: 0px 0px 10px 10px;`
            
            timeoutBar.animate([
                {width: '100%'},
                {width: '0%'}
            ], {
                duration: alertObj.timeout,
                easing: 'linear'
            })

            text.appendChild(timeoutBar);

            let interval = setInterval(() => {
                count -= 1;
                if(count === 0){
                    text.remove();
                    clearInterval(interval);
                }
            }, 1000)
        }

        text.appendChild(close);
        document.body.appendChild(text);
    },
    imageAlert: function(alertObj){
        const iAlert = document.createElement('section'),
              image = document.createElement('img');
    },
    comboAlert: function(alertObj){
        const combo = document.createElement('section'),
              image = document.createElement('div'),
              message = document.createElement('p');

        message.innerText = alertObj.message;
        combo.appendChild(image);
        combo.appendChild(message);
        combo.appendChild(close);

        combo.style = `
            height: 250px;
            width: 200px;
            box-sizing: border-box;
            padding: 0px 10px;
            border: 1px solid black;
            border-radius: 5px;
            background-color: ${alertObj.backgroundColor};
            color: ${alertObj.textColor};
            font-size: 18px;
            display: flex;
            flex-direction: column;
            justify-content: ${alertObj.justifyContent};
            align-items: ${alertObj.alignItems};
            position: fixed;
            top: 50%;
            left: 50%;
            margin-top: -125px;
            margin-left: -100px;`

        image.style = `
            height: 125px;
            width: 125px;
            box-sizing: border-box;
            background-image: url(${alertObj.imageURL});
            background-size: cover;
            border: 1px solid black;
            border-radius: 50%;`

        document.body.appendChild(combo);
    }
}