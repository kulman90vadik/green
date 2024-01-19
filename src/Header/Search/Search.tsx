import "./search.scss";
import { updateSearchValue, closeSearchHandler } from "../../redux/slices/searchClise";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useRef } from "react";

type Props = {
  openSearch: boolean;
  setOpenSearch: (bool: boolean) => void;
};

const Search: React.FC<Props> = ({ setOpenSearch, openSearch }) => {
  const refInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const search: string = useSelector((state: RootState) => state.search.search);

  const closeSearch = () => {
    dispatch(closeSearchHandler());
    refInput.current?.focus();
  }

  return (
    <div className={`${openSearch ? "search search--active" : "search"}`}>
      <div className="search__info">
        <input
          ref={refInput}
          type="text"
          className="search__input"
          placeholder="Search"
          value={search}
          onChange={(e) => dispatch(updateSearchValue(e.target.value))}
        />
        {search ? (
          <button
            className="search__close-input btn-reset"
            type="button"
            onClick={closeSearch}
          >
            &#10006;
          </button>
        ) : null}
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
}

export default Search;
