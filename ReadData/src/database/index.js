import mongoose from 'mongoose';
import CONFIG from '../config/config';

export const dbConnect = () => {
  
  return new Promise((resolve) => {
    
    mongoose.Promise = require(`bluebird`)
    // mongoose.set('debug', true)
    //mongoose.set('useCreateIndex', true)
    //mongoose.set('useFindAndModify', false);
    
    mongoose.connect(CONFIG.mongoURI);
    
    mongoose.connection.on(`connected`, () => {
      console.log(`Mongoose connected to ${CONFIG.mongoURI}`);
      resolve();
    });
    
    const db =  mongoose.connection;
    
    mongoose.connection.on(`error`, (error) => {
      console.log(`MongoDB error => `, error)
    })
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('connected', resolve);
  });
}