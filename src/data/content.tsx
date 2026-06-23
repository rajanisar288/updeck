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
    badgeText: 'Recognized For Excellence',
    // REPLACED: Updated with client document content
    headingLine1: 'Engineering Better',
    headingLine2: 'Businesses Through',
    headingLine3: '',
    highlightedText: 'Technology.',
    // REPLACED: Updated description from client document
    description:
      'Updeck helps ambitious organizations identify operational inefficiencies, unlock growth opportunities, and implement technology solutions that create measurable business outcomes.',
    scrollText: 'Scroll Down',
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
    headingLine1: 'Empowering Business',
    headingLine2: 'with',
    highlightedText: 'Expertise.',
    services: [
      {
        icon: 'Lightbulb',
        title: 'Custom Software Development',
        description:
          'We build scalable web and mobile applications tailored to the way your business actually operates.',
      },
      {
        icon: 'Award',
        title: 'Innovative Solutions',
        description:
          'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.',
      },

      {
        icon: 'Headphones',
        title: 'Dedicated Support',
        description:
          'Our team is always available to address your concerns, providing quick and effective solution to keep your business.',
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
    badgeText: 'Get To Know Us',
    headingLine1: 'Empowering Businesses',
    headingLine2: 'with Innovation, Expertise,',
    headingLine3: 'and for',
    highlightedText: 'Success.',
    ctaText: 'Learn More',
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
    headingLine1: 'Solutions to Transform',
    headingLine2: 'Your',
    highlightedText: 'Business.',
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
        category: 'Business',
        title: 'Digital Advertising Platform',
        image: '/case-studies/cs-10-1.png',
        size: 'large-left',
        slug: 'digital-advertising-platform',
      },
      {
        category: 'Connect',
        title: 'Tenant Referencing and Verification Platform',
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
        category: 'Support',
        title: 'Security Code Audit',
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
    headingLine1: 'Need Help? Start',
    headingLine2: 'Here..',
    cardTitle: 'Get Started',
    // cardSubtitle: 'Free Call?',
    phoneNumber: '1-888-452-1505',
    faqs: [
      {
        question: 'What types of organizations do you work with?',
        answer: `Our primary focus is healthcare, veterinary services, logistics, freight operations, shipping
companies, and insurance organizations. However, our methodology applies to any business
seeking operational improvement and technology-driven growth.`,
      },
      {
        question: 'How do projects typically begin?',
        answer: `Every engagement begins with a discovery process where we analyze operational workflows,
business objectives, existing systems, and opportunities for improvement before recommending
solutions`,
      },
      {
        question: 'Do you only build software?',
        answer: `We design and implement technology solutions, but our primary focus is solving business
problems and creating measurable outcomes through technology. `,
      },
      {
        question: 'How do you measure success?',
        answer: `Success is measured through improvements in efficiency, customer experience, revenue
growth, operational capacity, cost reduction, and return on investment.`,
      },
      {
        question: 'Can you work with existing systems?',
        answer: `Yes. Many engagements involve integrating, improving, or modernizing existing platforms rather
than replacing them entirely.`,
      },
      {
        question: 'Do you provide ongoing support?',
        answer: `Yes. We provide long-term optimization, maintenance, enhancement, and strategic technology
advisory services.`,
      },
      {
        question: 'How long does a project take?',
        answer: `Project timelines vary depending on complexity. Most engagements range from several weeks
to several months and are structured around clearly defined milestones.`,
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
    brandDescription:
      'Empowering businesses through intelligent technology and operational innovation.',
    servicesTitle: 'Services',
    services: [
      'Revenue Acceleration Solutions',
      'Operational Efficiency Solutions',
      'Custom Software Development',
    ],
    contactTitle: 'Get in Touch',
    ctaHeading: "Let's Build Future\nTogether.",
    ctaButtonText: 'Get Started Now',
    ctaLink: '/contact',
    ctaImage: '/images/cta-collaboration.jpg',
    ctaImageAlt: 'Collaboration',
    email: 'info@Updeck.com',
    copyright: '© 2026 Updeck All right reserved',
    socialLinks: [
      {
        name: 'Facebook',
        icon: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61589613189421',
      },
      {
        name: 'Instagram',
        icon: 'Instagram',
        url: 'https://www.instagram.com/updeck_technologies/',
      },
      // { name: 'Twitter', icon: 'Twitter', url: '#' },
      {
        name: 'Linkedin',
        icon: 'Linkedin',
        url: 'https://www.linkedin.com/company/updeckofficial/',
      },
    ],
  },
  aboutPage: {
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
        title: 'WHO WE ARE',
        // REPLACED: Updated with client document content
        text: `Updeck is a strategic technology partner helping businesses operate more intelligently, efficiently, and profitably. We believe technology should be implemented to solve meaningful business challenges, not simply because it is modern. By combining business analysis, product strategy, design, engineering, automation, and data intelligence, we create solutions that improve performance and deliver measurable value.`,
      },
      {
        icon: Trophy,
        title: 'MISSION',
        // REPLACED: Updated with client document content
        text: `To help organizations create measurable competitive advantages through intelligent technology and operational innovation. We focus on enabling businesses to streamline operations, improve decision making, and unlock opportunities for sustainable growth and long term success.`,
      },
      {
        icon: Headphones,
        title: 'VISION',
        // REPLACED: Updated with client document content
        text: `To become the strategic technology layer businesses rely on when growth, efficiency, and transformation become critical priorities. We aspire to build lasting partnerships by delivering solutions that continuously support innovation, adaptability, and business resilience.`,
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
          '$35,000 Annual Cost Savings',
          '25% Faster Appointment Handling',
          '180% Estimated ROI',
          '40% Reduction in Administrative Effort',
        ],
      },
      {
        icon: Trophy,
        title: 'Online Pet Pharmacy Platform',
        points: [
          '$30,000 Annual Cost Savings',
          '15% Increase In Repeat Orders',
          '160% Estimated ROI',
          'Improved prescription processing and customer retention',
        ],
      },
      {
        icon: Headphones,
        title: 'Logistics & Transportation Platform',
        points: [
          '$80,000 Annual Cost Savings',
          '20% Fewer Operational Delays',
          '250% Estimated ROI',
          'Enhanced shipment visibility and fleet management performance',
        ],
      },
      {
        icon: Award,
        title: 'Shipping & Clearing Platform',
        points: [
          '$60,000 Annual Cost Savings',
          '35% Reduction In Paperwork',
          '220% Estimated ROI',
          'Streamlined customs processing and reduced manual administration',
        ],
      },
      {
        icon: Zap,
        title: 'AI Marketing Automation Platform',
        points: [
          '$95,000 Annual Cost Savings',
          '25% More Qualified Leads',
          '280% Estimated ROI',
          'Improved campaign performance and lead nurturing efficiency',
        ],
      },
      {
        icon: Shield,
        title: 'Legacy System Modernization',
        points: [
          '$90,000 Annual Cost Savings',
          '30% Lower Maintenance Costs',
          '240% Estimated ROI',
          'Improved reliability, stability, and operational resilience',
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
