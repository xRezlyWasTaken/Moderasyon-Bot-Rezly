const Discord = require('discord.js');
const db = require('quick.db');

let ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetersiz **yetki!**")
  
  if (!args[0]){
    message.channel.send('** Küfür-engel kapat/aç Yazmalısın**')
  }
  if (args[0] === 'aç'){
    message.channel.send("** Küfür Engel Aktıf**")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('** Küfür Engel Başarıyla Kapatıldı**')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfürengel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}