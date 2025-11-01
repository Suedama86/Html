import { useState } from "react";
import { useRoute } from "wouter";
import LessonNav from "@/components/LessonNav";
import CodeBlock from "@/components/CodeBlock";
import ExerciseCard from "@/components/ExerciseCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Code2, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";

const courseData = {
  "html-basics": {
    title: "HTML Fundamentals",
    sections: [
      {
        id: "section-1",
        title: "Getting Started",
        lessons: [
          { id: "lesson-1-1", title: "What is HTML?", completed: false },
          { id: "lesson-1-2", title: "HTML Document Structure", completed: false },
          { id: "lesson-1-3", title: "Basic Tags and Elements", completed: false },
        ]
      },
      {
        id: "section-2",
        title: "Text and Formatting",
        lessons: [
          { id: "lesson-2-1", title: "Headings and Paragraphs", completed: false },
          { id: "lesson-2-2", title: "Text Formatting", completed: false },
          { id: "lesson-2-3", title: "Lists and Navigation", completed: false },
        ]
      },
      {
        id: "section-3",
        title: "Links and Media",
        lessons: [
          { id: "lesson-3-1", title: "Creating Links", completed: false },
          { id: "lesson-3-2", title: "Adding Images", completed: false },
          { id: "lesson-3-3", title: "Embedding Videos", completed: false },
        ]
      }
    ]
  },
  "css-styling": {
    title: "CSS Styling",
    sections: [
      {
        id: "section-1",
        title: "CSS Basics",
        lessons: [
          { id: "lesson-1-1", title: "What is CSS?", completed: false },
          { id: "lesson-1-2", title: "Selectors and Properties", completed: false },
          { id: "lesson-1-3", title: "Colors and Backgrounds", completed: false },
        ]
      },
      {
        id: "section-2",
        title: "Layout Fundamentals",
        lessons: [
          { id: "lesson-2-1", title: "Box Model", completed: false },
          { id: "lesson-2-2", title: "Flexbox Basics", completed: false },
          { id: "lesson-2-3", title: "CSS Grid", completed: false },
        ]
      }
    ]
  }
};

const lessonContent: Record<string, any> = {
  "lesson-1-1": {
    title: "What is HTML?",
    content: `HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a webpage using a series of elements, which tell the browser how to display the content.

Think of HTML as the skeleton of a website - it provides the structure and organization, while CSS and JavaScript add styling and interactivity.`,
    keyPoints: [
      "HTML stands for HyperText Markup Language",
      "It's the foundation of all web pages",
      "HTML uses tags to define elements",
      "Browsers read HTML to display web pages"
    ],
    codeExample: {
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`,
      language: "html"
    },
    exercise: {
      title: "Create a Simple HTML Page",
      description: "Create a basic HTML document with a heading that says 'Welcome' and a paragraph that says 'This is my first webpage.'",
      starterCode: `<!-- Write your HTML here -->`,
      hints: [
        "Start with the <!DOCTYPE html> declaration",
        "Use <h1> for the heading and <p> for the paragraph",
        "Don't forget to include <html>, <head>, and <body> tags"
      ],
      solution: `<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is my first webpage.</p>
</body>
</html>`,
      language: "html"
    }
  }
};

export default function LessonPage() {
  const [, params] = useRoute("/course/:courseId");
  const courseId = params?.courseId || "html-basics";
  
  const course = courseData[courseId as keyof typeof courseData];
  const [currentLessonId, setCurrentLessonId] = useState(
    course?.sections[0]?.lessons[0]?.id || "lesson-1-1"
  );
  
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  
  const lesson = lessonContent[currentLessonId] || lessonContent["lesson-1-1"];

  const handleMarkComplete = () => {
    setCompletedLessons(prev => new Set([...Array.from(prev), currentLessonId]));
    console.log(`Lesson ${currentLessonId} marked as complete`);
  };

  const sectionsWithProgress = course.sections.map(section => ({
    ...section,
    lessons: section.lessons.map(l => ({
      ...l,
      completed: completedLessons.has(l.id)
    }))
  }));

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
              <Button variant="outline" data-testid="button-previous-lesson">
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
              
              <Button data-testid="button-next-lesson">
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
