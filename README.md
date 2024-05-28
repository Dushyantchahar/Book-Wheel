# Book-Wheel
A Bus Seat Booking Website 

## Steps to Follow:-

- Clone the repository.
  ### On Client:
- cd client
- Install the dependencies by running `npm install --legacy-peer-deps`.
- Run the project by running `npm start`.
  ### On Server:
- cd server
- Install the dependencies by running `npm install --legacy-peer-deps`.
- Run the project by running `npm start`.

## Technologies Used

Summary of what the stack looks like now including a picture with the core tech:

* **Front-end** -React.js: Core framework for building the user interface.
                -Razorpay: Integration for handling payment processing.
                -Email API: Used for sending OTPs (One-Time Passwords) to users for verification.
                -MongoDB Compass: Database management tool for MongoDB.
                -Custom Authentication: Login and sign-up pages with email-based authentication.
* **Data** -Node.js: Runtime environment for executing JavaScript on the server.
           -Express: Web application framework for building RESTful APIs.
* **Data** - All data is modeled and stored in MongoDB using MongoDB Compass. Node.js and Express are the core technologies for the backend services.
* **API** -RESTful APIs: Managed using Node.js and Express to handle interactions between the front-end and back-end services.
          -Payment API: Razorpay is used to demonstrate an external payment provider integration.
          -Email API: Used to send OTPs to users for email verification during the login and sign-up process.
* **Auth** -Authentication and authorization are managed through custom implementations in Node.js and Express, with email-based login and sign-up functionality.
* **Messaging** -Service-to-Service Communication and Workflow Management: Handled by custom implementations within the Node.js and Express environment, leveraging appropriate messaging services.

### Prerequisites
- Node.js (v14.x or later)
- MongoDB (v4.x or later)
- NPM (v6.x or later)
  

