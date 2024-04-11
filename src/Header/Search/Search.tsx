import "./search.scss";
import { updateSearchValue, closeSearchHandler } from "../../redux/slices/searchClise";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";

type Props = {
  openSearch: boolean;
  setOpenSearch: (bool: boolean) => void;
};

const Search: React.FC<Props> = ({ setOpenSearch, openSearch }) => {
  const [valueSearch, setValueSearch] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const search: string = useSelector((state: RootState) => state.search.search);
  refInput.current?.focus();

  const closeSearch = () => {
    dispatch(closeSearchHandler());
    setValueSearch('');
    refInput.current?.focus();
  }


  // ----------------- debounce
  const searchHandler = useCallback(
    debounce((value: string) => {
      dispatch(updateSearchValue(value))
    }, 600),
    [],
  )
  const clickSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
    searchHandler(e.target.value);
  }

  const clickClose = () => {
    setOpenSearch(false)
    dispatch(closeSearchHandler());
    setValueSearch('');
  }
// -----------------debounce

  return (
    <div className={`${openSearch ? "search search--active" : "search"}`} >
      <div className="search__info">
        <input
          ref={refInput}
          type="text"
          className="search__input"
          placeholder="Search"
          value={valueSearch}
          onChange={(e) => clickSearchHandler(e)}
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
        onClick={clickClose}
      >
        &#10006;
      </button>
    </div>
  );
}

export default Search;
