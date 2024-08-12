const { default: mongoose } = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('DB is connected successfully');

    mongoose.connection.on('error', (error) => {
      console.log('Db connection error', error);
    });
  } catch (error) {
    console.log('DB is not connected', error.toString());
  }
};

export { connectDB };
