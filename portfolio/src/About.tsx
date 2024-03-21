import { Profile } from './Profile';
import { Skills } from './Skills';

function About() {
  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        {Profile()}
      </div>
      <div style={{ paddingTop: '50px' }}>
        {Skills()}
      </div>
    </>
  );
}

export default About;