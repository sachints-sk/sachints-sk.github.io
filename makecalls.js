// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC0324614f0559ce1ea8bb029a4141205b';
const authToken = 'd63eeadf29bb6f18615c0bf987226972';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+919645115583',
         from: '+19789614927'
       })
      .then(call => console.log(call.sid));
