import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter((x) => x);

  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      {paths.length > 0 && <Link to="/">Home</Link>}

      {paths.map((path, index) => {
        breadcrumbPath += `/${path}`;

        const isLast = index === paths.length - 1;

        return isLast ? (
          <span>/ {path}</span>
        ) : (
          <span key={breadcrumbPath}>
            /<Link to={breadcrumbPath}>{path}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
