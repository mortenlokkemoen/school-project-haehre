/*import express from "express";
import cors from "cors";

import { db } from "./api/db";
import { User } from "./interfaces/user.interface";

const app = express();
const PORT = 8000;

app.use(cors());

app.get('/', (req, res) => res.send(404));

app.get('/api/v1/users', (req, res) => {
    db.getUsers().then((users: User[]) => {
        res.send(users);
    });
});

app.listen(PORT, () => {
    console.log(`[backend]: Server is running on https://localhost:${PORT}`);
}) */