import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

interface CourseCardProps {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate";
  topic: string;
  description: string;
  lessonCount: number;
  estimatedHours: number;
  learningOutcomes: string[];
  imageUrl: string;
}

export default function CourseCard({
  id,
  title,
  level,
  topic,
  description,
  lessonCount,
  estimatedHours,
  learningOutcomes,
  imageUrl,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover-elevate transition-transform duration-300">
      <div className="relative">
        <Badge className="absolute top-4 right-4 z-10" variant={level === "Beginner" ? "default" : "secondary"}>
          {level}
        </Badge>
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={`${title} course illustration`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2" data-testid={`text-course-title-${id}`}>{title}</h2>
          <p className="text-lg font-semibold text-primary mb-2">{topic}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1" data-testid={`text-lesson-count-${id}`}>
            <BookOpen className="w-4 h-4" />
            <span>{lessonCount} lessons</span>
          </div>
          <div className="flex items-center gap-1" data-testid={`text-hours-${id}`}>
            <Clock className="w-4 h-4" />
            <span>{estimatedHours} hours</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-sm">What you'll learn:</h3>
          <ul className="space-y-1">
            {learningOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href={`/course/${id}`}>
          <Button className="w-full" size="lg" data-testid={`button-start-course-${id}`}>
            Start Learning
          </Button>
        </Link>
      </div>
    </Card>
  );
}
