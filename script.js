// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Typing animation for hero terminal (index page only)
  var typeTarget = document.getElementById('typing-line');
  if (typeTarget) {
    var text = typeTarget.getAttribute('data-text') || '';
    var i = 0;
    typeTarget.textContent = '';
    function type() {
      if (i <= text.length) {
        typeTarget.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 38);
      }
    }
    type();
  }
});
/* ===========================================================
   Phianet Coding Academy — Course Learning Layer
   Self-contained: only runs on courses.html, only touches
   elements with [data-course-app]. Progress is saved in the
   learner's own browser (localStorage) so it's still there
   next time they visit.
=========================================================== */

const COURSES = {
  literacy: {
    modules: [
      {
        title: "Getting to Know Your Computer",
        lessons: [
          {
            id: "lit-1-1",
            title: "Parts of a Computer",
            content: `<p>Every computer is made of hardware you can touch and software that tells it what to do. The main parts you'll use every day are the <strong>monitor</strong> (screen), <strong>keyboard</strong> and <strong>mouse</strong> (input), the <strong>CPU / system unit</strong> (the "brain" that processes everything), and <strong>storage</strong> (where your files live, even after you switch the computer off).</p>
                      <p><em>Try this:</em> Look at the computer in front of you and name each part before moving to the next lesson.</p>`
          },
          {
            id: "lit-1-2",
            title: "Turning On and Navigating Windows",
            content: `<p>When you switch on a computer, it loads the <strong>desktop</strong> — your home base. Small pictures called <strong>icons</strong> open programs when double-clicked. The <strong>taskbar</strong> at the bottom shows open programs and lets you switch between them.</p>
                      <p>To close a program safely, click the "X" in its top corner rather than switching the computer off directly — this protects your unsaved work.</p>`
          }
        ]
      },
      {
        title: "Files, Folders and the Internet",
        lessons: [
          {
            id: "lit-2-1",
            title: "Organizing Files and Folders",
            content: `<p>A <strong>folder</strong> is like a drawer that holds related files together — for example, a "School Work" folder holding all your documents. Give files clear names (e.g. <code>Invoice_June2026.docx</code>) so you can find them again quickly. Right-click anywhere empty to create a new folder.</p>`
          },
          {
            id: "lit-2-2",
            title: "Browsing the Internet Safely",
            content: `<p>A <strong>browser</strong> (like Chrome or Firefox) is the program you use to visit websites. Type your search into a <strong>search engine</strong> to find information. Be cautious of links or emails asking for your password or money — this is called <strong>phishing</strong>, and legitimate organisations will never ask for your password by email.</p>`
          }
        ]
      },
      {
        title: "Office Tools & Email",
        lessons: [
          {
            id: "lit-3-1",
            title: "Introduction to Word Processing",
            content: `<p>Word processors (like Microsoft Word) let you type, format and save documents. Key skills: selecting text, changing font size, making text <strong>bold</strong>, and saving your work often with <code>Ctrl + S</code> so you never lose progress.</p>`
          },
          {
            id: "lit-3-2",
            title: "Sending Your First Email",
            content: `<p>An email needs three things: a recipient's address, a subject line, and a message body. Keep the subject short and clear (e.g. "Course Enquiry — Web Development"), and always re-read your message before clicking send.</p>`
          }
        ]
      }
    ],
    quiz: [
      { q: "Which part of a computer is often called its 'brain'?", options: ["Monitor", "CPU / system unit", "Keyboard"], correct: 1 },
      { q: "What is it called when someone tries to trick you into giving away your password by email?", options: ["Phishing", "Formatting", "Browsing"], correct: 0 },
      { q: "What keyboard shortcut saves a document in most word processors?", options: ["Ctrl + P", "Ctrl + S", "Ctrl + Z"], correct: 1 }
    ]
  },

  programming: {
    modules: [
      {
        title: "Thinking Like a Programmer",
        lessons: [
          {
            id: "prog-1-1",
            title: "What Is an Algorithm?",
            content: `<p>An <strong>algorithm</strong> is simply a set of clear, ordered steps to solve a problem — like a recipe for making tea: boil water, add tea leaves, wait, pour, add sugar. Programmers break every task down into small, exact steps like this before writing any code.</p>`
          },
          {
            id: "prog-1-2",
            title: "Variables and Data",
            content: `<p>A <strong>variable</strong> is a labelled box that stores a value so your program can use it later. Common data types include <strong>numbers</strong> (like <code>5</code>), <strong>text/strings</strong> (like <code>"Mubende"</code>), and <strong>booleans</strong> (<code>True</code> or <code>False</code>).</p>
                      <pre>name = "Mubende"
age = 20
is_student = True</pre>`
          }
        ]
      },
      {
        title: "Python Fundamentals",
        lessons: [
          {
            id: "prog-2-1",
            title: "Your First Python Program",
            content: `<p>Every programmer's first program prints a greeting. In Python, this takes a single line:</p>
                      <pre>print("Hello, Mubende! Ready to code?")</pre>
                      <p>Try changing the text between the quotes and running it again — that's how you learn: change something, run it, see what happens.</p>`
          },
          {
            id: "prog-2-2",
            title: "Making Decisions with If Statements",
            content: `<p><strong>If statements</strong> let a program choose between actions, just like you decide whether to carry an umbrella depending on the weather.</p>
                      <pre>weather = "rainy"
if weather == "rainy":
    print("Carry an umbrella")
else:
    print("Enjoy the sun!")</pre>`
          },
          {
            id: "prog-2-3",
            title: "Repeating Actions with Loops",
            content: `<p>A <strong>loop</strong> repeats an action without you writing it out many times. This loop greets five students by name:</p>
                      <pre>for i in range(5):
    print("Welcome, student", i + 1)</pre>`
          }
        ]
      },
      {
        title: "Mini Project",
        lessons: [
          {
            id: "prog-3-1",
            title: "Build a Simple Calculator",
            content: `<p>Combine what you've learned: take two numbers with <code>input()</code>, store them in variables, and use an if statement to choose the operation (add, subtract, multiply). This small project uses every concept from this course in one place.</p>`
          }
        ]
      }
    ],
    quiz: [
      { q: "What do we call a step-by-step set of instructions to solve a problem?", options: ["A variable", "An algorithm", "A browser"], correct: 1 },
      { q: "In Python, what does this print? print(\"Hello, Mubende!\")", options: ["An error", "Hello, Mubende!", "Nothing"], correct: 1 },
      { q: "Which keyword lets a program repeat an action several times?", options: ["if", "for", "print"], correct: 1 }
    ]
  },

  webdev: {
    modules: [
      {
        title: "Structuring the Web with HTML",
        lessons: [
          {
            id: "web-1-1",
            title: "HTML Basics",
            content: `<p><strong>HTML</strong> (HyperText Markup Language) gives a webpage its structure using <strong>tags</strong>. Every element has an opening and closing tag:</p>
                      <pre>&lt;h1&gt;Welcome&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;</pre>`
          },
          {
            id: "web-1-2",
            title: "Building Your First Page",
            content: `<p>A basic page combines headings (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>), paragraphs (<code>&lt;p&gt;</code>), links (<code>&lt;a&gt;</code>) and images (<code>&lt;img&gt;</code>) inside a single HTML file, wrapped in <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> tags.</p>`
          }
        ]
      },
      {
        title: "Styling with CSS",
        lessons: [
          {
            id: "web-2-1",
            title: "CSS Selectors and Properties",
            content: `<p><strong>CSS</strong> controls how HTML looks. A selector targets an element, and properties inside curly braces style it:</p>
                      <pre>h1 {
  color: #144272;
  font-size: 32px;
}</pre>`
          },
          {
            id: "web-2-2",
            title: "Layout with Flexbox",
            content: `<p><strong>Flexbox</strong> arranges elements neatly in rows or columns. Setting <code>display: flex</code> on a container lets its children line up automatically, which is far easier than positioning each one manually.</p>`
          }
        ]
      },
      {
        title: "Adding Interactivity with JavaScript",
        lessons: [
          {
            id: "web-3-1",
            title: "JavaScript Basics",
            content: `<p><strong>JavaScript</strong> makes a page interactive. It uses variables and functions just like Python, but runs inside the browser:</p>
                      <pre>function greet(name) {
  alert("Welcome, " + name);
}</pre>`
          },
          {
            id: "web-3-2",
            title: "Responding to Clicks",
            content: `<p>An <strong>event listener</strong> waits for something to happen — like a click — and runs code in response:</p>
                      <pre>button.addEventListener("click", function () {
  console.log("Button clicked!");
});</pre>`
          }
        ]
      }
    ],
    quiz: [
      { q: "Which language gives a webpage its basic structure?", options: ["CSS", "HTML", "JavaScript"], correct: 1 },
      { q: "Which CSS layout tool arranges items neatly in rows or columns?", options: ["Flexbox", "print()", "if statement"], correct: 0 },
      { q: "What is an 'event listener' used for in JavaScript?", options: ["Styling text", "Storing files", "Responding to actions like clicks"], correct: 2 }
    ]
  },

  mobiledev: {
    modules: [
      {
        title: "App Design Basics",
        lessons: [
          {
            id: "mob-1-1",
            title: "Understanding User Interfaces",
            content: `<p>Every app is made of <strong>screens</strong> connected by <strong>navigation</strong> (buttons, menus, back arrows). Good apps keep navigation predictable — a user should always know how to get back to where they came from.</p>`
          },
          {
            id: "mob-1-2",
            title: "Sketching Your App",
            content: `<p>Before building anything, sketch a <strong>wireframe</strong> — a simple drawing of each screen and what's on it. This saves time later, since it's far quicker to redraw a box on paper than to rebuild a finished screen.</p>`
          }
        ]
      },
      {
        title: "Building with App Tools",
        lessons: [
          {
            id: "mob-2-1",
            title: "Introduction to App Builder Blocks",
            content: `<p>Beginner-friendly app builders let you snap together logic blocks (like "when button is clicked, show message") instead of typing every line of code — a great way to learn the logic of app-building before moving to a full programming language.</p>`
          },
          {
            id: "mob-2-2",
            title: "Adding Buttons and Screens",
            content: `<p>Each screen typically holds a small number of components: a label (text), a button (action), and an image. Connecting a button to an action — like moving to the next screen — is how an app starts to feel alive.</p>`
          }
        ]
      },
      {
        title: "Testing and Publishing",
        lessons: [
          {
            id: "mob-3-1",
            title: "Testing Your App",
            content: `<p>Always test on a real device as well as an emulator (a virtual phone on your computer) — some things, like touch gestures or camera access, only behave correctly on a physical phone.</p>`
          },
          {
            id: "mob-3-2",
            title: "Preparing for Publishing",
            content: `<p>Before publishing, an app needs an icon, a short description, and clearly listed permissions (e.g. "needs camera access to scan documents") so users know exactly what they're installing.</p>`
          }
        ]
      }
    ],
    quiz: [
      { q: "What is a wireframe used for?", options: ["Testing a phone battery", "Sketching a screen before building it", "Publishing an app"], correct: 1 },
      { q: "Why test an app on a real device, not just an emulator?", options: ["It's required by law", "Some features like touch and camera behave differently", "Emulators are always broken"], correct: 1 },
      { q: "What should users be able to see before installing an app?", options: ["Its permissions", "The developer's home address", "Nothing"], correct: 0 }
    ]
  },

  design: {
    modules: [
      {
        title: "Design Foundations",
        lessons: [
          {
            id: "des-1-1",
            title: "Principles of Design",
            content: `<p>Good design rests on a few key principles: <strong>balance</strong> (visual weight distributed evenly), <strong>contrast</strong> (making important things stand out), and <strong>alignment</strong> (elements lining up neatly rather than scattered randomly).</p>`
          },
          {
            id: "des-1-2",
            title: "Understanding Color Theory",
            content: `<p>The <strong>color wheel</strong> groups colors by relationship. <strong>Complementary colors</strong> sit opposite each other (like blue and orange) and create strong contrast, while colors next to each other create a calmer, harmonious feel.</p>`
          }
        ]
      },
      {
        title: "Tools of the Trade",
        lessons: [
          {
            id: "des-2-1",
            title: "Introduction to Design Software",
            content: `<p>Most design tools organise work in <strong>layers</strong> — stacked elements you can move, hide, or edit independently, similar to sheets of transparent paper stacked on top of each other.</p>`
          },
          {
            id: "des-2-2",
            title: "Creating a Simple Logo",
            content: `<p>A strong logo is simple enough to recognise at a small size. Start with a single shape or letter, choose one or two colors, and test how it looks shrunk down to the size of a phone icon.</p>`
          }
        ]
      },
      {
        title: "Designing for the Web",
        lessons: [
          {
            id: "des-3-1",
            title: "UI/UX Basics",
            content: `<p><strong>UI</strong> (User Interface) is how something looks; <strong>UX</strong> (User Experience) is how it feels to use. A beautiful page that's confusing to navigate has good UI but poor UX.</p>`
          },
          {
            id: "des-3-2",
            title: "Designing a Landing Page Layout",
            content: `<p>A landing page usually needs, in order: a clear headline, a short supporting sentence, one main action button, and supporting details below — guiding the visitor's eye naturally down the page.</p>`
          }
        ]
      }
    ],
    quiz: [
      { q: "Which design principle means elements line up neatly?", options: ["Contrast", "Alignment", "Layers"], correct: 1 },
      { q: "What are complementary colors?", options: ["Colors that sit opposite each other on the color wheel", "Any two shades of blue", "Colors used only in logos"], correct: 0 },
      { q: "What does 'UX' stand for?", options: ["User Interface", "User Experience", "Universal Export"], correct: 1 }
    ]
  },

  advanced: {
    modules: [
      {
        title: "Server-Side Programming",
        lessons: [
          {
            id: "adv-1-1",
            title: "How the Web Really Works",
            content: `<p>When you visit a website, your browser (the <strong>client</strong>) sends a request to a <strong>server</strong>, which processes it and sends back the page. Understanding this client-server model is the foundation of backend development.</p>`
          },
          {
            id: "adv-1-2",
            title: "Introduction to a Backend Language",
            content: `<p>A backend language (such as Python or PHP) runs on the server, handling tasks like checking a login, saving form data, or fetching information from a database before sending a response back to the browser.</p>`
          }
        ]
      },
      {
        title: "Working with Databases",
        lessons: [
          {
            id: "adv-2-1",
            title: "What Is a Database?",
            content: `<p>A <strong>database</strong> stores information in <strong>tables</strong> made of rows (individual records, like one student) and columns (fields, like name or age) — similar to a well-organised spreadsheet that many programs can read and update at once.</p>`
          },
          {
            id: "adv-2-2",
            title: "Basic SQL Queries",
            content: `<p><strong>SQL</strong> is the language used to talk to most databases. This query fetches every student's name from a "students" table:</p>
                      <pre>SELECT name FROM students;</pre>`
          }
        ]
      },
      {
        title: "Capstone Project",
        lessons: [
          {
            id: "adv-3-1",
            title: "Planning Your Capstone",
            content: `<p>Your final project combines everything: a frontend (HTML/CSS/JS), a backend that processes data, and a database that stores it. Start by writing down exactly what a user should be able to do, then build one piece at a time.</p>`
          }
        ]
      }
    ],
    quiz: [
      { q: "In the client-server model, what is the browser called?", options: ["The server", "The client", "The database"], correct: 1 },
      { q: "What does a database table's 'row' represent?", options: ["A single record, like one student", "A color", "A CSS file"], correct: 0 },
      { q: "Which language is commonly used to query databases?", options: ["SQL", "HTML", "CSS"], correct: 0 }
    ]
  }
};

const STORAGE_PREFIX = "phianet_progress_";

function getProgress(courseId) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + courseId);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveProgress(courseId, lessonIds) {
  try {
    localStorage.setItem(STORAGE_PREFIX + courseId, JSON.stringify(lessonIds));
  } catch (e) { /* storage unavailable, fail silently */ }
}

function totalLessons(courseId) {
  return COURSES[courseId].modules.reduce((sum, m) => sum + m.lessons.length, 0);
}

function updateProgressBar(courseId) {
  const card = document.querySelector(`[data-course-id="${courseId}"]`);
  if (!card) return;
  const done = getProgress(courseId).length;
  const total = totalLessons(courseId);
  const pct = total ? Math.round((done / total) * 100) : 0;
  card.querySelector(".progress-fill").style.width = pct + "%";
  card.querySelector(".progress-count").textContent = `${done} / ${total} lessons`;
  card.querySelector(".progress-pct").textContent = pct + "%";
}

function buildPanel(courseId) {
  const course = COURSES[courseId];
  const completed = getProgress(courseId);
  let html = "";

  course.modules.forEach((mod, mi) => {
    html += `<div class="module"><button class="module-head" type="button" data-mod="${mi}">
      <span>${mod.title}</span><span class="chevron">&#8250;</span></button>
      <div class="module-lessons">`;
    mod.lessons.forEach(lesson => {
      const isDone = completed.includes(lesson.id);
      html += `<div class="lesson ${isDone ? "done" : ""}" data-lesson="${lesson.id}">
        <div class="lesson-top">
          <input type="checkbox" ${isDone ? "checked" : ""} data-check="${lesson.id}">
          <span class="lesson-title">${lesson.title}</span>
        </div>
        <div class="lesson-content">${lesson.content}</div>
      </div>`;
    });
    html += `</div></div>`;
  });

  html += `<div class="quiz-box"><h4 style="margin-top:0;">Quick Check</h4>`;
  course.quiz.forEach((q, qi) => {
    html += `<div class="quiz-q" data-q="${qi}"><p class="qtext">${qi + 1}. ${q.q}</p>`;
    q.options.forEach((opt, oi) => {
      html += `<label data-opt="${oi}"><input type="radio" name="q-${courseId}-${qi}" value="${oi}" style="margin-right:8px;">${opt}</label>`;
    });
    html += `</div>`;
  });
  html += `<button class="quiz-submit" type="button">Check my answers</button>
    <div class="quiz-result"></div></div>
    <button class="reset-link" type="button">Reset my progress for this course</button>`;

  return html;
}

function initCourseCard(card) {
  const courseId = card.getAttribute("data-course-id");
  const btn = card.querySelector(".start-btn");
  const panel = card.querySelector(".course-panel");
  let rendered = false;

  updateProgressBar(courseId);

  btn.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    btn.textContent = isOpen ? "Close course" : "Start learning";

    if (isOpen && !rendered) {
      panel.innerHTML = buildPanel(courseId);
      rendered = true;
      wirePanel(panel, courseId);
    }
  });
}

function wirePanel(panel, courseId) {
  // accordion open/close for modules
  panel.querySelectorAll(".module-head").forEach(head => {
    head.addEventListener("click", () => {
      head.closest(".module").classList.toggle("open");
    });
  });

  // lesson complete checkboxes
  panel.querySelectorAll("[data-check]").forEach(cb => {
    cb.addEventListener("change", () => {
      const lessonId = cb.getAttribute("data-check");
      const lessonEl = cb.closest(".lesson");
      let progress = getProgress(courseId);
      if (cb.checked) {
        if (!progress.includes(lessonId)) progress.push(lessonId);
        lessonEl.classList.add("done");
      } else {
        progress = progress.filter(id => id !== lessonId);
        lessonEl.classList.remove("done");
      }
      saveProgress(courseId, progress);
      updateProgressBar(courseId);
      updateSummaryBanner();
    });
  });

  // quiz submit
  const submitBtn = panel.querySelector(".quiz-submit");
  submitBtn.addEventListener("click", () => {
    const course = COURSES[courseId];
    let score = 0;
    course.quiz.forEach((q, qi) => {
      const qBox = panel.querySelector(`.quiz-q[data-q="${qi}"]`);
      const selected = qBox.querySelector(`input[name="q-${courseId}-${qi}"]:checked`);
      qBox.querySelectorAll("label").forEach(l => l.classList.remove("correct", "incorrect"));
      if (selected) {
        const chosen = parseInt(selected.value, 10);
        const correctLabel = qBox.querySelector(`label[data-opt="${q.correct}"]`);
        if (chosen === q.correct) {
          score++;
          correctLabel.classList.add("correct");
        } else {
          qBox.querySelector(`label[data-opt="${chosen}"]`).classList.add("incorrect");
          correctLabel.classList.add("correct");
        }
      }
    });
    const resultEl = panel.querySelector(".quiz-result");
    resultEl.textContent = `You scored ${score} / ${course.quiz.length}. ${score === course.quiz.length ? "Excellent work!" : "Review the highlighted answers and try again."}`;
    resultEl.style.color = score === course.quiz.length ? "#1E9E5A" : "var(--navy)";
  });

  // reset progress
  const resetBtn = panel.querySelector(".reset-link");
  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset your saved progress for this course?")) return;
    saveProgress(courseId, []);
    panel.querySelectorAll("[data-check]").forEach(cb => {
      cb.checked = false;
      cb.closest(".lesson").classList.remove("done");
    });
    updateProgressBar(courseId);
    updateSummaryBanner();
    panel.querySelector(".quiz-result").textContent = "";
    panel.querySelectorAll(".quiz-q label").forEach(l => l.classList.remove("correct", "incorrect"));
    panel.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  });
}

function updateSummaryBanner() {
  const banner = document.getElementById("learning-summary");
  if (!banner) return;
  let totalDone = 0, totalAll = 0;
  Object.keys(COURSES).forEach(id => {
    totalDone += getProgress(id).length;
    totalAll += totalLessons(id);
  });
  banner.querySelector(".s-done").textContent = totalDone;
  banner.querySelector(".s-total").textContent = totalAll;
  const pct = totalAll ? Math.round((totalDone / totalAll) * 100) : 0;
  banner.querySelector(".s-pct").textContent = pct + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-course-id]").forEach(initCourseCard);
  updateSummaryBanner();
});