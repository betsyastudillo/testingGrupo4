// Importar módulos necesarios
const express = require('express');
const { ObjectId, MongoClient, ServerApiVersion } = require('mongodb');
const argon2 = require('argon2'); // Cambiado de bcryptjs a argon2
const app = express();

// Configuración básica
const port = 4000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json()); // Para manejar datos en formato JSON en las solicitudes

// Conectar a MongoDB Atlas
const uri = "mongodb+srv://kenGr:asdf-13579@ken.zmmwe.mongodb.net/?retryWrites=true&w=majority&appName=Ken";
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true }
});

const db = "tuBaseDeDatos";
const companyCollection = "empresas";
const appCollection = "Aplicacion";
const userCollection = "Usuarios";

async function connectToDatabase() {
  if (!client.isConnected) await client.connect();
  return client.db(db);
}

// Ruta para registrar nuevas empresas
app.post('/empresas', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const dataBase = await connectToDatabase();
    // Verificar la existencia de la empresa
    const existingUser = await dataBase.collection(companyCollection).findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'La empresa ya está registrada' });
    }

    // Encriptar la contraseña con argon2
    const hashedPassword = await argon2.hash(password);
    const newUser = { name, email, password: hashedPassword };

    // Insertar nueva empresa
    await dataBase.collection(companyCollection).insertOne(newUser);
    res.status(201).json({ message: 'Empresa registrada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar la empresa', error });
  }
});

// Ruta para registrar usuarios
app.post('/usuarios', async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = (await connectToDatabase()).collection(userCollection);
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ mensaje: 'El usuario ya está registrado en la base de datos' });
    }
    
    // Encriptar la contraseña con argon2
    const hashedPassword = await argon2.hash(password);
    const newUser = { email, password: hashedPassword };
    await users.insertOne(newUser);

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al registrar el usuario', error });
  }
});

/* 
// Ruta para iniciar sesión
app.post('/empresas/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const collection = await connectToDatabase();
    
    // Buscar el usuario por email
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña con argon2
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});
*/

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
