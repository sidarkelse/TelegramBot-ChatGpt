
﻿﻿ **------------------------------TelegramBot-ChatGpt--------------------------**
****
﻿ **#BotTelegram-Chatgpt**
Um chatbot desenvolvido em Node.js capaz de responder a mensagens do Telegram usando a API do OpenAI. Ele utiliza o modelo "text-davinci-003" para gerar respostas coerentes e relevantes com base na mensagem recebida.

﻿ **#Instalação**
Para usar o BotTelegram-Chatgpt, é necessário ter o Node.js e o gerenciador de pacotes npm instalados na sua máquina. Depois disso, basta clonar o repositório e instalar as dependências usando o comando npm install.

﻿ **#Configuração**
Antes de executar o bot, é preciso configurar algumas variáveis de ambiente. Você deve definir o token do seu bot do Telegram na variável tokenTelegram e a chave da sua API do OpenAI na variável keyOpenai.

﻿ **#Utilização**
Para iniciar o bot, basta executar o comando npm start. O bot irá ficar ouvindo as mensagens do Telegram e gerando respostas usando o modelo do OpenAI. As respostas serão enviadas de volta para o usuário que enviou a mensagem original.

﻿ **# Dependências**
node-telegram-bot-api - Para instalar é Só usar  npm install node-telegram-bot-ap
openai -  Para instalar é Só usar npm install openai


﻿ **#Sobre a configuração do Bot**  
 
 `model`: especifica qual modelo de linguagem da OpenAI deve ser usado. Neste caso, o modelo usado é o "text-davinci-003", que é um dos mais avançados em termos de geração de texto. Porém existem outros a qual você preferir adaptar

`temperature`: controla a criatividade e a diversidade do texto gerado. É um valor que varia de 0.1 a 1. Quanto maior o valor, mais criativa e diversificada será a resposta.

`Prompt`: é o texto que é fornecido como entrada para o modelo de linguagem. É a mensagem recebida pelo bot concatenada com a resposta anterior gerada pelo bot.
temperature: controla a criatividade e a diversidade do texto gerado. É um valor que varia de 0.1 a 1. Quanto maior o valor, mais criativa e diversificada será a resposta.

 `max_tokens`: controla a quantidade máxima de palavras que o modelo pode gerar na resposta. Neste caso, o limite é de 1000 palavras.
top_p: controla a diversidade da amostra de tokens gerados pelo modelo em cada etapa de geração de texto. É um valor entre 0 e 1. Quanto maior o valor, mais diversificada será a resposta.

 `frequency_penalty:` controla a probabilidade de o modelo gerar palavras que já foram geradas anteriormente no mesmo contexto. É um valor entre 0 e 1. Quanto maior o valor, menos frequente será a repetição de palavras na resposta gerada.

 `top_p`: controla a diversidade da amostra de tokens gerados pelo modelo em cada etapa de geração de texto. É um valor entre 0 e 1. Quanto maior o valor, mais diversificada será a resposta.
