import React from 'react';
import styled from 'styled-components';
import resumeData from '../user-assets/user-info';
import userImage from '../user-assets/user-icons/user_img.jpg'

const ResumePage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <ProfilePicture src={userImage} alt="Your Name" />
        <div>
          <Name>{resumeData.name}</Name>
          <JobTitle>{resumeData.title}</JobTitle>
          <Contact>         
            <Email href="">{resumeData.email}</Email>
            <PhoneNumber>{resumeData.phone}</PhoneNumber>
            <LinkedIn href={resumeData.linkedin}>LinkedIn</LinkedIn>
          </Contact>
        </div>
      </Header>


      
      {/* Work Experience */}
      <SectionTitle>Experience</SectionTitle>

      {resumeData.experience.map((exp, _) => (
      <Section>
        <SectionItem>
          <Company>{exp.role + ' @ ' +exp.company}</Company>
          <Years>{exp.startDate} - {exp.endDate}</Years>
          <Description>{exp.description}</Description>
        </SectionItem>
      </Section>
    ))}
      
      <SectionTitle>Education</SectionTitle>

      {/* Education */}
      {resumeData.education.map((edu, _) => (
      <Section>
        <SectionItem>
          <Institution>{edu.institution}</Institution>
          <Degree>{edu.degree}</Degree>

          {edu.startDate && edu.endDate &&(
            <Years>{edu.startDate} - {edu.endDate}</Years>
          )}
          
        </SectionItem>
      </Section>
    ))}

      {/* Skills */}
      <SectionTitle>Skills</SectionTitle>

      {resumeData.skills.map((skill, index) => (
      <Section key={index}>
        <Skills>
          {skill.hard.map((softSkill, _) => (
            <Skill >{softSkill}</Skill>
          ))}
        </Skills>
      </Section>
      ))}

      {/*Soft Skills */}
      <SectionTitle>Soft Skills</SectionTitle>

      {resumeData.skills.map((skill, index) => (
      <Section key={index}>
        <Skills>
          {skill.soft.map((softSkill, _) => (
            <Skill >{softSkill}</Skill>
          ))}
        </Skills>
      </Section>
      ))}


      {/* Projects */}
      <SectionTitle>Projects</SectionTitle>

      {resumeData.projects.map((pro, _) => (
      <Section>
        <SectionItem>
          <ProjectTitle>{pro}</ProjectTitle>
          
        </SectionItem>
        
      </Section>
      ))}


      {/* Certifications */}
      
      <Section>
        <SectionTitle>Certifications</SectionTitle>
        {resumeData.certifications.map((cert, _) => (
        <SectionItem>
          <CertificationTitle>{cert}</CertificationTitle>
        </SectionItem>
      ))}

      </Section>

    </Container>
  );
};

export default ResumePage;

/* Styled Components */
const Role = styled.h5`

`

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


