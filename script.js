
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rida Hassan</title>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header>
    <h1>Rida Hassan</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#timeline">Timeline</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main id="main-content">
    <article id="about">
      <h2>About Me</h2>
      <figure>
        <img src="images/R.webp" alt="Photo of [Rida]" width="180">
        <figcaption>That's me!</figcaption>
      </figure>
        <p>I am Rida Hassan. I am student of BSCS at Qarshi University. i have interest in Cybersecurity. And i want to be a Cybersecurity Analyst </p>
      <blockquote>
        <p>"The best way to learn is by building."</p>
      </blockquote>
    </article>
    <section id="skills">
      <h2>Skills I'm Building This Semester</h2>
      <ul>
        <li>HTML5 &amp; semantic markup</li>
        <li>CSS3 layout (Flexbox &amp; Grid)</li>
        <li>Git &amp; GitHub collaboration</li>
        <li>Coursera Cybersecurity course</li>
        <li>Coursera AI Professional Course</li>
      </ul>
    </section>
    <section id="timeline">
      <h2>My Timeline So Far</h2>
      <ol>
        <li>Completed Lab 1: set up my environment and pushed to GitHub</li>
        <li>Built my first static webpage</li>
        <li>Started this semantic HTML5 profile page</li>
      </ol>
    </section>
    <aside>
      <h2>Fun Fact</h2>
      <p>I started learning web development this semester, and my first webpage took me longer than I'd like to admit.</p>
    </aside>
    <section id="media">
      <h2>A Short Clip</h2>
      <video controls width="480">
        <source src="intro.webm" type="video/webm">
        <source src="intro.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p><strong>Transcript summary:</strong> A 30-second introduction where I talk about why I'm taking this course.</p>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form">
        <fieldset>
          <legend>Send me a message</legend>
          <p>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </p>
          <p>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </p>
          <p>
            <label for="topic">Topic</label>
            <select id="topic" name="topic">
              <option value="general">General</option>
              <option value="feedback">Feedback</option>
              <option value="bug">Report a Bug</option>
            </select>
          </p>

          <!-- 5.4 Radio group -->
          <p>Preferred reply method:</p>
          <p>
            <label><input type="radio" name="reply" value="email" checked> Email</label>
            <label><input type="radio" name="reply" value="phone"> Phone</label>
          </p>

          <!-- 5.5 Checkbox -->
          <p>
            <label><input type="checkbox" id="subscribe" name="subscribe"> Subscribe to updates</label>
          </p>

          <!-- 5.6 Date -->
          <p>
            <label for="callback-date">Preferred callback date</label>
            <input type="date" id="callback-date" name="callback-date">
          </p>

          <!-- 5.7 Range -->
          <p>
            <label for="urgency">Urgency (1 = whenever, 10 = right now)</label>
            <input type="range" id="urgency" name="urgency" min="1" max="10" value="5">
          </p>

          <!-- 5.8 Textarea -->
          <p>
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required minlength="10"></textarea>
          </p>

          <button type="submit">Send</button>
        </fieldset>
      </form>
      <button id="clear-btn" type="button">Clear Saved Data</button>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Your Name. CIT331 Lab 2.</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
