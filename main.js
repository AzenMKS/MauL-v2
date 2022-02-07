//UDAH GUA KASIH NO ENC NI;)
//KEBANGETAN KALO BELUM SUBSCRIBE
//HAYO LAH KAWAN MANA HATI KALIAN;)
//Subscribe "Herman Chanel"
//Hargai Bang;(
const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./herman.js')
nocache('../herman.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (herman = new WAConnection()) => {
	herman.logger.level = 'warn'
	console.log(color(figlet.textSync('Maul', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SELAMAT TAHUN BARU 2022]', 'yellow'), color('\nSUPORT MAUL BOTZ', 'yellow'))
	console.log(color('SC INI GRATIS YA BAYAR PAKE SUBSCRIBER', 'yellow'))
	console.log(color('SEMANGAT RECODE', 'yellow'))
	herman.browserDescription = ["Maul Botz", "Chrome", "3.0.0"];

	// Menunggu QR
	herman.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA WAKTU 20 DETIK!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && herman.loadAuthInfo(`./${setting.sessionName}.json`)
	herman.on('connecting', () => {
		console.log(color('[ Maul Botz ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "H",
    "HE",
    "HER",
    "HERM",
    "HERMA",
    "HERMAN",
    "HERMAN J",
    "HERMAN JE",
    "HERMAN JEL",
    "HERMAN JELE",
    "HERMAN JELEK",
    "HERMAN JELEK T",
    "HERMAN JELEK TA",
    "HERMAN JELEK TAP",
    "HERMAN JELEK TAPI",
    "HERMAN JELEK TAPI B",
    "HERMAN JELEK TAPI BO",
    "HERMAN JELEK TAPI BOO",
    "HERMAN JELEK TAPI BOON",
    "HERMAN JELEK TAPI BOONG",
    "HERMAN JELEK TAPI BOONG A",
    "HERMAN JELEK TAPI BOONG AW",
    "HERMAN JELEK TAPI BOONG AWK",
    "HERMAN JELEK TAPI BOONG AWKO",
    "HERMAN JELEK TAPI BOONG AWKOW",
    "HERMAN JELEK TAPI BOONG AWKOWK",
    "HERMAN JELEK TAPI BOONG AWKOWKO",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 Y",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT H",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HE",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HER",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERM",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMA",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN C",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CH",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CHA",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CHAN",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CHANE",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CHANEL",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CHANEL Y",
    "HERMAN JELEK TAPI BOONG AWKOWKO ?不 YT HERMAN CHANEL YO"
  ]}

	//connect
	herman.on('open', () => {
		console.log(color('[HC]', 'white'), color('BOT SUDAH SIAP DI GUNAKAN'));
	})

	// session
	await herman.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(herman.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	herman.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	herman.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	herman.on('group-participants-update', async (anu) => {
		await welcome(herman, anu)
	})

	herman.on('chat-update', async (message) => {
		require('./herman.js')(herman, message)
	})
}

starts()