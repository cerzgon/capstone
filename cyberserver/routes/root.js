// root.js
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})

// Catch-all route to handle undefined routes
router.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});

module.exports = router
