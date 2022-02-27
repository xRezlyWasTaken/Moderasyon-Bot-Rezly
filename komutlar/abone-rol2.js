let db = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "757563744716062820") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya 🥀 я є ẓ ʟ ʏ w ѧ ś ṭ ѧ ҡ є ṅ#4536 Bana Ulaşın```')

}

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`❌ **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonerol @rol__**`)
  
  
  db.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`✅ **Abone rolü başarıyla "${rol}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: 'el!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}