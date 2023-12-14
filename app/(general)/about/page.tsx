import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Descriptions',
  keywords: ['About page', "Fefe's page", 'informational'],
};

export default function About() {
  return <span className="text-7xl">About Page</span>;
}
