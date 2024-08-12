const { default: mongoose } = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB is connected successfully');

    mongoose.connection.on('error', (error) => {
      console.log('Db connection error', error);
    });
  } catch (error) {
    console.log('DB is not connected', error.toString());
  }
};

export { connectDB };
