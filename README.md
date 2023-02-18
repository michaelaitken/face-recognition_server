# Face Recognition App Server
This project was created as a part of the Zero To Mastery Web Developer course. The project is a face recognition app that allows users to register and sign in to submit entries for face recognition. The app keeps track of the number of entries submitted by the user. The server side of the app is built using Node.js and communicates with the client side through an API. The app uses the Clarifai Face Recognition API to get data for the image the user inputs. The app uses PostgreSQL as the database.

## Getting Started
These instructions will help you set up the project on your local machine.

### Prerequisites
To run this project on your local machine, you will need to have Node.js, npm, and PostgreSQL installed. You will also need to obtain an API key from Clarifai.

### Installing
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running the following command:

```
npm install
```

1. Set up the PostgreSQL database by running the following command:

```
npm run knex migrate:latest
```

1. Create a .env file in the project directory and add the following variables:

```
DB_HOST=localhost
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
CLARIFAI_API_KEY=your_api_key
```
Replace the values for **DB_USER**, **DB_PASSWORD**, and **DB_NAME** with your own PostgreSQL database credentials. Replace the value for **CLARIFAI_API_KEY** with your own Clarifai API key.

### Running the App

1. To start the server, run the following command:

```
npm start
```

The server will start listening on port 3000.

## Built With
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime for building server-side applications.
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open source object-relational database system.
- [Clarifai](https://www.clarifai.com/) - A leading AI platform for computer vision and natural language processing.

## Authors
- **Michael Aitken** - *Initial work* - [GitHub](https://github.com/michaelaitken)

## Acknowledgments
- This project was created as a part of the Zero To Mastery Web Developer course.