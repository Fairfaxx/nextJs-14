import Navbar from '@/components/navbar/Navbar';

export const metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
};
export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hello Buddy!</span>
        {children}
      </main>
    </>
  );
}
