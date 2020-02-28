import mongoose from 'mongoose'
import logger from '../utils/logger'
import {MONGO_URI} from '../utils/config'

const log = logger(module)

class MongoDB {
  public async connect () : Promise<void> {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      log.info('Conexão com banco de dados realizado com sucesso.')
    }).catch(ex => {
      log.error('Houve um erro ao conectar com o banco de dados: ', ex)
      throw new Error(ex)
    })
  }
}

export default new MongoDB().connect
