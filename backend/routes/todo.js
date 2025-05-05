import express from 'express';
import {
  getAll,
  getOne,
  create,
  update,
  remove
} from '../controllers/todoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Todo
 *     description: CRUD operations for ToDo items
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     tags:
 *       - Todo
 *     summary: Retrieve all todos
 *     responses:
 *       200:
 *         description: A list of todos
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     tags:
 *       - Todo
 *     summary: Retrieve a single todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single todo item
 *       404:
 *         description: Not found
 */
router.get('/:id', getOne);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     tags:
 *       - Todo
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               isCompleted:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post('/', create);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     tags:
 *       - Todo
 *     summary: Update a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               isCompleted:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Not found
 */
router.put('/:id', update);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     tags:
 *       - Todo
 *     summary: Delete a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted successfully
 *       404:
 *         description: Not found
 */
router.delete('/:id', remove);

export default router;
