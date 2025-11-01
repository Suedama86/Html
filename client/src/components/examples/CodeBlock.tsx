import CodeBlockComponent from '../CodeBlock';

export default function CodeBlockExample() {
  const sampleCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Welcome to my first webpage.</p>
  </body>
</html>`;

  return (
    <div className="p-8">
      <CodeBlockComponent 
        code={sampleCode} 
        language="html" 
        showLineNumbers={true}
      />
    </div>
  );
}
