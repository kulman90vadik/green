import "./search.scss";

type Props = {
  openSearch: boolean;
  setOpenSearch: (bool: boolean) => void;
};

const Search: React.FC<Props> = ({ setOpenSearch, openSearch }) => {
  return (
    <div className={`${openSearch ? "search search--active" : "search"}`}>
        <div className="search__info">
          <input type="text" className="search__input" placeholder="Search" />
        </div>
      <button
        className="search__close btn-reset"
        type="button"
        onClick={() => setOpenSearch(false)}
      >
        &#10006;
      </button>
    </div>
  );
};

export default Search;
