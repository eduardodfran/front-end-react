import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPostDetail.css'; // Add CSS for styling
import StudelistImage from '../assets/StudelistProjectImage.png';
import DashboardImage from '../assets/studelist-dashboard.png';

const BlogPostDetail = () => {
  const { id } = useParams();
  
  // Dummy data for the blog post
  // You can replace this with dynamic data from an API or database
  const blogPosts = [
    {
      id: 1,
      title: 'Studelist: A Comprehensive Student Dashboard Application',
      date: 'September 3, 2024',
      content: `
        <h2>Project Name: Studelist</h2>
        <p><strong>Purpose:</strong> Studelist is a student-focused dashboard application designed to help students manage their academic and personal tasks efficiently. The application integrates various tools for note-taking, to-do lists, event scheduling, and time management, aiming to enhance students' productivity and organization.</p>
        <h3>Features</h3>
        <p><strong>Dashboard:</strong> The central hub where users can view and manage their notes, to-do lists, and events. It includes a sidebar navigation for quick access to tools like the to-do list, calendar, notes, and Pomodoro timer.</p>
        <p><strong>Notes:</strong> Users can create, edit, and delete notes. Notes can also be organized into categories for easy retrieval.</p>
        <p><strong>To-Do List:</strong> Allows users to create tasks, set deadlines, and mark them as completed. Tasks can be prioritized to help users focus on what’s most important.</p>
        <p><strong>Calendar and Events:</strong> Users can schedule events, set reminders, and view them in a calendar format. Events and deadlines from the to-do list are integrated into the calendar.</p>
        <p><strong>Pomodoro Timer:</strong> A built-in Pomodoro timer helps users manage their study sessions, incorporating breaks to improve focus and productivity.</p>
        <p><strong>Profile Management:</strong> Users can create and customize their profiles, including adding profile pictures, editing personal information, and managing social links. All user data, including notes, tasks, and events, are stored and retrieved upon logging in.</p>
        <p><strong>Contact List:</strong> Users can search for and add contacts by username, facilitating easy communication and collaboration with peers. Contacts added by the user remain even after logging out and logging back in.</p>
        <h3>Design and User Interface</h3>
        <img src="${DashboardImage}" alt="Studelist Dashboard" />
        <p>The design features a green theme with complementary colors like teal and coral to create a modern, student-friendly interface. The application is fully responsive, ensuring usability across desktop and mobile devices. The mobile version includes a dropdown menu inspired by Evernote, which takes over the screen for easy navigation.</p>
        <h3>Technologies and Tools Used</h3>
        <p><strong>Frontend:</strong> HTML5, CSS for styling with a green, teal, and coral color scheme, and JavaScript for interactivity and dynamic updates.</p>
        <p><strong>Backend:</strong> Node.js for the server-side environment, Express.js for building the API, and MySQL for data storage.</p>
        <p><strong>Authentication:</strong> Passport.js with Google OAuth2 for user authentication.</p>
        <p><strong>Deployment:</strong> Vercel for hosting and seamless integration with the development workflow.</p>
        <p><strong>Version Control:</strong> Git for managing the codebase and GitHub for repository hosting and collaboration.</p>
        <h3>Development Process</h3>
        <p>The project began with defining the features needed for a student-focused dashboard. The design focused on creating an intuitive, clean, and responsive interface. The development was iterative, starting with basic features and gradually adding more complex functionalities. Rigorous testing ensured each feature worked across different devices and scenarios.</p>
        <h3>Challenges and Solutions</h3>
        <p><strong>Responsive Design:</strong> Ensuring full responsiveness was challenging, particularly with the dropdown menu. A flexible grid system and media queries were implemented to solve this issue.</p>
        <p><strong>Data Persistence:</strong> Keeping user data persistent required careful database design and efficient querying, achieved using MySQL with normalized data and indexes for performance.</p>
        <p><strong>Authentication:</strong> Implementing Google OAuth2 required secure handling of OAuth2 flows, managed using Passport.js for robust authentication management.</p>
        <h3>Conclusion</h3>
        <p>Studelist is a comprehensive, student-centered dashboard designed to enhance productivity and organization. This project demonstrates full-stack development skills, responsive design, and user-centric interface creation, making it a valuable addition to any portfolio.</p>
      `,
      image: 'StudelistImage'
    },
    // Add more posts as needed
  ];

  const post = blogPosts.find(post => post.id === parseInt(id, 10));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post-detail">
      <img src={StudelistImage} alt={post.title} className="blog-post-image" />
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostDetail;
