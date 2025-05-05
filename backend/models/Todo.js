import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title:       { type: String,  required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.model('Todo', todoSchema);
