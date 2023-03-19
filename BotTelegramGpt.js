import telegram from 'node-telegram-bot-api';
import openai from 'openai';

const { Configuration: OpenAIConfiguration } = openai;


const tokenTelegram = ''; //Token do seu Bot do telegram
const keyOpenai = ''; //Key da sua api do openai

const configuration = new OpenAIConfiguration({  // permite configurar as credenciais necessárias para fazer chamadas à API do OpenAI.
  organization: 'org-T9k5DsvOmo3wNRWny48oVdvp', //  é o ID da organização do OpenAI à qual a sua conta está associada.
  apiKey: keyOpenai,
});

let bot = new telegram(tokenTelegram, { polling: true }); // Permite interagir com a API do Telegram usando a biblioteca node-telegram-bot-api.
const openaiInstance = new openai.OpenAIApi(configuration);

bot.on('message', async (msg) => { //Para lidar com mensagens recebidas pelo bot do telegram- Msg = Mensagem recebida
  const chatId = msg.chat.id;
  const messageText = msg.text;
 
  let responseText = "";
  let lastChar = "";

  // loop para continuar gerando respostas até que uma resposta completa seja gerada
  while (lastChar !== "." && lastChar !== "!" && lastChar !== "?") {
    const completion = await openaiInstance.createCompletion({
      model: "text-davinci-003", //Modelo Da i.a usada do openai
      prompt:`Olá Bot \n${msg.text}\n BotTelegram: ${responseText}`, // O Prompt é importante para garantir que o modelo gere texto coerente e relevante para a tarefa em questão.
      temperature: 0.5, //para controlar a criatividade e a diversidade do texto gerado. Vai de 0.1 a 1. 
      max_tokens: 150, //Os tokens servem p  controlar a diversidade da amostra de tokens gerados pelo modelo em cada etapa de geração de textoara controlar a geração de textos, se vão seer longos ou curtos - O limite destee modelo é  de 4,096 tokens
      top_p: 1,// O Top controlar a diversidade da amostra de tokens gerados pelo modelo em cada etapa de geração de texto - Um valor maior de top_p significa que o modelo escolherá sempre a palavra mais provável em cada etapa.
      frequency_penalty: 0.5, // Frequency Ele controla a probabilidade de o modelo gerar palavras que já foram geradas anteriormente no mesmo contexto.
    });

    const continuationText = completion.data.choices[0].text.trim(); // para gerar respostas para o chatbot
    responseText += " " + continuationText;
    lastChar = continuationText.charAt(continuationText.length - 1); 
  }

  // enviar a resposta
  bot.sendMessage(chatId, responseText); // é responsável por enviar a resposta gerada pelo chatbot para o usuário que enviou a mensagem original.
});

console.log("<-------->Seu BotTelegram está Ativo :D <-------->");
