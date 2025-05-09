import React, { createRef, useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();
  const { isDark } = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <div className="education-header">
              <h5 className="education-text-school">{school.schoolName}</h5>
              <div className="education-text-info">
                {school.location && (
                  <p className="education-text-location"><strong>{school.location}</strong></p>
                )}
                {school.gpa && (
                  <p className="education-text-gpa"> <strong>{school.gpa}</strong></p>
                )}
              </div>
            </div>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p className={`education-text-duration ${isDark ? "dark-mode" : ""}`}>
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
