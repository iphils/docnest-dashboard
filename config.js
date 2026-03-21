// Site configuration - All content can be easily updated here
const siteConfig = {
  // Page metadata
  metadata: {
    title: "DocNest Study Room in Thripunithura, Ernakulam - DocNest | CA, UPSC, PSC Prep",
    description: "DocNest study room in Thripunithura, Ernakulam for NEETPG,CA, UPSC, PSC, JEE-Mains, JEE-Advanced and competitive exam preparation. Silent environment, climate controlled, ₹299/day or ₹2000/month. Open 7 AM - 9 PM.",
    keywords: "study room Thripunithura, study room Ernakulam, study room Kochi, CA preparation Ernakulam, UPSC coaching Kochi,JEE coaching Kochi, JEE-Advanced PSC study center Kerala, competitive exam preparation, professional study space, library Thripunithura, silent study room Ernakulam",
    author: "DocNest",
    robots: "index, follow",
    canonical: "https://docnest.co.in/",
    pageHeading: "DocNest Study Room",
    pageSubheading: "State-of-the-art study facilities designed for serious aspirants preparing for CA, UPSC, PSC, JEE-Mains, JEE-Advanced and other competitive exams. Equipped with modern amenities and a focused learning environment."
  },

  // SEO - Open Graph & Twitter Cards
  seo: {
    og: {
      type: "website",
      url: "https://docnest.co.in/",
      title: "DocNest Study Room in Thripunithura, Ernakulam - DocNest",
      description: "State-of-the-art study facilities in Kochi for CA, UPSC, PSC aspirants. Climate controlled, silent environment. ₹299/day or ₹2000/month.",
      image: "https://docnest.co.in/images/view1.jpeg",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      url: "https://docnest.co.in/",
      title: "DocNest Study Room in Thripunithura, Ernakulam - DocNest",
      description: "State-of-the-art study facilities in Kochi for CA, UPSC, PSC aspirants. Climate controlled, silent environment.",
      image: "https://docnest.co.in/images/view1.jpeg"
    }
  },

  // Structured Data - Local Business Schema
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DocNest Study Room",
    "description": "DocNest study facilities for competitive exam aspirants in Thripunithura, Ernakulam",
    "image": "https://docnest.co.in/images/view1.jpeg",
    "telephone": "+918281447237",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, 25th Hour Clinic, Main Road",
      "addressLocality": "Thripunithura",
      "addressRegion": "Kerala",
      "postalCode": "682301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.950012",
      "longitude": "76.349988"
    },
    "url": "https://docnest.co.in",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 07:00-21:00",
    "sameAs": [
      "https://wa.me/918281447237"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Study Room Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Daily Pass",
            "description": "8 hours access with Wi-Fi and power outlets"
          },
          "price": "299",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Unlimited",
            "description": "Unlimited access with reserved seat and locker"
          },
          "price": "2000",
          "priceCurrency": "INR"
        }
      ]
    }
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
      price: "₹299",
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
      price: "₹2,000",
      period: "per month",
      description: "Unlimited access for dedicated aspirants preparing for competitive exams.",
      features: [
        "Unlimited access during operating hours",
        "Reserved seat option",
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
