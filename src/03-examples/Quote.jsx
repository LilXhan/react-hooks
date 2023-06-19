import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, url }) => {

  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  });
  const pRef = useRef();

  

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();

    setBoxSize({
      height,
      width
    });

  }, [url])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
        >
        <p  className="mb-1">{ url }</p>
        <footer  ref={ pRef }className="blockquote-footer">  
          { name }
        </footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
};

Quote.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}
