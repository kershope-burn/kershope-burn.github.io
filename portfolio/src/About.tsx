import { Contact } from './Contact';
import { Profile } from './Profile';
import { Skills } from './Skills';
import { Projects } from './Projects';

function About() {
  return (
    <>
      {/* This first div ensures that the start of the remainder of the content is not obscured by the navbar on small screens */}
      <div style={{ height: '80px', backgroundColor: 'ghostwhite' }} />
      <div style={{ backgroundColor: 'ghostwhite' }}>
        {Profile()}
      </div>
      <div style={{ backgroundColor: '', paddingTop: '50px', paddingBottom: '50px' }}>
        {Skills()}
      </div>
      <div style={{ backgroundColor: 'ghostwhite', paddingTop: '50px', paddingBottom: '50px' }}>
        {Projects()}
      </div>
      <div style={{ backgroundColor: '', paddingTop: '50px'}}>
        {Contact()}
      </div>
    </>
  );
}

export default About;