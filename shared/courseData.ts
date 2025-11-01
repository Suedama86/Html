export interface Lesson {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  codeExample?: {
    code: string;
    language: string;
  };
  exercise?: {
    title: string;
    description: string;
    starterCode?: string;
    hints?: string[];
    solution: string;
    language: string;
  };
}

export interface Section {
  id: string;
  title: string;
  lessons: { id: string; title: string }[];
}

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate";
  topic: string;
  description: string;
  lessonCount: number;
  estimatedHours: number;
  learningOutcomes: string[];
  sections: Section[];
}

export const courses: Course[] = [
  {
    id: "html-basics",
    title: "HTML Fundamentals",
    level: "Beginner",
    topic: "Learn the Building Blocks of the Web",
    description: "Start your web development journey by mastering HTML, the foundation of every website. Perfect for complete beginners with no prior coding experience.",
    lessonCount: 12,
    estimatedHours: 6,
    learningOutcomes: [
      "Understand HTML structure and syntax",
      "Create semantic, accessible web pages",
      "Use forms, tables, and media elements",
      "Build a complete website from scratch"
    ],
    sections: [
      {
        id: "section-1",
        title: "Getting Started",
        lessons: [
          { id: "lesson-1-1", title: "What is HTML?" },
          { id: "lesson-1-2", title: "HTML Document Structure" },
          { id: "lesson-1-3", title: "Basic Tags and Elements" },
          { id: "lesson-1-4", title: "Attributes and Values" }
        ]
      },
      {
        id: "section-2",
        title: "Text and Formatting",
        lessons: [
          { id: "lesson-2-1", title: "Headings and Paragraphs" },
          { id: "lesson-2-2", title: "Text Formatting Tags" },
          { id: "lesson-2-3", title: "Lists: Ordered and Unordered" },
          { id: "lesson-2-4", title: "Links and Navigation" }
        ]
      },
      {
        id: "section-3",
        title: "Media and Forms",
        lessons: [
          { id: "lesson-3-1", title: "Adding Images" },
          { id: "lesson-3-2", title: "Working with Forms" },
          { id: "lesson-3-3", title: "Tables and Data" },
          { id: "lesson-3-4", title: "Building Your First Page" }
        ]
      }
    ]
  },
  {
    id: "css-styling",
    title: "CSS Styling",
    level: "Intermediate",
    topic: "Master the Art of Web Design",
    description: "Take your web pages to the next level with CSS. Learn how to create beautiful, responsive designs that bring your content to life.",
    lessonCount: 15,
    estimatedHours: 8,
    learningOutcomes: [
      "Apply colors, fonts, and layouts with CSS",
      "Create responsive designs for all devices",
      "Use Flexbox and Grid for modern layouts",
      "Implement animations and transitions"
    ],
    sections: [
      {
        id: "section-1",
        title: "CSS Fundamentals",
        lessons: [
          { id: "lesson-1-1", title: "What is CSS?" },
          { id: "lesson-1-2", title: "Selectors and Specificity" },
          { id: "lesson-1-3", title: "Colors and Backgrounds" },
          { id: "lesson-1-4", title: "Typography and Fonts" },
          { id: "lesson-1-5", title: "The Box Model" }
        ]
      },
      {
        id: "section-2",
        title: "Layout and Responsive Design",
        lessons: [
          { id: "lesson-2-1", title: "Display and Positioning" },
          { id: "lesson-2-2", title: "Flexbox Basics" },
          { id: "lesson-2-3", title: "Flexbox Layouts" },
          { id: "lesson-2-4", title: "CSS Grid Fundamentals" },
          { id: "lesson-2-5", title: "Grid Layouts" },
          { id: "lesson-2-6", title: "Responsive Design" },
          { id: "lesson-2-7", title: "Media Queries" },
          { id: "lesson-2-8", title: "Animations and Transitions" },
          { id: "lesson-2-9", title: "Transforms and Effects" },
          { id: "lesson-2-10", title: "Building a Complete Layout" }
        ]
      }
    ]
  }
];

export const lessons: Record<string, Lesson> = {
  // HTML Course - Section 1: Getting Started
  "lesson-1-1": {
    id: "lesson-1-1",
    title: "What is HTML?",
    content: `HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a webpage using a series of elements, which tell the browser how to display the content.

Think of HTML as the skeleton of a website - it provides the structure and organization, while CSS and JavaScript add styling and interactivity.

HTML uses "tags" to mark up content. Tags are keywords surrounded by angle brackets, like <p> for paragraphs or <h1> for headings. Most tags come in pairs: an opening tag and a closing tag.`,
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
  },
  "lesson-1-2": {
    id: "lesson-1-2",
    title: "HTML Document Structure",
    content: `Every HTML document follows a standard structure. Understanding this structure is essential for creating valid web pages.

The <!DOCTYPE html> declaration defines the document type and HTML version. The <html> tag is the root element that contains all other elements. Inside, we have two main sections:

The <head> contains metadata about the document - information that isn't displayed on the page itself, like the title, character encoding, and links to stylesheets.

The <body> contains all the visible content that users see and interact with.`,
    keyPoints: [
      "<!DOCTYPE html> declares this is an HTML5 document",
      "<html> is the root element of the page",
      "<head> contains metadata and page information",
      "<body> contains all visible page content"
    ],
    codeExample: {
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Structure</title>
  </head>
  <body>
    <h1>Page Title</h1>
    <p>Page content goes here.</p>
  </body>
</html>`,
      language: "html"
    },
    exercise: {
      title: "Build a Proper HTML Structure",
      description: "Create a complete HTML document with proper structure, including a title 'My Portfolio' and a heading 'About Me' in the body.",
      starterCode: `<!-- Create the full document structure -->`,
      hints: [
        "Include the DOCTYPE declaration at the top",
        "Add charset and viewport meta tags in the head",
        "Set the page title to 'My Portfolio'",
        "Add a h1 heading with 'About Me' in the body"
      ],
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <h1>About Me</h1>
</body>
</html>`,
      language: "html"
    }
  },
  "lesson-1-3": {
    id: "lesson-1-3",
    title: "Basic Tags and Elements",
    content: `HTML elements are the building blocks of web pages. Each element has a specific purpose and meaning.

Most HTML elements consist of an opening tag, content, and a closing tag. For example: <p>This is a paragraph</p>

Some elements are "self-closing" and don't need a closing tag, like <br> for line breaks or <img> for images.

Elements can be nested inside each other to create structure. It's important to close tags in the correct order - the last tag opened should be the first one closed.`,
    keyPoints: [
      "Elements have opening and closing tags",
      "Some elements are self-closing",
      "Elements can be nested inside each other",
      "Tags must be properly closed in the right order"
    ],
    codeExample: {
      code: `<div>
  <h2>Section Title</h2>
  <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
  <br>
  <p>Another paragraph after a line break.</p>
</div>`,
      language: "html"
    },
    exercise: {
      title: "Practice with Basic Elements",
      description: "Create a section with a h2 heading 'My Hobbies', a paragraph describing a hobby, and use strong and em tags for emphasis.",
      starterCode: `<!-- Write your HTML elements here -->`,
      hints: [
        "Start with a <div> container",
        "Use <h2> for the heading",
        "Use <strong> to make text bold and <em> for italics"
      ],
      solution: `<div>
  <h2>My Hobbies</h2>
  <p>I love <strong>coding</strong> and creating <em>amazing</em> websites.</p>
</div>`,
      language: "html"
    }
  },
  "lesson-1-4": {
    id: "lesson-1-4",
    title: "Attributes and Values",
    content: `HTML attributes provide additional information about elements. They're always specified in the opening tag and come in name/value pairs.

Common attributes include:
- id: gives an element a unique identifier
- class: assigns one or more class names for styling
- href: specifies the URL for links
- src: specifies the source file for images
- alt: provides alternative text for images

Attributes enhance elements with extra functionality and meaning, making your HTML more powerful and accessible.`,
    keyPoints: [
      "Attributes go in the opening tag",
      "They use name='value' format",
      "Multiple attributes are separated by spaces",
      "Some attributes are required, others optional"
    ],
    codeExample: {
      code: `<a href="https://example.com" target="_blank">Visit Example</a>

<img src="photo.jpg" alt="A beautiful sunset" width="300">

<div id="main-content" class="container featured">
  <p class="intro">Introduction paragraph</p>
</div>`,
      language: "html"
    },
    exercise: {
      title: "Adding Attributes",
      description: "Create a link to 'https://github.com' that opens in a new tab, with the text 'Visit GitHub'.",
      starterCode: `<!-- Create your link here -->`,
      hints: [
        "Use the <a> tag for links",
        "The href attribute specifies the URL",
        "Use target='_blank' to open in a new tab"
      ],
      solution: `<a href="https://github.com" target="_blank">Visit GitHub</a>`,
      language: "html"
    }
  },

  // HTML Course - Section 2: Text and Formatting
  "lesson-2-1": {
    id: "lesson-2-1",
    title: "Headings and Paragraphs",
    content: `Headings and paragraphs are fundamental for organizing content on your web page.

HTML provides six levels of headings, from <h1> (most important) to <h6> (least important). Use <h1> for your main page title and structure your content hierarchically.

The <p> tag defines paragraphs. Browsers automatically add space before and after paragraphs, making your content readable.

Proper use of headings helps with SEO and accessibility, as screen readers use them to navigate page structure.`,
    keyPoints: [
      "Six heading levels: <h1> through <h6>",
      "Use only one <h1> per page",
      "<p> tags create paragraphs",
      "Headings create document hierarchy"
    ],
    codeExample: {
      code: `<h1>Main Page Title</h1>
<p>An introductory paragraph about the page topic.</p>

<h2>Section Heading</h2>
<p>Content for this section goes here.</p>

<h3>Subsection Heading</h3>
<p>More detailed content in this subsection.</p>`,
      language: "html"
    },
    exercise: {
      title: "Create a Content Hierarchy",
      description: "Create a blog post structure with a main heading 'My First Blog Post', a subheading 'Introduction', and a paragraph.",
      starterCode: `<!-- Write your content structure -->`,
      hints: [
        "Use <h1> for the main title",
        "Use <h2> for the subheading",
        "Add a <p> with any text you like"
      ],
      solution: `<h1>My First Blog Post</h1>
<h2>Introduction</h2>
<p>Welcome to my blog where I share my journey learning web development.</p>`,
      language: "html"
    }
  },
  "lesson-2-2": {
    id: "lesson-2-2",
    title: "Text Formatting Tags",
    content: `HTML provides various tags for formatting text and adding emphasis.

<strong> makes text bold and indicates strong importance. <em> makes text italic and indicates emphasis. While <b> and <i> also create bold and italic text, <strong> and <em> convey semantic meaning.

Other useful formatting tags include:
- <mark> for highlighted text
- <small> for smaller text
- <del> for deleted/strikethrough text
- <ins> for inserted/underlined text
- <sub> and <sup> for subscript and superscript`,
    keyPoints: [
      "<strong> for important bold text",
      "<em> for emphasized italic text",
      "Semantic tags are better than just visual formatting",
      "Use formatting tags to add meaning, not just style"
    ],
    codeExample: {
      code: `<p>This is <strong>very important</strong> information.</p>
<p>I <em>really</em> like web development.</p>
<p>The price is <del>$100</del> <ins>$80</ins></p>
<p>H<sub>2</sub>O is water, E=mc<sup>2</sup> is famous.</p>
<p>Remember to <mark>study</mark> for the exam!</p>`,
      language: "html"
    },
    exercise: {
      title: "Format Your Text",
      description: "Create a paragraph that uses strong, em, and mark tags to emphasize different parts of the text.",
      starterCode: `<!-- Write formatted text here -->`,
      hints: [
        "Wrap important text in <strong>",
        "Use <em> for emphasis",
        "Use <mark> to highlight key information"
      ],
      solution: `<p>Learning HTML is <strong>essential</strong> for web development. It's <em>really</em> exciting to see your pages come to life. Remember to <mark>practice daily</mark>!</p>`,
      language: "html"
    }
  },
  "lesson-2-3": {
    id: "lesson-2-3",
    title: "Lists: Ordered and Unordered",
    content: `Lists are used to group related items together. HTML supports two main types of lists:

Unordered lists (<ul>) display items with bullet points. They're perfect for items where order doesn't matter, like features or ingredients.

Ordered lists (<ol>) display items with numbers. Use these when the sequence matters, like steps in a recipe or ranking.

Each list item is wrapped in an <li> tag. You can also nest lists inside other lists to create sublists.`,
    keyPoints: [
      "<ul> creates bullet point lists",
      "<ol> creates numbered lists",
      "Each item uses <li> tags",
      "Lists can be nested"
    ],
    codeExample: {
      code: `<h3>Shopping List</h3>
<ul>
  <li>Eggs</li>
  <li>Milk</li>
  <li>Bread</li>
</ul>

<h3>Recipe Steps</h3>
<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>`,
      language: "html"
    },
    exercise: {
      title: "Create Lists",
      description: "Create an unordered list of your three favorite hobbies and an ordered list of your top 3 goals.",
      starterCode: `<!-- Create your lists here -->`,
      hints: [
        "Use <ul> for the hobbies list",
        "Use <ol> for the goals list",
        "Each item needs an <li> tag"
      ],
      solution: `<h3>My Hobbies</h3>
<ul>
  <li>Reading</li>
  <li>Coding</li>
  <li>Gaming</li>
</ul>

<h3>My Goals</h3>
<ol>
  <li>Learn web development</li>
  <li>Build a portfolio website</li>
  <li>Get a developer job</li>
</ol>`,
      language: "html"
    }
  },
  "lesson-2-4": {
    id: "lesson-2-4",
    title: "Links and Navigation",
    content: `Links are what make the web interconnected. The anchor tag <a> creates hyperlinks to other pages, sections, or resources.

The href attribute specifies the destination. Links can point to:
- External websites (full URLs)
- Other pages on your site (relative paths)
- Sections on the same page (using # and IDs)
- Email addresses (using mailto:)
- Phone numbers (using tel:)

Good link text describes where the link goes. Avoid generic text like "click here".`,
    keyPoints: [
      "<a> creates links with the href attribute",
      "Links can be internal or external",
      "target='_blank' opens links in new tabs",
      "Use descriptive link text for accessibility"
    ],
    codeExample: {
      code: `<!-- External link -->
<a href="https://example.com">Visit Example.com</a>

<!-- Internal page link -->
<a href="about.html">About Us</a>

<!-- Link to page section -->
<a href="#contact">Jump to Contact</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Open in new tab -->
<a href="https://github.com" target="_blank">GitHub</a>`,
      language: "html"
    },
    exercise: {
      title: "Create Navigation Links",
      description: "Create a simple navigation with three links: Home, About, and Contact (use #home, #about, #contact as hrefs).",
      starterCode: `<!-- Create navigation links -->`,
      hints: [
        "Create three <a> tags",
        "Use href with # followed by the section name",
        "Give each link appropriate text"
      ],
      solution: `<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>`,
      language: "html"
    }
  },

  // HTML Course - Section 3: Media and Forms
  "lesson-3-1": {
    id: "lesson-3-1",
    title: "Adding Images",
    content: `Images make web pages visually engaging. The <img> tag embeds images in your HTML.

The src attribute specifies the image source (URL or file path). The alt attribute provides alternative text for accessibility and when images can't load.

Width and height attributes can control image size, but CSS is generally preferred for styling.

Always provide descriptive alt text - it helps screen reader users and improves SEO.`,
    keyPoints: [
      "<img> is a self-closing tag",
      "src specifies the image source",
      "alt provides alternative text",
      "Always include alt for accessibility"
    ],
    codeExample: {
      code: `<!-- Local image -->
<img src="logo.png" alt="Company Logo" width="200">

<!-- External image -->
<img src="https://example.com/photo.jpg" alt="A beautiful landscape">

<!-- Image with link -->
<a href="gallery.html">
  <img src="thumbnail.jpg" alt="View full gallery">
</a>`,
      language: "html"
    },
    exercise: {
      title: "Add an Image",
      description: "Add an image with src='profile.jpg' and appropriate alt text describing a profile photo.",
      starterCode: `<!-- Add your image tag -->`,
      hints: [
        "Use the <img> tag",
        "Set src to 'profile.jpg'",
        "Add descriptive alt text"
      ],
      solution: `<img src="profile.jpg" alt="Professional headshot of Jane Doe">`,
      language: "html"
    }
  },
  "lesson-3-2": {
    id: "lesson-3-2",
    title: "Working with Forms",
    content: `Forms allow users to input data and interact with your website. The <form> tag contains various input elements.

Common form elements include:
- <input> for text fields, checkboxes, radio buttons
- <textarea> for multi-line text
- <select> for dropdown menus
- <button> for submitting forms

Each input should have a name attribute for processing data and a label for accessibility.`,
    keyPoints: [
      "<form> contains form elements",
      "<input> creates various input types",
      "Labels improve usability and accessibility",
      "name attributes identify form fields"
    ],
    codeExample: {
      code: `<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4"></textarea>
  
  <button type="submit">Send</button>
</form>`,
      language: "html"
    },
    exercise: {
      title: "Create a Contact Form",
      description: "Create a form with fields for name (text), email (email type), and a submit button.",
      starterCode: `<!-- Create your contact form -->`,
      hints: [
        "Wrap everything in a <form> tag",
        "Use <label> and <input> for each field",
        "Set appropriate input types",
        "Add a submit button at the end"
      ],
      solution: `<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>`,
      language: "html"
    }
  },
  "lesson-3-3": {
    id: "lesson-3-3",
    title: "Tables and Data",
    content: `Tables display data in rows and columns. While tables should not be used for layout, they're perfect for presenting tabular data.

The <table> element contains the table structure:
- <thead> groups header content
- <tbody> groups body content
- <tr> defines table rows
- <th> defines header cells
- <td> defines data cells

Use tables for data like schedules, pricing, or statistics.`,
    keyPoints: [
      "<table> creates tables",
      "<tr> defines rows",
      "<th> creates header cells",
      "<td> creates data cells"
    ],
    codeExample: {
      code: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>25</td>
      <td>London</td>
    </tr>
  </tbody>
</table>`,
      language: "html"
    },
    exercise: {
      title: "Create a Schedule Table",
      description: "Create a table with columns for Day, Time, and Activity. Add at least two rows of data.",
      starterCode: `<!-- Create your table -->`,
      hints: [
        "Start with <table>",
        "Use <thead> for headers",
        "Use <tbody> for data rows",
        "Each row needs <tr>, headers use <th>, data uses <td>"
      ],
      solution: `<table>
  <thead>
    <tr>
      <th>Day</th>
      <th>Time</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>9:00 AM</td>
      <td>Team Meeting</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>2:00 PM</td>
      <td>Code Review</td>
    </tr>
  </tbody>
</table>`,
      language: "html"
    }
  },
  "lesson-3-4": {
    id: "lesson-3-4",
    title: "Building Your First Page",
    content: `Now it's time to combine everything you've learned! A complete web page uses structure, text, links, images, and more.

Start by planning your page structure. Use semantic HTML elements like:
- <header> for page headers
- <nav> for navigation
- <main> for main content
- <section> for content sections
- <footer> for page footers

These semantic elements help search engines and assistive technologies understand your page structure.`,
    keyPoints: [
      "Plan your page structure first",
      "Use semantic HTML5 elements",
      "Combine all the elements you've learned",
      "Test your page in a browser"
    ],
    codeExample: {
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a web developer learning HTML.</p>
    </section>
    
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <li>Portfolio Website</li>
        <li>Blog Platform</li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 John Doe</p>
  </footer>
</body>
</html>`,
      language: "html"
    },
    exercise: {
      title: "Build Your Portfolio Page",
      description: "Create a complete HTML page with a header, navigation, main content with two sections, and a footer. Include your name, a bio, and contact info.",
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
</head>
<body>
  <!-- Build your page here -->
</body>
</html>`,
      hints: [
        "Use <header> with your name and <nav>",
        "Create sections for About and Skills",
        "Add a <footer> with contact information",
        "Use headings, paragraphs, and lists"
      ],
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
</head>
<body>
  <header>
    <h1>Sarah Johnson</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
    </nav>
  </header>
  
  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a passionate web developer learning to build amazing websites.</p>
    </section>
    
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        <li>HTML</li>
        <li>Problem Solving</li>
        <li>Creative Thinking</li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p>Contact: sarah@example.com</p>
  </footer>
</body>
</html>`,
      language: "html"
    }
  },

  // CSS Course - Section 1: CSS Fundamentals
  "css-lesson-1-1": {
    id: "css-lesson-1-1",
    title: "What is CSS?",
    content: `CSS (Cascading Style Sheets) is the language used to style HTML elements. While HTML provides structure, CSS makes your web pages beautiful and visually appealing.

CSS works by selecting HTML elements and applying style rules to them. You can control colors, fonts, spacing, layout, and much more.

There are three ways to add CSS:
- Inline: using the style attribute on HTML elements
- Internal: using <style> tags in the HTML <head>
- External: linking to a separate .css file (most common and recommended)`,
    keyPoints: [
      "CSS stands for Cascading Style Sheets",
      "CSS styles HTML elements",
      "External stylesheets are the best practice",
      "CSS separates presentation from content"
    ],
    codeExample: {
      code: `/* External CSS file (styles.css) */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #666;
  line-height: 1.6;
}`,
      language: "css"
    },
    exercise: {
      title: "Your First CSS",
      description: "Write CSS that makes all paragraphs blue and all h1 headings centered.",
      starterCode: `/* Write your CSS here */`,
      hints: [
        "Select p and set color property",
        "Select h1 and set text-align property",
        "Remember to use semicolons after each property"
      ],
      solution: `p {
  color: blue;
}

h1 {
  text-align: center;
}`,
      language: "css"
    }
  },
  "css-lesson-1-2": {
    id: "css-lesson-1-2",
    title: "Selectors and Specificity",
    content: `CSS selectors determine which HTML elements get styled. There are several types of selectors:

Element selectors target HTML tags directly (e.g., p, div, h1).
Class selectors use . before the class name (.button, .card).
ID selectors use # before the ID (#header, #main-content).

Specificity determines which styles apply when multiple rules target the same element. IDs are most specific, then classes, then elements.

You can also combine selectors:
- .class1.class2 (element with both classes)
- div p (p inside div - descendant)
- div > p (p direct child of div)`,
    keyPoints: [
      "Element, class, and ID selectors",
      "Classes are reusable, IDs are unique",
      "Specificity: ID > Class > Element",
      "Selectors can be combined"
    ],
    codeExample: {
      code: `/* Element selector */
p {
  color: gray;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 24px;
}

/* Combining selectors */
div.container p {
  margin: 10px;
}`,
      language: "css"
    },
    exercise: {
      title: "Practice Selectors",
      description: "Write CSS for: 1) all links to be blue, 2) elements with class 'btn' to have a gray background, 3) element with ID 'logo' to be 50px wide.",
      starterCode: `/* Write your selectors */`,
      hints: [
        "Links use the 'a' selector",
        "Class selectors start with a dot",
        "ID selectors start with #"
      ],
      solution: `a {
  color: blue;
}

.btn {
  background-color: gray;
}

#logo {
  width: 50px;
}`,
      language: "css"
    }
  },
  "css-lesson-1-3": {
    id: "css-lesson-1-3",
    title: "Colors and Backgrounds",
    content: `CSS provides many ways to add color to your designs. You can use color names, hex codes, RGB, or HSL values.

The color property sets text color.
The background-color property sets the background color of elements.

You can also use background-image for images, and control how they repeat and position with additional properties.

Color names: red, blue, green (140+ available)
Hex: #FF5733
RGB: rgb(255, 87, 51)
RGBA: rgb(255, 87, 51, 0.5) - includes transparency`,
    keyPoints: [
      "Multiple ways to specify colors",
      "color sets text color",
      "background-color sets element background",
      "RGBA and HSLA support transparency"
    ],
    codeExample: {
      code: `/* Different color formats */
.red-text {
  color: red;
}

.hex-background {
  background-color: #3498db;
}

.rgb-box {
  background-color: rgb(46, 204, 113);
}

.transparent {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Background image */
.hero {
  background-image: url('banner.jpg');
  background-size: cover;
}`,
      language: "css"
    },
    exercise: {
      title: "Apply Colors",
      description: "Create styles for a class 'card' with a light gray background (#f5f5f5) and dark text color (#333).",
      starterCode: `/* Style the card class */`,
      hints: [
        "Use the class selector .card",
        "Set background-color to #f5f5f5",
        "Set color to #333"
      ],
      solution: `.card {
  background-color: #f5f5f5;
  color: #333;
}`,
      language: "css"
    }
  },
  "css-lesson-1-4": {
    id: "css-lesson-1-4",
    title: "Typography and Fonts",
    content: `Typography is crucial for readability and design. CSS gives you complete control over how text appears.

Key text properties:
- font-family: Sets the typeface
- font-size: Controls text size
- font-weight: Sets boldness
- line-height: Space between lines
- text-align: Aligns text (left, center, right, justify)
- text-decoration: Underline, strikethrough, etc.
- letter-spacing: Space between characters

Always provide fallback fonts in case the first choice isn't available.`,
    keyPoints: [
      "font-family sets the typeface",
      "Always include fallback fonts",
      "line-height improves readability",
      "Font sizes can use px, em, rem, or %"
    ],
    codeExample: {
      code: `body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 18px;
  font-weight: 300;
  color: #666;
}

a {
  text-decoration: none;
}`,
      language: "css"
    },
    exercise: {
      title: "Style Text",
      description: "Style a class 'title' with Arial font, 24px size, bold weight, and centered alignment.",
      starterCode: `/* Style the title class */`,
      hints: [
        "Use font-family for the font",
        "Set font-size to 24px",
        "Use font-weight: bold",
        "Center with text-align: center"
      ],
      solution: `.title {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}`,
      language: "css"
    }
  },
  "css-lesson-1-5": {
    id: "css-lesson-1-5",
    title: "The Box Model",
    content: `Every HTML element is a rectangular box. The CSS box model describes how these boxes are sized and spaced.

The box model consists of four parts:
1. Content: The actual content (text, images)
2. Padding: Space between content and border
3. Border: Line around padding
4. Margin: Space outside the border

Understanding the box model is essential for controlling layout and spacing. By default, width and height only apply to content, but you can change this with box-sizing: border-box.`,
    keyPoints: [
      "Every element is a box",
      "Four parts: content, padding, border, margin",
      "Padding is inside, margin is outside",
      "box-sizing: border-box includes padding and border in width"
    ],
    codeExample: {
      code: `.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}

/* Better approach */
* {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 15px auto;
}`,
      language: "css"
    },
    exercise: {
      title: "Practice Box Model",
      description: "Create a class 'container' with 20px padding, 1px solid gray border, and 10px margin on all sides.",
      starterCode: `/* Style the container */`,
      hints: [
        "Use padding: 20px",
        "Border needs width, style, and color",
        "Use margin: 10px for all sides"
      ],
      solution: `.container {
  padding: 20px;
  border: 1px solid gray;
  margin: 10px;
}`,
      language: "css"
    }
  },
  "css-lesson-2-1": {
    id: "css-lesson-2-1",
    title: "Display and Positioning",
    content: `The display property controls how elements behave in the layout. Common values include block, inline, inline-block, and none.

Position property controls element placement. Use it with top, right, bottom, and left to move elements precisely.`,
    keyPoints: [
      "display controls layout behavior",
      "block vs inline vs inline-block",
      "position determines placement",
      "Combine position with directional properties"
    ],
    codeExample: {
      code: `.header {
  display: block;
  width: 100%;
}

.badge {
  display: inline-block;
  padding: 5px 10px;
}

.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
      language: "css"
    },
    exercise: {
      title: "Position Elements",
      description: "Create a class 'badge' with display inline-block and 5px padding.",
      starterCode: `/* Style the badge */`,
      hints: ["Use display: inline-block", "Add padding: 5px"],
      solution: `.badge {
  display: inline-block;
  padding: 5px;
}`,
      language: "css"
    }
  },
  "css-lesson-2-2": {
    id: "css-lesson-2-2",
    title: "Flexbox Basics",
    content: `Flexbox is a powerful layout system that makes it easy to align and distribute items in a container.

To use Flexbox, set display: flex on the parent container. Child items automatically become flex items.

Key properties:
- flex-direction: row or column
- justify-content: align along main axis
- align-items: align along cross axis
- gap: space between items`,
    keyPoints: [
      "display: flex creates a flex container",
      "flex-direction sets the main axis",
      "justify-content aligns items horizontally",
      "align-items aligns items vertically"
    ],
    codeExample: {
      code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}`,
      language: "css"
    },
    exercise: {
      title: "Create Flex Layout",
      description: "Make a class 'row' with flex display, items centered, and 20px gap.",
      starterCode: `/* Create flex row */`,
      hints: ["Set display: flex", "Use align-items: center", "Add gap: 20px"],
      solution: `.row {
  display: flex;
  align-items: center;
  gap: 20px;
}`,
      language: "css"
    }
  },
  "css-lesson-2-3": {
    id: "css-lesson-2-3",
    title: "Flexbox Layouts",
    content: `Flexbox shines when creating responsive layouts. You can control how flex items grow, shrink, and wrap.

flex-wrap allows items to wrap to new lines.
flex-grow controls how items expand to fill space.
flex-shrink controls how items compress when space is tight.

Combine these properties to create adaptive layouts that work on any screen size.`,
    keyPoints: [
      "flex-wrap enables multi-line layouts",
      "flex-grow distributes extra space",
      "Items can be individually controlled",
      "Flexbox adapts to available space"
    ],
    codeExample: {
      code: `.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;
}

.sidebar {
  flex: 0 0 250px;
}

.main-content {
  flex: 1;
}`,
      language: "css"
    },
    exercise: {
      title: "Responsive Card Grid",
      description: "Create a class 'grid' with flex display, wrap enabled, and 15px gap.",
      starterCode: `/* Create responsive grid */`,
      hints: ["Use display: flex", "Enable flex-wrap: wrap", "Set gap: 15px"],
      solution: `.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}`,
      language: "css"
    }
  },
  "css-lesson-2-4": {
    id: "css-lesson-2-4",
    title: "CSS Grid Fundamentals",
    content: `CSS Grid is a two-dimensional layout system perfect for creating complex layouts. Unlike Flexbox which is one-dimensional, Grid works with both rows and columns.

Create a grid container with display: grid, then define columns and rows using grid-template-columns and grid-template-rows.

The fr unit represents a fraction of available space, making grids responsive by default.`,
    keyPoints: [
      "Grid is two-dimensional (rows and columns)",
      "display: grid creates a grid container",
      "fr unit distributes available space",
      "Explicit grid tracks with template properties"
    ],
    codeExample: {
      code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`,
      language: "css"
    },
    exercise: {
      title: "Create Grid Layout",
      description: "Make a class 'grid-3' with 3 equal columns and 20px gap.",
      starterCode: `/* Create 3-column grid */`,
      hints: ["Use display: grid", "Set grid-template-columns with 3 x 1fr", "Add gap"],
      solution: `.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}`,
      language: "css"
    }
  },
  "css-lesson-2-5": {
    id: "css-lesson-2-5",
    title: "Grid Layouts",
    content: `Advanced Grid techniques let you create sophisticated layouts with minimal code.

grid-template-areas lets you name grid areas and place items visually.
grid-column and grid-row let items span multiple tracks.
Auto-fit and auto-fill create responsive grids that adapt to screen size.

Grid is perfect for page layouts, dashboards, and complex interfaces.`,
    keyPoints: [
      "Named grid areas for visual layout",
      "Items can span multiple rows/columns",
      "auto-fit and auto-fill for responsive grids",
      "Combine with media queries for full control"
    ],
    codeExample: {
      code: `.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }

.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,
      language: "css"
    },
    exercise: {
      title: "Responsive Grid",
      description: "Create a class 'auto-grid' that creates columns with minimum 200px width using auto-fit.",
      starterCode: `/* Create auto-fitting grid */`,
      hints: ["Use repeat()", "Use auto-fit", "Set minmax(200px, 1fr)"],
      solution: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}`,
      language: "css"
    }
  },
  "css-lesson-2-6": {
    id: "css-lesson-2-6",
    title: "Responsive Design",
    content: `Responsive design ensures your website looks great on all devices. Key techniques include fluid layouts, flexible images, and media queries.

Use relative units (%, em, rem, vw, vh) instead of fixed pixels.
Make images responsive with max-width: 100%.
Design mobile-first, then enhance for larger screens.`,
    keyPoints: [
      "Mobile-first approach is recommended",
      "Use relative units for flexibility",
      "Images should scale with max-width: 100%",
      "Test on multiple device sizes"
    ],
    codeExample: {
      code: `/* Mobile-first styles */
.container {
  width: 100%;
  padding: 15px;
}

img {
  max-width: 100%;
  height: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}`,
      language: "css"
    },
    exercise: {
      title: "Make Images Responsive",
      description: "Style all images to be responsive (max-width 100%, auto height).",
      starterCode: `/* Make images responsive */`,
      hints: ["Select img", "Set max-width: 100%", "Set height: auto"],
      solution: `img {
  max-width: 100%;
  height: auto;
}`,
      language: "css"
    }
  },
  "css-lesson-2-7": {
    id: "css-lesson-2-7",
    title: "Media Queries",
    content: `Media queries let you apply different styles based on device characteristics like screen width.

Common breakpoints:
- Mobile: up to 768px
- Tablet: 768px to 1024px
- Desktop: 1024px and up

Use @media to create conditional styles. Mobile-first means writing base styles for mobile, then adding enhancements for larger screens.`,
    keyPoints: [
      "@media creates conditional styles",
      "Common breakpoints for different devices",
      "min-width for mobile-first",
      "max-width for desktop-first"
    ],
    codeExample: {
      code: `/* Mobile styles (base) */
.container {
  padding: 15px;
}

.grid {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
  
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
      language: "css"
    },
    exercise: {
      title: "Add Media Query",
      description: "Make .box have 1 column on mobile, 2 columns on tablet (768px+).",
      starterCode: `/* Base styles */
.box {
  display: grid;
  grid-template-columns: 1fr;
}

/* Add media query here */`,
      hints: ["Use @media (min-width: 768px)", "Change grid-template-columns inside"],
      solution: `.box {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .box {
    grid-template-columns: 1fr 1fr;
  }
}`,
      language: "css"
    }
  },
  "css-lesson-2-8": {
    id: "css-lesson-2-8",
    title: "Animations and Transitions",
    content: `CSS animations add life to your designs. Transitions smoothly change property values over time.

Transitions are simple: specify which property to animate and the duration.
Use hover states to trigger transitions.

Animations are more complex and use @keyframes to define animation steps.`,
    keyPoints: [
      "Transitions for simple property changes",
      "Specify property, duration, and timing",
      "Use :hover to trigger effects",
      "Keep animations subtle and purposeful"
    ],
    codeExample: {
      code: `.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: darkblue;
}

.box {
  transition: all 0.3s ease;
}

.box:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`,
      language: "css"
    },
    exercise: {
      title: "Add Transition",
      description: "Make .card transition its transform property over 0.3 seconds, and scale to 1.05 on hover.",
      starterCode: `/* Add transition and hover effect */`,
      hints: ["Add transition property", "Use :hover pseudo-class", "Use transform: scale()"],
      solution: `.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}`,
      language: "css"
    }
  },
  "css-lesson-2-9": {
    id: "css-lesson-2-9",
    title: "Transforms and Effects",
    content: `Transform lets you rotate, scale, translate, and skew elements without affecting document flow.

Common transforms:
- scale(): resize elements
- rotate(): spin elements
- translate(): move elements
- Multiple transforms can be combined

Transforms are hardware-accelerated for smooth animations.`,
    keyPoints: [
      "transform doesn't affect layout",
      "scale, rotate, translate, skew",
      "Combine multiple transforms",
      "Hardware-accelerated for performance"
    ],
    codeExample: {
      code: `.rotate {
  transform: rotate(45deg);
}

.scale-up {
  transform: scale(1.2);
}

.move {
  transform: translateX(50px) translateY(20px);
}

.combined {
  transform: rotate(10deg) scale(1.1) translate(10px, 10px);
}`,
      language: "css"
    },
    exercise: {
      title: "Use Transforms",
      description: "Create a class 'spin' that rotates an element 180 degrees.",
      starterCode: `/* Create rotation */`,
      hints: ["Use transform property", "Use rotate() function", "180deg for half rotation"],
      solution: `.spin {
  transform: rotate(180deg);
}`,
      language: "css"
    }
  },
  "css-lesson-2-10": {
    id: "css-lesson-2-10",
    title: "Building a Complete Layout",
    content: `Now let's put it all together! A modern web layout combines Grid or Flexbox for structure, responsive techniques for adaptability, and polish with colors and spacing.

Best practices:
- Use Grid for overall page structure
- Use Flexbox for component internals
- Add consistent spacing with CSS variables
- Make everything responsive from the start
- Test on different screen sizes`,
    keyPoints: [
      "Combine Grid and Flexbox strategically",
      "Consistent spacing and colors",
      "Mobile-first responsive approach",
      "Test thoroughly on multiple devices"
    ],
    codeExample: {
      code: `:root {
  --spacing: 20px;
  --primary-color: #3498db;
}

.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing);
  background: var(--primary-color);
}

.main {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--spacing);
  padding: var(--spacing);
}

@media (max-width: 768px) {
  .main {
    grid-template-columns: 1fr;
  }
}`,
      language: "css"
    },
    exercise: {
      title: "Complete Page Layout",
      description: "Create a responsive page layout with header, main content area, and footer. Use Grid for the page structure.",
      starterCode: `/* Build your complete layout */`,
      hints: [
        "Use CSS Grid on .page",
        "Define rows for header, main, footer",
        "Make it responsive with media queries"
      ],
      solution: `.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header, .footer {
  padding: 20px;
  background: #333;
  color: white;
}

.main {
  padding: 20px;
}`,
      language: "css"
    }
  }
};
