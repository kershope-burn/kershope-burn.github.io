import { AboutMe } from './AboutMe';
import { Skills } from './Skills';

function About() {
  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        {AboutMe()}
      </div>
      <div style={{ paddingTop: '50px' }}>
        {Skills()}
      </div>
    </>
  );
}

export default About;