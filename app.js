// Require Express and Cors..
const express = require('express');
const cors = require('cors');

// Init Express app..
const app = express();

// Create Server Intricacies..
const PORT = process.env.PORT || 8000;

// Create Router..
const homeRoute = express.Router();
const bioRoute = express.Router();

// Use middlewares..
app.use(cors());
app.use(express.json());

// Create Bio States..
const slackUsername = "Abeeujah";
const backend = true;
const age = 22;
const bio = "A Full Stack Web Developer Who Loves Gaming";

// Create Endpoints..
homeRoute.get('/', (req, res) => {
    return (res.status(200).json({
        message: "You're at the Home Route, You should head to the Bio Route",
    }));
});

bioRoute.get('/', (req, res) => {
    return (res.status(200).json({
        slackUsername,
        backend,
        age,
        bio,
    }));
});

// Use Route Middleware..
app.use('/', homeRoute);
app.use('/bio', bioRoute);

// Server Listens on PORT..
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
});