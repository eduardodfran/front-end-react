import './Stats.css';

const Stats = () => {
  return (
    <section id="stats" className="stats">
      <h2>My Stats</h2>
      <div className="stats-container">
        <div className="stat-item">
          <h3>Major</h3>
          <p>Computer Science</p>
        </div>
        <div className="stat-item">
          <h3>Completed Courses</h3>
          <p>Data Structures, Algorithms, Web Development, Java, MySQL</p>
        </div>
        <div className="stat-item">
          <h3>Certifications</h3>
          <p>JavaScript, React, Python</p>
        </div>
        <div className="stat-item">
          <h3>Extracurricular Activities</h3>
          <p>Business Entrepreneurial Society for Technology and Computer Science Org Officer, Robotics Org</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
