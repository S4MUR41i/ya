let handler =  m => m.reply(`
╭─「 Donasi • Non Pulsa 」
│ • Gopay [088227248988]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
