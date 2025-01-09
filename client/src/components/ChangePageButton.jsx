import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { PageContext, PageDispatchContext } from "../context/PagesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

ChangePageButton.propTypes = {
  data: PropTypes.array,
};

export default function ChangePageButton({ data }) {
  const { page } = useContext(PageContext);
  const dispatch = useContext(PageDispatchContext);

  useEffect(() => {
    if (data.length) {
      if (page === 1) {
        dispatch({ type: "set", elements: data.slice(0, 20) });
      } else if (page === 2) {
        dispatch({ type: "set", elements: data.slice(page * 10, page * 20) });
      } else {
        dispatch({
          type: "set",
          elements: data.slice((page - 1) * 20, page * 20),
        });
      }
    }
  }, [data, page, dispatch]);

  const handleIncrementPage = () => {
    if (page === 1) {
      dispatch({
        type: "increment",
        elements: data.slice((page + 1) * 10, (page + 1) * 20),
      });
    } else {
      dispatch({
        type: "increment",
        elements: data.slice(page * 20, (page + 1) * 20),
      });
    }
  };

  const handleDecrementPage = () => {
    if (page === 2) {
      dispatch({
        type: "decrement",
        elements: data.slice(0, 20),
      });
    } else {
      dispatch({
        type: "decrement",
        elements: data.slice((page - 1) * 10, (page - 1) * 20),
      });
    }
  };

  return (
    <>
      {data.length > 20 && (
        <div className="flex justify-around w-full">
          <button onClick={handleDecrementPage} disabled={page === 1}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </button>
          <p>{page}</p>
          <button
            onClick={handleIncrementPage}
            disabled={data.length < page * 20 || page === data.length / 20}
          >
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </div>
      )}
    </>
  );
}
