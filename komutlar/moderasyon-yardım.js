const Discord = require('discord.js');//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
const db = require('quick.db');

exports.run = async (client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "757563744716062827") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya ⚘ я є ẓ ʟ ʏ w ѧ ś ṭ ѧ ҡ є ṅ#4536 Bana Ulaşın```')

}

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "xR!";//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
  const embed = new Discord.MessageEmbed()

let yardım = new Discord.MessageEmbed()  
.setColor('#e7000e')
.addField('Rezly Bot Moderasyon Yardım Menüsü',`

>> 🤬 **xR!küfürengel** : Sunucunuzda Küfür Yasaklar
>> **xR!reklam-engel** : Sunucunuzda Reklam Yasaklar
>> **xR!napimengel** : Sunucunuzda Napim Diyemezler
>> **xR!ban** : Etiketlediğiniz Kullancıyı Sunucudan Yasaklar
>> **xR!prefix** : Prefix Değiştirir
>> **xR!istatistik** : Botun Ne Durumda Oldugunu Görürsünüz.
>> **xR!bakım** : Botu Bakıma Alırsınız (Sadece bot sahibi kullanabilir)
>> **xR!sil** : Mesaj silersiniz (max 300)
>> **xR!temizle** : Mesaj silersiniz (max 300)
>> **xR!sohbet-aç** : Sohbeti açarsınız
>> **xR!sohbet-kapat** : Sohbeti kapatırsınız
>> **xR!patlat** : Kanalı havaya uçurursunuz
>> **xR!davet** : Botumu Davet Edersiniz :)
==========TİKTOK ABONE ROL===========
>> **| xR!abone-yetkili-rol |** : Abone Yetkilisini Seçer.

>> **| xR!abone-rol |** : Vericeğiniz Rolü ayarlarsınız.

>> **| xR!abone-log |** : Log mesajınn gitceği yer seçilir.

`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=944320141053808700&permissions=8&scope=bot) - [Destek Sunucumuz](https://dsc.gg/bossrezly)", )
    .setImage("https://media.discordapp.net/attachments/931167580960477194/944323514016608307/SPOILER_Hnet-image.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardım'],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon-yardım",
    description: "Moderasyon Komutları Gösterir."
};//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS