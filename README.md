# Arepa Store
**Collecting Credit Card Payments with Stripe**

Integrating simple React Next.js App with Stripe Payment Intents API

Inspired by 
[React Stripe.js Walkthrough](https://github.com/tmarek-stripe/demo-react-stripe-js) 
by [Thomas Marek](https://github.com/tmarek-stripe)

## Getting Started

**Clone the repository from Github**
- From Github clone this repo locally clicking on "Clone or Download"
- Clone the master branch
- From a terminal go into the project folder `cd arepa-store`

**Clone the repository using VS**
- From Visual Studio clone this repo locally using the path `christianorta/arepa-store`
- Once inside the project folder in VS, open a New Terminal

![alt text](https://github.com/christianorta/arepa-store/blob/master/public/CloneRepo.jpeg)

**Install the project dependencies**
- Use node command `npm install` to install dependencies
- `npm install react`
- `npm install react-dom`
- `npm install next`
- `npm install stripe`
- `npm install @stripe/stripe-js`
- `npm install @stripe/react-stripe-js`
- `npm install emotion`
- `npm install @emotion/core`
- `npm install @emotion/styled`
- `npm install axios`


## Run the App
- Use node command `npm start` to get the Arepa Store running in your local environment
- Go to http://localhost:3000/ in your browser

## Test the integration to Accept Card Payments
- While on http://localhost:3000/ open the Inspect Element viewer (right click on the page and click Inspect. Alternatively press Command+Option+i on your Mac or F12 on your PC) 
- Go to the Command Tab in the Inspect Element viewer and check for the Successful Payment Events when completing purchases of Arepa Stickers

![alt text](https://github.com/christianorta/arepa-store/blob/master/public/RunProject.jpeg)

**Test 1: Payment doesn’t require authentication**
- Use card number `4242 4242 4242 4242` with any future expiry date and CVC to pay 
- You should be redirected to a “Success Page” after the payment is processed. This may take a few moments, as we are making an API request

**Test 2: Payment requires authentication**
- From the “Success Page” click “Keep Shopping” button or refresh your page to http://localhost:3000/
- Use card number `4000 0025 0000 3155` with any future expiry date and CVC to pay 
- You should expect to get a “3D Secure” payment authentication modal
- Click on “Authenticate” to process your payment

**Test 3: Payment is declined due to insufficient funds**
- From the “Success Page” click “Keep Shopping” button or refresh your page to http://localhost:3000/
- Use card number `4000 0000 0000 9995` with any future expiry date and CVC to pay 
- You should expect to see a message in the checkout form explaining the payment has been declined

**Other tests**
For your convenience, here’s a list of 
[test cards from Stripe](https://stripe.com/docs/testing#cards)
