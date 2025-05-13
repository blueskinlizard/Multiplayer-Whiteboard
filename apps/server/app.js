const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http"); 
const { Server } = require("socket.io");

const drawing_routes = require("./src/routes/drawing_routes");
const login_routes = require("./src/routes/login_routes");
const sharing_routes = require("./src/routes/sharing_routes");
const user_routes = require("./src/routes/user_routes");

const socketHandler = require("./src/websocket/drawing_rooms");
const redis = require("redis");

dotenv.config();

const app = express();
const PORT = 8080;

const server = http.createServer(app); //create HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});


console.log('REDIS_HOST:', process.env.REDIS_HOST);
console.log('REDIS_PORT:', process.env.REDIS_PORT);
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || 'redis'}:${process.env.REDIS_PORT || 6379}`
});
console.log('Attempting to connect to Redis at:', redisClient.options.url);
redisClient.on('connect', () => {
  console.log('Redis client connected successfully');
});
redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});
async function connectRedis() {
  try {
    await redisClient.connect();
    console.log('Redis connection established');
  } catch (err) {
    console.error('Redis connection failed:', err);
  }
}

connectRedis()


socketHandler(io);

app.use(session({
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

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/', drawing_routes);
app.use('/api/', login_routes);
app.use('/api/', sharing_routes);
app.use('/api', user_routes);

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
