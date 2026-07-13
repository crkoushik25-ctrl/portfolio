import React from 'react';
import { ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const certificationsList = [
    {
      name: "Introduction to Data Mining Course",
      issuer: "Simplilearn SkillUp",
      date: "Jul 2026",
      credentialUrl: "https://success.simplilearn.com/10456756"
    },
    {
      name: "C++ Programming for College Students",
      issuer: "Udemy (Instructor: Gomathinayagam A)",
      date: "Feb 2026",
      credentialUrl: "https://ude.my/UC-0d719c6f-665c-46ce-932b-bfebf840af70"
    },
    {
      name: "The Complete Python Masterclass: Learn Python",
      issuer: "Udemy (Instructors: Gomathinayagam A, Sivasubramanian A)",
      date: "Nov 2025",
      credentialUrl: "https://ude.my/UC-3d047a8d-a4ab-4fd4-ad1e-b90815ce8d7c"
    }
  ];

  return (
    <section id="certifications" className="certifications-section section">
      <div className="certifications-container container">
        <h2 className="section-title reveal">Certifications</h2>

        <div className="certifications-grid">
          {certificationsList.map((cert, index) => (
            <div key={index} className="cert-card glass-panel reveal">
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <ShieldCheck size={22} />
                </div>
                <div className="cert-info">
                  <h3 className="cert-name">{cert.name}</h3>
                  <h4 className="cert-issuer">{cert.issuer}</h4>
                </div>
              </div>

              <div className="cert-footer">
                <span className="cert-date">
                  <Calendar size={14} /> {cert.date}
                </span>
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  View Credential <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
