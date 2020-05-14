import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ posts, match: { params: { id } } }) => {

  return (
    <main role="main" className="container">
      <div className="row">
        <div className="blog-post">
          <h2 className="blog-post-title">{posts[id - 1].title}</h2>
          <p className="blog-post-meta">{posts[id - 1].data}</p>
          {posts[id - 1].details.map((detail) => (
            <p>{detail}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Detail);
