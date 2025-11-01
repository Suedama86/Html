import { useState } from 'react';
import LessonNavComponent from '../LessonNav';

export default function LessonNavExample() {
  const [currentLesson, setCurrentLesson] = useState('lesson-1-1');

  const sections = [
    {
      id: 'section-1',
      title: 'Getting Started',
      lessons: [
        { id: 'lesson-1-1', title: 'What is HTML?', completed: true },
        { id: 'lesson-1-2', title: 'HTML Document Structure', completed: true },
        { id: 'lesson-1-3', title: 'Basic Tags', completed: false },
      ]
    },
    {
      id: 'section-2',
      title: 'Text and Links',
      lessons: [
        { id: 'lesson-2-1', title: 'Headings and Paragraphs', completed: false },
        { id: 'lesson-2-2', title: 'Creating Links', completed: false },
      ]
    }
  ];

  return (
    <div className="h-screen w-80">
      <LessonNavComponent
        courseTitle="HTML Fundamentals"
        sections={sections}
        currentLessonId={currentLesson}
        onLessonSelect={(id) => {
          console.log('Lesson selected:', id);
          setCurrentLesson(id);
        }}
      />
    </div>
  );
}
