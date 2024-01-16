
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={250}
    height={350}
    viewBox="0 0 250 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="9" ry="9" width="250" height="300" /> 
    <rect x="1" y="307" rx="7" ry="7" width="250" height="15" /> 
    <rect x="0" y="330" rx="7" ry="7" width="250" height="15" />
  </ContentLoader>
)

export default Loader