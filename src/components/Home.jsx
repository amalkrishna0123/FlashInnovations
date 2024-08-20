import React, { useRef, useEffect } from 'react';
import techVideo from "../assets/tech-video3.mp4";
import blueShade from "../assets/blue-shade.png";
import homeBannerVideo from "../assets/home-banner.mp4";
import banner from "../assets/banner-png.png";
import task from "../assets/task.png"
import shade from "../assets/shade.png"
import vtsak from '../assets/vtask.png'
import dine from "../assets/Dine.png"
import clublogic from "../assets/clublogic.png"
import magnet from "../assets/magnet.png"
import auric from "../assets/auric.png"
import starstay from "../assets/starstay.png"
import pos from "../assets/pos.png"
import computer from "../assets/computer.png"
import barcodePrinter from "../assets/barcode-printer.png"
import printers from "../assets/printer.png"
import handBarcode from "../assets/hand-barcode-scanner.png"
import tableBarcode from "../assets/table-barcode-scanner.png"
import lables from "../assets/labels.png"
import cashDrawer from "../assets/cash-drawer.png"
import weighting from "../assets/weight-scale.png"
import cctv from "../assets/cctv.png"
import biometric from "../assets/biometric.png"
import networking from "../assets/networkingpng.png"
import LogoSlider from './LogoSlider';
import Colleagues from "../assets/colleagues1.png"
import { TiTick } from "react-icons/ti";
import Footer from './Footer';
import contactImage from "../assets/contact-image.png"
import serviceImg from "../assets/colleagues2.png"
import { motion } from "framer-motion"
import inventory from "../assets/inventory-software.jpg"
import customWeb from "../assets/custom-web-application.jpg"
import mobile from "../assets/mobile-development.jpg"
import graphicDesigning from "../assets/graphic-designing.jpg"
import branding from "../assets/graphic-designing.jpg"
import digitalMarketing from "../assets/digital-marketing.jpg"
import ECommerce from "../assets/e-commerce.jpg"
import sms from "../assets/sms.jpeg"
import { useInView } from "react-intersection-observer";
import banner3 from "../assets/banner3.png"
import homeVideo from "../assets/home-video.mp4"
import blackShade from "../assets/black-shade.png"
import homeImage from "../assets/demo-img.png"




const Home = () => {
  

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();
  const { ref: ref6, inView: inView6 } = useInView();
  const { ref: ref7, inView: inView7 } = useInView();
  const { ref: ref8, inView: inView8 } = useInView();
  const { ref: ref9, inView: inView9 } = useInView();
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: true });
  const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: true });
  const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: true });
  const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: true });
  const { ref: ref14, inView: inView14 } = useInView({ triggerOnce: true });
  const { ref: ref15, inView: inView15 } = useInView({ triggerOnce: true });
  const { ref: ref16, inView: inView16 } = useInView({ triggerOnce: true });
  const { ref: ref17, inView: inView17 } = useInView({ triggerOnce: true });
  const { ref: ref18, inView: inView18 } = useInView({ triggerOnce: true });
  const { ref: ref19, inView: inView19 } = useInView({ triggerOnce: true });
  const { ref: ref20, inView: inView20 } = useInView({ triggerOnce: true });
  const { ref: ref21, inView: inView21 } = useInView({ triggerOnce: true });
  const { ref: ref22, inView: inView22 } = useInView({ triggerOnce: true });
  const { ref: ref23, inView: inView23 } = useInView({ triggerOnce: true });
  const { ref: ref24, inView: inView24 } = useInView({ triggerOnce: true });
  const { ref: ref25, inView: inView25 } = useInView({ triggerOnce: true });
  const { ref: ref26, inView: inView26 } = useInView({ triggerOnce: true });
  const { ref: ref27, inView: inView27 } = useInView({ triggerOnce: true });
  const { ref: ref28, inView: inView28 } = useInView({ triggerOnce: true });
  const { ref: ref29, inView: inView29 } = useInView({ triggerOnce: true });
  const { ref: ref30, inView: inView30 } = useInView({ triggerOnce: true });
  const { ref: ref31, inView: inView31 } = useInView({ triggerOnce: true });
  const { ref: ref32, inView: inView32 } = useInView({ triggerOnce: true });
  const { ref: ref33, inView: inView33 } = useInView({ triggerOnce: true });
  const { ref: ref34, inView: inView34 } = useInView({ triggerOnce: true });
  const { ref: ref35, inView: inView35 } = useInView({ triggerOnce: true });
  const { ref: ref36, inView: inView36 } = useInView({ triggerOnce: true });
  const { ref: ref37, inView: inView37 } = useInView({ triggerOnce: true });
  const { ref: ref38, inView: inView38 } = useInView({ triggerOnce: true });
  const { ref: ref39, inView: inView39 } = useInView({ triggerOnce: true });
  const { ref: ref40, inView: inView40 } = useInView({ triggerOnce: true });
  const { ref: ref41, inView: inView41 } = useInView({ triggerOnce: true });
  const { ref: ref42, inView: inView42 } = useInView({ triggerOnce: true });
  const { ref: ref43, inView: inView43 } = useInView({ triggerOnce: true });
  const { ref: ref44, inView: inView44 } = useInView({ triggerOnce: true });
  const { ref: ref45, inView: inView45 } = useInView({ triggerOnce: true });
  const { ref: ref46, inView: inView46 } = useInView({ triggerOnce: true });
  const { ref: ref47, inView: inView47 } = useInView({ triggerOnce: true });
  const { ref: ref48, inView: inView48 } = useInView({ triggerOnce: true });
  const { ref: ref49, inView: inView49 } = useInView({ triggerOnce: true });
  const { ref: ref50, inView: inView50 } = useInView({ triggerOnce: true });
  const { ref: ref51, inView: inView51 } = useInView({ triggerOnce: true });
  const { ref: ref52, inView: inView52 } = useInView({ triggerOnce: true });
  const { ref: ref53, inView: inView53 } = useInView({ triggerOnce: true });
  const { ref: ref54, inView: inView54 } = useInView({ triggerOnce: true });
  const { ref: ref55, inView: inView55 } = useInView({ triggerOnce: true });
  const { ref: ref56, inView: inView56 } = useInView({ triggerOnce: true });
  const { ref: ref57, inView: inView57 } = useInView({ triggerOnce: true });
  const { ref: ref58, inView: inView58 } = useInView({ triggerOnce: true });
  const { ref: ref59, inView: inView59 } = useInView({ triggerOnce: true });
  const { ref: ref60, inView: inView60 } = useInView({ triggerOnce: true });
  const { ref: ref61, inView: inView61 } = useInView({ triggerOnce: true });
  const { ref: ref62, inView: inView62 } = useInView({ triggerOnce: true });
  const { ref: ref63, inView: inView63 } = useInView({ triggerOnce: true });
  const { ref: ref64, inView: inView64 } = useInView({ triggerOnce: true });

// Parallax Effect

useEffect(() => {
  const handleScroll = () => {
    const title = document.getElementById('parallaxTitle');
    const title2 = document.getElementById('parallaxTitle2');

    const circle1 = document.querySelector('.ParentCircle');
    const circle2 = document.querySelector('.ParentCircle2');
    const scrollPosition = window.scrollY;

    // Move the title to the left
    title.style.transform = `translateX(-${scrollPosition * 0.3}px)`;
    title2.style.transform = `translateX(${scrollPosition * 0.3}px)`;


    // Move the circles upwards
    circle1.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
    circle2.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);



  return (
    <div  className=''>
      {/* Parallax Section */}
      <section className='relative min-h-screen w-full -z-10 overflow-hidden'>
       
      <div className='w-full h-screen flex justify-center items-center'>
        <div className=' TextStyle flex flex-col justify-center items-center z-50'>
            <div className=' text-[72px] mb-10 leading-[70px]  font-bold text-[#fff] text-center md:text-[72px] lg:text-[152px] lg:leading-[120px] dlg:text-[200px] parallax-text dlg:leading-[170px]'  id='parallaxTitle'>FLASH <span className='block'>INNOVATIONS</span> </div>
            <div id='parallaxTitle2' className='ParagraphText leading-normal text-center text-white mb-10 lg:w-[900px] mx-auto px-10 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo numquam quisquam officiis commodi odit labore aut vitae! Ipsum itaque sapiente recusandae. Unde error sunt soluta voluptates consequatur labore in doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quod aperiam voluptates unde, dolor, ducimus nostrum molestiae autem expedita cumque dolores harum eius quaerat facere maxime non neque a tempora.
            </div>
            <div className=' flex justify-center '>
              <button className=' GradientButton px-8 py-2 relative z-30 cursor-pointer text-sm lg:text-[20px] lg:py-5'>Discover More</button>
            </div>
        </div>
      </div>

      {/* Rotate Animation */}
      <div className=' relative z-30 mt-[-180px]   gap-10'>
              <div className=' flex justify-between px-6 lg:px-56'>
              <div className=' flex justify-start items-center'>
                <div className='ParentCircle'>
                  <div className='ChildCirlce'></div>
                </div>
              </div>

              <div className=' flex justify-end items-center'>
                <div className='ParentCircle2'>
                  <div className='ChildCirlce2'></div>
                </div>
              </div>
              </div>
            </div>

        <div className='fixed inset-0 overflow-hidden'>
          <video
            className='w-full h-full object-cover opacity-50'
            autoPlay
            loop
            muted
            playsInline
            src={homeVideo}
          ></video>
        </div>
        <div className='fixed inset-0 overflow-hidden z-10'>
          <img src={blackShade} className=' w-full h-full object-cover' alt="" />
        </div>
        <div className='flex justify-center items-center h-full w-full fixed z-30'>
          <div>
            {/* <div
            className='TextStyle text-[62px]  font-bold text-[#fff] text-center md:text-[72px] lg:text-[152px] lg:leading-tight parallax-text ' id='parallaxTitle'>
              FLASH INNOVATIONS
            </div> */}
            {/* <div className=' px-6 text-center md:mx-auto md:w-[600px] lg:w-[800px] llg:w-[900px] dlg:w-[1000px] llg:text-[25px]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem tenetur dolore sunt libero itaque tempore nisi accusantium, hic ad blanditiis eligendi laborum doloremque molestias nesciunt, expedita esse officia saepe sed!
              Sequi alias possimus voluptatibus architecto aliquam provident ut quis molestiae, dolorum adipisci eius? Explicabo voluptas animi dolorem enim blanditiis eius nostrum repudiandae, quasi adipisci dolores nesciunt praesentium, repellendus doloribus. Accusantium?
            </div> */}
            
            {/* <div className=' flex justify-center items-center'>
              <div className='absolute bottom-0'>
                <img src={homeImage} className='drop-shadow-xl' alt="banner" />
              </div>
            </div> */}
          </div>
          

        </div>
      </section>

      {/* Next Section */}
      <section className='relative min-h-screen w-full z-50 GlassNavbar1 rounded-t-3xl '>
        {/* <div className=''>
          <img src={blueShade} className='absolute -z-10 w-full h-full object-cover opacity-50' alt="blueShade" />
          <video className='absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
        </div> */}
        <div className=' lg:mx-auto mb-20 section'>
          <div className='flex justify-center items-center h-full'>
            <div className=' md:flex justify-center items-center gap-10  lg:mx-auto'>
              <div className='mb-10 md:w-[50%]'>
                <motion.div
                
                >
                  <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView1 ? { x: 0, opacity: 1 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 1, delay: 1, ease: "backInOut" }}
                  className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5 dlg:text-[78px]'>About Us</motion.div>
                  <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView2 ? { x: 0, opacity: 1 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 1, delay: 1.2, ease: "backInOut" }}
                  // variants={itemVariants}
                  className=' text-center ParagraphText text-[#fff] mb-10 font-bold dlg:text-lg'>In the face of challenges, our resilience shines. We consistently deliver excellence, driven by a commitment to innovation and quality. Every task we undertake is a step toward achieving greatness, with an unwavering focus on surpassing expectations</motion.div>
                  <motion.div
                  // variants={itemVariants}
                  ref={ref3}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView3 ? { x: 0, opacity: 1 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 1, delay: 1.5, ease: "backInOut" }}
                  className='text-center ParagraphText text-[#fff] mb-5 font-bold dlg:text-lg'>We transform obstacles into opportunities, ensuring that our impact is both lasting and significant. Our dedication to pushing boundaries and redefining standards is at the core of everything we do, making us a reliable partner in any endeavor.
                  </motion.div>
                </motion.div>

                <div className=''>
                <ul className=' flex flex-col justify-center items-center gap-3'>
                  <motion.li
                  ref={ref4}
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={inView4 ? {x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut',delay:.2}} : {}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className='font-bold dlg:text-lg'>We drive progress with relentless creativity and forward-thinking solutions.</div>
                    </div>
                  </motion.li>
                  <motion.li
                  ref={ref5}
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={inView5 ? {x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut',delay:.5}} : {}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className=' font-bold dlg:text-lg'>We deliver superior results through unwavering commitment and precision.</div>
                    </div>
                  </motion.li>
                  <motion.li
                  ref={ref6}
                  initial={{x:-100,opacity:0,scale:0}}
                  animate={inView6 ? {x:0,opacity:1,scale:1,transition:{duration:1,ease:'backInOut',delay:1}} : {}}
                  >
                    <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                      <div className=' text-xl'><TiTick className=''/></div>
                      <div className='font-bold dlg:text-lg'>We uphold the highest standards, ensuring trust and reliability in all we do.</div>
                    </div>
                  </motion.li>
                </ul>
                </div>
              </div>
              <div>
              <motion.div
              ref={ref7}
              initial={{x:-100,opacity:0,scale:0}}
              animate={inView7 ? {x:0,opacity:1,scale:1,transition:{ease:'backInOut'}} : {}}
              className='h-[300px] w-full  lg:h-[500px] lg:w-[500px] dlg:w-[600px] dlg:h-[600px] BlobDesign2 bg-white'>
                    <img src={Colleagues} className=' h-full w-full object-contain mix-blend-multiply drop-shadow-2xl BlobDesign' alt="" />
                    {/* <div className=' text-center font-bold mt-3 text-lg text-[#fff]'></div> */}
                </motion.div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Next Section */}

        <section className='section'>
          <div className=' lg:mx-auto mb-20'>
            {/* <div className=' flex justify-center'>
              <div className='BlobAnimation1 w-[150px] h-[170px] absolute -z-10 opacity-20'></div>
            </div> */}
              <motion.div
              ref={ref8}
              initial={{ x:-100,opacity:0}}
              animate={inView8 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5 dlg:text-[78px]'>Software & Hardware Company</motion.div>
              <motion.div
              ref={ref9}
              initial={{ x:-100,opacity:0}}
              animate={inView9 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='text-center ParagraphText text-[#fff] mb-10 lg:max-w-[900px] lg:mx-auto font-bold dlg:text-lg'>At Flash Innovations, we champion the forefront of technology with unwavering commitment and excellence. Our cutting-edge solutions and unmatched expertise redefine industry standards, driving transformative results across diverse sectors. With a strategic approach and relentless dedication, we empower businesses to excel and navigate challenges with confidence, ensuring exceptional performance and lasting impact.</motion.div>
              <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10'>
                <motion.div
                ref={ref10}
                initial={{scale:0,opacity:0}}
                animate={inView10 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className=' flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[100px]'>10+</div>
                  <div className='text-2xl text-[#fff] dlg:text-[30px]'>Years of <span className='block'>Experience</span></div>
                </motion.div>

                <motion.div
                ref={ref11}
                initial={{scale:0,opacity:0}}
                animate={inView11 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[100px]'>30+</div>
                  <div className='text-2xl text-[#fff] dlg:text-[30px]'>Skilled <span className='block'>Professionals</span></div>
                </motion.div>

                <motion.div
                ref={ref12}
                initial={{scale:0,opacity:0}}
                animate={inView12 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[100px]'>300+</div>
                  <div className='text-2xl text-[#fff] dlg:text-[30px]'>Projects<span className='block'>Worldwide</span></div>
                </motion.div>

                <motion.div
                ref={ref13}
                initial={{scale:0,opacity:0}}
                animate={inView13 ? {scale:1,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                className='flex justify-center items-center gap-2'>
                  <div className='text-[52px] font-bold outLineFont dlg:text-[100px]'>100%</div>
                  <div className='text-2xl text-[#fff] dlg:text-[30px]'>Customer<span className='block'>Satisfaction</span></div>
                </motion.div>

              </div>
              <div className=' grid grid-cols-2 place-items-center place-content-center w-full h-[300px] lg:h-[200px] rounded-3xl gap-5 p-5 GlassBox bg-[#ffffff] lg:w-[900px] dlg:w-[1400px] dlg:h-[300px]  lg:mx-auto lg:grid-cols-4'>
                <motion.div
                ref={ref14}
                initial={{y:-100,opacity:0}}
                animate={inView14 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={task} className='w-auto h-[50px] dlg:h-[80px] object-contain' alt="" />
                </motion.div>
                <motion.div
                ref={ref15}
                initial={{y:-100,opacity:0}}
                animate={inView15 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={shade} className=' w-auto h-[45px] dlg:h-[75px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref16}
                initial={{y:-100,opacity:0}}
                animate={inView16 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={vtsak} className='w-auto h-[40px] dlg:h-[70px] object-contain' alt="" />
                </motion.div>
                <motion.div
                ref={ref17}
                initial={{y:-100,opacity:0}}
                animate={inView17 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={dine} className='w-auto h-[40px] dlg:h-[70px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref18}
                initial={{y:-100,opacity:0}}
                animate={inView18 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={clublogic} className='w-auto h-[40px] dlg:h-[70px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref19}
                initial={{y:-100,opacity:0}}
                animate={inView19 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={magnet} className='w-auto h-[55px] dlg:h-[90px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref20}
                initial={{y:-100,opacity:0}}
                animate={inView20 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={auric} className='w-auto h-[50px] dlg:h-[75px]' alt="" />
                </motion.div>
                <motion.div
                ref={ref21}
                initial={{y:-100,opacity:0}}
                animate={inView21 ? {y:0,opacity:1,transition:{duration:0.5,ease:'backInOut'}} : {}}
                >
                  <img src={starstay} className='w-auto h-[38px] dlg:h-[70px]' alt="" />
                </motion.div>
              </div>
          </div>
        </section>
        

        {/* About Section */}

        <section className=' section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
           <div className=' md:flex justify-center items-center gap-10'>
            <div className='mb-10'>
                <motion.div
                ref={ref22}
                initial={{x:-100,opacity:0}}
                animate={inView22 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:1}} : {}}
                className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Our Services
                </motion.div>
                <motion.div
                 ref={ref23}
                 initial={{x:-100,opacity:0}}
                 animate={inView23 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:1}} : {}}
                className='text-center ParagraphText text-[#fff] font-bold dlg:text-lg'>At Flash Innovations, we offer a full range of tailored solutions, including cutting-edge software, dynamic web and mobile applications, impactful branding, strategic digital marketing, and engaging design services, all crafted to elevate your business.</motion.div>
              </div>

              <motion.div
               ref={ref24}
               initial={{scale:0,opacity:0}}
               animate={inView24 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className='h-[300px] w-full  dlg:h-[400px] bg-white BlobDesign2'>
                      <img src={serviceImg} className=' h-full w-full object-contain mix-blend-darken drop-shadow-2xl rounded-full BlobDesign' alt="" />
              </motion.div>
           </div>

            {/* Services Lists */}
            <div className=' grid grid-cols-1 place-items-center place-content-center gap-10 mt-10 lg:grid-cols-2'>

              {/* First List */}
              <motion.div 
              className='grid grid-cols-2 place-items-center place-content-center gap-2 text-center'>

                <motion.div
                // ref={ref25}
                // initial={{scale:0,opacity:0}}
                // animate={inView25 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:1,delay:.1}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center relative'>
                  <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={inventory} className=' w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Inventory Softwares</div>
                </motion.div>

                <motion.div 
                // ref={ref26}
                // initial={{scale:0,opacity:0}}
                // animate={inView26 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:1}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={customWeb}  className=' w-full h-full object-cover rounded-br-3xl rounded-tl-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Custom Web Applications</div>
                </motion.div>

                <motion.div 
                // ref={ref27}
                // initial={{scale:0,opacity:0}}
                // animate={inView27 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:1.5}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={mobile}  className=' w-full h-full object-cover rounded-br-3xl rounded-tl-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Mobile App Development</div>
                </motion.div>

                <motion.div 
                // ref={ref28}
                // initial={{scale:0,opacity:0}}
                // animate={inView28 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:2}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center'>
                <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={graphicDesigning}  className=' w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Graphic Designing</div>
                </motion.div>

              </motion.div>
 
              {/* Second List */}
              <div className='grid grid-cols-2 place-items-center place-content-center gap-2 text-center'>

              <motion.div
              // ref={ref29}
              // initial={{scale:0,opacity:0}}
              // animate={inView29 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:.5}} : {}}
              className=' h-[100px] lg:h-[200px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center overflow-hidden'>
              <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={branding}  className=' w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl mix-blend-multiply blurImg ' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Branding</div>
                </motion.div>

                <motion.div
                // ref={ref30}
                // initial={{scale:0,opacity:0}}
                // animate={inView30 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:1}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={digitalMarketing}  className=' w-full h-full object-cover rounded-br-3xl rounded-tl-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Digital Marketing</div>
                </motion.div>

                <motion.div
                // ref={ref31}
                // initial={{scale:0,opacity:0}}
                // animate={inView31 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:1.5}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-br-3xl rounded-tl-3xl GlassBox1 flex justify-center items-center'>
                <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={ECommerce}  className=' w-full h-full object-cover rounded-br-3xl rounded-tl-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>E-Commerce</div>
                </motion.div>

                <motion.div
                // ref={ref32}
                // initial={{scale:0,opacity:0}}
                // animate={inView32 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5,delay:2}} : {}}
                className=' h-[100px] lg:h-[200px] w-full rounded-bl-3xl rounded-tr-3xl GlassBox1 flex justify-center items-center'>
                <div className='absolute w-full h-[100px] rounded-bl-3xl rounded-tr-3xl mix-blend-multiply -z-10 blurImg lg:h-[200px]'>
                    <img src={sms}  className=' w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl mix-blend-multiply blurImg' alt="" />
                  </div>
                  <div className=' p-5 text-[#fff] lg:text-[28px] lg:font-bold drop-shadow-lg'>Whatsapp/SMS Marketing</div>
                </motion.div>

              </div>

              
            </div>
            <motion.div 
            // ref={ref33}
            // initial={{scale:0,opacity:0}}
            // animate={inView33 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
            className=' flex justify-center items-center mt-10 lg:mt-16'>
                <button className='px-8 py-2 rounded-3xl GradientButton'>Know More</button>
              </motion.div>
          </div>
        </section>

        <section className=' section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <motion.div
            ref={ref34}
            initial={{x:-100,opacity:0}}
            animate={inView34 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
             className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Our Hardware Solutions
             </motion.div>
            <motion.div
            ref={ref35}
            initial={{x:-100,opacity:0}}
            animate={inView35 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
            className=' text-center ParagraphText text-[#fff] md:max-w-[600px] md:mx-auto lg:max-w-[700px] font-bold dlg:text-lg'>At Flash Innovations, our hardware solutions offer top-notch reliability and performance. We provide a diverse range of advanced components, including security systems and high-performance computing devices, all tailored to your needs. Our focus on quality and innovation ensures that our hardware enhances efficiency and supports your business’s growth, keeping you ahead in a rapidly evolving technological landscape.
            </motion.div>

            {/* Hardware Lists */}

            <div className=' grid grid-cols-2 place-items-center gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-28'>
              
              <motion.div
              ref={ref36}
              initial={{scale:0,opacity:0}}
              animate={inView36 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px]  bg-white BlobDesign'>
                    <img src={pos} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center font-bold text-lg text-[#fff] mt-3 '>POS</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref37}
              initial={{scale:0,opacity:0}}
              animate={inView37 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[230px] lg:h-[230px]  bg-white BlobDesign'>
                    <img src={computer} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center font-bold mt-3 text-lg text-[#fff]'>Computers</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref38}
              initial={{scale:0,opacity:0}}
              animate={inView38 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[230px] lg:h-[230px]  bg-white BlobDesign'>
                    <img src={barcodePrinter} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center font-bold mt-3 text-lg text-[#fff]'>Barcode Printer</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref39}
              initial={{scale:0,opacity:0}}
              animate={inView39 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px]  bg-white BlobDesign'>
                    <img src={printers} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Printers</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref40}
              initial={{scale:0,opacity:0}}
              animate={inView40 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5 '>
                <div className='h-[120px] w-[120px] lg:w-[230px] lg:h-[230px] bg-white BlobDesign'>
                    <img src={handBarcode} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Hand Barcode Scanner</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref41}
              initial={{scale:0,opacity:0}}
              animate={inView41 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[230px] lg:h-[230px] bg-white BlobDesign'>
                    <img src={tableBarcode} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Table Barcode Scanner</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref42}
              initial={{scale:0,opacity:0}}
              animate={inView42 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[270px] lg:h-[270px] bg-white BlobDesign'>
                    <img src={lables} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Labels</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref43}
              initial={{scale:0,opacity:0}}
              animate={inView43 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px] bg-white BlobDesign'>
                    <img src={cashDrawer} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Cash Drawer</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref44}
              initial={{scale:0,opacity:0}}
              animate={inView44 ? {scale:1,opacity:1,transition:{ease:'backInOut'}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px] bg-white BlobDesign'>
                    <img src={weighting} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Weighting Scale</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref45}
              initial={{scale:0,opacity:0}}
              animate={inView45 ? {scale:1,opacity:1,transition:{ease:'backInOut'}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px] bg-white BlobDesign'>
                    <img src={cctv} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>CCTV</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref46}
              initial={{scale:0,opacity:0}}
              animate={inView46 ? {scale:1,opacity:1,transition:{ease:'backInOut'}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px] bg-white BlobDesign'>
                    <img src={biometric} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Biometric</div>
                </div>
              </motion.div>

              <motion.div
              ref={ref42}
              initial={{scale:0,opacity:0}}
              animate={inView42 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' w-full h-[200px] flex flex-col justify-center items-center gap-5'>
                <div className='h-[120px] w-[120px] lg:w-[250px] lg:h-[250px]  bg-white BlobDesign'>
                    <img src={networking} className=' h-full w-full object-cover rounded-full' alt="" />
                    <div className=' text-center mt-3 font-bold text-lg text-[#fff]'>Networking</div>
                </div>
              </motion.div>

            </div>
            <motion.div
            ref={ref43}
            initial={{scale:0,opacity:0}}
            animate={inView43 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
            className=' mt-10 flex justify-center items-center lg:mt-28'>
                <button className='px-8 py-2 rounded-3xl GradientButton'>Know More</button>
              </motion.div>
          </div>
        </section>

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
              <motion.div
              ref={ref44}
              initial={{x:-100,opacity:0}}
              animate={inView44 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5 dlg:text-[100px]'>Our Partners
              </motion.div>
              <motion.div 
              ref={ref45}
              initial={{x:-100,opacity:0}}
              animate={inView45 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' text-center ParagraphText text-[#fff] lg:px-56 font-bold dlg:text-lg'>At Flash Innovations, we value our strategic partnerships with industry-leading companies and technology providers. These collaborations enable us to deliver cutting-edge solutions and exceptional service to our clients. By working closely with our partners, we ensure access to the latest innovations and resources, driving success and enhancing the value we bring to your business.
              </motion.div>

              <div className='mt-10 lg:mt-16 overflow-hidden'>
                <LogoSlider/>
              </div>
          </div>
        </section>

        <section className='section'>
          <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
            <div className='md:flex justify-center items-center gap-10'>
              <div>
                  <motion.div
                  ref={ref46}
                  initial={{x:-100,opacity:0}}
                  animate={inView46 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
                  className='TitleText text-[#fff] text-[42px] pt-10 text-center mb-5'>Drop Us A Line</motion.div>
                  <motion.div
                  ref={ref47}
                  initial={{x:-100,opacity:0}}
                  animate={inView47 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
                  className=' text-center ParagraphText text-[#fff] mb-10 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus perspiciatis modi iure soluta a, porro officiis tenetur quae tempore deserunt debitis, explicabo reiciendis vero dignissimos, asperiores dicta quisquam aliquam.
                  Fugit officiis sint numquam enim quia, distinctio commodi iure iusto voluptatem optio incidunt obcaecati itaque corporis mollitia rem odit vitae. Cupiditate, dolor. Iure voluptatum ratione distinctio nam cupiditate. Eligendi, at.</motion.div>
                  <motion.div
                  ref={ref48}
                  initial={{x:-100,opacity:0}}
                  animate={inView48 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
                  className=' hidden md:flex justify-center items-center mt-10'>
                    <button className=' px-8 py-2 rounded-3xl GradientButton'>Contact Us</button>
                  </motion.div>
              </div>

              <motion.div 
              ref={ref49}
              initial={{scale:0,opacity:0}}
              animate={inView49 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className='h-[300px] w-full  bg-white BlobDesign2'>
                    <img src={contactImage} className=' h-full w-full object-contain mix-blend-multiply drop-shadow-2xl BlobDesign' alt="" />
              </motion.div>
              <motion.div
              ref={ref48}
              initial={{x:-100,opacity:0}}
              animate={inView48 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
              className=' flex md:hidden justify-center items-center mt-10'>
                <button className=' px-8 py-2 rounded-3xl GradientButton'>Contact Us</button>
              </motion.div>
            </div>
          </div>  
        </section>

        <motion.section
        ref={ref50}
        initial={{height:0,opacity:0}}
        animate={inView50 ? {height:'100%',opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
        className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </motion.section>

      </section>
      
    </div>
  );
};

export default Home;
