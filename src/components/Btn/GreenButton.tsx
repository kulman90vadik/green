// import { FC } from 'react';
import './button.scss';


const GreenButton = ({children}: {children: React.ReactNode}) => {
  return (
    <button className="button btn-reset" type="button">
      {children}
    </button>
  );
}
 
export default GreenButton;