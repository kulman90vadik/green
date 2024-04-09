
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";



const Pagination = () => {
  const page: number = useSelector((state: RootState) => state.catalog.page);
  const pageCount = Math.ceil( page / 5);
  
  let result = []
  for(let i = 0; i < pageCount; i++) {
    result.push(i + 1)
  }
  console.log(result)
  // return result


  return (
    <ul className="pagination">

      {result.map(btn => {
        return(
          <li  key={btn}>
          <button type="button">
            {btn}
          </button>

          </li>
        )
      })}

    </ul>
  );
}
 
export default Pagination;

