import React from 'react'
import SeventeenImage from '../assets/seventeen17.jpg'
import EighteenImage from '../assets/eighteen18.jpg'
import NineteenImage from '../assets/ninteen19.jpg'
import TwentyImage from '../assets/tewnty20.jpg'
import TwentyOneImage from '../assets/twentyone21.jpg'
export default function OurSolutions() {
  return (
    <div>
        <div style={{display:'flex', paddingTop:"130px", justifyContent:'center'}}> 
            <h1>Our Soluctions</h1>
        </div>
        <div style={{display:'flex',}}>
            <h1 style={{marginTop:'130px', marginLeft:'13px'}}>Business Value and Outcome Based Insights</h1>
            <h1 style={{marginTop:'130px',marginLeft:'313px'}}>Predictive Analytical Tools</h1>
        </div>
        <div style={{display:'flex', }}>
            <img src={SeventeenImage} height={200} width={352}  style={{marginLeft:'113px'}}/>
            <img src={EighteenImage} height={200} width={350} style={{marginLeft:'460px'}} />
        </div>
        <div style={{display:'flex',}}>
            <p style={{marginLeft:'57px', fontSize:'20px'}}>
                <strong>• Predictive Analytical Tools:</strong>It's about showing the real-world impact of data. <br />
                <strong>• Actionable Insights:</strong> Providing information that leads to strategic decisions. <br />
                <strong>• Data Visualization:</strong> Making complex data easy to understand. <br />
                <strong>• Performance Optimization:</strong> Helping businesses improve their results. <br />
                <strong>• Direct ROI:</strong> Demonstrating the return on investment. <br />
            </p>
            <p style={{marginLeft:'198px', fontSize:'20px'}}>
                <strong>• Forecasting:</strong> Predicting future trends. <br />
                <strong>• Machine Learning:</strong> Using algorithms for accurate predictions. <br />
                <strong>• Proactive Decisions:</strong>  Enabling businesses to act ahead of time. <br />
                <strong>• Optimization:</strong> Improving resource allocation and efficiency. <br />
                <strong>• Risk Mitigation:</strong>  Identifying and mitigating potential risks.<br />
            </p>
        </div>
        <div style={{display:'flex',}}>
            <h1 style={{marginLeft:'54px'}}>IOT, Data and AI Solutions</h1>
            <h1 style={{marginLeft:'500px'}}>Network Transformation</h1>
        </div>
        <div style={{display:'flex',}}>
            <img src={NineteenImage} height={200} width={350} style={{marginLeft:'91px'}} />
            <img src={TwentyImage} height={200} width={350} style={{marginLeft:'500px'}}/>
        </div>
        <div style={{display:'flex',}}>
            <p style={{marginLeft:'87px', fontSize:'20px'}}>
                <strong>• Connectivity:</strong> Connecting devices through IOT. <br />
                <strong>• Data Processing:</strong> Collecting and processing large datasets. <br />
                <strong>• AI-Driven Analytics:</strong> Using AI to extract insights. <br />
                <strong>• Automation:</strong> Automating processes for efficiency. <br />
                <strong>• Innovation:</strong> Creating new products and services. <br />
                <strong>• Real-time Monitoring </strong> Providing up-to-the-minute data analysis. <br />
                <strong>• Predictive Maintenance</strong> Anticipating maintenance needs. <br />
                <strong>• Personalized Experiences</strong> Tailoring solutions to customer needs. <br />

            </p>
            <p style={{marginLeft:'277px', fontSize:'20px'}}>
                <strong>• Modernization:</strong> Upgrading network infrastructure. <br />
                <strong>• Optimization:</strong> Improving performance and security. <br />
                <strong>• Scalability:</strong>  Ensuring the network can grow with the business. <br />
                <strong>• Cloud Integration:</strong>  Connecting networks to cloud services. <br />
                <strong>• Automation:</strong> Streamlining network operations. <br />
                <strong>• Agility:</strong> Enabling faster response to changing needs. <br />
                <strong>• Efficiency:</strong> Reducing costs and improving operations. <br />
            </p>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <h1>IT Security as Service</h1>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={TwentyOneImage} height={200} width={350} />
        </div>
        <div style={{display:'flex', justifyContent:'center', }}>
            <p style={{fontSize:'20px', }}>
                "Digitech's IT Security as a Service provides comprehensive protection for your organization's <br /> digital assets. We deliver a range of security solutions through a subscription-based model, including:
            </p>
        </div>
        <div style={{display:'flex', justifyContent:'center', fontSize:'20px'}}>
            <p >
                <strong>• Data loss prevention:</strong> to prevent sensitive data from being lost or stolen. <br />
                <strong>• Business continuity and disaster</strong> <br />
                <strong>• recovery: </strong> to ensure your business can continue to operate in the event of a disaster <br />
                <strong>• Identity and access management:</strong> to control who has access to your systems and data <br />
                <strong>• Email security:</strong> to protect your email from spam, phishing, and other threats <br />
                <strong>• Network security:</strong> to protect your network from unauthorized access and attacks <br />
                <strong>• Web security: </strong> to protect your web applications from threats <br />
            </p>
        </div>
    </div>
  )
}


