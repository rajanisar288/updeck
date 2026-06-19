// src/data/content.ts

import {
    Lightbulb,
    Trophy,
    Headphones,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'lucide-react';

export const content = {
    heroSection: {
        badgeText: "Recognized For Excellence",
        headingLine1: "Engineering Better",
        headingLine2: "Businesses Through",
        // headingLine3: "and",
        highlightedText: "Technology.",
        description: "Represents growth, expansion, and modern business solution present growth, expansion.",
        scrollText: "Scroll Down",
        ctaText: "About Us",
        ctaLink: "/about-us",
        statsTitle: "Happy customer we have world-wide.",
        statsCount: "30k",
        imageAlt: "Professional executive",
        imageSrc: "/images/hero-executive.jpg"
    },
    servicesSection: {
        badgeIcon: "Box",
        badgeText: "Choose The Best",
        headingLine1: "Empowering Business",
        headingLine2: "with",
        highlightedText: "Expertise.",
        services: [
            {
                icon: "Lightbulb",
                title: "Innovative Solutions",
                description: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace."
            },
            {
                icon: "Award",
                title: "Award-Winning Expertise",
                description: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects."
            },
            {
                icon: "Headphones",
                title: "Dedicated Support",
                description: "Our team is always available to address your concerns, providing quick and effective solution to keep your business."
            }
        ]
    },
    logoMarqueeSection: {
        logos: [
            { name: "Core", text: "core", style: "font-semibold tracking-[0.22em]" },
            { name: "Cloudac", text: "cloudac™", style: "font-semibold tracking-[-0.04em]" },
            { name: "Flomodia", text: "flomodia™", style: "font-serif italic tracking-[-0.05em]" },
            { name: "Weglot", text: "WEGLOT", style: "font-bold tracking-[0.1em]" },
            { name: "Updeck", text: "Updeck", style: "font-semibold tracking-[-0.03em]" },
            { name: "TSE", text: "tse", style: "font-bold tracking-[-0.06em]" },
            { name: "Monceau", text: "monceau", style: "font-light tracking-[0.12em]" }
        ],
        badgeText: "Join Over",
        badgeNumber: "1000+",
        badgeSubText: "Companies with",
        brandName: "Updeck",
        brandSubText: "Here"
    },
    aboutSection: {
        badgeIcon: "Box",
        badgeText: "Get To Know Us",
        headingLine1: "Empowering Businesses",
        headingLine2: "with Innovation, Expertise,",
        headingLine3: "and for",
        highlightedText: "Success.",
        ctaText: "Learn More",
        ctaLink: "/about-us",
        experienceLabel: "Experiences",
        experienceCount: "13+",
        experienceDescription: "Decades of Experience, Endless Innovation",
        testimonialText: "We believe in building lasting relationships with our clients through trust, innovation, and exceptional service.",
        testimonialName: "Esther Howard",
        testimonialRole: "Co. Founder",
        imageAlt: "Business professionals",
        imageSrc: "/images/about-professionals.jpg",
        videoImageAlt: "Client video",
        videoImageSrc: "/images/about-video.jpg"
    },
    solutionsSection: {
        badgeIcon: "Box",
        badgeText: "Our Solutions",
        headingLine1: "Solutions to Transform",
        headingLine2: "Your",
        highlightedText: "Business.",
        ctaText: "Learn More",
        ctaLink: "/services",
        autoplayDelay: 1800,
        speed: 900,
        solutions: [
            {
                icon: "Sparkles",
                title: "Training and Development Programs",
                description: "Empower your workforce with cutting-edge skills and knowledge to drive organizational excellence and growth.",
                image: "/images/project-learning.jpg"
            },
            {
                icon: "Plus",
                title: "Business Strategy Development",
                description: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.",
                image: "/images/project-event.jpg"
            },
            {
                icon: "Aperture",
                title: "Customer Experience Solutions",
                description: "Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.",
                image: "/images/project-marketing.jpg"
            },
            {
                icon: "ChevronRight",
                title: "Sustainability and ESG Consulting",
                description: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
                image: "/images/project-environmental.jpg"
            }
        ]
    },
    projectsSection: {
        badgeIcon: "Box",
        badgeText: "Proud Projects",
        headingLine1: "Breaking Boundaries,",
        headingLine2: "Building",
        highlightedText: "Dreams.",
        description: "We work closely with our clients to understand their unique needs and craft tailored solutions that address challenges.",
        ctaText: "More Projects",
        ctaLink: "/services",
        viewProjectText: "View Project",
        projects: [
            {
                category: "Business",
                title: "Event Management Platform",
                image: "/images/project-event.jpg",
                size: "large-left"
            },
            {
                category: "Connect",
                title: "Digital Marketing Campaign",
                image: "/images/project-marketing.jpg",
                size: "small-right"
            },
            {
                category: "Empower",
                title: "Interactive Learning Platform",
                image: "/images/project-learning.jpg",
                size: "small-left"
            },
            {
                category: "Support",
                title: "Environmental Impact Dashboard",
                image: "/images/project-environmental.jpg",
                size: "large-right"
            }
        ]
    },
    statsSection: {
        badgeIcon: "Box",
        badgeText: "Clients Feedback",
        headingLine1: "Success",
        highlightedText: "Stories",
        headingLine2: "Fuel",
        headingLine3: "our Innovation.",
        stats: [
            { value: "93", label: "Projects Completed.", suffix: "%" },
            { value: "20", label: "Reach Worldwide", suffix: "M" },
            { value: "8.5", label: "Faster Growth", suffix: "X" },
            { value: "100", label: "Awards archived", suffix: "+" }
        ],
        testimonials: [
            {
                quote: "Working with Updeck has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
                name: "Guy Hawkins",
                role: "Co. Founder",
                image: "https://i.pravatar.cc/100?img=12"
            },
            {
                quote: "The results we've seen after partnering with Updeck are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.",
                name: "Ralph Edwards",
                role: "Co. Founder",
                image: "https://i.pravatar.cc/100?img=33"
            },
            {
                quote: "We've been working with Updeck for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They've become a key contributor to our growth and success that really help us.",
                name: "Devon Lane",
                role: "Co. Founder",
                image: "https://i.pravatar.cc/100?img=5"
            },
            {
                quote: "Updeck helped us bring structure, speed, and clarity into our daily operations. Their support made our internal workflow smoother, and the team was always available whenever we needed guidance or improvements.",
                name: "Esther Howard",
                role: "Co. Founder",
                image: "https://i.pravatar.cc/100?img=47"
            },
            {
                quote: "Their team understood exactly what we needed and delivered a solution that felt practical, modern, and reliable. We noticed improvements quickly, and our team now works with much better confidence.",
                name: "Cameron Williamson",
                role: "Co. Founder",
                image: "https://i.pravatar.cc/100?img=15"
            },
            {
                quote: "The collaboration was smooth from start to finish. Updeck brought fresh ideas, strong execution, and real care for our business goals. They have become an important long-term partner for us.",
                name: "Brooklyn Simmons",
                role: "Co. Founder",
                image: "https://i.pravatar.cc/100?img=32"
            }
        ]
    },
    faqSection: {
        imageSrc: "/images/faq-executive.jpg",
        imageAlt: "Executive on call",
        headingLine1: "Need Help? Start",
        headingLine2: "Here..",
        cardTitle: "Get Started",
        cardSubtitle: "Free Call?",
        phoneNumber: "1-888-452-1505",
        faqs: [
            {
                question: "What services does Updeck offer to clients?",
                answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
            },
            {
                question: "How do I get started with Corporate Business?",
                answer: "Starting with us is straightforward. Reach out via our contact form or call us directly. We'll arrange an initial consultation to understand your business needs, goals, and challenges."
            },
            {
                question: "How do you ensure the success of a project?",
                answer: "We use clear milestones, regular updates, transparent communication, and quality checks throughout the full project lifecycle."
            },
            {
                question: "How long will it take to complete my project?",
                answer: "Project timelines depend on the scope and complexity. After the first consultation, we provide a clear timeline with milestones and delivery dates."
            },
            {
                question: "Can I track the progress of my project?",
                answer: "Yes. We keep you updated through regular progress reports, reviews, and communication so you always know where the project stands."
            }
        ]
    },
    resourceSection: {
        badgeIcon: "Box",
        badgeText: "Insights & Ideas",
        headingLine1: "The Ultimate",
        highlightedText: "Resource.",
        authorPrefix: "By",
        ctaText: "Read More",
        resources: [
            {
                date: "01",
                month: "OCT",
                image: "/images/resource-1.jpg",
                category: "Corporate",
                author: "Ellinien Loma",
                title: "Entrepreneur Mindset: Habits That Drive Success",
                link: "#"
            },
            {
                date: "12",
                month: "JUL",
                image: "/images/resource-2.jpg",
                category: "Business",
                author: "Ellinien Loma",
                title: "Innovative Solutions for every Business Success",
                link: "#"
            },
            {
                date: "12",
                month: "JUL",
                image: "/images/resource-3.jpg",
                category: "business",
                author: "Ellinien Loma",
                title: "Harnessing Digital Transform a Roadmap Businesses",
                link: "#"
            }
        ]
    },
    footerSection: {
        brandName: "Updeck",
        brandDescription: "Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion.",
        awards: [
            { value: "18", label: "Clutch\nAwards" },
            { value: "5", label: "Awwwards" }
        ],
        servicesTitle: "Services",
        services: [
            "Customer Experience",
            "Training Programs",
            "Business Strategy",
            "Training Program",
            "ESG Consulting",
            "Development Hub"
        ],
        resourcesTitle: "Resources",
        resources: [
            { label: "Contact us", path: "/contact" },
            { label: "Team Member", path: "/about-us" },
            { label: "Recognitions", path: "/faq" },
            { label: "Careers", path: "/about-us", badge: "NEW" },
            { label: "News", path: "/about-us" },
            { label: "Feedback", path: "/contact" }
        ],
        newsletterTitle: "Subscribe to Our\nNewsletter.",
        newsletterPlaceholder: "Enter email",
        termsText: "Agree to our",
        termsLinkText: "Terms & Condition?",
        termsLink: "/faq",
        ctaHeading: "Let's Build Future\nTogether.",
        ctaButtonText: "Get Started Now",
        ctaLink: "/contact",
        ctaImage: "/images/cta-collaboration.jpg",
        ctaImageAlt: "Collaboration",
        phoneNumber: "+1 (009) 544-7818",
        email: "info@Updeck.com",
        copyright: "© 2026 Updeck All right reserved",
        socialLinks: [
            { name: "Facebook", icon: "Facebook", url: "#" },
            { name: "Instagram", icon: "Instagram", url: "#" },
            { name: "Twitter", icon: "Twitter", url: "#" },
            { name: "Linkedin", icon: "Linkedin", url: "#" }
        ]
    },
    aboutPage: {
        heroTitle: "About Us",
        breadcrumbText: "About Us",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",

        chooseBestBadge: "Choose the Best",
        chooseBestHeading: "Empowering Business with",
        chooseBestHighlight: "Expertise",
        chooseBestCta: "Request a Call",

        featureCards: [
            {
                icon: Lightbulb,
                title: "Innovative Solutions",
                text: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep your business competitive in a marketplace."
            },
            {
                icon: Trophy,
                title: "Award-Winning Expertise",
                text: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects."
            },
            {
                icon: Headphones,
                title: "Dedicated Support",
                text: "Our team is always available to address your concerns, providing quick and effective solutions to keep your business."
            }
        ],

        missionImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
        progressTitle: "Business Progress",
        progressLabel1: "Business consultants",
        progressLabel2: "Client communication",

        missionBadge: "Get to Know Us",
        missionHeading: "Driving Innovation and Excellence for Sustainable Corporate Success",
        missionHighlight: "Worldwide",
        missionCardTitle: "Our Mission",
        missionCardText: "Our mission is to empower businesses through innovative solutions and exceptional service.",
        missionPoints: ["Innovation & Excellence", "Exceptional Customer", "Business Growth"],
        visionCardTitle: "Our Vision",
        visionCardText: "Our vision is to become a global leader in providing transformative business solutions.",
        visionPoints: ["Global Leadership", "Transformative Impact", "Sustainable Success"],
        missionCta: "Learn More About Us",

        logos: ["monceau", "coudac", "flomodia", "Influence4You", "tse", "monceau"],
        marqueeText1: "Join Over",
        marqueeHighlight: "1000+",
        marqueeText2: "Companies with",
        marqueeText3: "Updeck Here",

        reviewImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
        reviewText: "We've been working with Updeck for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met.",
        reviewAuthorName: "Devon Lane",
        reviewAuthorRole: "Co. Founder",
        reviewAuthorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        reviewBadgeTitle: "Hear from Our\nCustomer.",
        reviewRating: "4.9",
        reviewCount: "(80+ Clients Reviews)",

        teamBadge: "Meet Our Team",
        teamHeading1: "Success",
        teamHighlight: "Stories",
        teamHeading2: "Fuel",
        teamHeading3: "our Innovation.",

        teamMembers: [
            {
                name: "Eade Marren",
                role: "Chief Executive",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
                socialLinks: [
                    { icon: Facebook, url: "#" },
                    { icon: Twitter, url: "#" },
                    { icon: Instagram, url: "#" },
                    { icon: Linkedin, url: "#" }
                ]
            },
            {
                name: "Savannah Nguyen",
                role: "Operations Head",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
                socialLinks: [
                    { icon: Facebook, url: "#" },
                    { icon: Twitter, url: "#" },
                    { icon: Instagram, url: "#" },
                    { icon: Linkedin, url: "#" }
                ]
            },
            {
                name: "Kristin Watson",
                role: "Marketing Lead",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
                socialLinks: [
                    { icon: Facebook, url: "#" },
                    { icon: Twitter, url: "#" },
                    { icon: Instagram, url: "#" },
                    { icon: Linkedin, url: "#" }
                ]
            },
            {
                name: "Darlene Robertson",
                role: "Business Director",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
                socialLinks: [
                    { icon: Facebook, url: "#" },
                    { icon: Twitter, url: "#" },
                    { icon: Instagram, url: "#" },
                    { icon: Linkedin, url: "#" }
                ]
            }
        ],

        faqBadge: "Common Questions",
        faqHeading: "Need Help? Start Here...",
        faqDescription: "We stay ahead of curve, leveraging modern technologies and strategies to stay competitive.",
        faqCta: "Request a Call",
        faqs: [
            {
                question: "What services does Updeck offer to clients?",
                answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we will schedule a consultation to discuss your project and how we can best assist you."
            },
            {
                question: "How do I get started with Corporate Business?",
                answer: "Reach out through our contact form or request a call. We will understand your goals, review your business needs, and suggest the right plan."
            },
            {
                question: "How do you ensure the success of a project?",
                answer: "We use clear milestones, regular updates, transparent communication, and quality checks to keep every project moving in the right direction."
            },
            {
                question: "How long will it take to complete my project?",
                answer: "Project timelines depend on scope and complexity. After the first consultation, we provide clear delivery milestones and estimated completion time."
            },
            {
                question: "Can I track the progress of my project?",
                answer: "Yes. We keep you updated with regular progress reviews, milestone tracking, and clear communication throughout the project."
            }
        ]
    },
    servicesPage: {
        heroTitle: "Services",
        breadcrumbText: "Services",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",

        badgeText: "What We Offer",
        headingLine1: "Our",
        headingHighlight: "Services.",

        ctaText: "Learn More",
        ctaLink: "/contact",

        services: [
            {
                icon: "BarChart3",
                title: "Business Strategy Development",
                description: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized."
            },
            {
                icon: "Users",
                title: "Customer Experience Solutions",
                description: "Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive."
            },
            {
                icon: "Leaf",
                title: "Sustainability and ESG Consulting",
                description: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors."
            },
            {
                icon: "GraduationCap",
                title: "Training and Development Programs",
                description: "Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need."
            },
            {
                icon: "Monitor",
                title: "IT Support & Maintenance",
                description: "Our IT Support & Maintenance services ensure that your technology infrastructure is running smoothly and securely."
            },
            {
                icon: "Megaphone",
                title: "Marketing Strategy & Campaigns",
                description: "Effective marketing is key to driving business growth. Our Marketing Strategy & Campaigns service helps you reach."
            }
        ]
    }
};