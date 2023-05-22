import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogsData, setBlogsData] = useState([]);
  const [selectedBlogUrl, setSelectedBlogUrl] = useState("");

  useEffect(() => {
    fetch(
      "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogsData(data?.data);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        blogsData,
        searchTerm,
        setSearchTerm,
        selectedBlogUrl,
        setSelectedBlogUrl
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataProvider = () => useContext(DataContext);
