const dotenv = require('dotenv');
const app = require('./app');

const connectDB = require('./helper/connectDB');

dotenv.config('.env');

const { PORT, MONGODB_URI } = process.env;

connectDB(MONGODB_URI);

app.listen(PORT, () => {
  console.log('server is Listening...');
});
