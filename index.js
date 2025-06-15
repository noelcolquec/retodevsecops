const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Servidor Ncolque'));
app.listen(3000, () => console.log('Servidor NCOLQUE ejecutándose en el puerto 3000'));
