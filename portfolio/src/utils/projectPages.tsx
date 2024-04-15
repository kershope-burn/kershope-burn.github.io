import ListGroup from 'react-bootstrap/ListGroup';
import { ProjectData, InlineBadge } from '../views/ProjectPage';
import '../styles/App.css';

export const digitalSecurityAndPrivacyData: ProjectData = {
  projectTitle: "projects/digital-security-and-privacy",
  projectImageLocation: "/digital-security-and-privacy_64.png",
  projectDescription: [
    "Securing information assets and respecting the privacy of all interested parties are aspects of responsible technology. My understanding of how these concepts encroach on personal digital security and privacy - and why I should care about them - deepened by natural proximity when I worked for a cyber security startup.",
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
  ],
  projectAdditionalDetails: [
    {
      title: "Raspberry Pi: Pi-hole and Home Assistant",
      imageLocation: "/raspberry_256.png",
      content:
        <>
          <p className="portfolio-text">My Raspberry Pi is running Debian 11 (Bullseye) and Docker. With Docker, I can run multiple services and keep them isolated and easily-managed. The Raspberry Pi is, of course, on my home network and I can SSH on from my desktop terminal.</p>
          <p className="portfolio-text"><a href="https://github.com/pi-hole/pi-hole" target="_blank">Pi-hole</a> is a free, open source, DNS sinkhole that protects my home devices from unwanted content without installing any client-side software. This has a lot of advantages, such as blocking in non-browser locations (like mobile apps and smart TVs).</p>
          <p className="portfolio-text">I run Pi-hole in a Docker container and back up the configuration - as a docker-compose file - in a (private) git repository. Some comfort with network administration is also required so that the Pi-hole is set to be the DNS server for all network clients.</p>
          <p className="portfolio-text">Also running on my Raspberry Pi is <a href="https://www.home-assistant.io/" target="_blank">Home Assistant</a>, open source home automation that puts local control and privacy first. This is, again, running on a Docker container and I back up the docker-compose file (and other configuration) in a git repository. I take an extra step to back up the Docker image to a container repository for redundancy when experimenting.</p>
          <p className="portfolio-text">Home Assistant integrates with thousands of smart devices without the privacy incursions of other smart assistants. Integrations are provided by the wider community and can be modified by individual users. This also gives me the flexibility of not feeling locked-in to a given consumer "ecosystem" and also means that IoT requests aren't routed the length-and-breadth of the Internet to take effect - with all requests staying in-network and with low latency.</p>
        </>
    },
    {
      title: "DD-WRT and Secure IoT",
      imageLocation: "/iot_256.png",
      content:
        <>
          <p className="portfolio-text">Not long after I began to dabble with IoT, the risks associated with a lot of potentially insecure devices on one's home network were becoming apparent. With my ISP-provided router not allowing me the desired level of control over VLANs and other network administration, I investigated alternatives.</p>
          <p className="portfolio-text">I discovered the <a href="https://dd-wrt.com/" target="_blank">DD-WRT</a> open source router firmware and a compatible router. Flashing it was relatively straightforward, but I then spent a lot of time tinkering with the home network, separating out VLANs for personal, guest, and IoT use. Not long after, I discovered that I didn't want to maintain a custom and complex home network for multiple weekends a year.</p>
          <p className="portfolio-text">In this security and privacy journey, there is often a balance between secure/private and convenience/usability. This was my first real taste of going too far beyond that balance (for my own tastes).</p>
          <p className="portfolio-text">I did learn, however, some easy modifications to make to my home network that improve home security with minimal long-term upkeep, including using a non-default subnet.</p>
        </>
    },
    {
      title: "DeGoogling and GrapheneOS",
      imageLocation: "/graphene_256.png",
      content:
        <>
          <p className="portfolio-text">Google is the poster child of surveillance capitalism and has championed many innovations in this space that, depending on your beliefs, encroach substantially upon individual privacy.</p>
          <p className="portfolio-text">Exploring the broader ecosystem of services for email, maps, calendars, cloud storage, and so on is well within the reach of most consumers, though there are drawbacks in many cases in terms of cost, technology integration, and convenience.</p>
          <p className="portfolio-text">As a long-time Android user, and as a person that enjoys the flexibility of AOSP rather than the walled garden of Apple products, I sought to remove my final tether to Google and flash my phone with a custom ROM. <a href="https://grapheneos.org/" target="_blank">GrapheneOS</a> is a privacy and security focused mobile OS with Android app compatibility developed as a non-profit open source project. Using this day-to-day brings a more intimate understanding of things like app permissions and the wider app community - beyond Google Play and the Apple Store. Using alternative stores like Aurora and F-Droid helps build an understanding of the trackers and third-party code running in many popular apps, as well as benefiting the open source community.</p>
        </>
    },
    {
      title: "DeMicrosoft and Linux",
      imageLocation: "/tux_256.png",
      content:
        <>
          <p className="portfolio-text">Unapologetically extending the "DeGoogle" term, other tech giants also take liberties with consumer privacy. I have always used Windows as a primary OS, mostly for the ease of gaming, but have dabbled with dual-boot Linux.</p>
          <p className="portfolio-text">I finally took the plunge to use Linux full-time at home, using various Ubuntu-based distros over time (Ubuntu itself, Xubuntu, ElementaryOS, and `Pop!_OS`). Many distros have come a long way in terms of ease of access, but I still encounter issues on a regular basis that require familiarity with Linux to resolve.</p>
          <p className="portfolio-text">The best example is the use of Ubuntu on my Microsoft Surface Pro 4. This is a great piece of hardware, but the hardware itself is problematic when it comes to using Ubuntu. There are various guides scattered about the web and existing projects to load Ubuntu onto this hardware - notably <a href="https://github.com/linux-surface/linux-surface" target="_blank">Linux Surface</a> - but installing Ubuntu and ensuring the keyboard and touchscreen remain functional - including when using full-disk encryption - requires an appreciation of Linux kernels and drivers, and some comfort using the command line.</p>
        </>
    }
  ]
};

export const gamingAndSocialMediaData: ProjectData = {
  projectTitle: "projects/gaming-and-social-media",
  projectImageLocation: "/gaming-and-social-media_64.png",
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
    <ListGroup.Item>Building a brand, <InlineBadge text="SEO" />, community engagement, and social media automation to build an audience.</ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Google Analytics" /> and web traffic insights</ListGroup.Item>,
    <ListGroup.Item>Affiliate marketing</ListGroup.Item>,
    <ListGroup.Item>Blogging and <InlineBadge text="Technical writing" /></ListGroup.Item>,
  ],
  projectOutcome: [
    "Achieved 30,000 unique visitors per month (~50% organic) with ~5000 followers across various social media services and email subscription lists.",
    "Grew an Instagram account from scratch to 3000+ followers and 400-500 interactions per post in less than two months with social media automation.",
    "Broke even on hosting and service costs to maintain the blog through affiliate marketing.",
    "Site performance optimisation is difficult and correlates with site complexity. I attained <3s load times on the home page but if I were to attempt this again, I would keep it simple, and possibly avoid WordPress. I didn't appreciate how steeply the number of bounces increases with increased loading times."
  ],
  projectAdditionalDetails: [
    {
      title: "Blogging with WordPress",
      imageLocation: "/internet_256.png",
      content:
        <>
          <p className="portfolio-text">I created the site with WordPress and paid for hosting and web domains. I tended to avoid writing custom PHP or otherwise deviating too far outside of the WordPress admin dashboard, but it was occasionally necessary. I used Google Analytics to track web traffic and tailor content to improve viewership. I used various other plugins to try and enhance blog performance. There was a long-term goal to make the website profitable with affiliate marketing.</p>
          <p className="portfolio-text">Outside of the technicalities of web design, hosting, and performance, I also learned and practiced skills like SEO, community engagement, referrals and organic traffic, building a brand, and affiliate marketing.</p>
          <p className="portfolio-text">The site eventually broke even month-on-month and attracted about 30,000 unique viewers every month. I had moderate success engaging with the community, regularly engaging with modders directly and building followers through multiple channels.</p>
        </>
    },
    {
      title: "Social media automation",
      imageLocation: "/social-media-automation_256.png",
      content:
        <>
          <p className="portfolio-text">I experimented with social media automation, primarily through Instagram. I scraped artwork relevant to the blog brand (with the permission of the artists) using a simple Python script and stored images in an AWS S3 bucket. I ran <a href="https://jarvee.com/knowledge-base/jarvee-installation/">Jarvee</a> (now discontinued) on an AWS EC2 instance that used these images and automatically created a description with hashtags and backlinks to my blog using another custom Python script. I used yet another browser-based tool to engage with relevant hashtags and influencers automatically. All-in, this wasn't a seamless solution, but it let me quickly build a fresh Instagram account to 3000+ followers in about a month, with 400-500 engagements per post.</p>
          <p className="portfolio-text">I ultimately set all of this aside because of changing personal attitudes to social media, privacy, and a lack of time, but I feel confident in having built a foundation of knowledge to help clients and employers in future.</p>
        </>
    },
  ]
}

export const charityAndCommunityData: ProjectData = {
  projectTitle: "projects/charity-and-community",
  projectImageLocation: "/charity-and-community_64.png",
  projectDescription: [
    "I've occasionally used my engineering skills to help benefit my local community directly. Opportunities to do this aren't always obvious but I am always pleased to be able to build metaphorical bridges!"
  ],
  projectGoals: [
    "Perform requirements elicitation to discover needs vs wants of beneficiaries.",
    "Deliver on needs quickly and at zero initial or ongoing cost."
  ],
  projectSkills: [
    <ListGroup.Item><InlineBadge text="WordPress" /> and <InlineBadge text="web hosting" /></ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Grav CMS" /></ListGroup.Item>,
    <ListGroup.Item><InlineBadge text="Apache HTTP Server" /> on <InlineBadge text="Linux" /></ListGroup.Item>,
    <ListGroup.Item>Site performance optimisation</ListGroup.Item>,
    <ListGroup.Item>Community engagement</ListGroup.Item>
  ],
  projectOutcome: [
    "Projects each turned around in less than two days, including requirements elicitation.",
    "The local community benefited from free services.",
    "Zero initial or ongoing costs to beneficiaries."
  ],
  projectAdditionalDetails: [
    {
      title: "Homes for Ukraine - Home Guide",
      imageLocation: "/ukraine_256.png",
      content:
        <>
          <p className="portfolio-text">I opened my home to Ukrainians participating in the Homes for Ukraine scheme. On learning that I had been matched with a couple fleeing the war, I wanted to quickly draw up a guide to help them settle in, feel comfortable in my home, and engage with local services.</p>
          <p className="portfolio-text">Due to time constraints, I wanted to draw up something incredibly quickly, that I could host within my home network (to maintain privacy), that would be accessible from any device in the home network, and that could be easily modified.</p>
          <p className="portfolio-text">I discovered <a href="https://getgrav.org/" target="_blank">Grav</a>, an open source flat-file CMS. I was able to whip up a site in a couple of hours in an evening, which I served from my Raspberry Pi with Apache HTTP Server. The content is backed-up with a private git repo.</p>
          <p className="portfolio-text">One of my favourite things about Grav is that it natively supports Markdown content so that I was able to very quickly format useful content for my incoming guests. Formatting queues were particularly important as our guests were still learning English.</p>
          <p className="portfolio-text">The local site was accessible by scanning a QR code and our guests were able to quickly translate the page into their chosen language. It was a useful reference in their first few weeks and helped everyone feel at ease knowing that expectations were set.</p>
        </>
    },
    {
      title: "Zero Waste Store - Website Upgrade",
      imageLocation: "/zero-waste_256.png",
      content:
        <>
          <p className="portfolio-text">I regularly shopped at a zero waste store. I got to know the manager and, knowing that I had some volunteer days from my employer at my disposal, offered to help with anything technical they might have been struggling with. They mentioned they'd been meaning to update their website.</p>
          <p className="portfolio-text">Their website was hosted on WordPress and I inherited some technical and administrative issues to overcome before making any other changes. My contact wanted a full website redesign with web store, but some straightforward requirements elicitation (and expectations setting!) showed that the only new feature they really wanted was to show available items on the website - not even stock numbers.</p>
          <p className="portfolio-text">They used a legacy tilling system that mercifully allowed CSV exports, which could then be imported using a free WordPress plugin (a necessity for a small charity) and formatted and categorised for display to the user.</p>
          <p className="portfolio-text">This has since evolved into a full web store but the intermediate step allowed this charity to test the idea and serve their community more effectively before making the leap to e-commerce.</p>
        </>
    }
  ]
}

export const portfolioSiteData: ProjectData = {
  projectTitle: "projects/portfolio-site",
  projectImageLocation: "/portfolio-site_64.png",
  projectDescription: [
    "I've dabbled with React and Bootstrap in my work life, but it's never made up a significant portion of my time. I built this portfolio site with React Bootstrap and Create React App to learn React and TypeScript, and build a professional online presence. I host it for free with GitHub Pages.",
    "I learned how to do most of this from the project sites linked above but also used this opportunity to trial GitHub Copilot and found it to be very useful in finding my feet, asking questions about unfamiliar concepts, and quickly refactoring code as my knowledge grew. I was also able to use Microsoft Copilot Designer to generate some of the images on the website; digital art is not my forte and these tools helped me progress without hindrance."
  ],
  projectGoals: [
    "Learn to use React to create a static site.",
    "Learn to use GitHub Copilot to work with a new technology on a greenfield project.",
    "Effectively communicate skills to prospective employers and clients.",
    "Provide evidence of skills through projects and past employment."
  ],
  projectSkills: [
    <ListGroup.Item><InlineBadge text="React" /> and <InlineBadge text="React Bootstrap" /></ListGroup.Item>,
    <ListGroup.Item>Ability to quickly learn and build a working knowledge of new tools</ListGroup.Item>,
    <ListGroup.Item>Ability to spin up a simple, responsive, and attractive website</ListGroup.Item>,
    <ListGroup.Item>Static website hosting with <InlineBadge text="GitHub Pages" /></ListGroup.Item>,
    <ListGroup.Item>Comfortable using <InlineBadge text="LLMs" /> (like ChatGPT, GitHub Copilot) to improve performance in delivering concrete results</ListGroup.Item>
  ],
  projectOutcome: [
    "React basics learned and implemented.",
    "GitHub Copilot tested and proven to be useful in this situation.",
    "Static site has been created with React.",
    "Like what you see? Help with these outcomes and get in touch!"
  ],
  projectAdditionalDetails: [
  ]
}