import express from "express";
import cors from "cors";
import client from "./redis.js";

const app = express();
app.use(express.json());
app.use(cors());

// ---- Creating a session ----
app.post("/login", async (req, res) => {
    const { user_id, username } = req.body;

    const sessionKey = `session:${user_id}`;

    const sessionData = JSON.stringify({
        user_id,
        username,
        createdAt: Date.now()
    });

    await client.setEx(sessionKey, 3600, sessionData);

    res.json({ message: "Session créée", sessionKey });
});

// ---- Sending a notification ----
app.post("/notify", async (req, res) => {
    const { user_id, message } = req.body;

    const notifKey = `notifications:${user_id}`;

    await client.lPush(notifKey, message);
    await client.expire(notifKey, 3600);

    res.json({ message: "Notification envoyée" });
});

// ---- Getting notifications ----
app.get("/notifications/:user_id", async (req, res) => {
    const { user_id } = req.params;

    const notifKey = `notifications:${user_id}`;
    const notifications = await client.lRange(notifKey, 0, -1);

    res.json({ notifications });
});

app.listen(4003, () => {
    console.log("Redis microservice running on port 4003");
});
