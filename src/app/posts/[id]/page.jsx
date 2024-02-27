import Link from "next/link";
// // /app/posts/[id]/page.jsx
// export default async function PostPage({ params }) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
//   );
//   const post = await response.json(); // parse the response as JSON

//   return (
//     <div>
//       <h1>Post {post.id}</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// /app/posts/page.jsx
export default async function PostListPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // reverse the posts array if the sort parameter is set to descending
  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2>Post List</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> -{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
