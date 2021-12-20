const db = require('../db/index.js');
const { Waifu } = require('../models/index');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const waifus = [
        {
            name: 'Rem',
            age: 17,
            dere: 'Yandere',
            origin: 'Re:Zero',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F2bbd%2Fth%2Fpre%2Fi%2F2017%2F220%2F0%2F7%2Frem_png_by_mikaya_chan-dbjc2l8.png&f=1&nofb=1'
        },

        {
            name: 'Ram',
            age: 17,
            dere: 'Dorodere',
            origin: 'Re:Zero',
            img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn140.picsart.com%2F273239629030211.png&f=1&nofb=1'
        },

        {
            name: 'Asuna',
            age: 15,
            dere: 'Tsundere',
            origin: 'Sword Art Online',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvsbattles%2Fimages%2Fe%2Fef%2FASUNA.png%2Frevision%2Flatest%3Fcb%3D20170131182210&f=1&nofb=1'
        },

        {
            name: 'Kyouko Hori',
            age: 17,
            dere: 'Tsundere',
            origin: 'Horimiya',
            img: 'https://static.wikia.nocookie.net/horimiya/images/4/44/Kyouko_Hori_Anime_Design_2.png/revision/latest?cb=20201102140008'
        }
    ]

    await Waifu.insertMany(waifus)
    console.log('made waifus')
};

const run = async () => {
    await main();
    db.close();
};
run()