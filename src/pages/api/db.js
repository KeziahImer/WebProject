import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

async function getDatabase() {
    const db = await open({
        filename: './app.db',
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      type TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT
    );
  `);

    return db;
}

async function insertUser(username, password) {
    const db = await getDatabase();
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return getUserById(result.lastID);
}

async function getUserByUsername(username) {
    const db = await getDatabase();
    return db.get('SELECT * FROM users WHERE username = ?', [username]);
}

async function getUserById(id) {
    const db = await getDatabase();
    return db.get('SELECT * FROM users WHERE id = ?', [id]);
}

async function insertItem(title, description, type, price, image) {
    const db = await getDatabase();
    const result = await db.run('INSERT INTO items (title, description, type, price, image) VALUES (?, ?, ?, ?, ?)', [title, description, type, price, image]);
    return getItemById(result.lastID);
}

async function getItems() {
    const db = await getDatabase();
    return db.all('SELECT * FROM items');
}

async function getItemById(id) {
    const db = await getDatabase();
    return db.get('SELECT * FROM items where id = ?', [id]);
}

async function updateItem(id, title, description, type, price, image) {
    const db = await getDatabase();
    const result = await db.run('UPDATE items SET title = ?, description = ?, type = ?, price = ?, image = ? WHERE id = ?', [title, description, type, price, image, id]);
    console.log(result)
    return getItemById(id);
}

async function deleteItem(id) {
    const db = await getDatabase();
    await db.run('DELETE FROM items WHERE id = ?', [id]);
}

export { insertUser, getUserByUsername, insertItem, getItems, getItemById, updateItem, deleteItem };
