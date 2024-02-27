export async function generateMetadata({ params, searchParams }, parent) {
  // load the post
  const { rows: posts } =
    await `https://jsonplaceholder.typicode.com/posts/${params.id}`;
  const post = posts[0]; // get the first one

  return {
    title: post.title,
  };
}

export default async function Page({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await result.json();

  return (
    <div>
      <p>{post.id}</p>
      <h2 className="underline decoration-sky-700">{post.title}</h2>
      <p className="underline decoration-sky-950">{post.body}</p>
    </div>
  );
}
