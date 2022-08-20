// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const smsHandler=()=>{
  client.messages
      .create({
         body: 'McAvoy or Stewart? These timelines can get so confusing.',
         from: '+12058090282',
         statusCallback: 'http://postb.in/1234abcd',
         to: '+94772237548'
       })
      .then(message => console.log(message.sid));
}

export default smsHandler
 
