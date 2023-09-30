'use client';
import React from 'react';
import BlogTitle from '../components/Blog/BlogTitle/page'
import FeaturedArticle from '../components/Blog/FeaturedArticle/page'
import { useEffect } from 'react';

const Blog = () => {

  useEffect( () => {
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

    }
    initializeLocomotiveScroll(); 
  
  }, [])


  
  return (
    <div>
      <BlogTitle />
      <FeaturedArticle />
    </div>
  )
}

export default Blog