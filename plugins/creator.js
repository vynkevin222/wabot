function handler(m) {
   let listOwner = new Array()
  for (let i of owner.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net')) {
  	listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Bang Finn\nitem1.TEL;waid=6285732415700:6285732415700\nitem1.X-ABLabel:👑 Creator\nitem2.EMAIL;type=INTERNET:vinxnon@leyscoders.com\nitem2.X-ABLabel:📧 Email\nitem3.URL:https://api-sneazy.herokuapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region\nitem5.X-ABLabel:⚔️ SNEAZY - BOT DEVELOPER\nEND:VCARD`})
   }
  let send = this.sendMessage(m.chat, { displayName: listOwner.length + ' kontak', contacts: listOwner }, 'contactsArrayMessage', { quoted: m })
return m.reply('Chat owner *P, & sv*\n\n *Ga ada sopan santun*')
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler


//PA PE PA PE SV sv sv NGTD LU
