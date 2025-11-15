const express = require('express');
const router = express.Router();

// POST /user
router.post('/', (req, res) => {
    const { fname, email } = req.body;
    if (!fname || !email) {
        return res.status(400).json({ error: 'Missing fname or email' });
    }
    res.send(`Hello, ${fname}!`);
});

// GET /user/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`User ${id} profile`);
});

module.exports = router;
