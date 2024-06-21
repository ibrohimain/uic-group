import React from 'react'
import Header from '../../components/header/Header'
import About from '../../components/aboutus/About'
import Portfolio from '../../components/portfolio/Portfolio'
import Services from '../../components/services/Services'
import Companies from '../../components/companies/Companies'
import Footer from '../../components/footer/Footer'

const AboutUs = () => {
    return (
        <div className='w-[100%] border border-black mx-auto'>
            <Header />
            <About />
            <Portfolio />
            <Services />
            <Companies />
            <Footer />
        </div>
    )
}

export default AboutUs
