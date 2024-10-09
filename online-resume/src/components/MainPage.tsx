import React from 'react';
import styled from 'styled-components';

const ResumePage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <ProfilePicture src="your-profile-image-url.jpg" alt="Your Name" />
        <div>
          <Name>Dimitar Mladenov</Name>
          <JobTitle>Software Developer</JobTitle>
          <Contact>
            <Email href="mailto:youremail@example.com">miti_01@abv.bg</Email>
            <PhoneNumber>+359 887286159</PhoneNumber>
            <LinkedIn href="https://linkedin.com/in/your-profile">LinkedIn</LinkedIn>
          </Contact>
        </div>
      </Header>

      {/* Education */}
      <Section>
        <SectionTitle>Education</SectionTitle>
        <SectionItem>
          <Institution>Sofia University</Institution>
          <Degree>Bachelor of Tourism</Degree>
          <Years>2020 - Present</Years>
        </SectionItem>
      </Section>

      {/* Work Experience */}
      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        <SectionItem>
          <JobTitle>Junior Software Developer</JobTitle>
          <Company>ISI Emerging Markets Group</Company>
          <Years>June, 2023 - June, 2024</Years>
          <Description>
            - Worked on developing and maintaining automations for downloading files from the web which are then fed into a database.<br />
          </Description>
        </SectionItem>
      </Section>

      {/* Skills */}
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <Skills>
          <Skill>JavaScript</Skill>
          <Skill>React</Skill>
          <Skill>HTML5/CSS3</Skill>
          <Skill>Git</Skill>
          <Skill>Node.js</Skill>
        </Skills>
      </Section>

      {/* Projects */}
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <SectionItem>
          <ProjectTitle>Portfolio Website</ProjectTitle>
          <Description>
            Built a personal portfolio website using React.js, showcasing projects and resume.
          </Description>
        </SectionItem>
        <SectionItem>
          <ProjectTitle>Weather App</ProjectTitle>
          <Description>
            Developed a weather forecasting app using React and OpenWeather API.
          </Description>
        </SectionItem>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionTitle>Certifications</SectionTitle>
        <SectionItem>
          <CertificationTitle>JavaScript Advanced Course - SoftUni</CertificationTitle>
        </SectionItem>
      </Section>

      {/* Contact Information */}
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <ContactDetails>
          Email: <a href="mailto:youremail@example.com">youremail@example.com</a><br />
          Phone: +1-123-456-7890
        </ContactDetails>
      </Section>
    </Container>
  );
};

export default ResumePage;

/* Styled Components */
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(135deg, #f8f9fa 30%, #dee2e6);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h1`
  font-size: 40px;
  margin: 0;
  color: #007bff;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  margin: 5px 0;
  color: #495057;
`;

const Contact = styled.div`
  font-size: 16px;
  color: #555;
`;

const Email = styled.a`
  color: #0073e6;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const PhoneNumber = styled.p`
  margin: 0;
`;

const LinkedIn = styled.a`
  color: #0073e6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 15px;
  color: #007bff;
  border-bottom: 2px solid #007bff;
  display: inline-block;
  padding-bottom: 5px;
`;

const SectionItem = styled.div`
  margin-bottom: 25px;
`;

const Institution = styled.h4`
  font-size: 20px;
  margin: 0;
  color: #495057;
`;

const Degree = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Years = styled.p`
  font-size: 16px;
  color: #868e96;
`;

const Company = styled.p`
  font-size: 18px;
  color: #343a40;
`;

const Description = styled.p`
  font-size: 15px;
  color: #777;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Skill = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 20px;
  margin: 0;
  color: #007bff;
`;

const CertificationTitle = styled.p`
  font-size: 18px;
  color: #495057;
`;

const ContactDetails = styled.div`
  font-size: 16px;
  color: #333;
`;

