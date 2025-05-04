const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");

const { createClient } = require('redis');
const drawing_routes = require("./src/routes/drawing_routes");
const login_routes = require("./src/routes/login_routes");
const sharing_routes = require("./src/routes/sharing_routes");
const user_routes = require("./src/routes/user_routes");

const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);
//Storing cookie info for users via redis(Redis is amazing)

dotenv.config();

const app = express();
const PORT = 8080;

const redisClient = createClient();
//Enable legacy mode as connect redis expects callbacks rather than promises 
redisClient.connect().catch(console.error);

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SECRET_PASSWORD || "default secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
    }
}));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/', drawing_routes);
app.use('/api/', login_routes);
app.use('/api/', sharing_routes);
app.use('/api', user_routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});