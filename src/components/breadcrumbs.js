import React from 'react';
import { Route } from 'react-router-dom';

const Breadcrumbs = () => <Route path="*" render={props => {
  const parts = props.location.pathname.split("/");
  const place = parts[parts.length-1];
  return (
    <div>
      <p className="breadcrumbs">/{place}</p>
      <style jsx scoped>
        {`
        .breadcrumbs {
          border-left: 4px solid #0066cc;
          list-style-type: none;
          margin: 0;
          display: flex;
          align-items: center;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
          padding: 6px 20px;
          border-radius: 4px;
        }
        `}
      </style>
    </div>
  )
}} />

export default Breadcrumbs;

