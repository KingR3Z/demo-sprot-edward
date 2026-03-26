export const client = {
  // Business Details
  name: "Sprot Edward",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Winchester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01962 777339",
  email: "",
  website: "",

  // Location
  address: "Winchester",
  city: "Winchester",
  county: "",
  postcode: "",
  basedIn: "Winchester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Jackie Baker", rating: 5, text: "Just had Sprot Edward finish our garden project in Winchester. What a difference! The team were lovely to have around — respectful of our property, cleaned up after themselves, and produced an amazing result.", date: "2 years ago" },
    { name: "Luke Thomas", rating: 5, text: "Sprot Edward recently completed a major landscaping project for us and the quality is exceptional. The team worked through some challenging weather but still delivered on time. Genuinely thrilled with the outcome.", date: "3 months ago" },
    { name: "Emma B.", rating: 5, text: "Had a wonderful experience with Sprot Edward. From the design phase right through to the final clean-up, everything was handled brilliantly. The new patio and planting scheme look amazing.", date: "8 months ago" },
    { name: "Oliver Wright", rating: 5, text: "Cannot recommend Sprot Edward highly enough. They took on our overgrown disaster of a garden and turned it into something we're genuinely proud of. Fair pricing, honest advice, and brilliant craftsmanship throughout.", date: "2 years ago" },
    { name: "Scott Thompson", rating: 5, text: "We found Sprot Edward online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "a year ago" },
    { name: "Anna Hall", rating: 5, text: "Hired Sprot Edward for a full garden redesign and the results speak for themselves. The team worked hard, kept us informed throughout, and left the site spotless each day. It's like having a brand new garden. Highly recommend to anyone in Winchester.", date: "3 years ago" },
    { name: "Joe D.", rating: 5, text: "We had Sprot Edward come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, every plant placem...", date: "6 months ago" },
    { name: "Hannah H.", rating: 5, text: "From start to finish, working with Sprot Edward was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Sprot Edward | Landscaper in Winchester",
    description: "Professional landscaper in Winchester. 5.0-star rated on Google. Call for a free quote.",
  },
};
