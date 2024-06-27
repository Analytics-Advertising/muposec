import {  MapPinIcon,EnvelopeIcon, PhoneIcon, CheckCircleIcon,
  GlobeAltIcon, } from '@heroicons/react/20/solid'

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about-us', key: 'about-us', label: 'About Us' },
    { href: '/security-services', key: 'security-services', label: 'Security Services' },
    { href: '/training-services', key: 'training-services', label: 'Training Services' },
    { href: '/training-application', key: 'training-application', label: 'Training Application'}
  ];


  export const SUB_NAV_LINKS = [
    // { href: '/about-us', key: 'about-us', label: 'About Us' },
    { href: '/admin', key: 'admin', label: 'Admin' },
   
  ];


  // SERVICES SECTION
export const SERVICES = [
  {
    title: 'Armed & Unarmed',
    icon: '/bomb.svg',
    variant: 'green',
    description:
      'Our highly trained security personnel provide both armed and unarmed services, ensuring a visible and effective deterrent against potential threats. We tailor our approach to meet your specific security needs.',
  },
  {
    title: 'Technical Services',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Leverage our advanced technical solutions, including state-of-the-art surveillance systems, access control, and alarm monitoring. Our technology ensures comprehensive coverage and real-time response capabilities.',
  },
  {
    title: 'Security Training',
    icon: '/sectra.svg',
    variant: 'green',
    description:
      'Equip yourself and your team with the knowledge and skills needed to handle any security situation. Our comprehensive training programs cover a wide range of topics, from basic security protocols to advanced defensive tactics.',
  },
  {
    title: 'Fire Arm & Competency',
    icon: '/lock.svg',
    variant: 'orange',
    description:
      'Ensure proper handling and proficiency with firearms through our expert-led competency training. We emphasize safety, responsibility, and precision, providing you with the confidence to manage firearms effectively.',
  },
];


// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Security Services',
    links: [
      { name:'Physical Security', icon: CheckCircleIcon},
      { name:'Electronic Security', icon: CheckCircleIcon},
      { name:'Close Protection', icon: CheckCircleIcon},
      { name:'Investigation Services', icon: CheckCircleIcon},
      { name:'Security Consultancy & Risk Management', icon: CheckCircleIcon},
      { name:'Incident Response & Crisis Management', icon: CheckCircleIcon},
    ],
  },
  {
    title: 'Training Services',
    links: [
      { name:'Sasseta Accredited Training',icon: CheckCircleIcon},
      { name:'Private Fire Arm & Competency',icon: CheckCircleIcon},
      { name:'Business Fire Arm & Competency',icon: CheckCircleIcon},
      { name:'Fire Arm Training - One on One',icon: CheckCircleIcon},
      { name:'PSIRA Grades',icon: CheckCircleIcon}
    ],
  },
];

export const FOOTER_ADDRESS_INFO = {
  title: 'Address',
  links: [
    { label: 'Gauteng Office', value: '377 Johannes Ramakhoase St, Office 0005, Jardown 1', icon: MapPinIcon },
    { label: 'Limpopo Office', value: 'Mashau - Thondoni, Plot Number 1135, 0943', icon: MapPinIcon },
   
  ],
};

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Details',
  links: [
    { label: 'Email ', value: 'info@muposecurity.co.za', icon: EnvelopeIcon },
    { label: 'WhatsApp #', value: '+27 84 750 7013', icon: PhoneIcon },
    { label: 'Gauteng Office #', value: '+27 12004 2004', icon: PhoneIcon },
    { label: 'Limpopo Office #', value: ' +27 15 004 1587', icon: PhoneIcon },
  ],
};
  
export const SOCIALS = {
  title: '',
  links: [
    { name: 'Facebook', icon: GlobeAltIcon, url: 'https://www.facebook.com' },
    { name: 'Instagram', icon: GlobeAltIcon, url: 'https://www.instagram.com' },
    { name: 'Twitter', icon: GlobeAltIcon, url: 'https://www.twitter.com' },
    { name: 'YouTube', icon: GlobeAltIcon, url: 'https://www.youtube.com' },
    { name: 'WordPress', icon: GlobeAltIcon, url: 'https://www.wordpress.com' }, // Using GlobeAltIcon as a placeholder for WordPress
  ],
};