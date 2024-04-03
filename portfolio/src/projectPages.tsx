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

export const gamingAndSocialMediaData: ProjectData = {
  projectTitle: "projects/gaming-and-social-media",
  projectDescription: [
    "Gaming is a life-long hobby of mine, with my preference tending towards strategy and simulation games like the Civilization series and Paradox Interactive titles. I also find a lot of joy in modifying these games with community-created content - commonly called \"modding\". For a few years, I created and ran a strategy and simulation modding and gaming site called Odin Gaming.",
    "This site is has since ceased operating but it's still available to view with the Wayback Machine. I wrote long-form technical content to explore these games and popular mods. Game modding is often finicky and trouble-shooting is sometimes required."
  ],
  projectGoals: [
    "Learn the essentials of web hosting, WordPress site management, and website performance optimisation.",
    "Build an engaged community and deepen relationships with game publishers, players, and modders.",
    "Create a recognisable brand.",
    "Create a profitable blog by exploring affiliate marketing and other forms of monetisation."
  ],
  projectSkills: [
    <ListGroup.Item><InlineBadge text="WordPress" /> and <InlineBadge text="web hosting" /> from scratch</ListGroup.Item>,
    <ListGroup.Item>Site performance optimisation</ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Python" /> scripting</ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="AWS" /> prototyping</ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="SEO" /></ListGroup.Item>,
    <ListGroup.Item>Community engagement</ListGroup.Item>,
    <ListGroup.Item>Social media automation</ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Google Analytics" /> and web traffic insights</ListGroup.Item>,
    <ListGroup.Item>Affiliate marketing</ListGroup.Item>,
    <ListGroup.Item>Building a brand</ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Technical writing" /></ListGroup.Item>,
    <ListGroup.Item>Blogging</ListGroup.Item>
  ],
  projectOutcome: [
    "Achieved 30,000 unique visitors per month (~50% organic) with ~5000 followers across various social media services and email subscription lists.",
    "Grew an Instagram account from scratch to 3000+ followers and 400-500 interactions per post in less than two months with social media automation.",
    "Broke even on hosting and service costs to maintain the blog through affiliate marketing.",
    "Site performance optimisation is difficult and correlates with site complexity. I attained <3s load times on the home page but if I were to attempt this again, I would keep it simple, and possibly avoid WordPress. I didn't appreciate how steeply the number of bounces increases with increased loading times."
  ]
}

export const charityAndCommunityData: ProjectData = {
  projectTitle: "projects/charity-and-community",
  projectDescription: [
    "I've occasionally used my engineering skills to help benefit my local community directly. Opportunities to do this aren't always obvious but I am always pleased to be able to build metaphorical bridges!"
  ],
  projectGoals: [

  ],
  projectSkills: [
    <ListGroup.Item><InlineBadge text="WordPress" /> and <InlineBadge text="web hosting" /></ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Grav CMS" /></ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Apache HTTP Server" /> on <InlineBadge text="Linux" /></ListGroup.Item>,
    <ListGroup.Item>Site performance optimisation</ListGroup.Item>,
    <ListGroup.Item>Community engagement</ListGroup.Item>
  ],
  projectOutcome: [

  ]
}

export const portfolioSiteData: ProjectData = {
  projectTitle: "projects/portfolio-site",
  projectDescription: [
    "I've dabbled with React and Bootstrap in my work life, but it's never made up a significant portion of my time. I built this portfolio site with React Bootstrap and Create React App to learn React and TypeScript, and build a professional online presence. I host it for free with GitHub Pages.",
    "I learned how to do most of this from the project sites linked above but also used this opportunity to trial GitHub Copilot and found it to be very useful in finding my feet, asking questions about unfamiliar concepts, and quickly refactoring code as my knowledge grew. I was also able to use Microsoft Copilot Designer to generate some of the images on the website; digital art is not my forte and these tools helped me progress without hindrance."
  ],
  projectGoals: [

  ],
  projectSkills: [
    <ListGroup.Item><InlineBadge text="React" /> and <InlineBadge text="React Bootstrap" /></ListGroup.Item>,
    <ListGroup.Item>Ability to quickly learn and build a working knowledge of new tools</ListGroup.Item>,
    <ListGroup.Item>Ability to spin up a simple, responsive, and attractive website</ListGroup.Item>,
    <ListGroup.Item>Static website hosting with <InlineBadge text="GitHub Pages" /></ListGroup.Item>,
    <ListGroup.Item>Comfortable using <InlineBadge text="LLMs" /> (like ChatGPT, GitHub Copilot) to improve performance in delivering concrete results</ListGroup.Item>
  ],
  projectOutcome: [

  ]
}