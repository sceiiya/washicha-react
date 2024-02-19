import { Helmet } from 'react-helmet-async';
function About() {
  return (
    <>
        <Helmet>
          <title>WashiTea | About</title>
          <meta name="description" content="Homepage of About"/>
          <link rel="canonical" href="/home" data-rh="true" />
        </Helmet>
      <div>About</div>     
    </>
  )
}

export default About