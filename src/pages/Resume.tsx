import "../index.css";

export default function Resume() {
  return (
    <><>
      {/* Header */}
      <section className="hero-content">
        <h1 className="resume-heading">Resume</h1>
      </section></>
      
      <div className="resume-page">

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-item">
            <img src="/iPortfolio/logos/tedx.png" alt="TEDxCITBengaluru" className="item-icon" />
            <div>
              <span className="org-name">TEDxCITBengaluru</span>
              <span className="role-name">Lead Curator</span>
              <span className="resume-meta">Jul 2024 – Jun 2025</span>
            </div>
          </div>

          <div className="resume-item">
            <img src="/iPortfolio/logos/unisec.png" alt="UNISEC-Global" className="item-icon" />
            <div>
              <span className="org-name">UNISEC-Global</span>
              <span className="role-name">Student Research Assistant</span>
              <span className="resume-meta">Jul 2024 – Dec 2024</span>
            </div>
          </div>

          <div className="resume-item">
            <img src="/iPortfolio/logos/samsung.png" alt="Samsung" className="item-icon" />
            <div>
              <span className="org-name">Samsung Innovation Campus</span>
              <span className="role-name">Data Analytics Trainee</span>
              <span className="resume-meta">Sep 2023 – Feb 2024</span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section">
          <h2 className="resume-section-title">Certifications</h2>

          <div className="resume-item">
            <img src="/iPortfolio/logos/columbia.png" alt="Columbia University" className="item-icon" />
            <div>
              <span className="org-name">
                <a
                  href="https://drive.google.com/file/d/1ciGTNllQBkpGB9rPL8MWGTdixFs4-yTB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  Columbia University
                </a>
              </span>
              <span className="role-name">Construction Finance</span>
              <span className="resume-meta">Issued Sep 2025</span>
            </div>
          </div>

          <div className="resume-item">
            <img src="/iPortfolio/logos/harvard.svg" alt="Harvard University" className="item-icon" />
            <div>
              <span className="org-name">
                <a
                  href="https://drive.google.com/drive/folders/1I02kda1Ycfy-1Rc6mNPnccTU6oUkJiVo?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  Harvard University
                </a>
              </span>
              <span className="role-name">CS50 Web, CS50 AI, CS50 Python</span>
              <span className="resume-meta">Issued Jan 2026</span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>

          <div className="resume-item">
            <img src="/iPortfolio/logos/cit.png" alt="Cambridge Institute of Technology" className="item-icon" />
            <div>
              <span className="org-name">Cambridge Institute of Technology</span>
              <span className="role-name">B.Tech, Electrical & Electronics Engineering</span>
              <span className="resume-meta">2022 – 2026</span>
              <span className="resume-submeta">Affiliated to Visvesvaraya Technological University (VTU)</span>
            </div>
          </div>

          {/*
<div className="resume-item">
<img src="/iPortfolio/logos/sp.png" alt="SP College" className="item-icon" />
<div>
<span className="org-name">SP College</span>
<span className="resume-meta">Graduated 2021</span>
</div>
</div>

<div className="resume-item">
<img src="/iPortfolio/logos/st-anne's.png" alt="St. Anne’s High School" className="item-icon" />
<div>
<span className="org-name">St. Anne’s High School</span>
<span className="resume-meta">Graduated 2019</span>
</div>
</div>
*/}

        </section>

      </div></>
  );
}
