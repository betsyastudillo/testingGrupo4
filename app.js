// Importar módulos necesarios
const express = require('express');
const { ObjectId, MongoClient, ServerApiVersion } = require('mongodb');
const crypto = require('crypto'); // Importar módulo para usar SHA256
const app = express();
const bodyParser = require('body-parser');

// Configuración básica
const port = 4000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json()); // Para manejar datos en formato JSON en las solicitudes
app.use(bodyParser.json());

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

// Función para generar hash con SHA256
function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 16, 'sha256') // 1000 iteraciones, 16 bytes
    .toString('hex');
  return { hashedPassword, salt };
}

// Función para verificar contraseñas
function verifyPassword(password, hashedPassword, salt) {
  const hashToCompare = crypto
    .pbkdf2Sync(password, salt, 1000, 16, 'sha256')
    .toString('hex');
  return hashToCompare === hashedPassword;
}

app.post('/hash', (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'La contraseña es requerida' });
    }

    // Generar hash con MD5
    const hash = crypto.createHash('md5').update(password).digest('hex');
    
    res.status(200).json({ password, hash });
});


// Ruta para registrar nuevas empresas
app.post('/empresas', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const dataBase = await connectToDatabase();
    const existingUser = await dataBase.collection(companyCollection).findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'La empresa ya está registrada' });
    }

    // Generar hash de la contraseña
    const { hashedPassword, salt } = hashPassword(password);
    const newUser = { name, email, password: hashedPassword, salt };

    // Insertar nueva empresa
    await dataBase.collection(companyCollection).insertOne(newUser);
    res.status(201).json({ message: 'Empresa registrada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar la empresa', error });
  }
});

// Ruta para inicio de sesión
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const dataBase = await connectToDatabase();
    const user = await dataBase.collection(companyCollection).findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = verifyPassword(password, user.password, user.salt);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
