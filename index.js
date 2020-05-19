const successIcon = require('./assets/success-icon.svg'),
      failureIcon = require('./assets/failure-icon.svg');

const lightTheme = `
    background-color: snow;
`

const darkTheme = `
    background-color: #2C2C2C;
    color: white;
    border: 2px solid #2C2C2C;
`

const baseAlertStyles = `
    height: 80px;
    width: 300px;
    position: fixed;
    top: 10px;
    right: 10px;
    box-sizing: border-box;
    border: 2px solid lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 3px 3px 3px gray;
`

const baseImageStyles = `
    height: 45px;
    width: 45px;
    margin-left: 15px;
`

const baseMessageStyles = `
    margin-right: 15px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
`

const close = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
close.setAttribute('width', '16');
close.setAttribute('height', '16');
close.setAttribute('viewbox', '0 0 16 16');
close.setAttribute('fill', 'none');
close.setAttribute('stroke-width', '2');

close.innerHTML = `
    <line x1="14" y1="6" x2="6" y2="14"></line>
    <line x1="6" y1="6" x2="14" y2="14"></line>
`

close.style = `
    position: absolute;
    top: 0px;
    right: 5px;
    cursor: pointer;`

close.addEventListener('click', function(){
    close.parentNode.remove()
});

module.exports = {
    successAlert: function(alertObj){
        const sAlert = document.createElement('section'),
              image = document.createElement('img'),
              message = document.createElement('p');

        image.src = successIcon;
        image.style = baseImageStyles;

        message.innerText = alertObj.message;
        message.style = baseMessageStyles;
        
        sAlert.appendChild(image);
        sAlert.appendChild(message);
        sAlert.appendChild(close);
        sAlert.style = baseAlertStyles + (alertObj.theme === 'light' ? lightTheme : darkTheme);
        close.setAttribute('stroke', (alertObj.theme === 'light' ? 'black' : 'white')); 

        if(alertObj.timeout){
            let count = alertObj.timeout / 1000;
            const timeoutBar = document.createElement('div');
            timeoutBar.style = `
                height: 5px;
                background-color: lightgray;
                position: absolute;
                bottom: 0;
                border-radius: 0px 0px 5px 5px;`
            
            timeoutBar.animate([
                {width: '100%'},
                {width: '0%'}
            ], {
                duration: alertObj.timeout,
                easing: 'linear'
            })

            sAlert.appendChild(timeoutBar);

            let interval = setInterval(() => {
                count -= 1;
                if(count === 0){
                    sAlert.remove();
                    clearInterval(interval);
                }
            }, 1000)
        }

        document.body.appendChild(sAlert);
    },
    failureAlert: function(alertObj){
        const fAlert = document.createElement('section'),
              image = document.createElement('img'),
              message = document.createElement('p');

        image.src = alertObj.imageURL ? alertObj.imageURL : failureIcon;
        image.style = baseImageStyles;
        
        message.innerText = alertObj.message;
        message.style = baseMessageStyles;

        fAlert.appendChild(image);
        fAlert.appendChild(message);
        fAlert.appendChild(close);
        fAlert.style = baseAlertStyles + (alertObj.theme === 'light' ? lightTheme : darkTheme);
        close.setAttribute('stroke', (alertObj.theme === 'light' ? 'black' : 'white'));

        if(alertObj.timeout){
            let count = alertObj.timeout / 1000;
            const timeoutBar = document.createElement('div');
            timeoutBar.style = `
                height: 5px;
                background-color: lightgray;
                position: absolute;
                bottom: 0;
                border-radius: 0px 0px 2px 2px;`
            
            timeoutBar.animate([
                {width: '100%'},
                {width: '0%'}
            ], {
                duration: alertObj.timeout,
                easing: 'linear'
            })

            fAlert.appendChild(timeoutBar);

            let interval = setInterval(() => {
                count -= 1;
                if(count === 0){
                    fAlert.remove();
                    clearInterval(interval);
                }
            }, 1000)
        }

        document.body.appendChild(fAlert);
    }
}