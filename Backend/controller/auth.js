import { query } from "../database/Db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

const getUser = async () => {
    const command = 'SELECT * FROM user'; // Select all users
    const result = await query(command,[]);
    return result;
};
async function login (username, password) {
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('Email and password are required');
        }
        const users = await getUser();
        // Fetch user from database
        const user = users.find(user => user.username === username);
        console.log("User found:", user);
        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            return { success: true, message: 'Login successful' };
        } else {
            console.log(erorpw);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function register(username, password) {
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('Username and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM user WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            throw new Error('Username is already taken');
        }

        // Add new user to the database
        const command = 'INSERT INTO user (username, password) VALUES (?, ?)';
        await query(command, [username, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function registerumkm(username, password) {
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('Username and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM umkm WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            throw new Error('Username is already taken');
        }
        // Add new user to the database
        const command = 'INSERT INTO umkm (username, password) VALUES (?, ?)';
        await query(command, [username, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
const upload = async (req, res) => {    try {
    const {Jenis, Nama, Gambar} = req.body;
      await query ("INSERT INTO upload (Jenis, Nama, Gambar) VALUES (?, ?, ?)",[Jenis, Nama ,Gambar])
    return res.status(200).json({msg : " ditambahkan"});    } 
    catch (error) {
    return res.status(500).json({msg : "Terjadi kesalahan"});    }
}
const allupload = async (req, res) => {
    try {
        const up = await query (`SELECT * FROM upload`);
        return res.status(200).json({success : true, data: up });
    } catch (error) {
        console.error("Message: ", error);
        return res.status(500).json({msg: "Terjadi kesalahan"});
    }
};
const userdata = async (req, res) => {   
     try {
    const {Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel, Gambar} = req.body;
      await query ("INSERT INTO userdata (Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel, Gambar)  VALUES (?, ?, ?, ?, ?, ?, ?)",[Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel, Gambar])
    return res.status(200).json({msg : " ditambahkan"});    } 
    catch (error) {
    return res.status(500).json({msg : "Terjadi kesalahan"});    }
}
const getdatauser = async (req, res) => {
    try {
        const up = await query (`SELECT * FROM userdata`);
        return res.status(200).json({success : true, data: up });
    } catch (error) {
        console.error("Message: ", error);
        return res.status(500).json({msg: "Terjadi kesalahan"});
    }
};
  
  
export {login, register, getUser, upload, allupload, userdata, getdatauser, registerumkm};