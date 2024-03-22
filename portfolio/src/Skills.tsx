import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ToggleButton from 'react-bootstrap/ToggleButton';

import SkillCards from './SkillCards';
import { engineeringSkillBadges, managementSkillBadges, softSkillBadges } from './skillBadges';

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

  const engineeringCategories = [
    { id: 'toggle-language-check', variant: 'outline-primary', name: 'language', label: 'Programming languages' },
    { id: 'toggle-framework-check', variant: 'outline-info', name: 'framework', label: 'Frameworks and libraries' },
    { id: 'toggle-devops-check', variant: 'outline-success', name: 'devops', label: 'DevOps and Cloud' },
    { id: 'toggle-software-check', variant: 'outline-dark', name: 'software', label: 'Software and operating systems' },
    { id: 'toggle-other-check', variant: 'outline-secondary', name: 'other', label: 'Other skills' },
  ];

  const managementCategories = [
    { id: 'toggle-management-elements-check', variant: 'outline-primary', name: 'management', label: 'Management elements' },
    { id: 'toggle-compliance-framework-check', variant: 'outline-info', name: 'compliance', label: 'Compliance framework' },
     { id: 'toggle-software-tools-check', variant: 'outline-dark', name: 'software', label: 'Software and tools' },
  ];

  const EngineeringCategoryToggleButton = ({ id, variant, name, label }: { id: string, variant: string, name: string, label: string }) => (
    <ToggleButton
      id={id}
      type="checkbox"
      variant={variant}
      checked={checkedEngineeringCategories[name]}
      value="1"
      onChange={() => toggleEngineeringCategory(name)}
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
    >
      {label}
    </ToggleButton>
  );

  return (
    <Container style={{ minHeight: '75vh' }}>
      <Row className="align-items-center">
        <Col>
          <Row className="text-center" style={{ paddingBottom: '50px' }}>
            <p className="display-3">Skills</p>
          </Row>
          <Row>
            <Tabs
              defaultActiveKey="engineering-skills"
              id="skills"
              className="mb-3"
              justify
            >
              <Tab eventKey="engineering-skills" title="Engineering">
                <Row className="align-items-center" style={{ padding: '20px' }}>
                  <Col xs="auto">
                    <h6>Category: </h6>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={2} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      {engineeringCategories.map(category => <EngineeringCategoryToggleButton key={category.id} {...category} />)}
                    </Stack>
                  </Col>
                </Row>
                <Row>
                  <SkillCards skillBadgesDescriptions={filteredEngineeringSkillBadges} />
                </Row>
              </Tab>
              <Tab eventKey="management-skills" title="Management">
                <Row className="align-items-center" style={{ padding: '20px' }}>
                  <Col xs="auto">
                    <h6>Category: </h6>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={2} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      {managementCategories.map(category => <ManagementCategoryToggleButton key={category.id} {...category} />)}
                    </Stack>
                  </Col>
                </Row>
                <Row>
                  <SkillCards skillBadgesDescriptions={filteredManagementSkillBadges} />
                </Row>
              </Tab>
              <Tab eventKey="soft-skills" title="Soft">
                <Row>
                  <SkillCards skillBadgesDescriptions={softSkillBadges} />
                </Row>
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
