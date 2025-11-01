import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import LessonNav from "@/components/LessonNav";
import CodeBlock from "@/components/CodeBlock";
import ExerciseCard from "@/components/ExerciseCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Code2, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";
import { progressStorage } from "@/lib/progressStorage";

export default function LessonPage() {
  const [, params] = useRoute("/course/:courseId");
  const [, setLocation] = useLocation();
  const courseId = params?.courseId || "html-basics";
  
  const { data: course, isLoading: courseLoading } = useQuery({
    queryKey: ['/api/courses', courseId],
    queryFn: async () => {
      const res = await fetch(`/api/courses/${courseId}`);
      if (!res.ok) throw new Error('Failed to fetch course');
      return res.json();
    }
  });

  const [currentLessonId, setCurrentLessonId] = useState<string>("");
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  
  // Initialize with first lesson and load progress
  useEffect(() => {
    if (course && !currentLessonId) {
      const firstLesson = course.sections[0]?.lessons[0]?.id;
      if (firstLesson) {
        setCurrentLessonId(firstLesson);
      }
    }
    
    // Load progress from localStorage
    const progress = progressStorage.get();
    setCompletedLessons(new Set(progress.completedLessons));
  }, [course, currentLessonId]);

  const { data: lesson, isLoading: lessonLoading } = useQuery({
    queryKey: ['/api/lessons', currentLessonId],
    enabled: !!currentLessonId,
    queryFn: async () => {
      const res = await fetch(`/api/lessons/${currentLessonId}`);
      if (!res.ok) throw new Error('Failed to fetch lesson');
      return res.json();
    }
  });

  const handleMarkComplete = () => {
    progressStorage.markLessonComplete(currentLessonId);
    setCompletedLessons(prev => new Set([...Array.from(prev), currentLessonId]));
  };

  const getAllLessons = () => {
    if (!course) return [];
    return course.sections.flatMap((section: any) => section.lessons);
  };

  const handleNavigation = (direction: 'prev' | 'next') => {
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex((l: any) => l.id === currentLessonId);
    
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentLessonId(allLessons[currentIndex - 1].id);
    } else if (direction === 'next' && currentIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[currentIndex + 1].id);
    }
  };

  if (courseLoading || lessonLoading || !course || !lesson) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const sectionsWithProgress = course.sections.map((section: any) => ({
    ...section,
    lessons: section.lessons.map((l: any) => ({
      ...l,
      completed: completedLessons.has(l.id)
    }))
  }));

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l: any) => l.id === currentLessonId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allLessons.length - 1;

  return (
    <div className="flex h-screen">
      <div className="w-80 flex-shrink-0">
        <LessonNav
          courseTitle={course.title}
          sections={sectionsWithProgress}
          currentLessonId={currentLessonId}
          onLessonSelect={setCurrentLessonId}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm text-muted-foreground">WebLearn</span>
          </div>
          <ThemeToggle />
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4" data-testid="text-lesson-title">
                {lesson.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {lesson.content}
                </p>
              </div>
            </div>

            {lesson.keyPoints && (
              <Alert className="mb-8">
                <Lightbulb className="h-4 w-4" />
                <AlertDescription>
                  <div className="font-semibold mb-2">Key Points:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {lesson.keyPoints.map((point: string, idx: number) => (
                      <li key={idx} className="text-sm">{point}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {lesson.codeExample && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Example</h2>
                <CodeBlock
                  code={lesson.codeExample.code}
                  language={lesson.codeExample.language}
                />
              </div>
            )}

            {lesson.exercise && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Practice Exercise</h2>
                <ExerciseCard {...lesson.exercise} />
              </div>
            )}

            <div className="flex items-center justify-between mt-12 pt-8 border-t">
              <Button 
                variant="outline" 
                onClick={() => handleNavigation('prev')}
                disabled={!hasPrevious}
                data-testid="button-previous-lesson"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Lesson
              </Button>
              
              <Button 
                onClick={handleMarkComplete}
                disabled={completedLessons.has(currentLessonId)}
                data-testid="button-mark-complete"
              >
                {completedLessons.has(currentLessonId) ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Completed
                  </>
                ) : (
                  "Mark as Complete"
                )}
              </Button>
              
              <Button 
                onClick={() => handleNavigation('next')}
                disabled={!hasNext}
                data-testid="button-next-lesson"
              >
                Next Lesson
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
