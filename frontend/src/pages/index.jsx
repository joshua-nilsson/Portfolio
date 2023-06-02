import { HeadContainer, HeaderContainer, MainContainer, FooterContainer } from "../containers"
import { Loading } from "../components"
import { useState, useEffect } from "react";
import tw from "twin.macro";

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => setLoading(false), [])

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
            <Loading.Loader/>
          </Loading.Frame>
        </Loading>
      )}
    </>
  )
}

export default IndexPage