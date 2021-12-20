const db = require('../db/index.js');
const { Gift } = require('../models/index');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const gifts = [
        {
            name: 'Bluebells',
            quantity: 0,
            price: 5,
            desc: 'They represent kindness.',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fbluebell-morning-glory-flower-png-18.png&f=1&nofb=1'
        },
        {
            name: 'Aster',
            quantity: 0,
            price: 5,
            desc: 'Can be a symbol of love; daintiness and charm',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F231540%2Fisolated%2Fpreview%2Fdc6857418883c9c7d699c01c4b2bab63-watercolor-flower-aster-by-vexels.png&f=1&nofb=1'
        },

        {
            name: 'Milk Chocolate',
            quantity: 0,
            price: 10,
            desc: 'Well, it is milk chocolate',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fchocolate-clipart-cartoon-1.png&f=1&nofb=1'
        },

        {
            name: 'White Chocolate',
            quantity: 0,
            price: 10,
            desc: 'Well, it is white chocolate',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-PN2oXCmN_RU%2FT0_hBxtNGGI%2FAAAAAAAAKPc%2F3-r8RLvd2Ss%2Fs1600%2FimagensPNGchocolate%2B(2).png&f=1&nofb=1'
        }

    ]
    await Gift.insertMany(gifts)
    console.log('gifts displaying')
} 
const run = async () => {
    await main()
    db.close()
}
run()