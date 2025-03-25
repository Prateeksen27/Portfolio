import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../Components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
    const [globeImage, setGlobeImage] = useState("");
    const globeRef = useRef(null);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        // Update the globe image based on time
        const updateGlobeImage = () => {
            const hour = new Date().getHours();
            const isDayTime = hour >= 6 && hour < 18;
            setGlobeImage(isDayTime
                ? "//unpkg.com/three-globe/example/img/earth-day.jpg"
                : "//unpkg.com/three-globe/example/img/earth-night.jpg"
            );
        };

        updateGlobeImage();
        const interval = setInterval(updateGlobeImage, 60000);
        return () => clearInterval(interval);
    }, []);

    // Enable/Disable auto-rotate based on hover state
    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = !hover;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, [hover]);

    // Location: Gunupur, Rayagada, Odisha
    const locationData = [
        {
            lat: 19.0805,
            lng: 83.8088,
            size: 10,
            color: "yellow",
            text: "I am here"
        }
    ];

    // Function to copy email and show toast
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('suprateeksen62@gmail.com');
        toast.success('Email copied to clipboard!', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
        });
    };

    return (
        <section id='about' className='c-space my-20'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="Grid_1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Suprateek, </p>
                            <p className='grid-subtext'>
                                With a passion for innovation and a commitment to excellence, I bring a unique blend of technical prowess and creative vision to the world of software development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="" className='text-center w-full sm:w-[276px] sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className="grid-subtext">
                                My tech stack includes a wide range of cutting-edge technologies, including React, Next.js, Tailwind CSS, JavaScript, Java, and many more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                hexPolygonsData={locationData}
                                hexPolygonResolution={3}
                                hexPolygonMargin={0.3}
                                hexPolygonColor={() => "yellow"}
                                pointsData={locationData}
                                pointAltitude={0.02}
                                pointRadius={0.8}
                                pointColor={() => "yellow"}
                                pointLabel={({ text }) => `<div class="tooltip">${text}</div>`}
                                onPointHover={p => setHover(!!p)} // Set hover state dynamically
                            />

                        </div>
                        <div>
                            <p className='grid-headtext'>I Work Remotely</p>
                            <p className="grid-subtext">
                                I'm available to work remotely and have experience in remote development.
                                <a href="#contact">
                                <Button name='Contact Me' isBeam containerClass="w-full mt-10" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className="grid-headtext">My Passion for coding and Innovation.</p>
                            <p className="grid-subtext">
                                I'm passionate about coding and innovation. I believe that technology has the power to transform lives and make a positive impact on the world.

                                Coding is not my profession but my passion.

                            </p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className="grid-container">
                        <img src="/assets/grid4.png" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' alt="" />
                        <div className="space-y-2">
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div  onClick={handleCopyEmail}>
                            <Button isBeam containerClass={"w-full mt-10"} name={"Copy Email"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification Container */}
            <ToastContainer />
        </section>
    );
};

export default About;
