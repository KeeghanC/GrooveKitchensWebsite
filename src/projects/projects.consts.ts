import { TProject } from '../projects/project.type';

export const completedProjects: TProject[] = [
  {
    title: 'White Stone Island Kitchen',
    description:
      'A finished custom kitchen with a generous island, integrated appliances, and refined storage.',
    image: 'assets/portfolio/completed-white-island-kitchen.webp',
  },
  {
    title: 'Warm Entertainer’s Kitchen',
    description:
      'A completed kitchen renovation featuring a large island, layered lighting, and textured splashback.',
    image: 'assets/portfolio/completed-warm-entertainer-kitchen.webp',
  },
  {
    title: 'Two-Tone Kitchen Renovation',
    description:
      'Dark timber-look cabinetry, light stone surfaces, and practical integrated storage in a completed home kitchen.',
    image: 'assets/portfolio/completed-two-tone-kitchen.webp',
  },
  {
    title: 'Compact White Kitchen',
    description:
      'A completed compact kitchen with efficient cabinetry, clean lines, and a bright practical layout.',
    image: 'assets/portfolio/completed-compact-white-kitchen.webp',
  },
] as const satisfies TProject[];

export const projects: TProject[] = [
  {
    title: 'Modern Family Kitchen',
    description:
      'A practical, welcoming kitchen concept with generous preparation space, durable finishes, and storage for busy family life.',
    image: 'assets/kitchen-inspiration-sample.webp',
    imageAttribution: 'Design concept image',
  },
  {
    title: 'Compact Kitchen Renovation',
    description:
      'A clever small-space layout that prioritises efficient workflow, hidden storage, and a lighter, more open feel.',
    image: 'assets/compact-kitchen.webp',
    imageAttribution: 'Design concept image',
  },
  {
    title: "Entertainer's Kitchen",
    description:
      'A social kitchen concept that brings cooking, dining, and conversation together with a considered island and streamlined cabinetry.',
    image: 'assets/entertainer-kitchen.webp',
    imageAttribution: 'Design concept image',
  },
  {
    title: 'Timeless Kitchen Refresh',
    description:
      'A refined update focused on quality materials, functional storage, and finishes that will feel at home for years to come.',
    image: 'assets/timeless-kitchen.webp',
    imageAttribution: 'Design concept image',
  },
] as const satisfies TProject[];
