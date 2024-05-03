import { Router } from "express";
import {
  countTasks,
  createTask,
  deleteTask,
  editTask,
  getTask,
  getTasks,
} from "../controllers/tasks.js";

const router = Router();

/**
 * @swagger
 * tags:
 * name: Tasks
 * description: Tasks endpoint
 */

/**
 * @swagger
 * get:
 * summary: Get all tasks
 * tags: [Tasks]
 */

router.get("/tasks", getTasks);

/**
 * @swagger
 * get:
 * summary: Get a task by id
 * tags: [Tasks]
 */

router.get("/tasks/:id", getTask);

/**
 * @swagger
 * get:
 * summary: Get total tasks counter
 * tags: [Tasks]
 */
router.get("/count", countTasks);

/**
 * @swagger
 * post:
 * summary: Create new task
 * tags: [Tasks]
 */

router.post("/tasks", createTask);

/**
 * @swagger
 * delete:
 * summary: Delete task by id
 * tags: [Tasks]
 */

router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * put:
 * summary: Update a task by id
 * tags: [Tasks]
 */

router.put("/tasks/:id", editTask);

export default router;
