const PROGRESS_KEY = 'weblearn-progress';

export interface ProgressData {
  completedLessons: string[];
}

export const progressStorage = {
  get(): ProgressData {
    try {
      const data = localStorage.getItem(PROGRESS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error('Error reading progress from localStorage:', error);
    }
    return { completedLessons: [] };
  },

  set(data: ProgressData): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving progress to localStorage:', error);
    }
  },

  markLessonComplete(lessonId: string): void {
    const progress = this.get();
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      this.set(progress);
    }
  },

  isLessonComplete(lessonId: string): boolean {
    const progress = this.get();
    return progress.completedLessons.includes(lessonId);
  },

  getCompletedCount(): number {
    return this.get().completedLessons.length;
  },

  clear(): void {
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch (error) {
      console.error('Error clearing progress from localStorage:', error);
    }
  }
};
