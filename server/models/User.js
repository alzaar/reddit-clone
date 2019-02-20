import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.promise = global.promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Must be 5']
  },
  password: {
    type: String,
    required: true,
    minlength: [3, 'Must be 3']
  }
});

const User = mongoose.model('User', userSchema);

export default User;
