import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Preview/Navbar';
import Header from '@/components/InnerPages/About/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/InnerPages/About/Services';
import Intro from '@/components/InnerPages/About/Intro';
import Testimonials from '@/components/DigitalAgency/Testimonials';
import Team from '@/components/Startup/Team';
import Clients from '@/components/InnerPages/About/Clients';
import CallToAction from '@/components/Startup/CallToAction';
import Footer from '@/components/Freelancer/Footer';

function PageAbout() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "WHO WE ARE ?",
    title: "Innovating Digital Solutions with Expert Developers",
    text: "About Us"
  }

  return (
    <>
      <Head>
        <title>W3 Web Technologies - About</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Services />
        <Intro />
        <Testimonials mainColor />
        <Team />
        <Clients />
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  )
}

PageAbout.getLayout = page => <Layout>{page}</Layout>

export default PageAbout;