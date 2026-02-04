import React, { useRef, useState } from 'react';
import { ArrowRight, Search, X, Share2, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Blog = () => {
  const blogRef = useRef(null);
  const isVisible = useIntersectionObserver(blogRef);
  const [selectedFilter, setSelectedFilter] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Building a Chrome Extension with Google Gemini API',
      date: 'Jan 15, 2026',
      readTime: '8 min read',
      excerpt: 'A deep dive into creating a Manifest V3 Chrome Extension that leverages the Google Gemini API for text summarization. Learn about async JavaScript, API integration, and building features like dark mode and text-to-speech.',
      tags: ['JavaScript', 'Chrome Extension', 'Gemini API', 'Web Development'],
      category: 'Technical Tutorials',
      content: `A deep dive into creating a Manifest V3 Chrome Extension that leverages the Google Gemini API for text summarization. Learn about async JavaScript, API integration, and building features like dark mode and text-to-speech.

In this comprehensive guide, I'll walk you through the process of building a powerful Chrome Extension from scratch. We'll explore the fundamentals of Manifest V3, understand how to securely integrate with the Google Gemini API, and implement advanced features that users will love.

## Getting Started with Manifest V3

Manifest V3 represents the latest evolution of Chrome Extension architecture. It introduces stricter security policies and better performance optimizations compared to its predecessor.

## Key Topics Covered

- Setting up your extension structure
- Configuring manifest.json properly
- API integration and authentication
- Async/await patterns for API calls
- Dark mode implementation
- Text-to-speech functionality

This project was one of my most rewarding experiences, combining frontend skills with backend API integration.`,
    },
    {
      id: 2,
      title: '500+ DSA Problems: Lessons from the Journey',
      date: 'Dec 28, 2025',
      readTime: '6 min read',
      excerpt: 'Reflecting on solving over 500 data structures and algorithms problems across LeetCode, GeeksforGeeks, and CodeChef. Key patterns, problem-solving strategies, and how to stay consistent in your coding practice.',
      tags: ['DSA', 'Problem Solving', 'LeetCode', 'Career Growth'],
      category: 'Problem Solving',
      content: `Reflecting on solving over 500 data structures and algorithms problems across LeetCode, GeeksforGeeks, and CodeChef. Key patterns, problem-solving strategies, and how to stay consistent in your coding practice.

The journey of solving 500+ DSA problems has been transformative. It's not just about the numbers—it's about the problem-solving mindset you develop along the way.

## The Power of Consistency

Consistency is key. Rather than grinding for 12 hours straight, I found that dedicating 1-2 hours daily to problem-solving was far more effective and sustainable.

## Essential Problem Patterns

- Array manipulation and sliding windows
- Tree traversals and graph algorithms
- Dynamic programming concepts
- Greedy algorithms
- String processing

## Key Takeaways

Every problem teaches you something new. Some problems felt impossible at first, but breaking them down into smaller steps made them manageable. This systematic approach is applicable to real-world development challenges as well.`,
    },
    {
      id: 3,
      title: 'Real-Time Currency Conversion with React Hooks',
      date: 'Dec 10, 2025',
      readTime: '5 min read',
      excerpt: 'Building a live currency converter using React.js, external REST APIs, and proper state management. Learn how to handle asynchronous operations with useEffect and implement smooth loading states.',
      tags: ['React.js', 'REST API', 'JavaScript', 'Hooks'],
      category: 'Technical Tutorials',
      content: `Building a live currency converter using React.js, external REST APIs, and proper state management. Learn how to handle asynchronous operations with useEffect and implement smooth loading states.

In this tutorial, we'll build a real-time currency converter that fetches live exchange rates and provides an intuitive user interface for currency conversion.

## Project Overview

This application demonstrates several important React concepts including state management, side effects, and API integration. Users can select currencies and see live conversion rates updated in real-time.

## Technologies Used

- React Hooks (useState, useEffect, useCallback)
- REST API integration
- Error handling
- Loading states

## Implementation Details

The core of our application relies on fetching exchange rates from a public API and managing state efficiently. We'll explore debouncing techniques to minimize API calls and improve performance.`,
    },
    {
      id: 4,
      title: 'From Idea to Deployment: Building LinkShort',
      date: 'Nov 22, 2025',
      readTime: '7 min read',
      excerpt: 'The complete journey of creating a URL shortener application from scratch. Covers architecture decisions, database design with MongoDB, building RESTful APIs with Node.js and Express, and creating an intuitive user interface.',
      tags: ['Node.js', 'MongoDB', 'Express.js', 'Full-Stack'],
      category: 'Projects Breakdown',
      content: `The complete journey of creating a URL shortener application from scratch. Covers architecture decisions, database design with MongoDB, building RESTful APIs with Node.js and Express, and creating an intuitive user interface.

Building LinkShort was an exciting full-stack project that taught me invaluable lessons about application architecture and deployment.

## Project Architecture

Our URL shortener consists of several components:
- React frontend for user interface
- Node.js/Express backend for API
- MongoDB for data persistence
- URL validation and shortening algorithms

## Database Design

We designed a schema that efficiently stores long URLs, their short aliases, creation dates, and access statistics.

## Key Features Implemented

- URL shortening with custom aliases
- QR code generation
- Analytics tracking
- Bulk URL shortening
- Clean and intuitive UI

The deployment process taught me about environment variables, error handling, and scaling considerations.`,
    },
    {
      id: 5,
      title: 'Docker & Kubernetes: A Beginner\'s Perspective',
      date: 'Oct 18, 2025',
      readTime: '10 min read',
      excerpt: 'Getting started with containerization and orchestration. My experience learning Docker and Kubernetes, common pitfalls to avoid, and practical use cases for full-stack developers.',
      tags: ['Docker', 'Kubernetes', 'DevOps', 'Infrastructure'],
      category: 'Technical Tutorials',
      content: `Getting started with containerization and orchestration. My experience learning Docker and Kubernetes, common pitfalls to avoid, and practical use cases for full-stack developers.

DevOps might seem intimidating at first, but understanding Docker and Kubernetes is becoming increasingly essential for modern developers.

## Why Containerization Matters

Containers solve the "works on my machine" problem. They package your application with all its dependencies into a standardized unit.

## Docker Basics

- Creating Dockerfiles
- Building and running images
- Container networking
- Volume management

## Kubernetes Introduction

Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications.

## Lessons Learned

Start simple. Don't try to master everything at once. Begin with Docker, understand the fundamentals, then explore Kubernetes.`,
    },
    {
      id: 6,
      title: 'Tailwind CSS: Why I Made the Switch',
      date: 'Sep 30, 2025',
      readTime: '4 min read',
      excerpt: 'Moving from traditional CSS and component libraries to utility-first CSS with Tailwind. Discussing the benefits, learning curve, and how it improved my development workflow and design consistency.',
      tags: ['Tailwind CSS', 'CSS', 'Frontend', 'Web Design'],
      category: 'Technical Tutorials',
      content: `Moving from traditional CSS and component libraries to utility-first CSS with Tailwind. Discussing the benefits, learning curve, and how it improved my development workflow and design consistency.

Making the switch to Tailwind CSS was one of the best decisions I made in my frontend development journey.

## The Traditional Approach

Previously, I wrote custom CSS or used component libraries. While these approaches work, they come with trade-offs in flexibility and development speed.

## Why Tailwind?

- Rapid development with utility classes
- Built-in responsive design
- Consistent design system
- Smaller bundle sizes with PurgeCSS
- Excellent documentation

## Learning Curve

There's definitely a learning curve, but once you understand the philosophy, you'll never want to go back to writing traditional CSS.

## Real-World Benefits

I've noticed significant improvements in development speed and design consistency across projects. The responsive design capabilities are particularly impressive.`,
    },
    {
      id: 7,
      title: 'Hackathon Chronicles: Building Under Pressure',
      date: 'Aug 15, 2025',
      readTime: '6 min read',
      excerpt: 'Lessons learned from participating in Cod-a-Fest hackathon and building a web-based learning platform for middle school students. Time management, teamwork, and delivering MVPs quickly.',
      tags: ['Hackathon', 'Teamwork', 'Education', 'Web Development'],
      category: 'Projects Breakdown',
      content: `Lessons learned from participating in Cod-a-Fest hackathon and building a web-based learning platform for middle school students. Time management, teamwork, and delivering MVPs quickly.

Hackathons are intense, exciting events that push you to deliver results quickly. Here's what I learned from my experience at Cod-a-Fest.

## The Challenge

We had 24-48 hours to build a functional application that addresses a real problem. We chose to build an interactive learning platform for middle school students.

## Team Dynamics

Working with talented developers from different backgrounds taught me the value of clear communication and distributed responsibilities.

## Building the MVP

We focused on core features:
- Interactive problem sets
- Real-time feedback
- Gamification elements
- User progress tracking

## Time Management

Prioritization was crucial. We identified must-have features and nice-to-have features early on, allowing us to focus our efforts efficiently.

## Key Takeaways

Hackathons taught me that done is better than perfect. Shipping a working MVP beats spending time on premature optimization.`,
    },
    {
      id: 8,
      title: 'My Full-Stack Development Learning Roadmap',
      date: 'Jul 20, 2025',
      readTime: '9 min read',
      excerpt: 'The path I took to become a full-stack developer. Resources, courses, projects, and timelines. A guide for anyone starting their journey in web development with the MERN stack.',
      tags: ['Career', 'Learning', 'MERN Stack', 'Roadmap'],
      category: 'Career Insights',
      content: `The path I took to become a full-stack developer. Resources, courses, projects, and timelines. A guide for anyone starting their journey in web development with the MERN stack.

Many people ask me about my learning journey. Here's a detailed breakdown of how I transitioned into full-stack development.

## Phase 1: Foundations (3-4 months)

- HTML, CSS, and JavaScript fundamentals
- DOM manipulation
- Responsive design principles
- First small projects

## Phase 2: Frontend Deep Dive (3-4 months)

- React fundamentals and hooks
- State management
- API integration
- Building complex UIs

## Phase 3: Backend Exploration (3-4 months)

- Node.js and Express.js
- Database design with MongoDB
- RESTful API design
- Authentication and authorization

## Phase 4: Integration & Real Projects (ongoing)

- Building full-stack applications
- DevOps and deployment
- Performance optimization
- Continuous learning

## Resources That Helped

- Online courses from reputable platforms
- Documentation reading
- Building projects and learning from failures
- Engaging with the developer community

## Advice for Beginners

Be patient with yourself. This journey takes time. Focus on understanding concepts deeply rather than rushing through content. Build projects that interest you—they're the best teachers.`,
    },
  ];

  const filters = ['All Posts', 'Technical Tutorials', 'Problem Solving', 'Career Insights', 'Projects Breakdown'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesFilter = selectedFilter === 'All Posts' || blog.category === selectedFilter;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleShare = (blog) => {
    const text = `Check out this blog: "${blog.title}" - ${window.location.href}`;
    navigator.clipboard.writeText(text);
    alert('Link copied to clipboard!');
  };

  return (
    <section
      id="blog"
      ref={blogRef}
      className="py-20 md:py-32 px-5 md:px-0 relative"
    >
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className={`text-4xl md:text-h2 font-bold font-serif text-[#2C2416] mb-4 transition-all duration-1000 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
            }`}
          >
            Blog & Articles
          </h2>
          <p
            className={`text-body md:text-body-lg text-[#5C5246] max-w-2xl transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Thoughts on development, problem-solving, and continuous learning
          </p>
        </div>

        {/* Search Bar */}
        <div
          className={`mb-12 flex justify-end transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative w-full md:w-64">
            <Search size={18} className="absolute left-3 top-3.5 text-[#D4845C]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F0EBE0] border border-[#DDD8C8] rounded-lg text-body text-[#2C2416] placeholder-[#8B8276] focus:outline-none focus:ring-2 focus:ring-[#D4845C]"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap gap-3 mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedFilter === filter
                  ? 'bg-[#D4845C] text-white'
                  : 'bg-transparent border-2 border-[#D4845C] text-[#D4845C] hover:bg-[#D4845C] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        {filteredBlogs.length > 0 ? (
          <div className="space-y-8">
            {filteredBlogs.map((blog, idx) => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className={`bg-[#F0EBE0] rounded-2xl p-8 md:p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer relative transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                {/* Date and Read Time */}
                <p className="text-sm text-[#8B8276] mb-3">
                  {blog.date} • {blog.readTime}
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-4 group-hover:text-[#D4845C] transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-body md:text-body-lg text-[#5C5246] mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-[#E8E3D5] text-[#D4845C] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Arrow */}
                <div className="absolute top-8 right-8">
                  <ArrowRight
                    size={24}
                    className="text-[#D4845C] group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-body-lg text-[#8B8276]">No articles found. Try adjusting your search or filter.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 md:p-0">
          <div className="bg-[#E8E3D5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-6 right-6 p-2 hover:bg-[#F0EBE0] rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-[#2C2416]" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Date and Read Time */}
              <p className="text-sm text-[#8B8276] mb-4">
                {selectedBlog.date} • {selectedBlog.readTime}
              </p>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2C2416] mb-6">
                {selectedBlog.title}
              </h2>

              {/* Author and Share */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#DDD8C8]">
                <div>
                  <p className="text-body text-[#5C5246]">By <span className="font-semibold">Adarsh Singh</span></p>
                </div>
                <button
                  onClick={() => handleShare(selectedBlog)}
                  className="flex items-center gap-2 text-[#D4845C] hover:text-[#C57549] transition-colors"
                  title="Share article"
                >
                  <Share2 size={18} />
                </button>
              </div>

              {/* Blog Content */}
              <div className="prose prose-sm md:prose-base max-w-none">
                {selectedBlog.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h3 key={idx} className="text-2xl font-bold font-serif text-[#2C2416] mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-2 text-[#5C5246] mb-4">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="ml-4">{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="text-body text-[#5C5246] mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[#DDD8C8]">
                {selectedBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-[#F0EBE0] text-[#D4845C] px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#DDD8C8]">
                <button
                  onClick={() => {
                    const currentIdx = filteredBlogs.findIndex(b => b.id === selectedBlog.id);
                    if (currentIdx > 0) {
                      setSelectedBlog(filteredBlogs[currentIdx - 1]);
                    }
                  }}
                  disabled={filteredBlogs.findIndex(b => b.id === selectedBlog.id) === 0}
                  className="flex items-center gap-2 text-[#D4845C] hover:text-[#C57549] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={18} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => {
                    const currentIdx = filteredBlogs.findIndex(b => b.id === selectedBlog.id);
                    if (currentIdx < filteredBlogs.length - 1) {
                      setSelectedBlog(filteredBlogs[currentIdx + 1]);
                    }
                  }}
                  disabled={filteredBlogs.findIndex(b => b.id === selectedBlog.id) === filteredBlogs.length - 1}
                  className="flex items-center gap-2 text-[#D4845C] hover:text-[#C57549] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <ArrowRightIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
