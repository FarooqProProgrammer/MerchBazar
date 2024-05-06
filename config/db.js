var mongoose = require('mongoose');
require('dotenv').config();

// module.exports = mongoose.connect(process.env.LOCAL_DB).then((res)=>{
//     console.log('Database is Successfully Connect')
// }).catch((error)=>{
//     console.log(error)
// })

module.exports = mongoose.connect('mongodb+srv://farooq123:farooq123@cluster0.ijdh8yd.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('Database is Successfully Connect')
}).catch((error)=>{
    console.log(error)
})