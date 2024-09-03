import './Journal.css';

const Journal = () => {
  const journalEntries = [
    {
      date: 'August 12, 2024',
      title: 'Started DevOps Learning Plan',
      content: `
<h4>Today's Focus:</h4>
<p>Started DevOps Learning Plan</p>
<h4>Activities Completed:</h4>
<ul>
  <li><strong>Set Up DevOps Learning Plan:</strong>
    <ul>
      <li>Created a structured 6-month plan starting from August 13, 2024.</li>
      <li>Planned out monthly goals, including Linux fundamentals, coding, version control, cloud computing, CI/CD, containerization, and IaC.</li>
      <li>Detailed weekly tasks and deadlines to ensure steady progress.</li>
    </ul>
  </li>
  <li><strong>Initial Review of NDG Linux Essentials:</strong>
    <ul>
      <li>Reviewed the course material and set a goal to complete it within 7 days.</li>
      <li>Focused on mastering command-line operations and file management.</li>
    </ul>
  </li>
  <li><strong>Preparation for Coding Skills Enhancement:</strong>
    <ul>
      <li>Outlined learning objectives for Java and Python.</li>
      <li>Scheduled time for Java OOP concepts and Python basics, including syntax and small projects.</li>
    </ul>
  </li>
</ul>
<h4>Challenges:</h4>
<ul>
  <li><strong>Time Management:</strong> Found it challenging to balance the time spent on planning with actual study.</li>
  <li><strong>Focus and Motivation:</strong> Struggled a bit with staying focused but managed to complete the initial setup.</li>
</ul>
<h4>Reflections:</h4>
<ul>
  <li><strong>Progress:</strong> Made significant progress by creating a detailed plan, which will guide my learning journey over the next 6 months.</li>
  <li><strong>Next Steps:</strong> Start actively working on NDG Linux Essentials and prepare for the Java and Python learning phase. Aim to maintain focus and motivation by setting clear daily goals and tracking progress.</li>
</ul>
<h4>Overall:</h4>
<p>Productive day with a solid foundation for the next 6 months of DevOps learning. Looking forward to diving into Linux essentials tomorrow and kicking off the coding skills enhancement.</p>
`,
    },
    {
      date: 'August 13, 2024',
      title: 'Completed NDG Linux Essentials and Planned Next Steps',
      content: `
<h4>Today's Focus:</h4>
<p>Completed NDG Linux Essentials and prepared for Python learning.</p>
<h4>Activities Completed:</h4>
<ul>
  <li><strong>Completed NDG Linux Essentials Course:</strong>
    <ul>
      <li>Finished all course modules and gained a solid understanding of command-line operations, file management, and basic system administration.</li>
    </ul>
  </li>
  <li><strong>Practiced Linux Commands:</strong>
    <ul>
      <li>Engaged in hands-on practice to reinforce learning from the course.</li>
      <li>Applied commands to real-world scenarios to solidify understanding.</li>
    </ul>
  </li>
  <li><strong>Crash Course Review:</strong>
    <ul>
      <li>Watched additional crash courses related to Linux to deepen knowledge and gain different perspectives.</li>
    </ul>
  </li>
</ul>
<h4>Challenges:</h4>
<ul>
  <li><strong>Focus and Retention:</strong> Experienced some difficulty staying focused during crash course reviews. Plan to adjust study methods to maintain engagement.</li>
</ul>
<h4>Reflections:</h4>
<ul>
  <li><strong>Progress:</strong> Successfully completed the NDG Linux Essentials course and made good progress with practical exercises.</li>
  <li><strong>Next Steps:</strong> Continue practicing Linux commands to build confidence. Start learning Python tomorrow, focusing on basic syntax and scripting to complement Linux skills.</li>
</ul>
<h4>Overall:</h4>
<p>Productive day with successful completion of the Linux course and a solid plan to transition into Python learning. Looking forward to applying Linux skills and beginning the next learning phase.</p>
`,
    },
    {
      "date": "September 1, 2024",
      "title": "Completed Python Course and Developed Responsive Portfolio",
      "content": `
    <h4>Today's Focus:</h4>
    <p>Finalized Python Course and Developed Responsive Portfolio Backend</p>
    <h4>Activities Completed:</h4>
    <ul>
      <li><strong>Completed University of Helsinki's Python Course:</strong>
        <ul>
          <li>Finished the course material and now waiting for the final exam scheduled for September 7.</li>
        </ul>
      </li>
      <li><strong>Created and Deployed Responsive Portfolio Backend using Flask:</strong>
        <ul>
          <li>Developed a backend for my personal portfolio using Python Flask.</li>
          <li>Implemented a contact form functionality that sends an email to me when a guest submits their name, email, and message.</li>
          <li>Deployed the Flask backend separately, ensuring smooth operation.</li>
          <li>Made the entire portfolio responsive, ensuring it looks good on both desktop and mobile devices.</li>
        </ul>
      </li>
      <li><strong>Deployed React + Vite Portfolio on Vercel:</strong>
        <ul>
          <li>Successfully deployed my React + Vite portfolio on Vercel.</li>
          <li>Encountered and resolved a 404 Not Found error after troubleshooting the entire day.</li>
        </ul>
      </li>
      <li><strong>Learned About App Password for Gmail Integration:</strong>
        <ul>
          <li>Discovered the necessity of using an app password to enable Gmail functionality for the contact form.</li>
        </ul>
      </li>
    </ul>
    <h4>Challenges:</h4>
    <ul>
      <li><strong>Vercel 404 Error:</strong> Spent a significant amount of time troubleshooting and resolving deployment issues.</li>
    </ul>
    <h4>Reflections:</h4>
    <ul>
      <li><strong>Progress:</strong> Achieved successful deployment of both the frontend and backend for my portfolio, overcoming several technical challenges along the way. The portfolio is now fully responsive.</li>
      <li><strong>Next Steps:</strong> Focus on learning Linux Bash scripting and creating related projects when time permits.</li>
    </ul>
    <h4>Overall:</h4>
    <p>It was a productive period, with the completion of my Python course and the successful deployment of my responsive portfolio. I'll shift focus to Linux Bash scripting next, though my availability will be limited due to upcoming school events and responsibilities as a student org officer.</p>
    `
    }
    
  ];

  return (
    <section className="journal-section">
      <h2>My Journal</h2>
      <div className="journal-container">
        <div className="timeline"></div>
        {journalEntries.map((entry, index) => (
          <div className="journal-entry" key={index}>
            <h3>{entry.title}</h3>
            <p className="journal-date">{entry.date}</p>
            <div dangerouslySetInnerHTML={{ __html: entry.content }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journal;