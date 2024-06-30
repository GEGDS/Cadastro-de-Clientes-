import express from 'express'; //O framework web Express.
import bodyParser from 'body-parser';//O framework web Express.
import path from "path"; //Módulo para trabalhar com caminhos de arquivos.
import path from "path"; //Módulo para trabalhar com caminhos de arquivos.
import { fileURLToPatch } from "url";//  Função para converter URLs de arquivos em caminhos de arquivos.
import routes from "./routes/routes.js"; // As rotas definidas no arquivo posts.js.
import { rmSync } from 'fs';


const __filename = fileURLToPatch(import.meta.url);
const __dirname = path.dirname(__filename); //Estas linhas definem __filename e __dirname, que são usadas para obter o caminho absoluto do arquivo atual e seu diretório, respectivamente.

const app = express();// cria uma instancia do aplicativo Express.

app.set('view engine', 'ejs'); // define EJS como a view engine.
app.set('views', path.join(__dirname, 'views'));// Define o diretório onde as views  estão localizadas.

app.use (bodyParser.urlencoded({extended: false})); //Configura o body-parser para analisar corpos de requisições URL-encoded.
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos a partir do diretório public.

//// Definindo rotas
app.use('/routes', routes);

app.get('/', (req, res) => {
    res.redirect('/routes');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
  }); // inicia o servidor na porta 3000 e imprime uma mensagem no console confirmando que o servidor está rodando.
