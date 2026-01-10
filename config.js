// Site configuration - All content can be easily updated here
const siteConfig = {
  // Page metadata
  metadata: {
    title: "Professional Study Room - DocNest",
    description: "State-of-the-art study facilities designed for serious aspirants preparing for CA, UPSC, PSC, and other competitive exams. Equipped with modern amenities and a focused learning environment.",
    pageHeading: "Professional Study Room",
    pageSubheading: "State-of-the-art study facilities designed for serious aspirants preparing for CA, UPSC, PSC, and other competitive exams. Equipped with modern amenities and a focused learning environment."
  },

  // Hero section
  hero: {
    image: "images/view1.jpeg",
    alt: "Study Room"
  },

  // Main features
  features: [
    {
      icon: "Silent Environment",
      iconColor: "blue",
      title: "Silent Environment",
      description: "Strict no-talking zones for maximum concentration"
    },
    {
      icon: "Extended Hours",
      iconColor: "green",
      title: "Extended Hours Access",
      description: "Study during extended hours designed for optimal productivity"
    },
    {
      icon: "Climate Controlled",
      iconColor: "purple",
      title: "Climate Controlled",
      description: "Perfect temperature maintained year-round"
    },
    {
      icon: "Premium Seating",
      iconColor: "orange",
      title: "Premium Seating",
      description: "Ergonomic chairs and spacious desks for comfort"
    }
  ],

  // Pricing plans
  pricingPlans: [
    {
      image: "images/view2.jpeg",
      badge: {
        text: "Flexible",
        color: "orange"
      },
      title: "Daily Pass",
      price: "₹200",
      period: "per day",
      description: "Perfect for occasional study sessions and exam preparation.",
      features: [
        "8 hours access",
        "Free Wi-Fi",
        "Power outlets at desk",
        "Climate controlled"
      ],
      highlighted: false
    },
    {
      image: "images/view3.jpeg",
      badge: {
        text: "Most Popular",
        color: "teal"
      },
      title: "Monthly Unlimited",
      price: "₹1,500",
      period: "per month",
      description: "Unlimited access for dedicated aspirants preparing for competitive exams.",
      features: [
        "Unlimited access during operating hours",
        "Reserved seat option",
        "Locker facility",
        "Free Wi-Fi",
        "Power outlets at desk"
      ],
      highlighted: true
    }
  ],

  // Facility details
  facilityDetails: [
    {
      title: "Study Environment",
      description: "Spacious individual study desks with ample lighting, power outlets, and storage space. Separate zones for group discussions and silent study.",
      images: [
        { src: "images/view2.jpeg", alt: "Study Environment 1" },
        { src: "images/view3.jpeg", alt: "Study Environment 2" }
      ]
    },
    {
      title: "Technical Facilities",
      description: "High-speed Wi-Fi, digital library access, and computer terminals for online tests available throughout operating hours.",
      images: [
        { src: "images/view4.jpeg", alt: "Technical Facilities 1" },
        { src: "images/docnest-studyhall-arrangment.png", alt: "Seating Arrangement" }
      ]
    }
  ],

  // Operating hours
  operatingHours: [
    {
      days: "Monday - Saturday: 7:00 AM - 9:00 PM",
      badge: {
        text: "Weekdays",
        color: "green"
      }
    },
    {
      days: "Sunday: 9:00 AM - 9:00 PM",
      badge: {
        text: "Weekend",
        color: "green"
      }
    },
    {
      days: "Closed on Public Holidays",
      badge: {
        text: "Closed",
        color: "red"
      }
    }
  ],

  // Study room guidelines
  guidelines: [
    {
      label: "Silence Zone",
      description: "No talking in designated areas"
    },
    {
      label: "Mobile Policy",
      description: "Phones on silent mode only"
    },
    {
      label: "Food Policy",
      description: "Only water bottles allowed"
    },
    {
      label: "Booking",
      description: "Reserve seats up to 24 hours in advance"
    },
    {
      label: "Break Area",
      description: "Dedicated space for refreshments"
    }
  ],

  // Additional services
  additionalServices: [
    {
      icon: "Library",
      iconColor: "blue",
      title: "Reference Library",
      description: "Extensive collection of reference books and study materials"
    },
    {
      icon: "Study Groups",
      iconColor: "green",
      title: "Study Groups",
      description: "Peer learning and group study sessions"
    }
  ],

  // Photo gallery
  gallery: [
    { src: "images/view1.jpeg", alt: "Study Room View 1" },
    { src: "images/view2.jpeg", alt: "Study Room View 2" },
    { src: "images/view3.jpeg", alt: "Study Room View 3" },
    { src: "images/view4.jpeg", alt: "Study Room View 4" },
    { src: "images/view5.jpeg", alt: "Study Room View 5" },
    { src: "images/docnest-studyhall-arrangment.png", alt: "Seating Arrangement" }
  ],

  // Contact information
  contact: {
    heading: "Start Your Success Journey Today!",
    subheading: "Contact us for more information, pricing details, or to schedule a visit to our facilities.",
    whatsapp: {
      number: "918281447237",
      text: "Hello! I'm preparing for [EXAM NAME] and looking for a study space from [START DATE] to [END DATE]. Can you share details about seat availability?",
      display: "💬 Chat on WhatsApp"
    },
    phone: {
      number: "+918281447237",
      display: "+91 82814 47237"
    },
    address: {
      line1: "1st Floor, 25th Hour Clinic"
    }
  }
};
