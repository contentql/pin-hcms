'use client                     '

import { motion } from 'framer-motion'

// Dummy Data
const featuredBlogs = [
  {
    id: 1,
    title: 'Blog 1',
    description: 'Short description of blog 1',
    image: '/blog1.jpg',
  },
  {
    id: 2,
    title: 'Blog 2',
    description: 'Short description of blog 2',
    image: '/blog2.jpg',
  },
  {
    id: 3,
    title: 'Blog 3',
    description: 'Short description of blog 3',
    image: '/blog3.jpg',
  },
]

const latestPosts = [
  {
    id: 4,
    title: 'Latest Blog 1',
    author: 'Author 1',
    date: '2024-05-31',
    snippet: 'Snippet of latest blog 1',
  },
  {
    id: 5,
    title: 'Latest Blog 2',
    author: 'Author 2',
    date: '2024-05-30',
    snippet: 'Snippet of latest blog 2',
  },
  {
    id: 6,
    title: 'Latest Blog 3',
    author: 'Author 3',
    date: '2024-05-29',
    snippet: 'Snippet of latest blog 3',
  },
]

const categories = [
  'Tech',
  'Lifestyle',
  'Business',
  'Travel',
  'Food',
  'Education',
]

const popularAuthors = [
  { name: 'Author 1', bio: 'Bio of author 1', image: '/author1.jpg' },
  { name: 'Author 2', bio: 'Bio of author 2', image: '/author2.jpg' },
  { name: 'Author 3', bio: 'Bio of author 3', image: '/author3.jpg' },
]

const trendingTopics = [
  'React',
  'Next.js',
  'JavaScript',
  'CSS',
  'Web Development',
  'Programming',
]

const testimonials = [
  { name: 'User 1', feedback: 'Great platform!', image: '/user1.jpg' },
  { name: 'User 2', feedback: 'Love the community here.', image: '/user2.jpg' },
]

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='bg-hero-pattern bg-cover bg-center py-20 text-white'>
        <div className='container mx-auto text-center'>
          <motion.h1
            className='mb-4 text-5xl font-bold'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            Welcome to BlogPlatform
          </motion.h1>
          <motion.p
            className='mb-6 text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Discover amazing blogs or start your own journey today.
          </motion.p>
          <motion.button
            className='rounded-full bg-blue-600 px-6 py-3 text-lg'
            whileHover={{ scale: 1.1 }}>
            Start Blogging
          </motion.button>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className='py-16'>
        <div className='container mx-auto'>
          <h2 className='mb-8 text-3xl font-bold'>Featured Blogs</h2>
          <div className='grid grid-cols-3 gap-8'>
            {featuredBlogs.map(blog => (
              <motion.div
                key={blog.id}
                className='rounded-lg bg-white p-6 shadow-lg'
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.5, delay: blog.id * 0.2 }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='mb-4 rounded-t-lg'
                />
                <h3 className='mb-2 text-2xl font-bold'>{blog.title}</h3>
                <p>{blog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto'>
          <h2 className='mb-8 text-3xl font-bold'>Latest Posts</h2>
          <div className='grid grid-cols-1 gap-8'>
            {latestPosts.map(post => (
              <motion.div
                key={post.id}
                className='rounded-lg bg-white p-6 shadow-lg'
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.5, delay: post.id * 0.2 }}>
                <h3 className='mb-2 text-2xl font-bold'>{post.title}</h3>
                <p className='mb-4 text-gray-600'>
                  By {post.author} on {post.date}
                </p>
                <p>{post.snippet}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className='py-16'>
        <div className='container mx-auto'>
          <h2 className='mb-8 text-3xl font-bold'>Categories</h2>
          <div className='flex flex-wrap gap-4'>
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className='rounded-full bg-blue-600 px-4 py-2 text-white'
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                {category}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Authors */}
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto'>
          <h2 className='mb-8 text-3xl font-bold'>Popular Authors</h2>
          <div className='grid grid-cols-3 gap-8'>
            {popularAuthors.map((author, index) => (
              <motion.div
                key={author.name}
                className='rounded-lg bg-white p-6 shadow-lg'
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <img
                  src={author.image}
                  alt={author.name}
                  className='mx-auto mb-4 h-32 w-32 rounded-full object-cover'
                />
                <h3 className='mb-2 text-center text-2xl font-bold'>
                  {author.name}
                </h3>
                <p>{author.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className='py-16'>
        <div className='container mx-auto'>
          <h2 className='mb-8 text-3xl font-bold'>Trending Topics</h2>
          <div className='flex flex-wrap gap-4'>
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={topic}
                className='rounded-full bg-blue-600 px-4 py-2 text-white'
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                {topic}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='bg-blue-600 py-16 text-white'>
        <div className='container mx-auto text-center'>
          <motion.h2
            className='mb-4 text-3xl font-bold'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            Stay Updated
          </motion.h2>
          <motion.p
            className='mb-6 text-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Subscribe to our newsletter to get the latest posts straight to your
            inbox.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>
            <input
              type='email'
              placeholder='Enter your email'
              className='mb-4 rounded-full p-3 text-gray-800'
            />
            <button className='rounded-full bg-white px-6 py-3 text-blue-600'>
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className='py-16'>
        <div className='container mx-auto'>
          <h2 className='mb-8 text-3xl font-bold'>What Our Users Say</h2>
          <div className='grid grid-cols-2 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className='rounded-lg bg-white p-6 shadow-lg'
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='mx-auto mb-4 h-24 w-24 rounded-full object-cover'
                />
                <h3 className='mb-2 text-center text-2xl font-bold'>
                  {testimonial.name}
                </h3>
                <p className='text-center'>{testimonial.feedback}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto text-center'>
          <motion.h2
            className='mb-4 text-3xl font-bold'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            About Us
          </motion.h2>
          <motion.p
            className='mb-8 text-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            We are committed to providing the best blogging platform for writers
            and readers alike.
          </motion.p>
          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>
            <img
              src='/team-photo.jpg'
              alt='Our Team'
              className='w-1/2 rounded-lg'
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-blue-600 py-20 text-white'>
        <div className='container mx-auto text-center'>
          <motion.h2
            className='mb-6 text-4xl font-bold'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            Ready to Dive In?
          </motion.h2>
          <motion.button
            className='rounded-full bg-white px-8 py-4 text-lg text-blue-600'
            whileHover={{ scale: 1.1 }}>
            Start Blogging
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
