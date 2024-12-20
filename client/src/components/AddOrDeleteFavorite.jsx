import { useContext } from "react";
import { DisplayContext } from "../context/DisplayContext";

export default function AddOrDeleteFavorite({
  data,
  setFavorites,
  isFavorite,
}) {
  const display = useContext(DisplayContext);

  const displayStyle = {
    icons:
      "px-2 text-black rounded-md dark:shadow-none bg-cream-200 dark:bg-slate-900 dark:text-white w-fit",
    list: "px-2 mx-2 text-black rounded-md dark:shadow-none bg-cream-200 dark:bg-slate-900 dark:text-white w-fit",
  };

  const handleAddFavorites = async (data) => {
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("Add Request Failed");
      return;
    }

    setFavorites((prev) => [...prev, data]);
  };

  const handleDeleteFavorites = async (data) => {
    const response = await fetch("/api", {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("Delete Request Failed");
      return;
    }

    setFavorites((prev) => prev.filter((fav) => fav.info !== data.info));
  };

  return (
    <button
      className={display === "icons" ? displayStyle.icons : displayStyle.list}
      type="button"
      onClick={
        isFavorite
          ? () => handleDeleteFavorites(data)
          : () => handleAddFavorites(data)
      }
    >
      {isFavorite ? "X" : "♡"}
    </button>
  );
}
