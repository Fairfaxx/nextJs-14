import { Metadata } from 'next';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hello World!</span>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home Page of the Internet',
  keywords: ['Home Page', 'Carlitos Page'],
};
