import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  Search,
  Sparkles
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { blogPostsList } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const { config, theme } = useBusiness();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Paint Protection', 'Wash Techniques', 'Interior Care', 'Paint Correction', 'Seasonal Maintenance', 'Customer Guide'];

  const filteredPosts = blogPostsList.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0B0D10] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#0B0D10] border-b border-zinc-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-white font-medium">Blog</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-zinc-300">
            <BookOpen className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>Master Craftsman Car Care Guides</span>
          </div>
        </div>
      </div>

      {/* Hero Banner (#0B0D10) */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-[#0B0D10] border-b border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-5">
            <BookOpen className={`w-4 h-4 ${theme.textPrimary}`} />
            <span>EXPERT CAR CARE & DETAILING JOURNAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight uppercase text-white">
            PAINT SCIENCE & <span className={theme.textPrimary}>DETAILING GUIDES</span>
          </h1>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Objective, professional advice from 30+ years in the detailing trade. Learn the truth about ceramic coatings, safe washing, leather preservation, and seasonal road salt defense.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <input
              type="text"
              placeholder="Search articles (e.g. ceramic, wash, leather, salt)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-all shadow-xl"
            />
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-4" />
          </div>
        </div>
      </section>

      {/* Articles Section (#FFFFFF) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200">
        {/* Category Filter Chips */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold uppercase whitespace-nowrap transition-all cursor-pointer min-h-[38px] shadow-2xs ${
                  selectedCategory === cat
                    ? `${theme.bgPrimary} text-white shadow-md`
                    : 'bg-[#F8FAFC] text-zinc-700 hover:text-zinc-950 border border-zinc-300 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Six Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.id}
                className="bg-[#F8FAFC] border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group shadow-2xs"
              >
                {/* Cover Image */}
                <div>
                  <Link to={`/blog/${post.slug}/`} className="block relative aspect-16/10 overflow-hidden border-b border-zinc-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} shadow-md`}>
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-200 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-zinc-300" />
                        {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-300" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      ARTICLE 0{idx + 1}
                    </div>
                    <h2 className="font-heading font-bold text-lg text-zinc-950 uppercase group-hover:text-orange-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}/`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-zinc-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Author & Read More Link */}
                <div className="p-6 pt-0 border-t border-zinc-200/80 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-zinc-300"
                    />
                    <div className="text-xs text-zinc-800 font-semibold truncate max-w-[120px]">
                      {post.author.name}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.slug}/`}
                    className={`text-xs font-heading font-bold uppercase tracking-wider ${theme.textPrimary} hover:underline flex items-center gap-1 min-h-[40px]`}
                  >
                    <span>READ GUIDE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter/CTA Banner (#0B0D10) */}
      <section className="py-16 bg-[#0B0D10] text-white border-b border-zinc-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-heading font-black uppercase tracking-tight">
            NEED ADVICE SPECIFIC TO YOUR MAKE & MODEL?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2">
            Every paint system—from rock-hard German clear coats to delicate Japanese finishes—requires a tailored formulation.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/contact/"
              className={`px-8 py-3.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider text-white ${theme.bgPrimary} ${theme.bgHover} shadow-xl cursor-pointer min-h-[44px] inline-flex items-center gap-2`}
            >
              <span>CONSULT A DETAILER</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
