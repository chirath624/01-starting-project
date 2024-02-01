

export default function BlogPostPage({params}) {
  console.log(params)
    return (
      <main>
  
  
      <h1>Blog post{params.slug}</h1>
      </main>
    );
  }
  