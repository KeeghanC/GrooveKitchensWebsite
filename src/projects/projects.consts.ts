import { TProject } from '../projects/project.type';

export const projects: TProject[] = [
  {
    title: 'Modern Family Kitchen',
    description:
      'A practical, welcoming kitchen concept with generous preparation space, durable finishes, and storage for busy family life.',
  },
  {
    title: 'Compact Kitchen Renovation',
    description:
      'A clever small-space layout that prioritises efficient workflow, hidden storage, and a lighter, more open feel.',
  },
  {
    title: "Entertainer's Kitchen",
    description:
      'A social kitchen concept that brings cooking, dining, and conversation together with a considered island and streamlined cabinetry.',
  },
  {
    title: 'Timeless Kitchen Refresh',
    description:
      'A refined update focused on quality materials, functional storage, and finishes that will feel at home for years to come.',
  },
] as const satisfies TProject[];
