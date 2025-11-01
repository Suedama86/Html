import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ChevronDown, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ProgressBar from "./ProgressBar";

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface LessonNavProps {
  courseTitle: string;
  sections: Section[];
  currentLessonId: string;
  onLessonSelect: (lessonId: string) => void;
}

export default function LessonNav({
  courseTitle,
  sections,
  currentLessonId,
  onLessonSelect,
}: LessonNavProps) {
  const [openSections, setOpenSections] = useState<string[]>(
    sections.map(s => s.id)
  );

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const totalLessons = sections.reduce((acc, section) => acc + section.lessons.length, 0);
  const completedLessons = sections.reduce(
    (acc, section) => acc + section.lessons.filter(l => l.completed).length,
    0
  );

  return (
    <div className="h-full flex flex-col border-r bg-sidebar">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="font-bold text-lg mb-4 text-sidebar-foreground" data-testid="text-course-title">
          {courseTitle}
        </h2>
        <ProgressBar current={completedLessons} total={totalLessons} />
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {sections.map((section, sectionIdx) => (
            <Collapsible
              key={section.id}
              open={openSections.includes(section.id)}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 mb-1"
                  data-testid={`button-section-toggle-${section.id}`}
                >
                  {openSections.includes(section.id) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                  <span className="font-semibold text-sm">
                    {sectionIdx + 1}. {section.title}
                  </span>
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-4 space-y-1">
                  {section.lessons.map((lesson, lessonIdx) => {
                    const isActive = lesson.id === currentLessonId;
                    return (
                      <Button
                        key={lesson.id}
                        variant="ghost"
                        className={`w-full justify-start gap-2 text-sm ${
                          isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                        }`}
                        onClick={() => onLessonSelect(lesson.id)}
                        data-testid={`button-lesson-${lesson.id}`}
                      >
                        {lesson.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 flex-shrink-0" />
                        )}
                        <span className="text-left">
                          {sectionIdx + 1}.{lessonIdx + 1} {lesson.title}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
