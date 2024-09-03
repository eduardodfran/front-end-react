import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import StudelistImage from './assets/StudelistProjectImage.png';

const BlogOverview = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'September 3, 2024',
      title: 'Studelist: A Comprehensive Student Dashboard Application',
      image: StudelistImage,
      description: 'Studelist is a student-focused dashboard application that helps students manage their academic and personal tasks efficiently...',
    },
  ];

  return (
    <section className="blog-overview-section">
      <div className="blog-overview-container">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-overview-post">
            <img src={post.image} alt={post.title} className="blog-post-image" />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-description">{post.description}</p>
              <p className="blog-post-date">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogOverview;
