import SectionTitle from './SectionTitle'
import BlogCard from './BlogCard'
import blog1 from '../assets/images/blog-item-01.png'
import blog2 from '../assets/images/blog-item-02.png'
import blog3 from '../assets/images/blog-item-03.png'

const posts = [
  {
    id: 1,
    image: blog1,
    title: 'Vivamus ac vehicula dui',
    text: 'Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.',
  },
  {
    id: 2,
    image: blog2,
    title: 'Phasellus convallis augue',
    text: 'Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.',
  },
  {
    id: 3,
    image: blog3,
    title: 'Nam gravida purus non',
    text: 'Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.',
  },
]

function Blog() {
  return (
    <section id="blog" className="my-12 text-center">
      <div className="site-container">
        <SectionTitle
          title="Blog Entries"
          text="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
          widthClass="md:w-3/5"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} image={post.image} title={post.title} text={post.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
