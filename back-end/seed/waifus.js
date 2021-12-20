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
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F9038%2Ff%2F2014%2F263%2F2%2Fa%2Fhorimiya___by_ooali_monoo-d7zyg29.png&f=1&nofb=1'
        },

        {
            name: 'Urbosa',
            age: 47,
            dere: 'Kuudere',
            origin: 'Breath of the Wild',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Ffictionalcrossover%2Fimages%2F7%2F7d%2FWWG_amiibo_Urbosa.png%2Frevision%2Flatest%2Fscale-to-width-down%2F140%3Fcb%3D20180915233925&f=1&nofb=1'
        },

        {
            name: 'Erina Nakiri',
            age: 15,
            dere: 'Tsundere',
            origin: 'Shokugeki no Souma',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F0a402963-ac09-48a2-a194-fa5e34e3cfd5%2Fdd7jx14-0f8a42e7-3339-458e-b066-eafcb14f9464.png%2Fv1%2Ffill%2Fw_178%2Ch_250%2Cstrp%2Fnakiri_erina___shokugeki_no_soma_by_amassu_dd7jx14-250t.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU1NiIsInBhdGgiOiJcL2ZcLzBhNDAyOTYzLWFjMDktNDhhMi1hMTk0LWZhNWUzNGUzY2ZkNVwvZGQ3angxNC0wZjhhNDJlNy0zMzM5LTQ1OGUtYjA2Ni1lYWZjYjE0Zjk0NjQucG5nIiwid2lkdGgiOiI8PTM5NTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IzG5uYXon2AsHxFrx9pgn4mY5DzrDJZPRQG0zT8NXRI&f=1&nofb=1'
        },

        {
            name: 'Zenitsu Agatsuma',
            age: 16,
            dere: 'Dandere',
            origin: 'Demon Slayer',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn130.picsart.com%2F305531314055211.png%3Fr1024x1024&f=1&nofb=1'
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