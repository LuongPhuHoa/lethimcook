import React from 'react';
import BlogCard from '../BlogCard';
import SearchCard from '../SearchCard';

function FoodSection() {
  return (
    <div className="grid grid-cols-3 algin-center justify-center p-10 gap-4">
      <div className="ingredient-section col-span-1 bg-gray-100 rounded">
        <div className="flex flex-col gap-5 p-10">
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </div>
      </div>
      <div className="bg-gray-100 rounded col-span-2">
        <div className="grid grid-cols-2 gap-5 p-10 self-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default FoodSection;
