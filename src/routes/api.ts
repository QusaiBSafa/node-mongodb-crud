import { Router } from 'express';
import User from '../models/User';

const router = Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create a new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// Update a user
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// Delete a user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;