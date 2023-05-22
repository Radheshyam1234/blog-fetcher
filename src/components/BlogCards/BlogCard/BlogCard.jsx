import { useState, useEffect } from "react";
import "./BlogCard.css";
import { useDataProvider } from "../../../context/DataContext/DataProvider";
import { BlogDetailsCard } from "../BlogDetailsCard/BlogDetailsCard";

export const BlogCard = ({ data }) => {
  const { selectedBlogUrl, setSelectedBlogUrl } = useDataProvider();

  const handleClickCard = () => {
    setSelectedBlogUrl(data?.slug);
  };

  return (
    <div className="blogCard-wrapper" onClick={handleClickCard}>
      <div className="blogCard">
        <img src={data?.thumb} alt="" className="blogCard-image" />
        <div className="blogCard-details-section">
          <div className="blogCard-details-section-title">{data?.title}</div>
          <div className="blogCard-details-section-description">
            {data?.short_description}
          </div>
        </div>
      </div>
    </div>
  );
};
