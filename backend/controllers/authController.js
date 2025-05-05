import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const SALT_ROUNDS = 10;

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // 1) check existing
    if (await User.findOne({ email })) {
      return res.status(409).json({ message: 'Email already in use' });
    }
    // 2) hash
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    // 3) create
    const user = await User.create({ username, email, password: hash });
    // 4) respond (omit password)
    const { password: _, ...userData } = user.toObject();
    res.status(201).json(userData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1) find user
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    // 2) compare
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    // 3) sign JWT
    const token = jwt.sign(
      { sub: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
