import { HeadContainer, HeaderContainer, MainContainer, FooterContainer } from "../containers"
import { Loading } from "../components"
import { useState, useEffect } from "react";

const IndexPage = () => {
	const [loading, setLoading] = useState(true)
	useEffect(() => setLoading(false), [])

	return loading ? (
		<Loading>
			<Loading.Frame>
				<Loading.Loader />
			</Loading.Frame>
		</Loading>
	) : (
		<>
			<HeadContainer/>
			<HeaderContainer/>
			<MainContainer/>
			<FooterContainer/>
		</>
	)
}

export default IndexPage