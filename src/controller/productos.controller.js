import {pool} from '../db.js';

export const ping = async(req,res)=>{
  const [result] = await pool.query('SELECT "Pong" AS result')
  res.json(result[0])
};

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
};

// Definir ruta para obtener todos los productos
export const getProductos = async(req, res) => {
  const sql = 'SELECT * FROM productos';
  const [rows] = await pool.query(sql);
  res.json(rows);
};

// Definir ruta para obtener un producto por id
export const getProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// Definir ruta para elimimar un producto por su id
export const deleteProducto = async (req, res) => {
  try {
      const { id } = req.params;
      const result = await pool.query("DELETE FROM productos WHERE id = ?", id);
      res.json(result);

  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, categoria, imagen, descripcion, precio } = req.body;

    const [result] = await pool.query(
      "UPDATE productos SET nombre = IFNULL(?, nombre), categoria = IFNULL(?, categoria), imagen = IFNULL(?, imagen), descripcion = IFNULL(?, descripcion), precio = IFNULL(?, precio) WHERE id = ?",
      [nombre, categoria, imagen, descripcion, precio, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};