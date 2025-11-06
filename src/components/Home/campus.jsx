import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function Blogs() {
  const blogs = [
    {
      title: "The Future of AI in Education",
      desc: "How artificial intelligence is shaping classrooms and learning experiences worldwide.",
      img: "https://images.unsplash.com/photo-1559027615-ce3c18b3cd1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Campus Life Beyond Books",
      desc: "Exploring clubs, cultural fests, and student-led initiatives that define our vibrant campus.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Placements that Inspire Confidence",
      desc: "Top recruiters share why they choose our graduates year after year.",
      img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Innovation and Research Excellence",
      desc: "A look at groundbreaking student-led research projects making global impact.",
      img: "https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Alumni Success Stories",
      desc: "Meet our alumni leading industries across the world.",
      img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const controls = useAnimation();

  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Latest Blogs & Insights
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings, innovations, and success
          stories from our institution.
        </p>
      </div>

      {/* Continuous Marquee Section */}
      <div className="relative w-full overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-6 w-max"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => controls.start()}
          onClick={() => controls.stop()}
        >
          {/* Duplicate blog cards for seamless infinite scroll */}
          {[...blogs, ...blogs].map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="min-w-[300px] h-[300px] md:min-w-[400px] md:h-[400px] bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md text-left transition-all duration-300 flex flex-col"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-1/2 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-center flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
