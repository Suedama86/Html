import { useQuery } from "@tanstack/react-query";
import CourseCard from "@/components/CourseCard";
import ThemeToggle from "@/components/ThemeToggle";
import htmlImage from '@assets/generated_images/HTML_structure_illustration_beginner_502904db.png';
import cssImage from '@assets/generated_images/CSS_styling_concepts_illustration_91b5d603.png';
import { Code2 } from "lucide-react";

const courseImages: Record<string, string> = {
  "html-basics": htmlImage,
  "css-styling": cssImage
};

export default function CourseSelection() {
  const { data: courses, isLoading } = useQuery<any[]>({
    queryKey: ['/api/courses'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-muted-foreground">Loading courses...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold" data-testid="text-site-title">WebLearn</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-hero-title">
            Learn to Build Websites
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your learning path and start creating amazing web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses?.map((course: any) => (
            <CourseCard 
              key={course.id} 
              {...course} 
              imageUrl={courseImages[course.id]}
            />
          ))}
        </div>
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Master web development through structured lessons and hands-on practice</p>
        </div>
      </footer>
    </div>
  );
}
