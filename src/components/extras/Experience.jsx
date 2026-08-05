import React from 'react'
import ListItem from './ListItem'

const Experience = () => {
  const experiences = [
    {
      mainHeading: "Frontend Web Developer",
      place: "Clan Africa",
      duration: "Jan. 2026 - Present",
    },
    {
      mainHeading: "Frontend Web Developer",
      place: "SteadySteps (Contract)",
      duration: "March 2025 - Present",
    },
    {
      mainHeading: "Frontend Web Developer",
      place: "Chest (Contract)",
      duration: "April 2025 - September 2025",
    },
    {
      mainHeading: "Frontend Web Developer",
      place: "Cribvest (Contract)",
      duration: "March 2025 - May 2025",
    },
    {
      mainHeading: "UI/UX Design Instructor",
      place: "Globaltech World Computer Institute",
      duration: "Oct. 2023 - Dec. 2024",
    },
    {
      mainHeading: "Web Development Instructor",
      place: "Globaltech World Computer Institute",
      duration: "May 2023 - Dec. 2024",
    },
    {
      mainHeading: "Internship - Web Development",
      place: "Globaltech World Computer Institute",
      duration: "Sept. 2021 - Dec. 2021",
    },
  ];

  return (
    <div className="py-4">
      <ul>
        {experiences.map((experience, index) => (
          <ListItem
            key={index}
            mainHeading={experience.mainHeading}
            place={experience.place}
            duration={experience.duration}
          />
        ))}
      </ul>
    </div>
  );
}

export default Experience