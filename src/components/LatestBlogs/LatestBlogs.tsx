import { Blog } from '@/types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';
import Link from 'next/link';

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className='w-[90%] mx-auto text-center'>
            <h1 className='text-4xl text-center my-5'>
                Latest Blogs From <span className='text-accent'>Blogiz</span>
            </h1>
            <p className='text-xl text-center text-gray-400 w-2/4 mx-auto'>
                <i>
                    Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
                </i>
            </p>
            <div className='grid grid-cols-2 gap-4 my-5'>
                {
                    blogs.slice(0, 2).map(blog => <LatestBlogCard key={blog.id} blog={blog} />)
                }
            </div>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    blogs.slice(3, 6).map(blog => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>

            <Link href='/blogs'>
                <button className='text-center btn btn-accent my-3'>See more</button>
            </Link>
        </div>
    );
};

export default LatestBlogs;