import { useState } from "react";
import React from "react";
const Blog = () => {
  return (
    <section>
      <div id="blog" className="blog">
        <div className="container mx-auto py-16">
          <h2 className="section-title">
            BLOG<span>ブログ</span>
          </h2>
          <div className="list-all-btn text-right">
            <a href="">一覧を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
