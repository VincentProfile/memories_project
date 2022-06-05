import express from 'express';

const router = express.Router();

// runs callback function if user visit 'localhost:5001/posts/*'
router.get('/', (req, res) => {
    res.send('THIS WORKS!')
})

export default router;