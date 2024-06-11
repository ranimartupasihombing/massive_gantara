import express, { Router } from "express";
import { register, login, getUser, upload, allupload, userdata, getdatauser, registerumkm} from "../controller/auth.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await login(username, password);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});

// Register endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const result = await register(username, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});
router.post('/registerumkm', async (req, res) => {
    const { username, password } = req.body;
    const result = await registerumkm(username, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});

router.get('/user', async (req, res) => {
    const username = req.params.username;
    const user = await getUser(username);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});
router.post('/loginadm', (req, res) => {
    const { username, password } = req.body;
    const user = admin.find(u => u.username === username && u.password === password);
    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
router.post('/upload',upload);
router.get('/allupload',allupload);



// const upload = multer({ storage: storage });

// router.post('/', upload.single('gambar'), (req, res) => {
//   const { filename, path } = req.file;
//   const query = "INSERT INTO gambar (nama_file, lokasi) VALUES (?, ?)";
//   connection.query(query, [filename, path], (error, results, fields) => {
//     if (error) throw error;
//     res.json({ message: 'Gambar berhasil diunggah', filename, path });
//   });
// });
router.post('/userdata',userdata);
router.get('/getdatauser',getdatauser)
export default router;