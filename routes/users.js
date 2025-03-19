// routes/users.js 
const express = require('express'); 
const router = express.Router(); 
const User = require('../models/User'); 
 
// Get all users 
router.get('/', async (req, res) => { 
    try { 
        const users = await User.find(); 
        console.log('Fetched users:', users);  // Log dos usuários 
        res.json(users); 
    } catch (err) { 
        console.error('Error fetching users:', err);  // Log do erro 
        res.status(500).json({ message: err.message }); 
    } 
}); 
 
// Create a user 
router.post('/', async (req, res) => { 
    const user = new User({ 
        username: req.body.username, 
        password: req.body.password 
    }); 
    try { 
        const newUser = await user.save(); 
        console.log('Created user:', newUser);  // Log do novo usuário 
        res.status(201).json(newUser); 
    } catch (err) { 
        console.error('Error creating user:', err);  // Log do erro 
        res.status(400).json({ message: err.message }); 
    } 
}); 
 
// Update a user 
router.patch('/:id', async (req, res) => { 
    try { 
        const user = await User.findById(req.params.id); 
        if (!user) return res.status(404).json({ message: 'User not found' }); 
 
        if (req.body.username != null) user.username = req.body.username; 
        if (req.body.password != null) user.password = req.body.password; 
 
        const updatedUser = await user.save(); 
        console.log('Updated user:', updatedUser);  // Log do usuário atualizado 
        res.json(updatedUser); 
    } catch (err) { 
        console.error('Error updating user:', err);  // Log do erro 
        res.status(400).json({ message: err.message }); 
    } 
}); 
 
// Delete a user 
router.delete('/:id', async (req, res) => { 
    try { 
        const user = await User.findById(req.params.id); 
        if (!user) { 
            console.error(`User not found with id: ${req.params.id}`); 
            return res.status(404).json({ message: 'User not found' }); 
        } 
 
        await User.deleteOne({ _id: req.params.id }); 
        console.log(`Deleted user with id: ${req.params.id}`); 
        res.json({ message: 'User deleted' }); 
    } catch (err) { 
        console.error('Error deleting user:', err); 
        res.status(500).json({ message: err.message }); 
    } 
}); 
 
module.exports = router; 
