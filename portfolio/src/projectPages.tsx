import ListGroup from 'react-bootstrap/ListGroup';
import { ProjectData, InlineBadge } from './ProjectPage';

export const digitalSecurityAndPrivacyData: ProjectData = {
  projectTitle: "projects/digital-security-and-privacy",
  projectDescription: [
    "Securing information assets and respecting the privacy of all interested parties are aspects of responsible technology. My understanding of how these concepts encroach on personal digital security and privacy - and why I should care about them - deepened by natural proximity when I worked for a cyber security startup.",
    "This project isn't \"done\" in that it is a lifelong attempt to maintain digital security and privacy as technology, my risk profile, and the law evolves. But this page details some of the bigger steps I've taken to protect my digital life.",
    "There are some more common steps taken by people who wish to protect their digital security and privacy. VPNs, MFA, password managers, ad-blocking browser extensions, and so on. This page is more concerned with steps that, unfortunately, require more technical nous to implement."
  ],
  projectGoals: [
    "Inform and educate myself on personal digital security and privacy and what is reasonably possible to improve these.",
    "Improve these aspects by exploring alternative service providers, operating systems, and network hardening.",
    "Balance security and privacy with convenience."
  ],
  projectSkills: [
    <ListGroup.Item>Familiarity with multiple <InlineBadge text="Linux" /> distributions, package managers, the command line, and different hardware running Linux.</ListGroup.Item>,
    <ListGroup.Item>The finesse to modify operating systems, drivers, and firmware without bricking devices.</ListGroup.Item>,
    <ListGroup.Item>Use of <InlineBadge text="Docker" /> to run multiple services in parallel. Simple back-up and restore with <InlineBadge text="Docker Compose" />.</ListGroup.Item>,
    <ListGroup.Item>Comfort with <InlineBadge text="open source software" /> and departing from the beaten track.</ListGroup.Item>,
    <ListGroup.Item>Experience with home <InlineBadge text="networking" /> that extends into <InlineBadge text="enterprise networking" />. Willingness to experiment and preparing routes to reverse adverse changes.</ListGroup.Item>,
    <ListGroup.Item>Understanding <InlineBadge text="information security" /> and <InlineBadge text="privacy" /> risks associated with every day activities and engagement with third-parties.</ListGroup.Item>
  ],
  projectOutcome: [
    "Well-known service providers that rely on extensive data collection have been replaced with trusted (sometimes paid) alternatives.",
    "Advertisements have been removed from day-to-day browsing in my home network on all devices and within all applications.",
    "The home network has been secured against opportunistic attacks.",
    "Requests to smart devices on the home network now stay within the home network through use of open source software.",
    "Extensive network hardening and use of open source router firmware proved a step too far in introducing significant inconvenience."
  ]
};