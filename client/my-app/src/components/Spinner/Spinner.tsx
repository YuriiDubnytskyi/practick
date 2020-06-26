import * as React from 'react';
import './Spinner.css'

interface ISpinnerProps {
}

const Spinner: React.FunctionComponent<ISpinnerProps> = (props:ISpinnerProps) => {
  return (
        <div className='wrapper-loading'>
            <div className="fancy-spinner">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="dot"></div>
            </div>
        </div>
  );
};

export default Spinner;
