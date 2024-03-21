import { Contact } from './Contact';
import { Profile } from './Profile';
import { Skills } from './Skills';

function About() {
  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        {Profile()}
      </div>
      <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        {Skills()}
      </div>
      <div style={{ backgroundColor: 'ghostwhite', paddingTop: '50px'}}>
        {Contact()}
      </div>
    </>
  );
}

export default About;