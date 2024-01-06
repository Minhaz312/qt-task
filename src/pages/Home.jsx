import React from 'react'
import Layout from '../components/common/Layout'
import Hero from '../components/home/Hero'
import List from '../components/home/datalist/List'
import PopularItems from '../components/home/datalist/PopularItems'
import Recommended from '../components/home/datalist/Recommended'

export default function Home() {
  return (
      <Layout>
          <Hero />
          <PopularItems />
          <Recommended />
      </Layout>
  );
}
