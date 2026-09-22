import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { BLOG_POSTS } from '../data/pagesData';
import { useBusiness } from '../context/BusinessContext';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowLeft, 
  CheckCircle2, 
  Lightbulb, 
  ChevronRight,
  PhoneCall,
  CalendarDays
} from 'lucide-react';

export const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const { config, theme, openBookingModal } = useBusiness();

  // Match the current post slug (e.g. blog-post-1 or from pathname) or default to the first one
  const pathSegment = location.pathname.replace(/^\/|\/$/g, '').split('/').pop() || '';
  const currentSlug = slug || (pathSegment.startsWith('blog-post-') ? pathSegment : 'blog-post-1');
  const post = BLOG_POSTS.find((p) => p.slug === currentSlug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header (#0B0D10) */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white font-semibold line-clamp-1">{post.title}</span>
          </div>

          {/* Back Link */}
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">ALL POSTS</span>
          </Link>
        </div>
      </div>

      {/* Article Header (#0B0D10) */}
      <header className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0B0D10]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-heading font-black tracking-widest uppercase text-white mb-4">
          <span>{post.category}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-4 border-b border-zinc-800 pb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <User className="w-3.5 h-3.5" />
            Written by {post.author}
          </span>
        </div>
      </header>

      {/* Article Content Area (#FFFFFF) */}
      <div className="bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Featured Image */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 aspect-16/9 shadow-xl mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content Body */}
          <div className="space-y-8 text-sm sm:text-base text-zinc-700 leading-relaxed">
            
            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-zinc-900 font-medium leading-relaxed bg-[#F8FAFC] p-6 rounded-xl border border-zinc-200 shadow-2xs">
              {post.content.intro}
            </p>

            {/* Main Content Sections */}
            {post.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-black uppercase text-zinc-950 tracking-tight pt-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-zinc-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.tip && (
                  <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3 my-4">
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading font-bold uppercase block mb-1 text-amber-950">
                        EXPERT MASTER TIP:
                      </span>
                      <span>{section.tip}</span>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-zinc-200 space-y-2 shadow-2xs">
              <h3 className="text-lg font-heading font-black uppercase text-zinc-950">
                FINAL THOUGHTS
              </h3>
              <p className="text-zinc-700 leading-relaxed text-sm">
                {post.content.conclusion}
              </p>
            </div>

          </div>

          {/* Author Bio Card */}
          <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-2xs">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-300 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80"
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-500">
                ARTICLE AUTHOR
              </div>
              <div className="text-lg font-heading font-black text-zinc-950 uppercase">
                {post.author}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Automotive detailing craftsman with {config.yearsExperience} years of experience specializing in scratch elimination, paint depth mapping, and 9H ceramic quartz applications at {config.businessName}.
              </p>
            </div>
          </div>

          {/* In-Article Call to Action (#0B0D10) */}
          <div className="mt-12 p-8 rounded-2xl bg-[#0B0D10] text-white border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-heading font-black uppercase text-white mb-1">
                NEED PROFESSIONAL DETAILING AT YOUR DOORSTEP?
              </h3>
              <p className="text-xs text-zinc-400">
                Our 100% off-grid van travels to you with 500L pure spot-free water.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => openBookingModal()}
                className={`px-5 py-3 rounded-lg text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px]`}
              >
                BOOK ONLINE
              </button>
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center gap-2 min-h-[44px]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CALL</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles (#F8FAFC) */}
      <section className="py-16 bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-heading font-black uppercase text-zinc-950 mb-6">
            MORE HELPFUL CAR CARE ARTICLES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                to={`/blog/${rPost.slug}/`}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-all group flex flex-col justify-between shadow-2xs"
              >
                <div className="aspect-16/10 overflow-hidden relative">
                  <img
                    src={rPost.image}
                    alt={rPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-bold">
                    {rPost.category}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h4 className="text-xs font-heading font-bold uppercase text-zinc-950 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {rPost.title}
                  </h4>
                  <div className="text-[10px] text-zinc-500 flex items-center justify-between pt-1">
                    <span>{rPost.readTime}</span>
                    <span className={`flex items-center gap-1 font-bold ${theme.textPrimary}`}>
                      <span>Read</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
