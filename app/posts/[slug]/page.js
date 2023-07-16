import { notFound } from 'next/navigation';

export default function Post({ params: { slug } }) {
  if (!['one', 'two', 'three'].includes(slug)) {
    notFound();
  }
  return (
    <main>
      <h1>Post {slug}</h1>
    </main>
  );
}
