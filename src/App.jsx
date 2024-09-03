import React from 'react';
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
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="front">
                  <div className="left">
                    <ProfileCard />
                  </div>
                  <div className="right">
                    <Header />
                    <Skills />
                  </div>
                </div>
                <Stats />
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
      </div>
    </Router>
  );
};

export default App;