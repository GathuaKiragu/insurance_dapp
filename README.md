# Insurance Dapp
In this project, the subscriber periodically pays some amount of money to the insurance company and can sometimes arbitrarily request money from the company. When the company approves this request, the amount requested by the subscriber is transferred to the subscriber's account.

You can run this app according to Instrustion page properly. 


## Instructions
* Node.js must be installed on your system.
* After cloning the project with `$ https://github.com/tundekson/insurance-dapp.git`
* use `$ npm install` to install dependencies.
* You'll need a copy of Reach to get the devnet running. If you don't have one already, run 
* `$ curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach`
* After that, run `$ REACH_CONNECTOR_MODE=ALGO ./reach devnet` (which runs the ALGORAND devnet inside the terminal)
* go to the parent directory and start the React app `$ npm run start` 
* This will run the web-app in the localhost:3000
