// Importar módulos necesarios
const express = require('express');
const { ObjectId, MongoClient, ServerApiVersion } = require('mongodb');
const crypto = require('crypto');
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
const companyCollection = "Empresas";
const appCollection = "Aplicaciones";
const userCollection = "Usuarios";

async function connectToDatabase() {
  if (!client.isConnected) await client.connect();
  return client.db(db);
}

// Obtener la dirección IP local de la máquina
const ipAddress = '10.170.134.161';  // Sustituye con la IP local de tu máquina

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


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
//-------------------------------------------------- EMPRESAS -----------------------------------------
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
    const {hashedPassword, salt} = hashPassword(password);
    const newCompany = {name, email, password: hashedPassword}

    // Insertar nueva empresa
    await dataBase.collection(companyCollection).insertOne(newCompany);
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
app.put('/empresas', async (req, res) => {
  const { email, name, password } = req.body; // Recibimos el email, el nombre y la contraseña para actualizar

  try {
    const dataBase = await connectToDatabase();
    // Verificar si la empresa existe
    const existingUser = await dataBase.collection(companyCollection).findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'La empresa no existe' });
    }

    // Crear el objeto de actualización
    const updateData = {};

    if (name) {
      updateData.name = name; // Solo actualizar si se proporciona un nuevo nombre
    }

    if (password) {
      const { hashedPassword, salt } = hashPassword(password);
      updateData.password = hashedPassword;
    }

    // Actualizar la empresa
    await dataBase.collection(companyCollection).updateOne(
      { email },
      { $set: updateData } // El operador $set permite actualizar solo los campos proporcionados
    );

    res.status(200).json({ message: 'Empresa actualizada correctamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la empresa', error });
  }
});

//Ruta para eliminar empresa
app.delete('/empresas', async (req, res) => {
  const { email } = req.body;
  try {
    const dataBase = await connectToDatabase();
    
    // Verificar si la empresa existe
    const existingCompany = await dataBase.collection(companyCollection).findOne({ email });
    if (!existingCompany) {
      return res.status(404).json({ message: 'La empresa no existe' });
    }

    // Eliminar la empresa
    await dataBase.collection(companyCollection).deleteOne({ email });
    res.status(200).json({ message: 'Empresa eliminada correctamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la empresa', error });
  }
});

//--------------------------------------------------- APLICACIONES ----------------------------------

//Ruta para el registro de aplicaciones
app.post('/aplicaciones', async(req, res)=> {

  const {name, urlImage, numVist, score, review, category, companyEmail} = req.body;

  try {
    const apps = (await connectToDatabase()).collection(appCollection);
    const existingApp = await apps.findOne({ name });
    if(existingApp){
      return res.status(400).json({mensaje: "La app ya esta registrada en la base de datos"});
    }
    
    const companies = (await connectToDatabase()).collection(companyCollection);
    const company = await companies.findOne({ email: companyEmail }); // Busca la empresa por nombre (puedes usar email si prefieres)

    if (!company) {
      return res.status(404).json({ message: "La empresa no existe en la base de datos" });
    }
    const idCompany = company._id;

    const newApp = {name, urlImage, numVist, score, review, category, idCompany};
    await apps.insertOne(newApp);
  } catch (error) {
    console.log(error);
    return res.status(500).json({mensaje: "error al guardar en el registros de aplicaciones"});
  }
  
});


//Ruta para obtener el listado de aplicaciones
app.get('/aplicaciones', async(req, res) => {
  try {
    const appsCollection =(await connectToDatabase()).collection(appCollection);
    const apps = await appsCollection.find().toArray();
    res.json(apps);
  } catch (error) {
    res.status(404).json({mensaje: "error en la base de datos", error});
  }
});

//Ruta para actualizar aplicaciones
app.put('/aplicaciones/:id', async (req, res) => {
  const { name, urlImage, numVist, score, review, category, companyEmail } = req.body; // Campos a actualizar
  const { id } = req.params; // ID de la aplicación a actualizar

  try {
    const db = await connectToDatabase();
    const apps = db.collection(appCollection);

    // Verificar si la aplicación existe
    const existingApp = await apps.findOne({ _id: new ObjectId(id) });
    if (!existingApp) {
      return res.status(404).json({ message: "La aplicación no existe" });
    }

    // Buscar el idCompany
    const companies = db.collection(companyCollection);
    const company = await companies.findOne({ email: companyEmail }); 

    if (!company) {
      return res.status(404).json({ message: "La empresa no existe en la base de datos" });
    }
    const idCompany = company._id; 

    const updatedApp = {};

    if (name) updatedApp.name = name;
    if (urlImage) updatedApp.urlImage = urlImage;
    if (numVist) updatedApp.numVist = numVist;
    if (score) updatedApp.score = score;
    if (review) updatedApp.review = review;
    if (category) updatedApp.category = category;
    updatedApp.idCompany = idCompany; // Asociar la empresa con la aplicación

    // Actualizar la aplicación
    await apps.updateOne(
      { _id: new ObjectId(id) }, // Buscar por el ID de la aplicación
      { $set: updatedApp } // Solo actualizamos los campos proporcionados
    );

    res.status(200).json({ message: "Aplicación actualizada correctamente" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al actualizar la aplicación", error });
  }
});

//Ruta para el delete de aplicaciones
app.delete('/aplicaciones/:id', async (req, res) => {
  const { id } = req.params;  // El ID de la aplicación que se quiere eliminar

  try {
    const db = await connectToDatabase();
    const apps = db.collection(appCollection);

    const existingApp = await apps.findOne({ _id: new ObjectId(id) });
    
    if (!existingApp) {
      return res.status(404).json({ message: "La aplicación no existe" });
    }

    // Eliminar la aplicación de la base de datos
    await apps.deleteOne({ _id: new ObjectId(id) });

    // Responder con mensaje de éxito
    res.status(200).json({ message: "Aplicación eliminada correctamente" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar la aplicación", error });
  }
});
//========================================= USUARIOS ====================================================================================

app.post('/usuarios', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const usersCollection = (await connectToDatabase()).collection(userCollection);
    
    // Verificar si el usuario ya existe
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya está registrado' });
    }
    
    // Encriptar contraseña
    const newUser = { email, password };
    
    await usersCollection.insertOne(newUser);
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario', error });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usersCollection = (await connectToDatabase()).collection(userCollection);
    const users = await usersCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  
  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'El id no es válido' });
    }
    
    const usersCollection = (await connectToDatabase()).collection(userCollection);
    
    const updateData = {};
    if (email) updateData.email = email;
    if (password) {
      const { hashedPassword } = hashPassword(password);
      updateData.password = hashedPassword;
    }
    
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'El id no es válido' });
    }
    
    const usersCollection = (await connectToDatabase()).collection(userCollection);
    const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el usuario', error });
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
  console.log(`Servidor escuchando en http://${ipAddress}:${port}`);
});

