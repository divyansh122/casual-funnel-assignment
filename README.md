# Shopify Survey App

This is a Shopify app that allows you to embed a dynamic survey form on the Cart page of a Shopify store. The app uses Shopify Polaris for the UI and connects to a database to store survey responses. Currently, the app is not connected to the main Shopify store, but the form and database integration are fully functional.

## Features
Dynamic Survey Form: A responsive and interactive survey form built using Shopify Polaris.

Database Integration: Survey responses are stored in a database (e.g., PostgreSQL, MongoDB).

Admin Dashboard: View and analyze survey responses in a user-friendly dashboard.

Shopify Polaris Design: The app follows Shopify's design system for a consistent and professional look.

## Prerequisites
Before running the app, ensure you have the following installed:

Node.js (v18 or later)

npm (v9 or later)

PostgreSQL (or any other database of your choice)

Shopify Partners Account (for testing in a development store)

Setup Instructions
1. Clone the Repository
   Clone this repository to your local machine:
   ```bash

   git clone https://github.com/your-username/shopify-survey-app.git
   cd shopify-survey-app
2. Install Dependencies
   Install the required dependencies:
   ```bash
   npm install
   
3. Set Up Environment Variables
   reate a .env file in the root directory and add the following variables:
   ```plaintext
   SHOPIFY_API_KEY=your_api_key
   SHOPIFY_API_SECRET=your_api_secret
   SHOPIFY_APP_URL=http://localhost:3000
   SHOPIFY_SCOPES=read_products,write_products
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   DB_PORT=your_database_port
   
Replace the placeholders with your actual Shopify API credentials and database connection details.

4. Set Up the Database
   Create a Database:
   If you're using PostgreSQL, create a database named survey_app (or any name you prefer).

5. Run the following SQL script to create the survey_responses table:
   ```sql
   CREATE TABLE survey_responses (
      id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     rating VARCHAR(50) NOT NULL,
     feedback TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Verify Database Connection:

6. Ensure your app can connect to the database by running the following command:
   ```bash
   npm run test-db-connection
   
7. Run the App
   Start the development server:
   ```bash
   
   npm run dev
   The app will be available at http://localhost:3000.

## How It Works

1. Survey Form
   
The survey form is built using Shopify Polaris and includes the following fields:

Name: Text input for the user's name.

Email: Email input for the user's email address.

Rating: A choice list for the user to rate their experience.

Feedback: A multiline text input for additional feedback.

2. Database Integration
   
When a user submits the survey form, the data is sent to the backend and stored in the survey_responses table in the database.

4. Admin Dashboard
The admin dashboard allows you to view and analyze survey responses. It displays the following information:

Total Responses: The total number of survey responses.

Average Rating: The average rating given by users.

Response Details: A table showing all survey responses with timestamps.

Troubleshooting

1. Form Not Displaying on Cart Page
   
If the survey form is not displaying on the Cart page, ensure the following:

The ScriptTag API is correctly configured in the backend.

The survey-form.js script is correctly injected into the Cart page.

2. Database Connection Issues
   
If the app cannot connect to the database, check the following:

Ensure the database is running and accessible.

Verify the database credentials in the .env file.

Check the database logs for any errors.

## Future Improvements

Connect to Main Shopify Store: Integrate the app with the main Shopify store using OAuth and Shopify App Bridge.

Enhanced Dashboard: Add more advanced analytics and visualization features to the admin dashboard.

Email Notifications: Send email notifications to store admins when a new survey response is submitted.
