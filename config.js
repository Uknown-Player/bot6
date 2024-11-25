// Script Alwaysahanz V5

require("./database/module")

//GLOBAL PAYMENT
global.storename = "..."
global.dana = ""
global.qris = "-"


// GLOBAL SETTING
global.owner = "639813411437"
global.namabot = "Finic V5"
global.nomorbot = "6282121880152"
global.namaCreator = "Silfy"
global.linkyt = "https://www.youtube.com/@" // btw lom ada cik yt nya, insyaallah kpn" tak upload 😋😋
global.autoJoin = false
global.antilink = false
global.versisc = '5.0'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://files.catbox.moe/2jvkjo.png'
global.thumb = 'https://files.catbox.moe/2jvkjo.png'
global.isLink = "https://whatsapp.com/channel/"
global.packname = "Bugs"
global.author = "Alwaysahanz"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})