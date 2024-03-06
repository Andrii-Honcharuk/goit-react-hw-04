// ./App.jsx

import { useEffect, useRef, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchPhotos from "../../photos-api";
import SearchBar from "../SearchBar/SearchBar";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";
// import css from "./App.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import LoadMore from "../LoadMoreBtn/LoadMoreBtn";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const loadMoreRef = useRef();



  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotosData() {
      try {
        setIsLoadMore(false);
        setError(false);
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setIsLoadMore(data.total_pages > page);
        console.log(data.total_pages > page);
        console.log(page, " of ", data.total_pages);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
        data.results.length === 0 ? setNoResults(true) : setNoResults(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhotosData();
  }, [query, page]);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);

    let dims = loadMoreRef.current.getBoundingClientRect();
    console.log("dims", dims.height);
    window.scrollTo({
      top: dims.height,
      behavior: "smooth",
    });
  };

  function openModal(imageData) {
    if (!modalIsOpen) {
      setSelectedImage(imageData);
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <div ref={loadMoreRef}>
        {error && <ErrorMessage />}
        {photos.length > 0 && (
          <ImageGallery items={photos} onImageClick={openModal} />
        )}
        <ThreeDots
          visible={isLoading}
          height="80"
          width="80"
          color="#0000db"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
        {isLoadMore && !isLoading && <LoadMore onClick={handleLoadMore} />}
        {noResults && (
          <p className="nothingFound">
            Sorry nothing are found. Try another query
          </p>
        )}
        <Toaster position="top-right" />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Image Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          {selectedImage && (
            <>
              <img
                src={selectedImage.urls.regular}
                alt={selectedImage.alt_description}
              />
              <button className="modalCloseBtn" onClick={closeModal}>
                Close
              </button>
            </>
          )}
        </Modal>
      </div>
    </>
  );
}
