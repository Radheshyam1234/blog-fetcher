import { useEffect, useState } from "react";
import { useDataProvider } from "../../context/DataContext/DataProvider";
import { BlogCard } from "../BlogCards/BlogCard/BlogCard";
import { BlogDetailsCard } from "../BlogCards/BlogDetailsCard/BlogDetailsCard";

import "./SearchResults.css";
export const SearchResults = () => {
  const { blogsData, selectedBlogUrl, searchTerm } = useDataProvider();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchTerm !== "") {
      setFilteredData(
        blogsData?.filter((blog) =>
          blog?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
        )
      );
    }
  }, [searchTerm]);
  return (
    <div className="search-results-wrapper">
      <div className="search-results">
        {(searchTerm !== "" ? filteredData : blogsData)?.map((data) => {
          return <BlogCard data={data} key={data.id}/>;
        })}
      </div>

      {searchTerm !== "" && filteredData.length == 0 && (
        <div>
          <p className="no-data-text">No data available</p>
        </div>
      )}

      {selectedBlogUrl !== "" ? <BlogDetailsCard /> : null}
    </div>
  );
};
