import {model_jogos} from './modelRead';

export const readData = async (req, res, next) => {
  try {
    
    const jogos = await model_jogos.find();
    res.status(200).json(jogos);
    
  }catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}