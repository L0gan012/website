import React from 'react';
import { Link } from "react-router-dom";

import HeadshotContainer from '../Components/AboutSection/HeadshotContainer.js';
import FlexContainer from '../Components/FlexContainer.js';
import Slideshow from '../Components/Navigation/Slideshow.js';
import FadeSection from '../Components/FadeSection.js';

import '../Styles/About.css';

const About = () => {
    return (
        <div className='page'>
            {/* Headshot section with quick bio */}
            <HeadshotContainer img={<img src='https://artprojectsforkids.org/wp-content/uploads/2020/07/Big-Eyes-Post.jpg' alt='headshot' className='headshot'/>}>
                <h1>Hi! I'm Logan, a current fourth year at The Ohio State University!</h1>
                <h3>Computer Science Major specializing in Artificial Intelligence and Minoring in Business. I have recently accepted a position at JP Morgan Chase upon graduation in May!</h3>
                <h3>Besides engineering I love to climb (especially indoor bouldering), go skateboarding, make art (some examples listed <Link to='/art'>HERE</Link>), and I recently acquired a alto saxophone that I'm in the process of learning how to play!</h3>
            </HeadshotContainer>
            {/* Experience section */}
            <section className='experience-section vert'>
                <h1 className='shadow'>Experience</h1>
                <div className="experience-body vert">
                    <FlexContainer id='chipotle'>
                        <div class="text-label">
                            <h3>Cashier, Chipotle</h3>
                            <p>June 2016 - September 2017</p>
                        </div>
                        <p>Worked various jobs including line member, prep chef, and cashier. Each of these roles required copious amounts of teamwork and haste. As a cashier my responsiblity was to make sure the customer got everything they needed and had a pleasent dining experience!</p>
                    </FlexContainer>
                    <FlexContainer id='research'>
                        <div class="text-label">
                            <h3>Student Researcher, tOSU</h3>
                            <p>August 2017 - May 2018</p>
                        </div>
                        <p>During my senior year of high school I was given the oppurtunity to join a research project team, from The Ohio State University, to measure and observer the effects local factors had on the communities air quality. I was tasked with constructing a housing unit for all of the electronics and sensors that would be used to collect data. During my tenure with the project my group successfully deployed one fuctional device on the roof of our high school as a proof of concept.</p>
                    </FlexContainer>
                    <FlexContainer id='deweys'>
                        <div class="text-label">
                            <h3>Cook, Dewey's Pizza</h3>
                            <p>April 2018 - August 2018</p>
                        </div>
                        <p>In the summer between my senior year of high school and my freshman year in college I worked at one of my favorite restaurants as a pizza topper. Being a higher end pizza destination, quality, speed, and correctness were very important aspects of my role. This position required a huge amount of teamwork and communication because every station needed to be running in unison in order for the order to go out on time and be served together.</p>
                    </FlexContainer>
                    <FlexContainer id='jpmc'>
                        <div class="text-label">
                            <h3>Software Engineering Intern, JP Morgan Chase</h3>
                            <p>June 2021 - August 2021</p>
                        </div>
                        <p>This past summer I was lucky enough to get an internship offer with JP Morgan Chase as a Software Engineering Intern. During my time with JP Morgan I had the pleasure to work with a Cybersecurity team where I, learned about, and implemented Blue Green Deployment for their existing application. For those that don't know Blue Green Deployment is a cloud deployment strategy that allows hosting of a Blue environment that handles live traffic and simultaniously hosting a Green development version used for creating the next release of the application. When the Green environment has been successfully tested and deployed live traffic is switch from the Blue application to the newly deployed Green one. This means there will be no downtime for a live production application which is very important for any clients using the app. If you would like to learn a bit more about the nuances of Blue Green deployment I have a link <a href="https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment" target="_blank">HERE</a> that will tell you all you need to know!</p>
                    </FlexContainer>
                </div>
            </section>
            {/* Book Section */}
            <section class="book-section">
                <Slideshow>

                </Slideshow>
            </section>
            {/* Hobbies Section */}
            <section class="hobby-section">
                
            </section>
        </div>
    );
};

export default About;