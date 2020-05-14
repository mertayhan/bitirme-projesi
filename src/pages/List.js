import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const List = ({ posts }) => (
  <div className="row mb-2">
    {posts.map((post) => (
      <div key={post.id} className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">Genel</strong>
            <h3 className="mb-0">
              <Link to={`/${post.id}`}>{post.title}</Link>
            </h3>
            <div className="mb-1 text-muted">{post.date}</div>
            <p className="card-text mb-auto">{post.short}</p>
            <Link to={`/${post.id}`}>Devamı...</Link>
          </div>
          <img className="card-img-right flex-auto d-none d-md-block" src={post.image} alt="post" />
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(List);
