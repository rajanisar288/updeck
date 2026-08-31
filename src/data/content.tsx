import {
  Award,
  Facebook,
  Headphones,
  Instagram,
  Lightbulb,
  Linkedin,
  Shield,
  Trophy,
  Twitter,
  Zap,
} from 'lucide-react';

export const content = {
  heroSection: {
    badgeText: 'BUSINESS FIRST TECHNOLOGY SECOND',
    // REPLACED: Updated with client document content
    headingLine1: 'The Right Minds on Deck',
    headingLine2: 'Built to Move Business Up',
    headingLine3: '',
    // highlightedText: 'Technology.'
    // REPLACED: Updated description from client document
    description:
      'Updeck brings analysts, strategists, designers and engineers together to understand how your business works, identify where value is being lost or left untapped, and build the technology that moves it forward.',
    scrollText: 'Bring Us a Business Problem',
    // REPLACED: Updated CTA text from client document
    ctaText: 'Book a Discovery Session',
    ctaLink: '/contact',
    // REPLACED: Updated stats title from client document
    statsTitle: 'Trusted Across High-Performance Industries',
    statsCount: '30k',
    imageAlt: 'Professional executive',
    imageSrc: '/images/hero-executive.jpg',
  },
  servicesSection: {
    badgeIcon: 'Box',
    badgeText: 'Choose The Best',
    headingLine1: 'One Deck, Three Ways ',
    headingLine2: 'to Move Business ',
    highlightedText: 'Forward',
    services: [
      {
        icon: 'Lightbulb',
        title: 'Business Analysis & Strategy',
        description:
          'We examine processes, customer journeys, operational bottlenecks and growth opportunities to identify where technology can create the greatest commercial value.',
      },
      {
        icon: 'Award',
        title: 'Software & Digital Products',
        description:
          'From customer-facing platforms to internal systems, we design and engineer technology around real workflows, commercial objectives and the people who use it.',
      },

      {
        icon: 'Headphones',
        title: 'AI, Automation & Integration',
        description:
          'We identify repetitive work, disconnected systems and underused data—then use automation, AI and integrations where they genuinely improve efficiency or performance.',
      },
    ],
  },
  logoMarqueeSection: {
    logos: [
      { name: 'Core', text: 'core', style: 'font-semibold tracking-[0.22em]' },
      { name: 'Cloudac', text: 'cloudac™', style: 'font-semibold tracking-[-0.04em]' },
      { name: 'Flomodia', text: 'flomodia™', style: 'font-serif italic tracking-[-0.05em]' },
      { name: 'Weglot', text: 'WEGLOT', style: 'font-bold tracking-[0.1em]' },
      { name: 'Updeck', text: 'Updeck', style: 'font-semibold tracking-[-0.03em]' },
      { name: 'TSE', text: 'tse', style: 'font-bold tracking-[-0.06em]' },
      { name: 'Monceau', text: 'monceau', style: 'font-light tracking-[0.12em]' },
    ],
    badgeText: 'Join Over',
    badgeNumber: '1000+',
    badgeSubText: 'Companies with',
    brandName: 'Updeck',
    brandSubText: 'Here',
  },
aboutSection: {
  badgeIcon: 'Box',
  badgeText: 'THE COMMERCIAL FILTER',

  headingLine1: 'Every Build',
  headingLine2: 'Should Move',
  headingLine3: 'Something Up.',
  highlightedText: '',

  revenueTitle: 'Revenue.',
  revenueDescription:
    'Create opportunities to sell more, convert better, retain customers and unlock new ways to grow.',

  efficiencyTitle: 'Efficiency.',
  efficiencyDescription:
    'Reduce friction, repetitive work, wasted time and unnecessary operating costs.',

  ctaText: 'Find Your Opportunity',
  ctaLink: '/about-us',

  experienceLabel: 'Projects Delivered',
  experienceCount: '15+',
  experienceDescription: 'Building reliable solutions with experience.',

  testimonialText:
    'We believe in building lasting relationships with our clients through trust, innovation, and exceptional service.',

  testimonialName: 'Esther Howard',
  testimonialRole: 'Co. Founder',

  imageAlt: 'Business professionals',
  imageSrc: '/images/about-professionals.jpg',

  videoImageAlt: 'Client video',
  videoImageSrc: '/images/about-video.jpg',
},
  solutionsSection: {
    badgeIcon: 'Box',
    badgeText: 'Our Solutions',
    headingLine1: 'Problems Understood',
    headingLine2: 'Solutions',
    highlightedText: 'Built',
    ctaText: 'Learn More',
    ctaLink: '/services',
    autoplayDelay: 1800,
    speed: 900,
    solutions: [
      {
        icon: 'Sparkles',
        title: 'Training and Development Programs',
        description:
          'Empower your workforce with cutting-edge skills and knowledge to drive organizational excellence and growth.',
        image: '/images/project-learning.jpg',
      },
      {
        icon: 'Plus',
        title: 'Business Strategy Development',
        description:
          'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
        image: '/images/project-event.jpg',
      },
      {
        icon: 'Aperture',
        title: 'Customer Experience Solutions',
        description:
          'Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.',
        image: '/images/project-marketing.jpg',
      },
      {
        icon: 'ChevronRight',
        title: 'Sustainability and ESG Consulting',
        description:
          'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.',
        image: '/images/project-environmental.jpg',
      },
    ],
  },
  projectsSection: {
    badgeIcon: 'Box',
    badgeText: 'Proud Projects',
    headingLine1: 'Breaking Boundaries,',
    headingLine2: 'Building',
    highlightedText: 'Dreams.',
    description:
      'We work closely with our clients to understand their unique needs and craft tailored solutions that address challenges.',
    ctaText: 'More Projects',
    ctaLink: '/portfolios',
    viewProjectText: 'View Project',
    projects: [
      {
        category: 'Logistics',
        title: 'Move information as efficiently as you move everything else.',
        image: '/case-studies/cs-10-1.png',
        size: 'large-left',
        slug: 'digital-advertising-platform',
      },
      {
        category: 'Healthcare',
        title: 'Better systems behind better experiences.',
        image: '/case-studies/cs-4-1.png',
        size: 'small-right',
        slug: 'tenant-referencing-and-verification-platform',
      },
      {
        category: 'Empower',
        title: 'Energy and Utility Switching Platform',
        image: '/case-studies/cs-11-1.png',
        size: 'small-left',
        slug: 'energy-and-utility-switching-platform',
      },
      {
        category: 'Insurance',
        title: 'Simplify complexity without simplifying the business.',
        image: '/case-studies/cs-13-1.png',
        size: 'large-right',
        slug: 'security-code-audit',
      },
    ],
  },
  statsSection: {
    badgeIcon: 'Box',
    badgeText: 'Clients Feedback',
    headingLine1: 'Success',
    highlightedText: 'Stories',
    headingLine2: 'Fuel',
    headingLine3: 'our Innovation.',
    stats: [
      { value: '93', label: 'Projects Completed.', suffix: '%' },
      { value: '20', label: 'Reach Worldwide', suffix: 'M' },
      { value: '8.5', label: 'Faster Growth', suffix: 'X' },
      // { value: '100', label: 'Awards archived', suffix: '+' },
    ],
    testimonials: [
      {
        quote:
          "Working with Updeck has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
        name: 'Guy Hawkins',
        role: 'Co. Founder',
        image: 'https://i.pravatar.cc/100?img=12',
      },
      {
        quote:
          "The results we've seen after partnering with Updeck are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.",
        name: 'Ralph Edwards',
        role: 'Co. Founder',
        image: 'https://i.pravatar.cc/100?img=33',
      },
      {
        quote:
          "We've been working with Updeck for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They've become a key contributor to our growth and success that really help us.",
        name: 'Devon Lane',
        role: 'Co. Founder',
        image: 'https://i.pravatar.cc/100?img=5',
      },
      {
        quote:
          'Updeck helped us bring structure, speed, and clarity into our daily operations. Their support made our internal workflow smoother, and the team was always available whenever we needed guidance or improvements.',
        name: 'Esther Howard',
        role: 'Co. Founder',
        image: 'https://i.pravatar.cc/100?img=47',
      },
      {
        quote:
          'Their team understood exactly what we needed and delivered a solution that felt practical, modern, and reliable. We noticed improvements quickly, and our team now works with much better confidence.',
        name: 'Cameron Williamson',
        role: 'Co. Founder',
        image: 'https://i.pravatar.cc/100?img=15',
      },
      {
        quote:
          'The collaboration was smooth from start to finish. Updeck brought fresh ideas, strong execution, and real care for our business goals. They have become an important long-term partner for us.',
        name: 'Brooklyn Simmons',
        role: 'Co. Founder',
        image: 'https://i.pravatar.cc/100?img=32',
      },
    ],
  },
  faqSection: {
    imageSrc: '/images/faq-executive.jpg',
    imageAlt: 'Executive on call',
    headingLine1: 'Bring Us the Problem',
    headingLine2: 'We will Start With the Questions',
    cardTitle: 'Get Started',
    // cardSubtitle: 'Free Call?',
    phoneNumber: '1-888-452-1505',
    faqs: [
      {
        question: 'What exactly does Updeck do?',
        answer: `We analyse business problems and opportunities, determine where technology can create meaningful value, and design and build the solution required to achieve it.`,
      },
      {
        question: 'Do I need to know what technology I want?',
        answer: `No.
In many cases, that is exactly what we help determine.
Start with the business problem. We will work backwards from there.
`,
      },
      {
        question: 'What can Updeck build?',
        answer: `Our capabilities include custom web and mobile applications, internal business systems, dashboards, automation, AI solutions, integrations and other digital products.
What we build depends on what the business actually needs. `,
      },
      {
        question: 'How do you decide whether a project makes sense?',
        answer: `We look at the business case first.
What problem are we solving? What does it currently cost the business? What could improve? What value could the solution create?
The technology comes afterwards.
`,
      },
      {
        question: 'Do you work with existing systems?',
        answer: `Yes.
A better solution does not always mean replacing everything. We can improve, integrate, automate or extend existing systems when that is the smarter business decision.`,
      },
      {
        question: 'What happens during discovery?',
        answer: `We learn how the relevant part of your business operates, identify the problem or opportunity, explore possible solutions and determine the most commercially sensible way forward.`,
      },
      {
        question: 'Can Updeck work as an ongoing technology partner?',
        answer: `Yes.
Updeck is designed to operate as an extension of the business—providing analysis, strategy and technology expertise as new problems and opportunities emerge.`,
      },
      {
        question: 'Why choose Updeck?',
        answer: `Because successful technology initiatives require more than development expertise.
They require understanding how businesses operate, where inefficiencies exist, and how
technology can create meaningful leverage across an organization.`,
      },
    ],
  },
  resourceSection: {
    badgeIcon: 'Box',
    badgeText: 'Insights & Ideas',
    headingLine1: 'The Ultimate',
    highlightedText: 'Resource.',
    authorPrefix: 'By',
    ctaText: 'Read More',
    resources: [
      {
        date: '01',
        month: 'OCT',
        image: '/images/gemini-1.png',
        category: 'Corporate',
        author: 'Ellinien Loma',
        title: 'Entrepreneur Mindset: Habits That Drive Success',
        link: '#',
      },
      {
        date: '12',
        month: 'JUL',
        image: '/images/gemini-2.png',
        category: 'Business',
        author: 'Ellinien Loma',
        title: 'Innovative Solutions for every Business Success',
        link: '#',
      },
      {
        date: '12',
        month: 'JUL',
        image: '/images/gemini-3.png',
        category: 'business',
        author: 'Ellinien Loma',
        title: 'Harnessing Digital Transform a Roadmap Businesses',
        link: '#',
      },
    ],
  },
footerSection: {
  brandName: 'Updeck',

  brandHeadingLine1: 'Deck is the intelligence.',
  brandHeadingLine2: 'Up is the outcome.',

  brandDescription:
    'Business analysis, strategy and technology brought together to move businesses forward.',

  servicesTitle: 'Services',
  services: [
    'Revenue Acceleration Solutions',
    'Operational Efficiency Solutions',
    'Custom Software Development',
  ],

  contactTitle: 'Get in Touch',

  ctaHeading: "What's Keeping Your Business From Moving Up?",
  ctaButtonText: 'Get Started Now',
  ctaLink: '/contact',
  ctaImage: '/images/cta-collaboration.jpg',
  ctaImageAlt: 'Collaboration',

  email: 'info@updeck.com',

  copyright: '© 2026 Updeck All right reserved',

socialLinks: [
  {
    name: 'Facebook',
    icon: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61590877565248 ',
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://www.instagram.com/updeck.tech/',
  },
  {
    name: 'Linkedin',
    icon: 'Linkedin',
    url: 'https://www.linkedin.com/company/updeckofficial/',
  },
  {
    name: 'TikTok',
    icon: 'TikTok',
    url: 'https://www.tiktok.com/@updeck.tech?lang=en-GB', // replace with your TikTok URL
  },
],
},
// Replace ONLY your existing `aboutPage` block inside content.ts with this.
// Keep the rest of content.ts unchanged.

aboutPage: {
  heroTitle: 'About Us',
  breadcrumbText: 'About Us',
  heroImage:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80',

  chooseBestBadge: 'Choose the Best',
  chooseBestHeading: 'We Think Like Operators Then We Build Like',
  chooseBestHeadingLine1: 'We Think Like Operators',
  chooseBestHeadingLine2: 'Then We Build Like',
  chooseBestHighlight: 'Technologists',
  chooseBestCta: 'Request a Call',

  featureCards: [
    {
      icon: Lightbulb,
      title: 'WHY WE EXIST',
      text: `Most Technology Decisions Are Business Decisions in Disguise.

A company may think it needs a new platform.
The real issue might be customer drop-off.

It may ask for automation.
The real issue might be an inefficient process.

It may request a dashboard.
The deeper issue might be that management cannot see what is happening soon enough to act.

This distinction matters.

Updeck exists to connect the visible technology requirement with the underlying commercial reality.

That requires people who can examine a business from several angles at once: customers, operations, economics, workflows, data and technology.

That combination is what defines us.`,
    },
    {
      icon: Trophy,
      title: 'THE IDEA BEHIND UPDECK',
      text: `Updeck combines two ideas.

UP
“Up” represents advancement.

A stronger business should be able to sell better, operate better, understand itself better and scale with less friction.

Progress can appear in different forms:
Higher revenue.
Greater capacity.
Faster decisions.
Better customer experiences.
Improved margins.
Stronger operational control.

The specific metric may change.
The direction should not.

DECK
A deck is where different roles come together to see the wider picture and determine what happens next.

That idea became the foundation of our company.

At Updeck, commercial analysts, strategists, designers, engineers and data specialists do not operate as isolated departments.

They contribute different perspectives to the same business challenge.

One person may understand the economics.
Another may uncover the process failure.
Another may see the product opportunity.
Another may know how to engineer the solution.

The value comes from combining those perspectives before important decisions are made.`,
    },
    {
      icon: Headphones,
      title: 'HOW WE SEE OUR ROLE',
      text: `Somewhere Between Consultancy and Engineering.

Traditional consulting can diagnose a problem without having the capability to build what comes next.

Traditional development can build exactly what was requested without questioning whether the request addresses the real issue.

Updeck was designed to close that gap.

We combine the ability to examine a commercial challenge with the capability to design, engineer and implement the response.

That creates a different kind of relationship.

Clients can involve us before the technical answer is obvious.

We can examine what is happening, define what should change and then carry the solution forward.`,
    },

    // Card 4
    {
      icon: Shield,
      title: 'WHAT GUIDES OUR DECISIONS',
      sections: [
        {
          title: 'Commercial Relevance',
          text:
            'A technically impressive solution can still be a poor business decision. We prioritize usefulness, economics and impact over complexity.',
        },
        {
          title: 'Context Before Recommendation',
          text:
            'There is no responsible solution without context. Industry, customers, workflows, people, constraints and existing systems all influence what should be done.',
        },
        {
          title: 'Evidence Over Assumption',
          text:
            'We prefer to investigate what is happening rather than build around what everyone assumes is happening. Good analysis frequently changes the original brief. That is a feature, not a problem.',
        },
        {
          title: 'Appropriate Technology',
          text:
            'Newer does not automatically mean better. AI, automation and emerging tools matter when they create an advantage—not because they happen to be fashionable. The right technology is the one appropriate to the problem.',
        },
        {
          title: 'End-to-End Accountability',
          text:
            'Insight without execution has limited value. Execution without insight can be expensive. We want responsibility for connecting the two.',
        },
      ],
    },

    // Card 5
    {
      icon: Zap,
      title: 'THE PEOPLE ON THE DECK',
      subtitle: 'Different Expertise. Shared Context.',
      sections: [
        {
          title: 'Business & Operations',
          text:
            'They examine processes, economics, bottlenecks and organizational realities.',
        },
        {
          title: 'Strategy & Product',
          text:
            'They turn business opportunities into clear priorities, requirements and product decisions.',
        },
        {
          title: 'Design',
          text:
            'They make systems understandable and usable for the people who depend on them.',
        },
        {
          title: 'Engineering',
          text:
            'They transform decisions into reliable digital products, applications and infrastructure.',
        },
        {
          title: 'Data & Intelligence',
          text:
            'They help businesses use information more effectively and identify where automation or AI can create genuine leverage.',
        },
      ],
      closingText:
        'No discipline exists simply to hand work to the next. The strongest solutions emerge when each perspective influences the others.',
    },

    // Card 6
    {
      icon: Award,
      title: 'OUR AMBITION',
      subtitle: 'To Earn a Seat in the Business Conversation.',
      paragraphs: [
        'We do not want Updeck to be contacted only after every important decision has already been made and somebody needs a development team.',
        'We want to be useful earlier.',
        'When a company is evaluating an opportunity.',
        'When an operation is becoming difficult to scale.',
        'When management knows something should work better but has not yet determined how.',
        'When new technology creates possibilities but also uncertainty.',
        'That is where our combination of commercial and technical thinking becomes most valuable.',
      ],
    },
  ],

  missionImage:
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80',
  progressTitle: 'Business Progress',
  progressLabel1: 'Business consultants',
  progressLabel2: 'Client communication',

  missionBadge: 'Get to Know Us',
  missionHeading: 'THE FOUNDER LENS',
  missionHighlight: 'Worldwide',
  missionCardTitle: 'Our Mission',
  missionCardText:
    'To unite commercial insight and technical capability so businesses can make better technology decisions and turn those decisions into real operating advantage.',
  missionPoints: ['Innovation & Excellence', 'Exceptional Customer', 'Business Growth'],
  visionCardTitle: 'Our Vision',
  visionCardText:
    'To make commercially intelligent technology partnership the standard for growing businesses.',
  visionPoints: ['Global Leadership', 'Transformative Impact', 'Sustainable Success'],
  missionCta: 'Contact Us',

  logos: ['monceau', 'coudac', 'flomodia', 'Influence4You', 'tse', 'monceau'],
  marqueeText1: 'Join Over',
  marqueeHighlight: '1000+',
  marqueeText2: 'Companies with',
  marqueeText3: 'Updeck Here',

  reviewImage:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
  reviewText:
    "We've been working with Updeck for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met.",
  reviewAuthorName: 'Devon Lane',
  reviewAuthorRole: 'Co. Founder',
  reviewAuthorImage:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  reviewBadgeTitle: 'Hear from Our\nCustomer.',
  reviewRating: '4.9',
  reviewCount: '(80+ Clients Reviews)',

  teamBadge: 'Meet Our Team',
  teamHeading1: 'Success',
  teamHighlight: 'Stories',
  teamHeading2: 'Fuel',
  teamHeading3: 'our Innovation.',

  teamMembers: [
    {
      name: 'Eade Marren',
      role: 'Chief Executive',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
      socialLinks: [
        { icon: Facebook, url: '#' },
        { icon: Twitter, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
      ],
    },
    {
      name: 'Savannah Nguyen',
      role: 'Operations Head',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
      socialLinks: [
        { icon: Facebook, url: '#' },
        { icon: Twitter, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
      ],
    },
    {
      name: 'Kristin Watson',
      role: 'Marketing Lead',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
      socialLinks: [
        { icon: Facebook, url: '#' },
        { icon: Twitter, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
      ],
    },
    {
      name: 'Darlene Robertson',
      role: 'Business Director',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      socialLinks: [
        { icon: Facebook, url: '#' },
        { icon: Twitter, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
      ],
    },
  ],

  faqBadge: 'Common Questions',
  faqHeading: 'Need Help? Start Here...',
  faqDescription:
    'We stay ahead of curve, leveraging modern technologies and strategies to stay competitive.',
  faqCta: 'Request a Call',
  faqs: [
    {
      question: 'What services does Updeck offer to clients?',
      answer:
        'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we will schedule a consultation to discuss your project and how we can best assist you.',
    },
    {
      question: 'How do I get started with Corporate Business?',
      answer:
        'Reach out through our contact form or request a call. We will understand your goals, review your business needs, and suggest the right plan.',
    },
    {
      question: 'How do you ensure the success of a project?',
      answer:
        'We use clear milestones, regular updates, transparent communication, and quality checks to keep every project moving in the right direction.',
    },
    {
      question: 'How long will it take to complete my project?',
      answer:
        'Project timelines depend on scope and complexity. After the first consultation, we provide clear delivery milestones and estimated completion time.',
    },
    {
      question: 'Can I track the progress of my project?',
      answer:
        'Yes. We keep you updated with regular progress reviews, milestone tracking, and clear communication throughout the project.',
    },
  ],
},

  servicesPage: {
    heroTitle: 'Services',
    breadcrumbText: 'Services',
    heroImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80',

    badgeText: 'What We Offer',
    headingLine1: 'Our',
    headingHighlight: 'Services.',

    ctaText: 'Learn More',
    ctaLink: '/contact',

    services: [
      {
        icon: 'BarChart3',
        title: 'Revenue Acceleration Solutions',
        purpose: 'Increase acquisition, engagement, conversion, and customer lifetime value.',
        points: [
          'Digital Customer Platforms',
          'Customer Self-Service Portals',
          'Mobile Experiences',
          'Online Marketplaces',
          'Subscription Platforms',
          'Lead Generation Systems',
          'Customer Retention Solutions',
        ],
      },
      {
        icon: 'Users',
        title: 'Operational Efficiency Solutions',
        purpose:
          'Reduce costs, improve productivity, eliminate manual effort, and increase operational capacity.',
        points: [
          'Workflow Automation',
          'Operational Dashboards',
          'Data Consolidation Systems',
          'Internal Business Platforms',
          'AI Process Automation',
          'Reporting & Analytics',
        ],
      },
      {
        icon: 'Leaf',
        title: 'Custom Software Development',
        purpose: 'Build scalable digital assets tailored to unique operational requirements.',
        points: [
          'Enterprise Web Applications',
          'Cross-Platform Mobile Applications',
          'Business Management Platforms',
          'Industry-Specific Systems',
          'API Integrations',
          'Cloud Infrastructure Solutions',
        ],
      },
    ],
  },
  bussinessImpact: {
    heroTitle: 'About Us',
    breadcrumbText: 'About Us',
    heroImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80',

    chooseBestBadge: 'Choose the Best',
    chooseBestHeading: 'Empowering Business with',
    chooseBestHighlight: 'Expertise',
    chooseBestCta: 'Request a Call',

featureCards: [
  {
    icon: Lightbulb,
    title: '24/7 Digital Veterinary Care Platform',
    points: [
      {
        metric: '$35,000 Annual Cost Savings',
        description: 'Through workflow automation and reduced manual tasks',
      },
      {
        metric: '25% Faster Appointment Handling',
        description: 'Through online booking and automated appointment management',
      },
      {
        metric: '180% Estimated ROI',
        description: 'Through improved operational efficiency and reduced costs',
      },
      {
        metric: '40% Reduction in Administrative Effort',
        description: 'Through digital records and automated processes',
      },
    ],
  },

  {
    icon: Trophy,
    title: 'Online Pet Pharmacy Platform',
    points: [
      {
        metric: '$30,000 Annual Cost Savings',
        description: 'Through automated prescription and order processing',
      },
      {
        metric: '15% Increase in Repeat Orders',
        description: 'Through automated refill reminders and customer engagement',
      },
      {
        metric: '160% Estimated ROI',
        description: 'Through streamlined operations and increased repeat business',
      },
      {
        metric: 'Improved Prescription Processing & Customer Retention',
        description:
          'Through digital prescription management and automated follow-ups',
      },
    ],
  },

  {
    icon: Headphones,
    title: 'Logistics & Transportation Platform',
    points: [
      {
        metric: '$80,000 Annual Cost Savings',
        description: 'Through automated logistics and fleet management',
      },
      {
        metric: '20% Fewer Operational Delays',
        description: 'Through real-time tracking and automated alerts',
      },
      {
        metric: '250% Estimated ROI',
        description:
          'Through improved fleet utilization and operational efficiency',
      },
      {
        metric: 'Enhanced Shipment Visibility & Fleet Management',
        description: 'Through centralized tracking and real-time monitoring',
      },
    ],
  },

  {
    icon: Award,
    title: 'Shipping & Clearing Platform',
    points: [
      {
        metric: '$60,000 Annual Cost Savings',
        description: 'Through digital documentation and automated processing',
      },
      {
        metric: '35% Reduction in Paperwork',
        description: 'Through paperless workflows and digital document management',
      },
      {
        metric: '220% Estimated ROI',
        description:
          'Through reduced administrative costs and faster processing',
      },
      {
        metric: 'Streamlined Customs Processing',
        description:
          'Through automated documentation and workflow management',
      },
    ],
  },

  {
    icon: Zap,
    title: 'AI Marketing Automation Platform',
    points: [
      {
        metric: '$95,000 Annual Cost Savings',
        description:
          'Through automated marketing workflows and reduced manual effort',
      },
      {
        metric: '25% More Qualified Leads',
        description: 'Through AI-powered lead scoring and targeting',
      },
      {
        metric: '280% Estimated ROI',
        description:
          'Through improved campaign efficiency and lead conversion',
      },
      {
        metric: 'Improved Campaign Performance & Lead Nurturing',
        description:
          'Through AI-driven personalization and automated follow-ups',
      },
    ],
  },

  {
    icon: Shield,
    title: 'Legacy System Modernization',
    points: [
      {
        metric: '$90,000 Annual Cost Savings',
        description:
          'Through system modernization and reduced maintenance effort',
      },
      {
        metric: '30% Lower Maintenance Costs',
        description:
          'Through removal of legacy components and streamlined architecture',
      },
      {
        metric: '240% Estimated ROI',
        description:
          'Through improved efficiency and reduced operational costs',
      },
      {
        metric: 'Improved Reliability, Stability & Operational Resilience',
        description:
          'Through modern infrastructure, monitoring and automation',
      },
    ],
  },
],

    missionImage:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80',
    progressTitle: 'Business Progress',
    progressLabel1: 'Business consultants',
    progressLabel2: 'Client communication',

    missionBadge: 'Get to Know Us',
    missionHeading: 'Driving Innovation and Excellence for Sustainable Corporate Success',
    missionHighlight: 'Worldwide',
    missionCardTitle: 'Our Mission',
    missionCardText:
      'Our mission is to empower businesses through innovative solutions and exceptional service.',
    missionPoints: ['Innovation & Excellence', 'Exceptional Customer', 'Business Growth'],
    visionCardTitle: 'Our Vision',
    visionCardText:
      'Our vision is to become a global leader in providing transformative business solutions.',
    visionPoints: ['Global Leadership', 'Transformative Impact', 'Sustainable Success'],
    missionCta: 'Contact Us',

    logos: ['monceau', 'coudac', 'flomodia', 'Influence4You', 'tse', 'monceau'],
    marqueeText1: 'Join Over',
    marqueeHighlight: '1000+',
    marqueeText2: 'Companies with',
    marqueeText3: 'Updeck Here',

    reviewImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    reviewText:
      "We've been working with Updeck for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met.",
    reviewAuthorName: 'Devon Lane',
    reviewAuthorRole: 'Co. Founder',
    reviewAuthorImage:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    reviewBadgeTitle: 'Hear from Our\nCustomer.',
    reviewRating: '4.9',
    reviewCount: '(80+ Clients Reviews)',

    teamBadge: 'Meet Our Team',
    teamHeading1: 'Success',
    teamHighlight: 'Stories',
    teamHeading2: 'Fuel',
    teamHeading3: 'our Innovation.',

    teamMembers: [
      {
        name: 'Eade Marren',
        role: 'Chief Executive',
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
        socialLinks: [
          { icon: Facebook, url: '#' },
          { icon: Twitter, url: '#' },
          { icon: Instagram, url: '#' },
          { icon: Linkedin, url: '#' },
        ],
      },
      {
        name: 'Savannah Nguyen',
        role: 'Operations Head',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
        socialLinks: [
          { icon: Facebook, url: '#' },
          { icon: Twitter, url: '#' },
          { icon: Instagram, url: '#' },
          { icon: Linkedin, url: '#' },
        ],
      },
      {
        name: 'Kristin Watson',
        role: 'Marketing Lead',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        socialLinks: [
          { icon: Facebook, url: '#' },
          { icon: Twitter, url: '#' },
          { icon: Instagram, url: '#' },
          { icon: Linkedin, url: '#' },
        ],
      },
      {
        name: 'Darlene Robertson',
        role: 'Business Director',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
        socialLinks: [
          { icon: Facebook, url: '#' },
          { icon: Twitter, url: '#' },
          { icon: Instagram, url: '#' },
          { icon: Linkedin, url: '#' },
        ],
      },
    ],

    faqBadge: 'Common Questions',
    faqHeading: 'Need Help? Start Here...',
    faqDescription:
      'We stay ahead of curve, leveraging modern technologies and strategies to stay competitive.',
    faqCta: 'Request a Call',
    faqs: [
      {
        question: 'What services does Updeck offer to clients?',
        answer:
          'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we will schedule a consultation to discuss your project and how we can best assist you.',
      },
      {
        question: 'How do I get started with Corporate Business?',
        answer:
          'Reach out through our contact form or request a call. We will understand your goals, review your business needs, and suggest the right plan.',
      },
      {
        question: 'How do you ensure the success of a project?',
        answer:
          'We use clear milestones, regular updates, transparent communication, and quality checks to keep every project moving in the right direction.',
      },
      {
        question: 'How long will it take to complete my project?',
        answer:
          'Project timelines depend on scope and complexity. After the first consultation, we provide clear delivery milestones and estimated completion time.',
      },
      {
        question: 'Can I track the progress of my project?',
        answer:
          'Yes. We keep you updated with regular progress reviews, milestone tracking, and clear communication throughout the project.',
      },
    ],
  },
};

export const CASE_STUDIES = [
  {
    title: '24/7 Digital Veterinary Care Platform',
    slug: 'digital-veterinary-care-platform',
    image: '/case-studies/cs-1.png',
    previewImage: '/case-studies/cs-1-1.png',
    alt: '24/7 Digital Veterinary Care Platform',
    description:
      'Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure. We developed a white label digital platform that allows clinics to provide round the clock virtual consultations under their own brand, connecting pet parents with licensed veterinarians seamlessly.',
    challenge:
      'Clinics could not scale consultation availability without hiring more staff or building costly technology. They also lacked a unified system for scheduling, payments, and emergency care.',
    approach:
      'Simple, intuitive, and trust-building experience for pet parents. Clinics get full operational control through branded dashboards with insights and metrics for decision making.',
    Development:
      'Laravel backend, Angular frontend, WebSockets for real-time communication, Twilio for video consultations, multiple payment gateways. Load tested for 500,000+ users to ensure reliability.',
    Results:
      'Clinics transformed into digital-first care providers, launched services quickly, and generated new revenue streams efficiently.',
    Solution: [
      {
        title: 'Real-time video and audio consultations',
        desc: 'Instant secure consultations between pet owners and licensed veterinarians.',
      },
      {
        title: 'Automated ambulance dispatch for emergencies',
        desc: 'Rapid emergency response system integrated with clinic workflows.',
      },
      {
        title: 'Custom branded portals for clinics and pet owners',
        desc: 'White-label portals tailored to each veterinary practice.',
      },
      {
        title: 'Secure payment and subscription handling',
        desc: 'Subscription billing and payment automation built into the platform.',
      },
      {
        title: 'Invoicing, analytics, and reporting dashboards',
        desc: 'Operational dashboards with business insights and financial reporting.',
      },
    ],
  },
  {
    title: 'Online Pet Pharmacy Platform',
    slug: 'online-pet-pharmacy-platform',
    image: '/case-studies/cs-2.png',
    previewImage: '/case-studies/cs-2-1.png',
    alt: 'Online Pet Pharmacy Platform',
    description:
      'Veterinary businesses needed a scalable platform to sell medications online while ensuring compliance. We built a white label pharmacy platform that manages OTC and prescription medications, logistics, payments, and regulatory workflows.',
    challenge:
      'Online pharmacy operations are complex due to compliance, tax handling, courier integration, and order automation. Many clinics lacked the technical capability to manage these efficiently.',
    approach:
      'Frictionless checkout experience, prescription upload and validation, real-time order tracking, and pharmacy dashboards for operational insights.',
    Development:
      'Built with Laravel and Angular with API integrations for compliance and logistics. Tested for high-volume transactions, tax accuracy, and regional compliance.',
    Results:
      'Enabled clinics to launch online pharmacies quickly, create new revenue channels, and operate efficiently without technical or regulatory burden.',
    Solution: [
      {
        title: 'White label portals for clinics',
        desc: 'Custom branded online pharmacies for veterinary businesses.',
      },
      {
        title: 'OTC and prescription order management',
        desc: 'Supports both over-the-counter and regulated medications.',
      },
      {
        title: 'Automated shipments with courier integrations',
        desc: 'Integrated shipping workflows for faster order fulfillment.',
      },
      {
        title: 'Multi-tax support and secure payment handling',
        desc: 'Tax-compliant payment processing across multiple regions.',
      },
      {
        title: 'Invoicing, analytics, and reporting dashboards',
        desc: 'Business intelligence tools for pharmacy operations.',
      },
    ],
  },
  {
    title: 'Energy and Utility Switching Platform',
    slug: 'energy-and-utility-switching-platform',
    image: '/case-studies/cs-11.png',
    previewImage: '/case-studies/cs-11-1.png',
    alt: 'Energy and Utility Switching Platform',
    description:
      'Partners wanted to offer energy switching services under their own brand without building complex supplier integrations. We created a white label platform that automates switching and partner onboarding.',
    challenge:
      'Manual workflows slowed sales and caused errors. Integrating with multiple suppliers was technically challenging.',
    approach:
      'Guided switching journey for users with clear steps. Partner dashboards provide insights, analytics, and performance tracking.',
    Development:
      '.NET backend and Angular frontend with deep supplier integration. Tested for workflow accuracy, automation reliability, and high-volume handling.',
    Results:
      'Partners can launch energy services quickly, scale efficiently, and focus on growth rather than technology management.',
    Solution: [
      {
        title: 'Partner-specific white label portals',
        desc: 'Custom branded switching portals for each energy partner.',
      },
      {
        title: 'Admin and partner dashboards',
        desc: 'Live dashboards with reporting and business insights.',
      },
      {
        title: 'Automated switching workflows',
        desc: 'Supplier switching processes fully automated end-to-end.',
      },
      {
        title: 'API-first architecture',
        desc: 'Easy partner integrations through scalable APIs.',
      },
    ],
  },
  {
    title: 'Tenant Referencing and Verification Platform',
    slug: 'tenant-referencing-and-verification-platform',
    image: '/case-studies/cs-4.png',
    previewImage: '/case-studies/cs-4-1.png',
    alt: 'Tenant Referencing and Verification Platform',
    description:
      'A platform automating tenant, guarantor, and property verification, streamlining compliance and referencing workflows for letting agents.',
    challenge:
      'Manual verification caused delays, errors, and compliance risks. Agents struggled to process applications quickly while ensuring credit and AML checks were accurate.',
    approach:
      'Guided submission flows for applicants and real-time dashboards for agents. Transparent status tracking enhances user experience.',
    Development:
      'Integrated with credit and AML APIs. Tested for accuracy, reliability, and secure data handling.',
    Results:
      'Transformed the tenant referencing process into a fast, reliable, and fully automated service.',
    Solution: [
      {
        title: 'Tenant and guarantor application management',
        desc: 'Centralized application handling for tenants and guarantors.',
      },
      {
        title: 'Automated property and tenancy verification',
        desc: 'Speeds up verification workflows while reducing manual effort.',
      },
      {
        title: 'Credit check and AML API integration',
        desc: 'Integrated third-party compliance and credit verification services.',
      },
      {
        title: 'Workflow automation for application processing',
        desc: 'Automates repetitive verification and approval tasks.',
      },
    ],
  },
  {
    title: 'Legacy System Modernization',
    slug: 'legacy-system-modernization',
    image: '/case-studies/cs-9.png',
    previewImage: '/case-studies/cs-9-1.png',
    alt: 'Legacy System Modernization',
    description:
      'We modernized a 2002 legacy system into a scalable, secure, and maintainable architecture, enabling uninterrupted business operations.',
    challenge:
      'The old system had performance issues, high maintenance costs, and limited scalability.',
    approach: 'Maintained familiar UX while improving operational efficiency and reliability.',
    Development:
      'Phased migration, regression testing, and performance benchmarking ensured stability and backward compatibility.',
    Results:
      'Enabled the organization to transition smoothly into a modern platform, improving long-term efficiency and scalability.',
    Solution: [
      {
        title: 'Refactored legacy codebase',
        desc: 'Cleaned and restructured outdated code for maintainability.',
      },
      {
        title: 'Modernized system architecture',
        desc: 'Introduced scalable and secure architecture patterns.',
      },
      {
        title: 'Preserved critical workflows',
        desc: 'Ensured business continuity during migration.',
      },
      {
        title: 'Enhanced security and monitoring',
        desc: 'Improved resilience with modern security practices.',
      },
    ],
  },
  {
    title: 'Community Mobile Application',
    slug: 'community-mobile-application',
    image: '/case-studies/cs-8.png',
    previewImage: '/case-studies/cs-8-1.png',
    alt: 'Community Mobile Application',
    description:
      'A mobile application delivering daily community content and utilities for over 200,000 users. It focuses on notifications, location-based services, and easy access to community resources.',
    challenge:
      'Need for a high-performance mobile experience with scalable notifications and real-time engagement.',
    approach:
      'Content-first UX with minimal interface complexity. Clear navigation for content access and real-time engagement.',
    Development:
      'Firebase backend for real-time notifications and content management. Tested for scalability and reliability under high user load.',
    Results:
      'Delivered a trusted mobile platform enabling users to access community content and guidance anytime, increasing loyalty and engagement.',
    Solution: [
      {
        title: 'Daily notifications and reminders',
        desc: 'Timely reminders and engagement notifications.',
      },
      {
        title: 'Location-based prayer times and resources',
        desc: 'Localized services based on user location.',
      },
      {
        title: 'Community content library',
        desc: 'Books, articles, and audio resources in one place.',
      },
      {
        title: 'Simple and intuitive navigation',
        desc: 'Easy access to essential features and content.',
      },
    ],
  },
  {
    title: 'Resume Builder and Job Platform',
    slug: 'resume-builder-and-job-platform',
    image: '/case-studies/cs-7.png',
    previewImage: '/case-studies/cs-7-1.png',
    alt: 'Resume Builder and Job Platform',
    description:
      'A platform connecting applicants and employers through structured resume building and hiring workflows. Employers can discover talent and communicate directly with candidates.',
    challenge:
      'Disorganized resumes and slow hiring processes prevented effective talent acquisition.',
    approach:
      'Clean resume workflows, searchable profiles, employer dashboards, and messaging interface for seamless communication.',
    Development:
      'API-first architecture tested for usability, integration, and cross-platform performance.',
    Results:
      'Streamlined hiring workflows and enhanced efficiency for both employers and applicants.',
    Solution: [
      {
        title: 'Resume creation and import tools',
        desc: 'Allows users to create or import professional resumes quickly.',
      },
      {
        title: 'Employer access to candidate profiles',
        desc: 'Searchable candidate database with detailed profiles.',
      },
      {
        title: 'Direct employer-applicant communication',
        desc: 'Built-in messaging system for faster hiring decisions.',
      },
      {
        title: 'Secure APIs for mobile and web integration',
        desc: 'Cross-platform support through secure API architecture.',
      },
    ],
  },
  {
    title: 'GDPR Compliance Implementation',
    slug: 'gdpr-compliance-implementation',
    image: '/case-studies/cs-6.png',
    previewImage: '/case-studies/cs-6-1.png',
    alt: 'GDPR Compliance Implementation',
    description:
      'Implemented GDPR compliance measures for regulated markets, ensuring proper handling of user data.',
    challenge: 'Data privacy gaps, inconsistent consent handling, and non-compliant processes.',
    approach: 'Transparent consent flows and easy-to-use data management for users.',
    Development:
      'Tested all workflows and data handling practices for compliance and security readiness.',
    Results:
      'Helped the client build robust privacy practices while maintaining operational efficiency.',
    Solution: [
      {
        title: 'GDPR assessment and risk identification',
        desc: 'Identified compliance gaps and regulatory risks.',
      },
      {
        title: 'Improved consent management flows',
        desc: 'User-friendly consent collection and tracking workflows.',
      },
      {
        title: 'Policy alignment with GDPR standards',
        desc: 'Updated internal policies to match legal requirements.',
      },
      {
        title: 'Secure data handling practices',
        desc: 'Implemented stronger controls for storing and processing data.',
      },
    ],
  },
  {
    title: 'Security Code Audit',
    slug: 'security-code-audit',
    image: '/case-studies/cs-13.png',
    previewImage: '/case-studies/cs-13-1.png',
    alt: 'Security Code Audit',
    description:
      'A comprehensive security audit aligned with industry best practices to identify vulnerabilities and improve system security.',
    challenge: 'Potential security risks, outdated code, and architecture weaknesses.',
    approach: 'Focused on security improvements without affecting usability.',
    Development:
      'Comprehensive code review, penetration testing, and mitigation plan implementation.',
    Results: 'Positioned the client for long-term security and business continuity.',
    Solution: [
      {
        title: 'Source code review and vulnerability assessment',
        desc: 'Deep analysis to identify security flaws and weak points.',
      },
      {
        title: 'Architecture evaluation',
        desc: 'Reviewed system architecture for security risks.',
      },
      {
        title: 'Security recommendations',
        desc: 'Provided prioritized remediation roadmap.',
      },
      {
        title: 'Standards alignment',
        desc: 'Aligned platform with industry-recognized security standards.',
      },
    ],
  },
  {
    title: 'Digital Advertising Platform',
    slug: 'digital-advertising-platform',
    image: '/case-studies/cs-10.png',
    previewImage: '/case-studies/cs-10-1.png',
    alt: 'Digital Advertising Platform',
    description:
      'A platform for managing multi-location digital ad campaigns with automated billing and reporting.',
    challenge:
      'Manual ad scheduling, inconsistent reporting, and inefficient billing prevented scalable advertising operations.',
    approach:
      'Intuitive dashboards for advertisers and network managers, with real-time analytics for campaign performance.',
    Development:
      'Tested for real-time updates, accurate billing, and scalability across multiple screens.',
    Results:
      'Enabled clients to scale advertising operations while delivering measurable business results.',
    Solution: [
      {
        title: 'Multi-location ad management',
        desc: 'Manage campaigns across multiple digital screens and locations.',
      },
      {
        title: 'Brand-specific campaign dashboards',
        desc: 'Dedicated dashboards for advertisers and network operators.',
      },
      {
        title: 'Automated billing and revenue tracking',
        desc: 'Eliminates manual invoicing and improves billing accuracy.',
      },
      {
        title: 'Campaign analytics and reporting',
        desc: 'Real-time insights into ad performance and ROI.',
      },
    ],
  },
  {
    title: 'Logistics and Transportation Platform',
    slug: 'logistics-and-transportation-platform',
    image: '/case-studies/cs-3.png',
    previewImage: '/case-studies/cs-3-1.png',
    alt: 'Logistics and Transportation Platform',
    description:
      'A platform providing end-to-end logistics management with real-time tracking and operational control.',
    challenge:
      'Tracking inefficiencies, financial discrepancies, and delayed operations reduced efficiency.',
    approach:
      'Operational dashboards for tracking shipments and finances, with actionable insights for decision making.',
    Development: 'Tested for accuracy, reliability, and financial reconciliation.',
    Results:
      'Enabled logistics operators to efficiently manage shipments and finances across regions.',
    Solution: [
      {
        title: 'Truck and container tracking',
        desc: 'Live visibility into vehicle and container movement.',
      },
      {
        title: 'Seal monitoring for shipment security',
        desc: 'Improved shipment safety and compliance.',
      },
      {
        title: 'Agent and operations management',
        desc: 'Centralized workflows for logistics teams.',
      },
      {
        title: 'Accounting, reporting, and analytics dashboards',
        desc: 'Financial visibility with real-time reporting tools.',
      },
    ],
  },
  {
    title: 'Shipping and Clearing Platform',
    slug: 'shipping-and-clearing-platform',
    image: '/case-studies/cs-12.png',
    previewImage: '/case-studies/cs-12-1.png',
    alt: 'Shipping and Clearing Platform',
    description:
      'A comprehensive platform centralizing shipping, clearing, and logistics workflows across multiple regions.',
    challenge:
      'Fragmented operations and lack of real-time visibility caused delays and financial errors.',
    approach:
      'Workflow-based interface, financial dashboards, and real-time visibility for all operations.',
    Development:
      'Tested for cross-region workflows, accuracy, and financial reporting reliability.',
    Results:
      'Centralized processes enabling multi-region operations with complete control and transparency.',
    Solution: [
      {
        title: 'Shipping agent and container management',
        desc: 'Centralized control over agents and shipping assets.',
      },
      {
        title: 'Import/export workflows and financial modules',
        desc: 'Integrated operations and finance workflows.',
      },
      {
        title: 'Real-time tracking and reporting',
        desc: 'Improved visibility across regions and teams.',
      },
      {
        title: 'Compliance and audit support',
        desc: 'Built-in compliance workflows and reporting.',
      },
    ],
  },
  {
    title: 'Fitness Training Platform',
    slug: 'fitness-training-platform',
    image: '/case-studies/cs-5.png',
    previewImage: '/case-studies/cs-5-1.png',
    alt: 'Fitness Training Platform',
    description:
      'A subscription-based platform delivering structured workout programs with remote engagement and video tutorials.',
    challenge:
      'Fitness businesses struggled to provide consistent digital training content and monetize it efficiently.',
    approach:
      'User-friendly interface for training flows, clear categorization of exercises, and engaging content delivery.',
    Development: 'Tested for performance, video streaming reliability, and subscription handling.',
    Results:
      'Enabled fitness businesses to expand reach, increase engagement, and monetize content effectively.',
    Solution: [
      {
        title: 'Complete training programs and video tutorials',
        desc: 'Structured workout programs with guided video instruction.',
      },
      {
        title: 'Subscription management',
        desc: 'Recurring billing and subscription lifecycle automation.',
      },
      {
        title: 'Remote engagement tools',
        desc: 'Keep users engaged through digital coaching experiences.',
      },
      {
        title: 'Personalized workout plans',
        desc: 'Customized training journeys based on user goals.',
      },
    ],
  },
  {
    title: 'Utility Notification System',
    slug: 'utility-notification-system',
    image: '/case-studies/cs-14.png',
    previewImage: '/case-studies/cs-14-1.png',
    alt: 'Utility Notification System',
    description:
      'A high-volume communication platform for utility suppliers and switching services to manage notifications reliably.',
    challenge:
      'Manual notifications caused delays, missed messages, and inconsistent communication.',
    approach:
      'Operational dashboards for tracking notification status and communication performance.',
    Development:
      'Tested for high-volume processing, delivery tracking, and automation reliability.',
    Results:
      'Streamlined communication, improving coordination and reliability across the utility ecosystem.',
    Solution: [
      {
        title: 'Notification management for email and SMS',
        desc: 'Unified platform for multi-channel communication delivery.',
      },
      {
        title: 'Queue-based processing',
        desc: 'Reliable high-volume delivery using background queues.',
      },
      {
        title: 'Automated follow-ups',
        desc: 'Reduces missed communication with automated reminders.',
      },
      {
        title: 'Status tracking dashboards',
        desc: 'Live visibility into delivery and notification performance.',
      },
    ],
  },
  {
    title: 'AI Marketing Automation Platform',
    slug: 'ai-marketing-automation-platform',
    image: '/case-studies/cs-15.png',
    previewImage: '/case-studies/cs-15-1.png',
    alt: 'AI Marketing Automation Platform',
    description:
      'An AI-powered platform generating personalized campaigns from user behavior and engagement data, increasing conversions and revenue.',
    challenge:
      'Traditional marketing lacked personalization, required manual effort, and was difficult to scale.',
    approach:
      'Dynamic content generation with intuitive campaign builder, personalized experiences per user segment, and cost control for AI usage.',
    Development:
      'Built using Laravel, Angular, and AI APIs. Tested for content accuracy, automation reliability, and high scalability.',
    Results:
      'Clients achieve automated, intelligent marketing with measurable growth, maximizing customer lifetime value.',
    Solution: [
      {
        title: 'AI-driven email and campaign generation',
        desc: 'Automatically creates personalized marketing campaigns.',
      },
      {
        title: 'Audience segmentation and behavior tracking',
        desc: 'Targets users based on live engagement and behavior data.',
      },
      {
        title: 'Multi-step campaign builder',
        desc: 'Build automated customer journeys with smart workflows.',
      },
      {
        title: 'Analytics dashboards and reporting',
        desc: 'Track conversions, revenue, and campaign effectiveness.',
      },
    ],
  },
];
