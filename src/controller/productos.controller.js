import {pool} from '../db.js';

export const ping = async(req,res)=>{
  const [result] = await pool.query('SELECT "Pong" AS result')
  res.json(result[0])
}

// Ruta que se encargará de recibir los datos del formulario
export const createProducto =  async(req, res) => {
  // Obtener los datos del formulario
  const nombre = req.body.nombre;
  const categoria = req.body.categorias;
  const imagen = req.body.imagen;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;

  // Insertar los datos del formulario en la base de datos
  const sql = 'INSERT INTO productos (nombre, categoria, imagen, descripcion, precio) VALUES (?, ?, ?, ?, ?)';
  pool.query(sql, [nombre, categoria, imagen, descripcion, precio], (err, result) => {
    if (err) throw err;
    console.log('Datos del formulario insertados correctamente');
  });

  // Redirigir al usuario a una página de confirmación
  res.send("datos agregados");
}

// Definir ruta para obtener todos los productos
export const obtenerProductos = async(req, res) => {
  const sql = 'SELECT * FROM productos';
  const [rows] = await pool.query(sql)
  res.json(rows);
}

// Definir ruta para obtener un producto por id
export const obtenerProductosId = async(req, res) => {
  const sql = 'SELECT * FROM productos';
  const [rows] = await pool.query(sql)
  res.json(rows);
}