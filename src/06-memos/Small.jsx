import { memo } from 'react';
import PropTypes from 'prop-types';

export const Small = memo(({ value }) => {
  console.log('render');
  return (
    <small>{ value }</small>
  )
})

Small.displayName = 'Small';

Small.propTypes = {
  value: PropTypes.string
}