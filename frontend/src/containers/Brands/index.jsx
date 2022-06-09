import { Brands, Brand, Motion } from '../../components'
import { client } from '../../client'
import { useState, useEffect } from 'react'
import Marquee from "react-fast-marquee"
import PropTypes from 'prop-types'

const BrandsContainer = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const queryBrands = "*[_type == 'brand'] | order(order asc)";
    client.fetch(queryBrands).then(data => setBrands(data));
  }, [])

  return (
    <Brands>
      <Brands.Group type="desktop">
        <Brand src={brands[0]?.imageURL} alt={`${brands[0]?.title} Brand Logo`} loading="lazy" />
        <Brand src={brands[1]?.imageURL} alt={`${brands[1]?.title} Brand Logo`} loading="lazy" />
        <Brand src={brands[2]?.imageURL} alt={`${brands[2]?.title} Brand Logo`} loading="lazy" />
      </Brands.Group>
      <Brands.Group type="desktop">
        <Marquee
          gradientColor={[247, 249, 252]}
          gradientWidth={50}
          speed={60}
        >
          {brands?.map((brand, index) => index > 2 && <Brand src={brand?.imageURL} alt={`${brand?.title} Brand Logo`} loading="lazy" key={brand?.title + index}/>)}
        </Marquee>
      </Brands.Group>
      <Brands.Group type="mobile">
        {brands?.map((brand, index) => index < 6 && <Brand src={brand?.imageURL} alt={brand?.title} loading="lazy" key={brand?.title + index}/>)}
      </Brands.Group>
      <Brands.Group type="mobile">
        {brands?.map((brand, index) => index >= 6 && <Brand src={brand?.imageURL} alt={brand?.title} loading="lazy" key={brand?.title + index}/>)}
      </Brands.Group>
    </Brands>
  )
}

Brands.Group.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Motion(BrandsContainer, 'brands')