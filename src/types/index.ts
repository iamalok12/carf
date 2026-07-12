export interface EventDetail {
  id: string;
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  mapUrl?: string;
  description?: string;
}

export interface VenueDetail {
  name: string;
  address: string;
  mapUrl: string;
  image?: string;
}

export interface StoryEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface InvitationData {
  couple: {
    partner1: {
      firstName: string;
      lastName: string;
      parents?: string;
      description?: string;
    };
    partner2: {
      firstName: string;
      lastName: string;
      parents?: string;
      description?: string;
    };
  };
  families: {
    family1: string;
    family2: string;
  };
  weddingDate: string; // ISO String or parsable format
  weddingDateFormatted: string;
  weddingLocation: string;
  timeline: EventDetail[];
  venues: VenueDetail[];
  story: StoryEvent[];
  gallery: { id: string; url: string; alt: string }[];
  contact?: {
    family: string;
    address: string;
    phones: string[];
  };
}
