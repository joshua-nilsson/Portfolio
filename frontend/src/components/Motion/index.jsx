import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Motion = (Component, id) => () => {

  const check = (id === "exp" || id === "tech")
  return !check ? (
    <motion.section
      id={id}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      tw="opacity-0"
    >
      <Component/>
    </motion.section>
    ) : <motion.section id={id}><Component/></motion.section>
}

Motion.propTypes = {
  Component: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default Motion