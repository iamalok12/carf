import { InvitationData } from "@/types";

export const invitationData: InvitationData = {
  couple: {
    partner1: {
      firstName: "Shreya",
      lastName: "Chakraborty",
      parents: "Only Daughter of Mr. Arun Kumar Chakraborty & Mrs. Nandita Chakraborty",
    },
    partner2: {
      firstName: "Abhishek",
      lastName: "Mukherjee",
      parents: "Elder Son of Mr. Amitabh Mukherjee & Mrs. Shilpi Mukherjee",
    },
  },
  families: {
    family1: "Chakraborty Family",
    family2: "Mukherjee Family",
  },
  weddingDate: "2026-11-26T19:00:00Z", // Nov 26, 2026
  weddingDateFormatted: "November 26, 2026",
  weddingLocation: "Kolkata & Bilaspur",
  timeline: [
    {
      id: "eyebrow-bath",
      title: "Eyebrow Bath",
      time: "Morning",
      date: "25 November 2026",
      location: "Chakraborty Residence",
      address: "Patna",
      description: "Begin the celebrations with blessings, rituals, and joyful family moments. (Dress Code: Traditional Attire)",
    },
    {
      id: "mehendi-sangeet",
      title: "Mehendi & Sangeet",
      time: "Evening",
      date: "25 November 2026",
      location: "Chakraborty Residence",
      address: "Patna",
      description: "An evening filled with music, dance, laughter, vibrant colours, and unforgettable memories. (Dress Code: Colorful Festive Attire)",
    },
    {
      id: "haldi",
      title: "Haldi Ceremony",
      time: "Morning",
      date: "26 November 2026",
      location: "Wedding Venue",
      address: "Kolkata",
      description: "Come dressed in shades of yellow as we celebrate love, laughter, and the beautiful Haldi rituals. (Dress Code: Yellow Traditional Attire)",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      time: "7:00 PM Onwards",
      date: "26 November 2026",
      location: "Smart Connect",
      address: "Biswa Bangla Sarani, Rajarhat, Kolkata",
      description: "Witness the exchange of our vows and celebrate the beginning of our forever. (Dress Code: Traditional Wedding Attire)",
    },
    {
      id: "reception",
      title: "Reception",
      time: "7:00 PM Onwards",
      date: "30 November 2026",
      location: "The Ananda Imperial",
      address: "Vyapar Vihar Road, Bilaspur, Chhattisgarh",
      description: "Join us for a grand evening of celebration.",
    },
  ],
  venues: [
    {
      name: "Smart Connect (Wedding)",
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
