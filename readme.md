# easy-alerts

Easy alerts is a package that provides easy-to-use alerts for your project. Easy alerts pre-built alerts allow you to change images on your alert, as well as adjust the them to match a light or dark setting.

## Getting Started

To use easy-alerts, you will need to install the easy-alerts package from npm.

```
npm install easy-alerts
```

Once installed, import(or require) the package to your project.

```js
import easyAlerts from 'easy-alerts';
```

or

```js
const easyAlerts = require('easy-alerts');
```

You can also import individual alert functions from the package. Easy alerts currently has two alerts that you can use: successAlert and failureAlert.

## Using easy-alerts functions

Once imported, you can invoke the easy-alerts function to create an alert. Easy alert functions take one argument, which is an object that contains items such as the message to display on the alert, the theme(light or dark), and more. Possible properties you can include on this object are:

* message (required): a string containing the alert message.

* theme (required): 'light' or 'dark' as a string.

* imageURL: a string containing the imageURL you wish to use. If you don't include an imageURL, you will get the default image for your specified alert.

* timeout: a number specifying how long(in milliseconds) you would like the alert to stay on the screen. If you do not include a timeout, the alert will stay on the screen until the user closes it.

An example of all of these put together with the successAlert would look like this:

```js
    function createAlert = () => {
        const alertObj = {
            message: 'Your message here!',
            theme: 'dark',
            imageURL: 'Your imageURL here',
            timeout: 3000
        };

        successAlert(alertObj);
    }
```

## Stay Tuned!

Easy alerts is constantly changing! Revisit our documentation regularly to see what changes we make.