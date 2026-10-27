import express from 'express';

//Create a port
const PORT = 3007;
const app = express();
const bookings =[];

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

app.post('/submit-booking', (req, res) => {
    const vacation = req.body;
    vacation.timestamp = new Date();

    const book = req.body;
    book.timestamp = new Date();

    console.log(vacation);

    bookings.push(vacation);
    console.log(vacation);

    res.sendFile(`${import.meta.dirname}/views/confirm.html`);

})

app.listen(PORT, () => {
    console.log(`Sever is running at
        http://localhost:${PORT}`)
})


