// Importar módulos necesarios
const express = require('express');
const { ObjectId, MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcryptjs');
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

// Ruta para registrar un nuevas empresas
app.post('/empresas', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const dataBase = await connectToDatabase();
    // Verificar la existencia de la empresa
    const existingUser = await dataBase.collection(companyCollection).findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'La empresa ya está registrado'});
      //Devolver al incio de sección
      //
      //
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword};

    // Insertar nueva empresa
    await dataBase.collection(companyCollection).insertOne(newUser);
    res.status(201).json({ message: 'Empresa registrada correctamente' }); //Es inecesario 
    //devolver al inicio de sección
    //
    //
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar la empresa',error });
  }
});

//Ruta de consulta para lista de empresa
app.get('/empresas', async(req, res) => {
  try {
    const companiesCollection = (await connectToDatabase()).collection(companyCollection);
    const companies = await companiesCollection.find().toArray();
    res.json(companies);
  } catch (error) {
    res.status(404).json({mensaje: "Error en la base de datos"});
  }
});

//Ruta de consulta de una sola empresa

app.get('/empresas/:id', async(req, res) => {
  try {
    const {id} = req.params;

    if(!ObjectId.isValid(id)){
      return res.status(400).json({mensaje: "El id no es válido"});
    }
    const companiesCollection = (await connectToDatabase()).collection(companyCollection);
    const company = await companiesCollection.findOne({_id: new ObjectId(id)});

    if (!company){
      return res.status(404).json({mensaje: "La empresa no fue encontrada"});
    }

    res.json(company);

  } catch (error) {
    res.status(500).json({mensaje: "Error en la base de datos", error});
  }

  res.send('GET request to the homepage')
});

//Ruta de actualizacion para la empresa
app.put('/empresas/:id', async function (req, res) {
  const { id, name, password } = req.body;
  try {
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message: "El id no es válido"});
    }
    const companiesCollection = (await connectToDatabase).collection(companyCollection);
    await companiesCollection.updateOne({id},{$set: {name, password}});
    res.status(200).json({ success: true, message: 'Información actualizada correctamente' });
  } catch (error) {
    res.status(404).json({message: 'Error al ejecutar'});
  }
  
});

//Ruta para el registro de aplicaciones
app.post('/empresas/:id/aplicaciones', async(req, res)=> {

  const {name, urlImage, numVist, score, review} = req.body;
  const {id} = req.params;
  try {
    const apps = (await connectToDatabase()).collection(appCollection);
    const existingApp = await apps.findOne({ name });
    if(existingApp){
      return res.status(400).json({mensaje: "La app ya esta registrada en la base de datos"});
    }

    const newApp = {name, urlImage, numVist, score, review, id};
    await apps.insertOne(newApp);
  } catch (error) {
    return res.status(500).json({mensaje: "error al guardar en el registros de aplicaciones", error});
  }
  
});


//Ruta para obtener el listado de aplicaciones
app.get('empresas/:id/aplicaciones', async(req, res) => {
  try {
    const appsCollection =(await connectToDatabase()).collection(appCollection);
    const apps = await appsCollection.find().toArray();
    res.json(apps);
  } catch (error) {
    res.status(404).json({mensaje: "error en la base de datos", error});
  }
});

//Ruta para el registro de usuarios

app.post('/usuarios', async(req, res)=> {

  const {email, password} = req.body
  try {
    const users = (await connectToDatabase()).collection(userCollection);
    const existingUser = await users.findOne({ email });
    if(existingUser){
      return res.status(400).json({mensaje: "El usuario ya esta registrado en la base de datos"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {email, password: hashedPassword};
    await users.insertOne(newUser);
  } catch (error) {
    return res.status(500).json({mensaje: "error al guardar en el registros de usuarios", error});
  }
  
});


//Ruta para obtener el listado de aplicaciones
app.get('/usuarios', async(req, res) => {
  try {
    const usersCollection =(await connectToDatabase()).collection(userCollection);
    const users = await usersCollection.find().toArray();
    res.json(users);
  } catch (error) {
    res.status(404).json({mensaje: "error en la base de datos", error});
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

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
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
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // Usamos memoria para almacenar la imagen como un buffer

// Ruta para actualizar la foto de perfil
app.post('/updateProfilePic', upload.single('photo'), async (req, res) => {
    const { email } = req.body;
    const photo = req.file ? req.file.buffer.toString('base64') : null;

    if (!photo) {
        return res.status(400).json({ success: false, message: 'No se ha enviado una foto válida.' });
    }

    try {
        const collection = await connectToDatabase();
        const user = await collection.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
        }

        // Actualizamos la foto en la base de datos
        await collection.updateOne(
            { email },
            { $set: { photo } }
        );

        res.status(200).json({ success: true, message: 'Foto de perfil actualizada exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error al actualizar la foto.' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

