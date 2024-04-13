const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// Token du bot Telegram
const token = '6851895949:AAFXKR96Xh715aIctSLf5wQnNEU2atE5Kgs';

// Tutoriels dans différentes langues avec leurs liens de vidéos
const tutorials = {
  lang_fr: {
    videoLink: 'https://t.me/jetluckysolkah/233',
    description: `
      La première étape consiste à créer votre compte sur 1Win. C'est le seul site de paris en ligne auquel je fais confiance et le seul où mes signaux fonctionnent ! ✅

      Pour créer votre compte, il vous suffit de cliquer sur ce lien :https://1wnurc.com/?open=register#4vwr

      🔥BONUS DE 500%🔥

      Après avoir créé votre compte, il vous suffit de faire votre dépôt. ✅

      Sur la plateforme 1Win, cliquez simplement sur le bouton "Dépôt". ✅

      Ils acceptent divers moyens de paiement, vous n'aurez donc aucun problème ! ✅ Après avoir effectué votre dépôt, passons maintenant à la phase de gain d'argent ! 😍

      Tout d'abord, vous devez trouver le jeu Mines sur 1Win 🏆

      Suivez les étapes de la vidéo ci-dessous (cliquez simplement sur la vidéo)

   
      

      ☎️ Si vous avez des questions, n'hésitez pas à me contacter sur le support : @medatt00
    
      
      
      
      
      
      
      
      
      
      
    `,
  },
  lang_en: {
    videoLink: 'https://t.me/jetluckysolkah/234',
    description: `
      Here is the tutorial in English.
      
    `,
  },
  lang_ar: {
    videoLink: 'https://t.me/jetluckysolkah/234',
    description: `
    الخطوة الأولى هي إنشاء حسابك على 1Win. هذا هو موقع المراهنة الوحيد عبر الإنترنت الذي أثق به والموقع الوحيد الذي تعمل فيه إشاراتي! ✅ لإنشاء حسابك، ما عليك سوى النقر على هذا الرابط: https://1wnurc.com/?open=register#4vwr 🔥500% BONUS🔥 بعد إنشاء حسابك، كل ما عليك فعله هو إيداع مبلغك. ✅ على منصة 1Win، ما عليك سوى النقر على زر "الإيداع". ✅ يقبلون طرق دفع مختلفة، لذلك لن تواجهك أي مشاكل! ✅ بعد إجراء إيداعك، دعنا ننتقل الآن إلى مرحلة الربح! 😍 أولاً، عليك العثور على لعبة Mines على 1Win 🏆 اتبع الخطوات الموجودة في الفيديو أدناه (فقط اضغط على الفيديو) ☎️ إذا كان لديك أي أسئلة، فلا تتردد في الاتصال بي على الدعم: @ medatt00
    
    `,
  },
  lang_es: {
    videoLink: 'https://t.me/jetluckysolkah/234',
    description: `
   
   
   El primer paso es crear su cuenta en 1Win.  ¡Éste es el único sitio de apuestas online en el que confío y el único donde funcionan mis señales!  ✅

       Para crear su cuenta, simplemente haga clic en este enlace: https://1wnurc.com/?open=register#4vwr

       🔥500% BONIFICACIÓN🔥

       Después de crear su cuenta, todo lo que necesita hacer es realizar su depósito.  ✅

       En la plataforma 1Win, simplemente haga clic en el botón "Depositar".  ✅

       Aceptan varios métodos de pago, ¡así que no tendrás ningún problema!  ✅ Después de realizar tu depósito, ¡pasemos a la fase de ganancias!  😍

       Primero que nada, debes encontrar el juego Mines en 1Win 🏆

       Siga los pasos en el video a continuación (basta clicar en el video)

   
      

       ☎️ Si tienes alguna pregunta, no dudes en contactarme en soporte: @medatt00
   
   
    `,
  },
  lang_pt: {
    videoLink: 'https://t.me/jetluckysolkah/234',
    description: `
      
      
      O primeiro passo é criar sua conta no 1Win. Este é o único site de apostas online em que confio e o único onde os meus sinais funcionam! ✅ Para criar sua conta, basta clicar neste link: https://1wnurc.com/?open=register#4vwr 🔥500% BÔNUS🔥 Após criar sua conta, tudo que você precisa fazer é fazer seu depósito. ✅ Na plataforma 1Win, basta clicar no botão “Depositar”. ✅ Aceitam diversas formas de pagamento, então você não terá problemas! ✅ Após realizar seu depósito, vamos passar para a fase de ganhos! 😍 Primeiro de tudo, você precisa encontrar o jogo Mines no 1Win 🏆 Siga os passos do vídeo abaixo (basta clicar no vídeo) ☎️ Se tiver alguma dúvida, fique à vontade para entrar em contato comigo no suporte: @medatt00
      
      
      
           
    `,
  },
};

// Créer une instance du bot
const bot = new TelegramBot(token, { polling: true });

// Commande /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Bienvenue ! Choisissez votre langue :', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Français 🇫🇷', callback_data: 'lang_fr' }],
        [{ text: 'English 🇬🇧', callback_data: 'lang_en' }],
        [{ text: 'عربي 🇸🇦', callback_data: 'lang_ar' }],
        [{ text: 'Español 🇪🇸', callback_data: 'lang_es' }],
        [{ text: 'Português 🇵🇹', callback_data: 'lang_pt' }],
      ],
    },
  });
});

// Gestion des réponses aux boutons
bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  // Envoyer la vidéo dans le chat du bot en fonction de la langue sélectionnée
  if (data in tutorials) {
    const { videoLink, description } = tutorials[data];
    bot.sendMessage(chatId, description)
      .then(() => {
        bot.sendVideo(chatId, videoLink);
      })
      .catch((err) => {
        console.log('Erreur lors de l\'envoi du message :', err);
      });
  } else {
    bot.sendMessage(chatId, 'Veuillez choisir une langue parmi les options.');
  }
});

// Événement déclenché lorsque quelqu'un démarre le bot
bot.on('new_chat_members', (msg) => {
  const chatId = '814566054'; // ID de l'admin

  const userId = msg.new_chat_member.id;
  const userName = msg.new_chat_member.username;

  const message = `Nouvel utilisateur rejoint le bot :\nID: ${userId}\nUsername: ${userName}`;

  // Envoyer le message à l'admin
  bot.sendMessage(chatId, message);
});

// HTTP server for keep-alive
http.createServer(function (req, res) {
  res.write("Je suis en ligne");
  res.end();
}).listen(8080);

console.log('Bot is running...');
