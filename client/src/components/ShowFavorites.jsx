import PropTypes from "prop-types";

ShowFavorites.propTypes = {
  setShowFavorites: PropTypes.func,
  showFavorites: PropTypes.bool,
};

export default function ShowFavorites({ setShowFavorites, showFavorites }) {
  const showFavoritesClass = {
    active:
      "w-24 hover:bg-cadet dark:hover:bg-iron text-white bg-zinc-600 press top-[2px] shadow-none rounded-lg bg-[#366b71] h-16 mr-2",
    inactive:
      "w-24 hover:bg-cadet dark:hover:bg-iron text-white h-16 rounded-lg bg-[#2faeb7] press mr-2",
  };

  const handleShowFavoritesClick = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <button
      type="button"
      className={
        showFavorites ? showFavoritesClass.active : showFavoritesClass.inactive
      }
      onClick={handleShowFavoritesClick}
    >
      ♡
    </button>
  );
}
