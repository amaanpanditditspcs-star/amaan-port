export interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  builtWith: string[];
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'itinerary-generator',
    title: 'Kashmir Itinerary Generator',
    summary:
      'A web tool that generates Kashmir travel itineraries. Built for Trust Tour and Travels as an internal tool.',
    role: 'Designed and built by me',
    builtWith: ['HTML', 'CSS', 'JavaScript'],
    // demoUrl: '', (uncomment and fill when available)
    // sourceUrl: '', (uncomment and fill when available)
  },
  {
    id: 'voucher-gst-generator',
    title: 'Voucher and GST Bill Generator',
    summary:
      'An offline web tool that generates PDF vouchers and DOCX GST bills. Built for Trust Tour and Travels as an internal tool.',
    role: 'Designed and built by me',
    builtWith: ['HTML', 'JavaScript'],
    // demoUrl: '',
    // sourceUrl: '',
  },
];
