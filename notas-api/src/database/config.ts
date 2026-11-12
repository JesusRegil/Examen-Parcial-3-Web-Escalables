import mongoose from 'mongoose';

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017', {
      dbName: process.env.DB_NAME || 'notasDB',
    });
    console.log('Base de datos conectada');
  } catch (error) {
    console.log(error);
  }
};
