import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Stats from './Stats';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Journal from './Journal';
import Blog from './Blog';
import BlogPostDetail from './posts/BlogPostDetail';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="app">
        {loading ? (
          <div className="loading-screen">Loading...</div>
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="front">
                      <div className="right">
                        <Header />
                        <Skills />
                      </div>
                    </div>
                    <Projects />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/journal" element={<Journal />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
