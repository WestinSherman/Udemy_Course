const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description: 'Bacon ipsum dolor amet chicken rump doner tenderloin, andouille ground round strip steak t-bone short loin bacon alcatra brisket pastrami pig tail. Venison kevin t-bone spare ribs. Hamburger bacon pork loin kielbasa short loin leberkas burgdoggen doner strip steak landjaeger. Shoulder hamburger t-bone turducken cupim andouille ribeye sirloin porchetta ham pork chop picanha corned beef pancetta.',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})