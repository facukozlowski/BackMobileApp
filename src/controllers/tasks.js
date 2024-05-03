import { connect } from "../db.js";

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tasks");
  res.json(rows);
};

export const getTask = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

export const countTasks = (req, res) => {
  res.send("Cantidad de tareas");
};

export const deleteTask = async (req, res) => {
  const connection = await connect();
  const result = await connection.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  console.log(result);
  res.sendStatus(204);
};

export const createTask = async (req, res) => {
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO tasks(title, description) VALUES(?, ?)",
    [req.body.title, req.body.description]
  );
  res.json({
    id: result.insertId,
    ...req.body,
  });
};

export const editTask = async (req, res) => {
  const connection = await connect();
  const results = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
