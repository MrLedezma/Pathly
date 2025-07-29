require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch((err) => console.error('Error en conexión MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend de Pathly funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
