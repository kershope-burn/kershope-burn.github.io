import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ToggleButton from 'react-bootstrap/ToggleButton';

import SkillCards from './SkillCards';
import { engineeringCategories, managementCategories, engineeringSkillBadges, managementSkillBadges, softSkillBadges } from '../utils/skillBadges';

export function Skills() {
  type CheckedCategoriesType = {
    [key: string]: boolean;
  };

  const [checkedEngineeringCategories, setCheckedEngineeringCategories] = useState<CheckedCategoriesType>({
    language: true,
    framework: true,
    devops: true,
    software: false,
    other: false
  });

  const [checkedManagementCategories, setCheckedManagementCategories] = useState<CheckedCategoriesType>({
    management: true,
    compliance: true,
    software: true,
  });

  const toggleManagementCategory = (category: string) => {
    setCheckedManagementCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const filteredManagementSkillBadges = managementSkillBadges.filter(
    (skill) => checkedManagementCategories[skill.category]
  );

  const toggleEngineeringCategory = (category: string) => {
    setCheckedEngineeringCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const filteredEngineeringSkillBadges = engineeringSkillBadges.filter(skill => {
    return checkedEngineeringCategories[skill.category];
  });

  const EngineeringCategoryToggleButton = ({ id, variant, name, label }: { id: string, variant: string, name: string, label: string }) => (
    <ToggleButton
      id={id}
      type="checkbox"
      variant={variant}
      checked={checkedEngineeringCategories[name]}
      value="1"
      onChange={() => toggleEngineeringCategory(name)}
      style={{ fontSize: '0.9rem' }}
    >
      {label}
    </ToggleButton>
  );

  const ManagementCategoryToggleButton = ({ id, variant, name, label }: { id: string, variant: string, name: string, label: string }) => (
    <ToggleButton
      id={id}
      type="checkbox"
      variant={variant}
      checked={checkedManagementCategories[name]}
      value="1"
      onChange={() => toggleManagementCategory(name)}
      style={{ fontSize: '0.9rem' }}
    >
      {label}
    </ToggleButton>
  );

  return (
    <Container style={{ minHeight: '80vh' }}>
      <Row className="align-items-center">
        <Col>
          <Row className="text-center" style={{ paddingBottom: '50px' }}>
            <p className="display-3 portfolio-section-header">skills()</p>
          </Row>
          <Row>
            <Tabs
              defaultActiveKey="engineering-skills"
              id="skills"
              className="mb-3 portfolio-title"
              justify
            >
              <Tab eventKey="engineering-skills" title="Engineering">
                <Row className="align-items-center" style={{ padding: '40px' }}>
                  <Col xs="auto" className="portfolio-title">
                    Category filter:
                  </Col>
                  {engineeringCategories.map(category => 
                    <Col className="portfolio-text text-center" xs="auto" style={{ margin: '2px' }}>
                      <EngineeringCategoryToggleButton key={category.id} {...category} />
                    </Col>
                  )}
                </Row>
                <Row>
                  <SkillCards skillBadgesDescriptions={filteredEngineeringSkillBadges} />
                </Row>
              </Tab>
              <Tab eventKey="management-skills" title="Management">
                <Row className="align-items-center" style={{ padding: '40px' }}>
                  <Col xs="auto" className="portfolio-title">
                    Category filter:
                  </Col>
                  {managementCategories.map(category => 
                    <Col className="portfolio-text text-center" xs="auto" style={{ margin: '2px' }}>
                      <ManagementCategoryToggleButton key={category.id} {...category} />
                    </Col>
                  )}
                </Row>
                <Row>
                  <SkillCards skillBadgesDescriptions={filteredManagementSkillBadges} />
                </Row>
              </Tab>
              <Tab eventKey="soft-skills" title="Soft">
                <Container style={{ minHeight: '40vh'}} className="portfolio-text">
                  <Row style={{ height: '50px' }}></Row>
                  <Row>
                    <SkillCards skillBadgesDescriptions={softSkillBadges} />
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}