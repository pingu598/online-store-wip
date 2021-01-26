const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.6jcam.mongodb.net/online-store?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number
})

const Item = mongoose.model('Item', itemSchema)

const item = new Item({
    name: "Test item",
    price: 300
})

item.save().then(response => {
  console.log('item saved!')
  mongoose.connection.close()
})