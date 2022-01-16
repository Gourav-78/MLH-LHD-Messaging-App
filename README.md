# MLH-LHD-Messaging-App
A simple script to send text message using SMS-API by Twilio with Node.js

Steps to follow :
1. Sign up for Twilio and get your first SMS-enabled Twilio phone number
2. Set up your development environment to send and receive messages
3. Send your message

<h2>Step 1:</h2>
You can sign up for a free Twilio trial account - https://www.twilio.com/try-twilio <br/>
Once you finish onboarding you'll arrive at your project dashboard in the Twilio Console.<br/>
Navigate to 'Buy a Number' in the sidebar, check the 'SMS' box and click 'Search'<br/>
Find a number that suits your fancy and click 'Buy' to add it to your account.<br/>

<h2>Step 2:</h2>
To send your first SMS, you’ll need to have Node.js and the Twilio Node.js module installed.<br/>
You can check if you already have Node.js installed on your machine by opening up a terminal and running the following command: node --version <br/>
If you don't have Node.js installed, head over to nodejs.org and download the appropriate installer for your system.<br/>
Install the Twilio Node helper library using npm: npm install twilio<br/>

<h2>Step 3:</h2>
Add your credentials as environment variables in a twilio.env file and source them:

<h3>Mac & Linux</h3>
echo "export TWILIO_ACCOUNT_SID='ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'" > twilio.env <br/>
echo "export TWILIO_AUTH_TOKEN='your_auth_token'" >> twilio.env <br/>
source ./twilio.env <br/>
Make sure that Git ignores the twilio.env file: echo "twilio.env" >> .gitignore <br/>

<h3>Windows command line</h3>
set TWILIO_ACCOUNT_SID=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br/>
set TWILIO_AUTH_TOKEN=your_auth_token <br/>

<h3>Powershell</h3>
$Env:TWILIO_ACCOUNT_SID="ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" <br/>
$Env:TWILIO_AUTH_TOKEN="your_auth_token" <br/><br/>

Make the necessary changes in the script as per the instructions in the script itself <br/>
Now, run the script from your terminal : node send_sms.js <br/>

That's it! In a few moments, you should receive an SMS from your Twilio number on your phone.
