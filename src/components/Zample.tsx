import { Helmet } from "react-helmet-async"

function Zample() {
  return (
    <>
        <Helmet>
            <title>WashiTea | Home</title>
            <meta name="description" content="Homepage of WashiTea"/>
            <link rel="canonical" href="/home" data-rh="true" />
        </Helmet>
        <div>zample</div>
    </>
  )
}

export default Zample