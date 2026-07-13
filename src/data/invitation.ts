import { InvitationData } from "@/types";

export const invitationData: InvitationData = {
  couple: {
    partner1: {
      firstName: "Shreya",
      lastName: "Chakraborty",
      parents: "Only Daughter of Mr. Arun Kumar Chakraborty &\nMrs. Nandita Chakraborty",
    },
    partner2: {
      firstName: "Abhishek",
      lastName: "Mukherjee",
      parents: "Elder Son of Mr. Amitabh Mukherjee &\nMrs. Shilpi Mukherjee",
    },
  },
  families: {
    family1: "Chakraborty Family",
    family2: "Mukherjee Family",
  },
  weddingDate: "2026-11-26T19:00:00Z", // Nov 26, 2026
  weddingDateFormatted: "November 26, 2026",
  weddingLocation: "Kolkata",
  timeline: [
    {
      id: "eyebrow-bath",
      title: "Aiburo Bhaat",
      time: "1 PM",
      date: "25 November 2026",
      location: "Smart Connect",
      address: "Patna",
      description: "Before beginning a lifetime together, let us celebrate the Bride and Groom's last ceremonial meal as they prepare to embrace the beautiful journey of married life.",
    },
    {
      id: "mehendi-sangeet",
      title: "Mehendi & Sangeet",
      time: "6 PM Onwards",
      date: "25 November 2026",
      location: "Smart Connect",
      address: "Patna",
      description: "An evening filled with music, dance, laughter, vibrant colours, and unforgettable memories.",
    },
    {
      id: "haldi",
      title: "Haldi Ceremony",
      time: "Afternoon",
      date: "26 November 2026",
      location: "Smart Connect",
      address: "Kolkata",
      description: "The auspicious Haldi ceremony marks the beginning of the wedding celebrations, as family and friends bless the Bride and Groom with love, happiness, and good fortune.\nDress Code – Wear Yellow. Bring Your Shades. Let's Make It Golden.",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      time: "7:00 PM",
      date: "26 November 2026",
      location: "Smart Connect",
      address: "Biswa Bangla Sarani, Rajarhat, Kolkata",
      description: "Witness the exchange of vows and celebrate the beginning of forever as two hearts unite in the sacred bond of marriage.",
    },
    {
      id: "reception",
      title: "Reception",
      time: "7:00 PM",
      date: "30 November 2026",
      location: "The Ananda Imperial",
      address: "Vyapar Vihar Road, Bilaspur, Chhattisgarh",
      description: "As two families become one and two hearts unite forever, we warmly invite you to an evening of celebration, blessings, and togetherness.",
    },
  ],
  venues: [
    {
      name: "Smart Connect (Wedding Festivities)",
      address: "Biswa Bangla Sarani, Diplomatic Enclave, Action Area-II, 7th Rotary, Rajarhat, Kolkata – 700161",
      mapUrl: "https://maps.google.com/?q=Smart+Connect,+Biswa+Bangla+Sarani,+Rajarhat,+Kolkata",
      image: "/smart-connect.avif",
    },
    {
      name: "The Ananda Imperial (Reception)",
      address: "Vyapar Vihar Road, Bilaspur, Chhattisgarh – 495001",
      mapUrl: "https://maps.google.com/?q=The+Ananda+Imperial,+Vyapar+Vihar+Road,+Bilaspur",
      image: "/amanda.avif",
    }
  ],
  story: [
    {
      id: "intro",
      date: "A beautiful journey",
      title: "Our Forever",
      description: "Every love story is beautiful, but ours is our favourite. As we step into this new chapter of our lives, nothing would mean more than celebrating it with the people who have loved, guided, and blessed us throughout our journey.",
    },
    {
      id: "celebration",
      date: "Togetherness",
      title: "Join Us",
      description: "Your blessings and gracious presence will make our celebrations truly memorable. We look forward to celebrating these beautiful moments together.",
    }
  ],
  gallery: [
    { id: "1", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", alt: "Couple walking" },
    { id: "2", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", alt: "Wedding rings" },
    { id: "3", url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", alt: "Wedding aesthetic" },
    { id: "4", url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", alt: "Champagne glasses" }
  ],
  contact: {
    family: "Chakraborty Family",
    address: "203, Sarat Apartment, East Kannulal Road, Mithapur, Patna – 800001",
    phones: ["+91 8986272957", "+91 9972941211"],
  }
};
