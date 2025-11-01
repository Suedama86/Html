import ExerciseCardComponent from '../ExerciseCard';

export default function ExerciseCardExample() {
  return (
    <div className="p-8 max-w-3xl">
      <ExerciseCardComponent
        title="Create Your First HTML Page"
        description="Create a basic HTML document with a heading and a paragraph. Make sure to include the DOCTYPE declaration and proper structure."
        starterCode={`<!-- Write your HTML code here -->`}
        hints={[
          "Start with <!DOCTYPE html> declaration",
          "Use <html>, <head>, and <body> tags",
          "Add a <h1> for the heading and <p> for the paragraph"
        ]}
        solution={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is my first webpage.</p>
</body>
</html>`}
        language="html"
      />
    </div>
  );
}
