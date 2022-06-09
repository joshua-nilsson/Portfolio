import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const NoSSR = ({ children }) => {
  const [isMounted, setMount] = useState(false);
  useEffect(() => setMount(true), []);
  return <>{isMounted ? children : null}</>;
};

NoSSR.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NoSSR;