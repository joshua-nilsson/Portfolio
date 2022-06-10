import { HeadContainer, HeaderContainer, MainContainer, FooterContainer } from "../containers"
import { Loading } from "../components"
import { useState, useEffect } from "react";
import tw from "twin.macro";

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => setTimeout(() => {
    setLoading(false)
  }, 60000), [])

  return (
    <>
      {!loading ? (
        <>
            <HeadContainer/>
            <HeaderContainer/>
            <MainContainer/>
            <FooterContainer/>
        </>
      ) : (
        <Loading>
          <Loading.Frame>
            <Loading.Loader tw="bg-purpleCircle! bg-cover!"/>
          </Loading.Frame>
        </Loading>
      )}
    </>
  )
}

export default IndexPage