import { StaticImageData } from 'next/image';
import ecommerce from '../../../../../../public/assets/ecommerceProjectImage.png';
import TodoTrek from '../../../../../../public/assets/todoTrekProjectImage.png';
import Mood from '../../../../../../public/assets/MoodProjectImage.png';

export type ProjectDetails = {
  title: string;
  image: StaticImageData;
  description: string;
  skills: string[];
  blogLink: string;
  githubLink?: string;
  externalLink?: string;
};

const projects: ProjectDetails[] = [
  {
    title: 'Mood',
    image: Mood,
    description:
      'A mood tracking app that allows you to log your mood and activities throughout the day.',
    skills: [
      'Next.js',
      'Gemini API',
      'Typescript',
      'Clerk',
      'Recharts',
      'Neon',
      'Prisma',
      'Vitest',
      'Zod',
    ],
    blogLink: 'https://fullstack-ai-nextjs-two-blush.vercel.app/',
    githubLink: 'https://github.com/Marwanfouz/fullstack-ai-nextjs',
    externalLink: 'https://fullstack-ai-nextjs-two-blush.vercel.app/',
  },
  {
    title: 'TodoTrek',
    image: TodoTrek,
    description:
      "If you need a simple todo list app that's easy to use and has a beautiful design, TodoTrek is the app for you!",
    skills: ['Nextjs', 'MUI', 'Firebase', 'Typescript', 'React-hook-form'],
    githubLink: 'https://github.com/Marwanfouz/TodoTrek',
    blogLink: 'https://todo-list-tawny-phi.vercel.app',
    externalLink: 'https://todo-list-tawny-phi.vercel.app',
  },
  {
    title: 'E-commerce',
    image: ecommerce,
    description:
      'A burger shop e-commerce site that allows you to browse and purchase buger.',
    skills: ['Typescript', 'React', 'bootstrap', 'Redux', 'Scss', 'stripe'],
    blogLink: '/https://github.com/Marwanfouz/E-commerce-REACT-PROJECT',
    githubLink: 'https://github.com/Marwanfouz/E-commerce-REACT-PROJECT',
  },
];

export default projects;
