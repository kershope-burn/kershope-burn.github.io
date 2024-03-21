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

  return (
    <Container>
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
                      <ToggleButton
                        id="toggle-language-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedEngineeringCategories.language}
                        value="1"
                        onChange={() => toggleEngineeringCategory('language')}
                      >
                        Programming languages
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-framework-check"
                        type="checkbox"
                        variant="outline-info"
                        checked={checkedEngineeringCategories.framework}
                        value="1"
                        onChange={() => toggleEngineeringCategory('framework')}
                      >
                        Frameworks and libraries
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-devops-check"
                        type="checkbox"
                        variant="outline-success"
                        checked={checkedEngineeringCategories.devops}
                        value="1"
                        onChange={() => toggleEngineeringCategory('devops')}
                      >
                        DevOps and Cloud
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-software-check"
                        type="checkbox"
                        variant="outline-dark"
                        checked={checkedEngineeringCategories.software}
                        value="1"
                        onChange={() => toggleEngineeringCategory('software')}
                      >
                        Software and operating systems
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-other-check"
                        type="checkbox"
                        variant="outline-secondary"
                        checked={checkedEngineeringCategories.other}
                        value="1"
                        onChange={() => toggleEngineeringCategory('other')}
                      >
                        Other skills
                      </ToggleButton>
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
                      <ToggleButton
                        id="toggle-management-elements-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedManagementCategories.management}
                        value="1"
                        onChange={() => toggleManagementCategory('management')}
                      >
                        Management elements
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-compliance-framework-check"
                        type="checkbox"
                        variant="outline-info"
                        checked={checkedManagementCategories.compliance}
                        value="1"
                        onChange={() => toggleManagementCategory('compliance')}
                      >
                        Compliance framework
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-software-tools-check"
                        type="checkbox"
                        variant="outline-dark"
                        checked={checkedManagementCategories.software}
                        value="1"
                        onChange={() => toggleManagementCategory('software')}
                      >
                        Software and tools
                      </ToggleButton>
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
