import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MyMap from '../components/mymap'
import { Helmet } from "react-helmet"

export default ({data}) => {
  console.log(data.gcmsdata.ds[0])
  return(
   <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rajasthan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <MyMap data={data.gcmsdata}/>
      </Layout>
   </div>
  )
}

export const query = graphql`
{
  gcmsdata{
    ds{
      featureCollection
    }
  }
}
`