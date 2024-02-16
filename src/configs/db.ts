import mongoose from "mongoose"

function db_connect(URI:string){
    try{
        mongoose.connect(URI)
        console.log("Banco de dados conectado com sucesso")
        return mongoose
    }catch(e){
        console.log("Erro ao conectar ao banco de dados \n\n" + e)
    }
}

export default db_connect
