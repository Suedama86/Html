import CourseCardComponent from '../CourseCard';
import htmlImage from '@assets/generated_images/HTML_structure_illustration_beginner_502904db.png';

export default function CourseCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CourseCardComponent
        id="html-basics"
        title="HTML Fundamentals"
        level="Beginner"
        topic="Learn the Building Blocks of the Web"
        description="Start your web development journey by mastering HTML, the foundation of every website."
        lessonCount={12}
        estimatedHours={6}
        learningOutcomes={[
          "Understand HTML structure and syntax",
          "Create semantic, accessible web pages",
          "Use forms, tables, and media elements",
          "Build a complete website from scratch"
        ]}
        imageUrl={htmlImage}
      />
    </div>
  );
}
