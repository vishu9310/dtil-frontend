import React from 'react'
 import ElevenImage from '../assets/eleven11.jpg'
 import TwelveImage from '../assets/twelve12.jpg'
 import { useState } from 'react'
 import Form from './Form'
export default function GrowthAdvisary() {

const [openForms, setOpenForms] = useState(false)

    const openForm = () => {
        setOpenForms(true)
    }

  return (
    <>
       { !openForms && <div>

    <div>
    <div data-ux ="ImageBlock" className='row-md-6' style={{ height: '600px', width: '750px', backgroundColor: 'white',}}>
      <img src={ElevenImage} height={450} width={750} style={{paddingTop:'160px'}} />
    </div>
    <div className='row-md-6' style={{ height: '450px', width: '750px', backgroundColor: 'white', marginLeft:'799px', marginTop:'-399px' }}>
        <div className='Hello'>
            <h6 className='h6'style={{marginTop:'120px'}}>Hello</h6>
            <h3 className='h3'>At DigiTech, we specialize in driving business transformatio</h3>
            <p className='p'>We offer expert ICT consulting services for small businesses. <br />Let us help you streamline your technology and maximize your productivity.</p>
             <div className='button' style={{background:'white', textAlign:'center', marginLeft:'-627px' }}>
                <button className='btn' onClick={()=>openForm()}>Find More</button>
             </div>
        </div>
    </div>
    <div>
        <h1 style={{marginLeft:"487px", marginTop:"-109px"}}>Services in Growth Advisory</h1>
    </div>

    <div>
        <div>
            <img src={TwelveImage} height={200} width={370} style={{marginLeft:'225px', marginTop:'25px'}} />
        </div>
        <div style={{marginLeft:'683px', marginTop:'-222px'}}>
            <h2>🚀Develop Go-to-Market Strategies</h2>
            <p>
                <span>
                     Successfully entering a market requires more than just a great product. We help businesses <br />
                     ▴ Dentify and engage with key industry players, distributors, and strategic partners. <br />
                     ▴ Develop market entry strategies to position your brand effectively.  <br />
                     ▴ Optimize sales channels to ensure maximum reach and customer acquisition. <br />
                     ▴ Leverage partnerships for co-branding, joint ventures, and cross-promotions. <br /> 
                </span>
            </p>
        </div>

        <div style={{marginLeft:'681px'}}> 
             <h2> 📊 Evaluate Business Models & Market Potential</h2>
             <p>
                <span>
                    A strong foundation is essential for long-term success. Our team conducts in-depth evaluations to: <br />
                    ▴ Assess the viability and scalability of your business model. <br />
                    ▴ Analyze market trends, customer needs, and competitive positioning. <br />
                    ▴ Identify opportunities for differentiation and sustainable growth. <br />
                    ▴ Provide data-driven insights to strengthen your market presence. <br />
                </span>
             </p>
        </div>
        <div style={{marginLeft:'683px'}}>
            <h2> 🔧 Optimize Operations & Strategy</h2>
            <p>
                <span>
                    Efficient operations are the backbone of a growing business. We work closely with startups to: <br />
                    ▴ Streamline workflows and enhance productivity. <br />
                    ▴ Implement scalable processes to support business expansion. <br />
                    ▴ Optimize pricing, cost structures, and resource allocation. <br />
                    ▴ Align business execution with long-term strategic goals. <br />
                </span>
            </p>
        </div>
        <div style={{marginLeft:'679px'}}>
            <h2> 🎯 Ongoing Mentorship & Industry Insights</h2>
            <p>
                <span>
                    Beyond strategy, execution is key. Our advisory team provides continuous support to: <br />
                    ▴ Offer expert mentorship and guidance at every stage of growth. <br />
                    ▴ Share market intelligence and industry best practices. <br />
                    ▴ Help refine business vision and adapt strategies to evolving trends. <br />
                    ▴ Provide networking opportunities with investors, mentors, and industry leaders. <br />
                </span>
            </p>
        </div>
        <h2 style={{marginLeft:'679px'}}> 📈 Accelerate Your Business Growth</h2>
        <p style={{marginLeft:'679px'}}>    
        Whether you're launching, scaling, or seeking investment <br /> our Growth Advisory services equip you with the right strategies <br /> insights, and connections to thrive in competitive markets.
        </p>
        <div>
        <h5 style={{marginLeft:'679px'}}>📩 Get in touch today to explore how we can help your business grow!</h5>
        </div>
    </div>
    </div>
     </div>}
    
           {openForms &&  <Form/>}
            </>
  )
}
