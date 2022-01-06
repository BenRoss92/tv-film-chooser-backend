import express from 'express';

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send("Aaaaaaaah you found me!!!")
});

app.get('/title-entities', (req, res) => {
    res.send([
        {
          id: 1,
          title: 'Terminator 1',
        },
        {
          id: 2,
          title: 'Terminator 2',
        },
        {
          id: 3,
          title: 'Terminator 3',
        },
        {
          id: 4,
          title: 'Terminator 4',
        },
        {
          id: 5,
          title: 'Terminator 5',
        },
      ]);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});