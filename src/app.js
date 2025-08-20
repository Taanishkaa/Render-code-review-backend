const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ configure CORS to only allow your frontend domain
app.use(cors({
    origin: "https://vercel-code-review-frontend.vercel.app/",  // replace with actual Vercel frontend URL
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
