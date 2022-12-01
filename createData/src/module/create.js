import {model_jogos} from './modelCreate';

export const createData = async (req, res, next) => {
  const {newGame} = req.body;
  
  try {
    
    /// GERAL -> (dado) => Modal/page => Mostragem/view
    
    const jogos = await model_jogos.findOne({_id: "63881d51558ad2e2aaf73c25"});
    
    console.log(jogos.grupo);
    
    jogos.grupo.push(newGame);
    
    await jogos.save();
    
    return res.status(200).json({message: 'Jogo criado com sucesso', jogos: jogos});
    
  }catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
}