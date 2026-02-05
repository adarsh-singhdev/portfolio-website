import React, { useRef, useState } from 'react';
import { ArrowRight, X, Share2, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Blog = () => {
  const blogRef = useRef(null);
  const isVisible = useIntersectionObserver(blogRef);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Proxies and Load Balancers: What's the Difference?",
      date: 'Jan 28, 2026',
      readTime: '6 min read',
      excerpt: 'How large websites handle massive traffic while keeping data secure: forward proxy for users, reverse proxy for servers, and load balancers for scale and resilience.',
      content: `Ever wondered how large websites handle massive traffic and keep your data secure at the same time? The answer lies in three components: forward proxy, reverse proxy, and load balancer.

A forward proxy sits between your laptop and the internet. Your requests pass through this layer before reaching any website. Companies use it to block unsafe sites, scan downloads for malware, log browsing activity, and cache frequently accessed content.

A reverse proxy works from the opposite side. It sits in front of servers and manages incoming user requests. Instead of exposing multiple servers directly to the internet, all traffic hits the reverse proxy first. This layer forwards requests to the right backend server, applies security checks, manages SSL encryption, and caches responses for faster delivery.

Load balancing distributes traffic across multiple servers to avoid overload and crashes. Cloud load balancers handle external traffic, while reverse proxies perform smarter internal routing based on headers, sessions, or request paths.

A forward proxy protects users. A reverse proxy protects servers. Load balancing keeps systems responsive under heavy demand.`,
    },
    {
      id: 2,
      title: 'From Borg to Kubernetes: The Journey to a Global Standard',
      date: 'Jan 20, 2026',
      readTime: '7 min read',
      excerpt: 'How Google’s internal system Borg inspired Kubernetes, and why container orchestration became essential for modern cloud-native applications.',

      content: `Ever wondered how tech giants like Google manage the massive scale of applications like Gmail or Google Drive without a hiccup? The story starts with a shift from bulky virtual machines to nimble containers and the critical need for a conductor to orchestrate them all.

In the early days, deploying applications meant relying on Virtual Machines (VMs). While VMs offered isolation, they were resource-intensive and slow to scale.

Then came containerization, with Docker leading the way. Containers offered a lightweight virtualization approach, packaging an application and its dependencies without the overhead of an entire OS.

Google adopted containers at scale, but managing thousands of them manually quickly became a nightmare. This challenge gave rise to container orchestration.

To solve this internally, Google developed Borg. Later, they open-sourced the core ideas as Kubernetes (K8s), donated to the CNCF in 2014.

## What Kubernetes Solves

- Automated scaling
- Self-healing workloads
- Service discovery & load balancing
- Automated rollouts and rollbacks

Today, Kubernetes is the de facto standard for cloud-native development, used by startups and enterprises across the globe.`,
    },
    {
      id: 3,
      title: 'Encryption vs Hashing: How Secure Systems Decide',
      date: 'Jan 12, 2026',
      readTime: '5 min read',
      excerpt: 'Encryption hides data so only the right person can read it. Hashing verifies data so you can trust it hasn’t changed. Both are essential to modern security.',

      content: `Think encryption and hashing are the same? They’re not — and knowing the difference changes how you design secure systems.

Cryptography is the science of protecting digital information. It provides the foundation for encryption, hashing, and digital signatures.

Encryption works by converting readable data (plain text) into unreadable text (ciphertext) using a secret key. The same or a related key is used to decrypt it back into its original form. Encryption is reversible — it locks and unlocks data.

Hashing, on the other hand, is one-way. It takes an input and produces a fixed-length hash value that cannot be converted back to the original data. Even a small change in input completely changes the output. Algorithms like SHA-256 and bcrypt are used to hash passwords and verify data integrity.

In short, encryption hides data so only the right person can read it, while hashing verifies data so you can trust it hasn’t changed.`,
    },
    {
      id: 4,
      title: 'Kernel vs OS vs UNIX vs Linux: A Clear Mental Model',
      date: 'Jan 05, 2026',
      readTime: '6 min read',
      excerpt: 'Understanding how kernels, operating systems, UNIX, and Linux relate—and why Linux is a kernel while UNIX is a family of OS design principles.',
      content: `While studying Linux, I was confused about what an operating system and a kernel are, and how Linux is connected to UNIX.

A kernel is the core software that organizes hardware and provides a common platform so all other programs can work together. It manages CPU time, memory, and device access.

An operating system includes the kernel plus additional tools that make the computer usable for humans: graphical interface, file manager, utilities, and more.

UNIX was an operating system built at Bell Labs decades ago. The original UNIX is gone, but its design became so popular that many systems copied it. Today, UNIX refers to systems that follow the same philosophy and standards, usually through POSIX compliance.

Linux is not an operating system by itself. It’s a kernel created by Linus Torvalds in 1991. To make it usable, Linux is bundled with tools like the GNU toolchain and other software to form complete Linux distributions such as Ubuntu, Debian, or Red Hat.

Think of UNIX as the parent concept. macOS is a UNIX-based OS, while Linux is a kernel used in many operating systems.
I have also created a repo where I am collecting useful Linux commands for DevOps learners: https://github.com/adarshsingh-1/linux-for-devops`,
    },
    {
      id: 5,
      title: 'The Architectural Choice That Can Make or Break Your Application',
      date: 'Feb 05, 2026',
      readTime: '6 min read',
      excerpt: 'A practical breakdown of Monolith vs Microservices, the trade-offs, and why early architecture decisions shape scalability and resilience.',
      content: `Ever built an application that works perfectly, only to watch it crumble as traffic grows? The architectural choice you make at the beginning is often the reason. Let's break down the two most common approaches: Monolith vs. Microservices.

Initially, most applications start as a Monolith. True to its name (mono means "one"), this is where all your backend code for every feature—be it authentication, payments, or order processing for an e-commerce site—lives together in a single repository. The beauty of this approach lies in its simplicity. You build one codebase, deploy it to one server, and you're up and running. When traffic increases, you can scale horizontally by simply adding more servers, each running an identical copy of your entire application.

But this simplicity hides a critical vulnerability: a single point of failure. Imagine a small bug in the authentication code crashes a server. In a monolithic world, that doesn't just take down authentication; it takes down everything. Your payment gateway and order service go offline too, all because of one minor error in a completely different part of the application. As the codebase grows, it becomes complex and a single bug can have catastrophic consequences.

This is where Microservices emerge as the solution. The core idea is a separation of concerns. Instead of one giant codebase, you break down every feature into its own independent, "micro" service. Authentication becomes its own service with its own code. The payment system gets its own service. The order service gets its own. Each one is developed, deployed, and runs independently.

This architecture solves major problems but introduces new challenges. Suddenly, you have multiple servers, repositories, and codebases to handle, which increases management complexity and often requires a dedicated team. Costs can also rise, as you need to run at least one server for each service, even if traffic is low.

However, the advantages are immense. You gain the power to scale independently. During a massive sale, you can spin up 10 servers for your payment service while keeping the authentication service at just two, optimizing costs and resources. Most importantly, there is no single point of failure. If the authentication service goes down, your customers can still browse products and manage their orders because the other services are completely unaffected and still running.

So, what's the right choice? It's a trade-off between the straightforward simplicity of a monolith and the resilient, scalable power of microservices.`,
    },
    {
      id: 6,
      title: 'Kafka Without the Jargon',
      date: 'Feb 05, 2026',
      readTime: '7 min read',
      excerpt: 'How Kafka decouples services, prevents data loss, and absorbs traffic spikes—explained through a simple StreamStore story.',
      content: `The Problem: A Tightly-Coupled System
    Let's imagine an e-commerce application called StreamStore, built with several microservices: payments, inventory, orders, and users.

When a customer places an order, it triggers a domino effect. The orders service needs to tell the inventory service to update the stock, the users service to send a confirmation email, the payments service to generate an invoice, and so on.

Initially, your startup used a simple microservices architecture where services called each other directly. The orders service would tell all the other services, "Hey, we just processed an order. Go update your systems accordingly." This worked fine at first.

However, when a Black Friday sale caused a sudden surge in customers, the application crashed. The architecture couldn't handle the load, leading to several critical problems:

- Tightly Coupled Architecture: Each service depended directly on the others being available.
- Synchronous Execution: The orders service had to wait for each subsequent service to finish its task before it could proceed, slowing everything down.
- Single Points of Failure: If the inventory service went down for just 10 minutes, it could create a backlog of orders that would take hours to clear.
- Data Loss: If the analytics service was down, all incoming event data for that period was lost forever.

The Solution: Redesigning with Kafka as a Broker
Instead of having services call each other directly, we can introduce a tool that sits in the middle and acts as a broker. Think of it like a post office. When you order something online, the seller doesn't deliver the package to you directly. They hand it to the post office, which then ensures it gets delivered to you.

Kafka is that post office. It's a highly scalable system for managing streams of events that sits in the middle of your microservices.

Now, when an order is placed, the orders service simply sends an event to Kafka. This event says, "An order was made for this customer. Please make this information available to whoever needs it." Kafka then makes this event available to the inventory, payments, users, and analytics services.

How Kafka Solves Each Problem
- Decoupled Services: Each service operates independently. If analytics goes down, orders still process smoothly because they're not waiting for a direct response.
- Asynchronous Processing: The orders service publishes events and moves on immediately. Other services consume events at their own pace, without blocking the order flow.
- No More Data Loss: Kafka stores events reliably. Even if a service is down for hours, it can replay missed events when it comes back online—nothing is lost.
- Handles Traffic Spikes: During the next Black Friday sale, Kafka buffers the surge. Services process events as fast as they can, without crashing under sudden load.

The Results: A Resilient Architecture
With Kafka in place, StreamStore transformed from a fragile, tightly-coupled system into a resilient, scalable architecture. Services became independent, failures became isolated, and the system could handle traffic spikes gracefully.`,
    },
  ];

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

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className={`bg-[#F0EBE0] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer w-full max-w-[320px] aspect-square flex flex-col justify-between ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              {/* Top Section: Date and Read Time */}
              <p className="text-sm text-[#8B8276]">
                {blog.date} • {blog.readTime}
              </p>

              {/* Middle Section: Title + Excerpt */}
              <div className="mt-4 flex-1">
                <h3 className="text-[20px] md:text-[22px] font-bold font-serif text-[#2C2416] mb-3 group-hover:text-[#D4845C] transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#5C5246] line-clamp-4">
                  {blog.excerpt}
                </p>
              </div>

              {/* Bottom Section: Arrow */}
              <div className="mt-4 flex items-end justify-end">
                <ArrowRight
                  size={22}
                  className="text-[#D4845C] group-hover:translate-x-1 transition-transform duration-300 shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
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

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#DDD8C8]">
                <button
                  onClick={() => {
                    const currentIdx = blogs.findIndex(b => b.id === selectedBlog.id);
                    if (currentIdx > 0) {
                      setSelectedBlog(blogs[currentIdx - 1]);
                    }
                  }}
                  disabled={blogs.findIndex(b => b.id === selectedBlog.id) === 0}
                  className="flex items-center gap-2 text-[#D4845C] hover:text-[#C57549] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={18} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => {
                    const currentIdx = blogs.findIndex(b => b.id === selectedBlog.id);
                    if (currentIdx < blogs.length - 1) {
                      setSelectedBlog(blogs[currentIdx + 1]);
                    }
                  }}
                  disabled={blogs.findIndex(b => b.id === selectedBlog.id) === blogs.length - 1}
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
