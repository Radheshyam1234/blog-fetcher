import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "../../../assets/close Icon.png";

import "./BlogDetailsCard.css";
import { useDataProvider } from "../../../context/DataContext/DataProvider";
export const BlogDetailsCard = ({ data }) => {
  const { selectedBlogUrl, setSelectedBlogUrl } = useDataProvider();
  const [open, setOpen] = useState(true);
  const [selectedBlogData, setSelectedBlogData] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedBlogUrl("");
  };

  useEffect(() => {
    if (selectedBlogUrl) {
      fetch(`https://api.theinnerhour.com/v1/blogdetail/${selectedBlogUrl}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedBlogData(data?.blog);
        });
    }
  }, [selectedBlogUrl]);

  return (
    <div className="blogDetailsCard-wrapper">
      {selectedBlogData ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <div className="blogDetailsCard">
              <img
                src={selectedBlogData?.cover}
                alt={selectedBlogData?.imagealt}
              />
            </div>
            <div className="blogDetailsCard-details">
              <p className="blogDetailsCard-details-title">
                {selectedBlogData?.title}
              </p>
              <p
                className="blogDetailsCard-details-body"
                dangerouslySetInnerHTML={{ __html: selectedBlogData?.body }}
              ></p>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        "Loading the data"
      )}
    </div>
  );
};
