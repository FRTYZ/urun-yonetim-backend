const { connect } = require('mongoose');

const connectDB = async () => {
    try {
      await connect(process.env.MONGO_URI);
  
      console.log('MongoDB connection successful');
    } catch (error) {
      console.error('MongoDB connection error:', error);

      process.exit(1);
    }
};

module.exports = connectDB;
