const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));
  
//accountSid is the unique AccountSID from your twilio account
//authToken is the unique Account Authorization Token from your twilio account
//Since these informations are critical, they are stored as environmental variables.
//Replace the existing 'from' number with that one you bought from twilio
//Replace the existing 'to' number with the one from verified caller-ids in your twilio account
//'body' is the actual message
