import { useState, useEffect } from "react";
import Header from "./presentational/Header";
import Quote from "./components/Quote";
import Results from "./presentational/Results";
import Favorites from "./presentational/Favorites";
import Nav from "./presentational/Nav";
import Contacts from "./components/Contancts";
import About from "./components/About";
import ToggleTheme from "./components/ToggleTheme";
import SearchSection from "./presentational/SearchSection";
import { fetchFavorites } from "./helpers/fetchFavorites";
import { SelectInputContextProvider } from "./context/SelectInputContext";
import { DisplayContextProvider } from "./context/DisplayContext";
import { PageContextProvider } from "./context/PagesContext";
import { NavbarContextProvider } from "./context/NavbarContext";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const data = await fetchFavorites();
        setFavorites(data);
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      }
    };

    loadFavorites();
  }, []);

  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <SelectInputContextProvider>
      <NavbarContextProvider>
        <DisplayContextProvider>
          <PageContextProvider>
            <div
              className={
                "bg-[#E2EEF0] dark:bg-cool dark:text-stone-300 h-screen overflow-auto gutter"
              }
            >
              <Contacts />
              <About />
              <Nav>
                <ToggleTheme />
              </Nav>
              <Header />
              <Quote />
              <SearchSection
                setData={setData}
                setIsLoading={setIsLoading}
                setShowFavorites={setShowFavorites}
                showFavorites={showFavorites}
              />
              {showFavorites ? (
                <div className="min-h-fit">
                  <Favorites
                    favorites={favorites}
                    setFavorites={setFavorites}
                    isLoading={isLoading}
                  />
                </div>
              ) : (
                <div className="min-h-fit">
                  <Results
                    data={data}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    isLoading={isLoading}
                  />
                </div>
              )}
            </div>
          </PageContextProvider>
        </DisplayContextProvider>
      </NavbarContextProvider>
    </SelectInputContextProvider>
  );
}

export default App;
