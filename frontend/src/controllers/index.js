//Insertar un nuevo producto en la BD
exports.create = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`INSERT INTO productos SET ? `, [req.body], (err, result) => {
      if (err) return res.send(err);
      res.send("Creacion Exitosa!");
    });

  });
};

//Controlador para traer todos los productos de la BD
exports.getAll = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`SELECT * FROM productos`, (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    });
  });
}

//Controlador para solo un producto de la BD a traves del id
exports.getOne = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`SELECT * FROM productos WHERE id = ?`, [req.params.value], (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    });
  });
};

//Actulizar producto de la BD
exports.update = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`UPDATE productos SET ? WHERE id = ?`, [req.body, req.params.value], (err, result) => {
      if (err) return res.send(err);
      res.send("Actualizacion Exitosa!");
    });
  });
};

//Eliminar producto de la BD
exports.deleteItem = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`DELETE FROM productos WHERE id = ?`, 
    [req.params.value],
    (err, result) => {
      if (err) return res.send(err);
      res.send("Eliminacion Exitosa!");
    });
  });
};