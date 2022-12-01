import mongoose from 'mongoose';

const JogosSchema = new mongoose.Schema({
  grupo: Array
});

export const model_jogos = mongoose.model('jogos', JogosSchema);