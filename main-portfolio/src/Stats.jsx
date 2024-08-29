import './Stats.css';

const Stats = () => {
  return (
    <section id="stats" className="stats">
      <h2>My Stats</h2>
      <div className="stats-container">
        <div className="top">
          <div className="stat-item">
            <h3>GPA</h3>
            <p>1.40/1.35</p>
          </div>
          <div className="stat-item">
            <h3>Major</h3>
            <p>Computer Science</p>
          </div>
          <div className="stat-item">
            <h3>Completed Courses</h3>
            <p>Data Structures, Algorithms, Web Development, Java, MySQL, </p>
          </div>
        </div>
        <div className="bottom">
          <div className="stat-item">
            <h3>Certifications</h3>
            <p>JavaScript, React, Python</p>
          </div>
          <div className="stat-item">
            <h3>Extracurricular Activities</h3>
            <p>Bussiness Entrepreneurial Society for Technology and Computer Science Org Officer, Robotics Org</p>
          </div>
          <div className="stat-item">
            <h3>Volunteer Work</h3>
            <p>Community Service</p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Stats;