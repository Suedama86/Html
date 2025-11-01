import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { courses, lessons } from "@shared/courseData";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all courses
  app.get("/api/courses", (_req, res) => {
    res.json(courses);
  });

  // Get specific course by ID
  app.get("/api/courses/:courseId", (req, res) => {
    const course = courses.find(c => c.id === req.params.courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  });

  // Get specific lesson by ID
  app.get("/api/lessons/:lessonId", (req, res) => {
    const lesson = lessons[req.params.lessonId];
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }
    res.json(lesson);
  });

  const httpServer = createServer(app);

  return httpServer;
}
