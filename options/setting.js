//Website api (jangan di ganti tomlol)
const api = "https://ronzxapis.my.id" //Apabila link api error segera lapor ke owner

//Free apikey (Apikey expired silahkan login terus ganti APIKEY dgn apikey lu)
const apikey = "APIKEY" //login di https://ronzxapis.my.id to get apikey || login di https://ronzxapis.my.id untuk mendapatkan apikey

//Other
const botName = "lymxbot" //Nama bot
const owner = ["60102810046","0"] //Ganti agar fitur owner bisa digunakan
const ownerNomer = "60102810046" //Nomor lu
const ownerName = "lynxaiman" //Nama lu
const email = "aimanmk1234@gmail.com" //Email lu
const youtube = "-" //Youtube lu kalau ngga punya kasih tanda strip "-"
const region = "Malaysia" //Region lu
const footer = "lynxBotz © 2022" //Seterah
const packname = "© lynxBotz" //Sticker wm ubah
const author = "Di Buat Oleh bot" //Sticker wm ubah nama lu
const sessionName = "session" //Ngga usah di ganti

//Image
const thumbnail = "./options/image/thumbnail.jpg" //Ngga usah di ganti
const qris = "./options/image/qris.jpg" //Ngga usah di ganti
const menfess = "./options/image/menfess.jpg" //Ngga usah di ganti
const source = "./options/image/source.jpg" //Ngga usah di ganti
const bc = "./options/image/bc.jpg" //Ngga usah di ganti
const responP = "./options/image/responP.jpg" //Ngga usah di ganti

//Message
const sp = "⭔"
const mess = {
	sukses: "Done🤗",
	admin: "Command ini hanya bisa digunakan oleh Admin Grup",
	botAdmin: "Bot Harus menjadi admin",
	owner: "Command ini hanya dapat digunakan oleh owner bot",
	prem: "Command ini khusus member premium",
	group: "Command ini hanya bisa digunakan di grup",
	private: "Command ini hanya bisa digunakan di Private Chat",
	wait: "⏳ Mohon tunggu sebentar...",
	errorLv: "Link yang kamu berikan tidak valid",
	errorApi: "Maaf terjadi kesalahan"
}

module.exports = { api, apikey, botName, owner, ownerNomer, ownerName, email, youtube, region, footer, packname, author, sessionName, thumbnail, qris, menfess, source, bc, responP, sp, mess }
