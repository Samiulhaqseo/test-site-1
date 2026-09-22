import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  ChevronRight, 
  Sparkles, 
  BookOpen,
  Share2
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { blogPostsList } from '../data/blogData';

export const BlogPostPage: React.FC = () => {
  const { postSlug } = useParams<{ postSlug?: string }>();
  const { config, openBookingModal, theme } = useBusiness();

  // Find article by slug or default to blog-post-1
  const slug = postSlug || 'blog-post-1';
  const post = blogPostsList.find(p => p.slug === slug) || blogPostsList[0];

  // Other related articles
  const otherPosts = blogPostsList.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </div>
          <Link to="/blog/" className="text-zinc-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header (#0B0D10) */}
      <header className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0B0D10]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-heading font-black uppercase tracking-wider text-zinc-300 mb-4">
          <Sparkles className={`w-3.5 h-3.5 ${theme.textPrimary}`} />
          <span>{post.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight uppercase text-white leading-tight">
          {post.title}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-zinc-300 font-medium leading-relaxed">
          {post.subtitle}
        </p>

        {/* Metadata */}
        <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-zinc-700"
            />
            <div>
              <div className="text-sm font-bold text-white uppercase">{post.author.name}</div>
              <div className="text-xs text-zinc-400">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-zinc-500" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-zinc-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Area (#FFFFFF) */}
      <div className="bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200 py-12 sm:py-16">
        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-2xl overflow-hidden aspect-16/9 border border-zinc-200 shadow-xl relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Article Body */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Executive Summary Quote Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border-l-4 border-orange-500 text-zinc-800 text-sm sm:text-base leading-relaxed italic shadow-2xs">
            "{post.summary}"
          </div>

          {/* Structured Sections */}
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-black uppercase text-zinc-950 tracking-tight pt-2">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.bulletPoints && (
                <div className="space-y-2 pt-2">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <div key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800">
                      <CheckCircle2 className={`w-4 h-4 ${theme.textPrimary} mt-0.5 shrink-0`} />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}

              {sec.proTip && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3 my-4">
                  <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading uppercase tracking-wider text-amber-950 mb-0.5">Master Detailer Pro-Tip:</strong>
                    {sec.proTip}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-200 space-y-3 shadow-2xs">
            <h3 className="text-lg font-heading font-black uppercase text-zinc-950 flex items-center gap-2">
              <CheckCircle2 className={`w-5 h-5 ${theme.textPrimary}`} />
              <span>SUMMARY & KEY TAKEAWAYS</span>
            </h3>
            <div className="space-y-2 pt-2">
              {post.keyTakeaways.map((point, kIdx) => (
                <div key={kIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800">
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.bgPrimary} mt-2 shrink-0`}></span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Author Footer Card */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-center gap-4 shadow-2xs">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-14 h-14 rounded-full object-cover border border-zinc-300 shrink-0"
            />
            <div>
              <div className="font-heading font-bold text-sm text-zinc-950 uppercase">{post.author.name}</div>
              <div className="text-xs text-zinc-600">{post.author.role}</div>
              <p className="text-xs text-zinc-600 mt-1">
                Founder of Moar Details, specializing in paint correction, machine jewelling, and ceramic coatings across Scotland for 30+ years.
              </p>
            </div>
          </div>

          {/* Bottom Booking Prompt (#0B0D10) */}
          <div className="bg-[#0B0D10] text-white border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center my-12 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-white">
              WANT PROFESSIONAL CLEAR COAT CARE AT HOME?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
              Our mobile detailing van brings pure water and 30 years of paint correction mastery directly to your doorstep.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={() => openBookingModal()}
                className={`px-6 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px]`}
              >
                BOOK YOUR MOBILE DETAIL
              </button>
              <Link
                to="/blog/"
                className="px-4 py-3.5 rounded-xl text-xs font-heading font-bold uppercase text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 min-h-[44px] flex items-center"
              >
                MORE GUIDES
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Explore More Articles (#F8FAFC) */}
      <section className="py-16 bg-[#F8FAFC] text-zinc-900 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-heading font-black uppercase text-zinc-950 tracking-tight">
              MORE DETAILING & PAINT CARE GUIDES
            </h3>
            <Link to="/blog/" className={`text-xs font-heading font-bold uppercase ${theme.textPrimary} hover:underline`}>
              VIEW ALL 6 POSTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((other) => (
              <Link
                key={other.id}
                to={`/blog/${other.slug}/`}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-all group block shadow-2xs"
              >
                <div className="aspect-16/10 overflow-hidden relative">
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-heading font-bold uppercase text-white">
                    {other.category}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-zinc-950 uppercase group-hover:text-orange-600 transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  <div className="text-[10px] text-zinc-500 mt-2 flex items-center gap-2">
                    <span>{other.publishedDate}</span>
                    <span>•</span>
                    <span>{other.readTime}</span>
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
