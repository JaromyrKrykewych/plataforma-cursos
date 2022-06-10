const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://JaromyrKrykewych:1071@cluster0.ymzcy.mongodb.net/myData?retryWrites=true&w=majority', {})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

//Cambiar nombre y usuario de la base de datos