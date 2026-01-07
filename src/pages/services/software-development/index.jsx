import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Preview/Navbar';
import Header from '@/components/SoftwareDevelopment/Header';
import Services from '@/components/SoftwareDevelopment/About/Services';
import Portfolio from '@/components/SoftwareDevelopment/Services/Portfolio';
import ServicesTab from '@/components/DigitalAgency/ServicesTab';
import FAQ from '@/components/SoftwareDevelopment/Services/FAQ';
import CallToAction from '@/components/Startup/CallToAction';
import Footer from '@/components/Startup/Footer';


const Branding = () => {
   useEffect(() => {
      document.body.classList.add('main-bg');
      return () => document.body.classList.remove('main-bg');
    }, []);
  
    const headerMetadata = {
      subTitle: "WHAT CAN WE DO ?",
      title: "We combine our passion for design and code.",
      text: "SERVICES"
    }
  return (
    <>
    <Head>
        <title>W3Web Technologies Soft</title>
      </Head>

      <Loader />
      <Layout>
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Services />
        <Portfolio />
        <ServicesTab />
        <FAQ />
        <CallToAction innerPageStyle />
      </main>
      </Layout>
      <Footer />
    </>
  )
}

export default Branding