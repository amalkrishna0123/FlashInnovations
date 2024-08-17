import React from 'react'
import techVideo from "../assets/tech-video3.mp4"
import blueShade from "../assets/blue-shade.png"
import exp from "../assets/exp.png"
import skill from "../assets/skill.png"
import satisfaction from "../assets/satisfaction.png"
import project from "../assets/project.png"
import { TiTick } from "react-icons/ti";
import brushFrame from "../assets/brush-frame.png"
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpg"
import team5 from "../assets/team5.jpg"
import team6 from "../assets/team6.jpg"
import Footer from './Footer';
import serviceImg from "../assets/colleagues2.png"
import company1 from "../assets/company1.jpg"
import company2 from "../assets/company2.jpg"
import company3 from "../assets/company3.jpg"
import aboutBanner from "../assets/about-banner.jpg"
import blackShade from "../assets/black-shade.png"
import redShade from "../assets/red-shade.png"
import bottomImage from "../assets/bottom-image.png"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";





const About = () => {

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });
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
  

  return (
    <div className='backgroundVideo relative mt-[80px]'>
      <div className=''>
        <img src={blueShade} className=' absolute -z-10 w-full h-full object-cover opacity-50' alt="" />
        <video className=' absolute top-0 -z-10 opacity-15 mix-blend-multiply' autoPlay loop muted playsInline src={techVideo} style={{ width: '100%', height: '100%', objectFit:'cover' }}></video>
      </div>
      
      <section className=' section relative overflow-hidden md:h-[600px] w-full'>
        {/* About Banner */}
        <div>
          <div className=' absolute top-0 w-full left-0 h-[600px]'>
            <img src={aboutBanner} className='w-full h-full object-cover absolute -z-10' alt="" />
            <img src={blackShade} className=' w-full h-full object-cover z-10 absolute ' alt="" />
          </div>
        </div>

        <div className=' flex justify-center items-center lg:max-w-[1200px] lg:mx-auto relative z-30'>
          <div className=' mb-20 md:absolute homeTitlePosition'>
            <div className=' text-center text-[42px] font-extrabold text-[hsl(0,0%,100%)] mb-5 TextStyle pt-[50px]'>Harnessing Technology to Propel Your Business</div>
            <div className=' text-center TextStylePara text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus non accusantium perferendis minus exercitationem rerum sit magnam nemo voluptatem natus. Perferendis placeat quia aliquam cupiditate ducimus laborum illo quos asperiores!</div>
          </div>
        </div>
        {/* Bottom Image */}
        <div className=' absolute bottom-[20px] z-20 w-full left-0 bottomImage'>
          <img src={bottomImage} className='w-full h-full object-cover' alt="" />
        </div>
      </section>

      <section className=' section'>
        <div className=' lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className=' md:flex justify-center items-center gap-10'>
            <div className=' grid place-items-center grid-cols-2 md:w-[50%] mb-10 md:mb-0 gap-5 lg:gap-0 lg:w-[40%]'>

            <div className=' flex flex-col justify-center items-center gap-5 pt-32'>
              <motion.div
              ref={ref1}
              initial={{y:-100,opacity:0}}
              animate={inView1 ? {y:0,opacity:1,transition:{duration:.5,ease:'backInOut',delay:.5}} : {}}
              className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                <div className='w-[80%] h-[50%]'>
                  <img className=' w-full h-full object-contain' src={exp} alt="" />
                </div>
                <div className='text-[#3c3a3a] text-3xl font-semibold'>10+</div>
                <div className=' text-[#625d5d]'>Year of <span className=' block'>Experience</span></div>
            </motion.div>

              <motion.div
              ref={ref2}
              initial={{y:-100,opacity:0}}
              animate={inView2 ? {y:0,opacity:1,transition:{duration:.5,ease:'backInOut',delay:1}} : {}}
              className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                <div className='w-[80%] h-[50%]'>
                  <img className=' w-full h-full object-contain' src={skill} alt="" />
                </div>
                <div className='text-[#3c3a3a] text-3xl font-semibold'>10+</div>
                <div className=' text-[#625d5d]'>Skilled<span className=' block'>Professionals</span></div>
            </motion.div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-5 mt-[-20px]'>
              <motion.div
              ref={ref3}
              initial={{y:-100,opacity:0}}
              animate={inView3 ? {y:0,opacity:1,transition:{duration:.5,ease:'backInOut',delay:1}} : {}}
              className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                  <div className='w-[80%] h-[50%]'>
                    <img className=' w-full h-full object-contain' src={satisfaction} alt="" />
                  </div>
                  <div className='text-[#3c3a3a] text-3xl font-semibold'>100%</div>
                  <div className=' text-[#625d5d]'>Customer <span className=' block'>Satisfaction</span></div>
              </motion.div>

              <motion.div
              ref={ref4}
              initial={{y:-100,opacity:0}}
              animate={inView4 ? {y:0,opacity:1,transition:{duration:1,ease:'backInOut',delay:1}} : {}}
              className=' flex flex-col justify-center items-center gap-3 rounded-sm GlassBox1 w-full h-[270px] text-center p-5 bg-white'>
                  <div className='w-[80%] h-[50%]'>
                    <img className='w-full h-full object-contain' src={project} alt="" />
                  </div>
                  <div className='text-[#3c3a3a] text-3xl font-semibold'>300+</div>
                  <div className=' text-[#625d5d]'>Projects<span className=' block'>Worldwide</span></div>
              </motion.div>
            </div>
          </div>
          <motion.div
          ref={ref5}
          initial={{rotate:'60deg',opacity:.5,scale:2}}
          animate={inView5 ? {rotate:'0deg',opacity:1,scale:1, transition:{duration:1,ease:'backInOut'}} : {}}
          className='h-[300px] w-full lg:h-[500px]  rounded-tl-[20%] rounded-br-[20%] md:rounded-tl-[30%] md:rounded-br-[30%] BorderDesignBox md:w-[45%]'>
                      <img src={serviceImg} className=' h-full w-full object-contain mix-blend-darken drop-shadow-2xl rounded-tl-[10%] rounded-br-[10%] md:rounded-tl-[20%] md:rounded-br-[20%]' alt="" />
              </motion.div>
          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <div className=' grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 md:mb-5 mb-10'>
            <div>
              <motion.div 
              ref={ref6}
              initial={{x:-100, opacity:0}}
              animate={inView6 ? {x:0,opacity:1,transition:{duration:1,ease:'backInOut'}} : {}}
              className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>About Us</motion.div>
              <motion.div
              ref={ref7}
              initial={{x:-100,opacity:0}}
              animate={inView7 ? {x:0,opacity:1,transition:{duration:1.3,ease:'backInOut'}} : {}}
              className='text-sm text-center text-[#ffffffe6] ParagraphText mb-7 md:mx-auto'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quisquam dolore aperiam accusamus vel adipisci molestiae assumenda facere illum voluptas beatae, ullam, reprehenderit minima iste repellat dolor aliquid deserunt quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusantium hic esse veniam eius quos incidunt illum adipisci consequuntur aperiam perferendis sed sunt reprehenderit dolores, minima blanditiis maiores quisquam minus.
                <br /> <br />
                Natus eaque architecto perspiciatis error. Porro temporibus, aperiam pariatur impedit debitis illo blanditiis, repellat magni recusandae necessitatibus eveniet inventore voluptas iure unde numquam laudantium vitae! Beatae explicabo natus quaerat quae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui harum totam, molestiae dolores perferendis quidem incidunt omnis maiores eligendi consequuntur molestias porro ut nisi ipsum distinctio quisquam, mollitia modi doloribus.
              </motion.div>
            </div>
            <motion.div
            ref={ref8}
            initial={{scale:0,opacity:0}}
            animate={inView8 ? {scale:1,opacity:1,transition:{ease:'backInOut'}} : {}}
             className='h-[300px] w-full lg:h-[500px] lg:w-[500px]  bg-white BlobDesign'>
                <img src={serviceImg} className=' h-full w-full object-contain mix-blend-darken drop-shadow-2xl rounded-full BlobDesign' alt="" />
            </motion.div>
          </div>

          <div>
            <ul className=' grid grid-cols-1 place-items-center md:grid-cols-2 justify-center items-center gap-3'>
              <motion.li
              ref={ref9}
              initial={{scale:0,opacity:0}}
              animate={inView9 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:1, delay:.2}} : {}}
              >
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </motion.li>
              <motion.li
              ref={ref10}
              initial={{scale:0,opacity:0}}
              animate={inView10 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:1,delay:.7}} : {}}
              >
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </motion.li>
              <motion.li
              ref={ref11}
              initial={{scale:0,opacity:0}}
              animate={inView11 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:1,delay:1}} : {}}
              >
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </motion.li>
              <motion.li
              ref={ref12}
              initial={{scale:0,opacity:0}}
              animate={inView12 ? {scale:1,opacity:1,transition:{ease:'backInOut',duration:1,delay:1.3}} : {}}
              >
                <div className=' flex justify-center items-center gap-2 text-sm GlassBox p-5 rounded-xl bg-[#0091ff59]  text-[#ffffffe6] ParagraphText'>
                  <div className=' text-xl'><TiTick className=''/></div>
                  <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</div>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>

      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <motion.div
          ref={ref13}
          initial={{x:-100,opacity:0}}
          animate={inView13 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.5}} : {}}
          className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>
          A Successful & Innovative IT Company</motion.div>
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-10'>
              {/* Left */}
              <div className=' flex justify-center items-center gap-2 w-full h-[350px] mb-10'>
                {/* Inside-Left */}
                <div className=' w-[50%] h-full flex flex-col gap-2'>
                  <motion.div
                  ref={ref14}
                  initial={{y:-100,opacity:0}}
                  animate={inView14 ? {y:0,opacity:1,transition:{ease:'backInOut'}} : {}}
                   className=' w-full h-[50%] rounded-xl DarkBox bg-black'>
                    <img src={company1} className=' w-full h-full object-cover rounded-xl mix-blend-multiply' alt="" />
                  </motion.div>
                  <motion.div
                  ref={ref15}
                  initial={{y:-100,opacity:0}}
                  animate={inView15 ? {y:0,opacity:1,transition:{ease:'backInOut'}} : {}}
                  className=' w-full h-[50%] rounded-xl DarkBox bg-black'>
                    <img src={company2} className='w-full h-full object-cover rounded-xl mix-blend-multiply' alt="" />
                  </motion.div>
                </div>
                {/* Inside-Right */}
                <motion.div
                ref={ref16}
                initial={{y:-100,opacity:0}}
                animate={inView16 ? {y:0,opacity:1,transition:{ease:'backInOut'}} : {}}
                className=' w-[50%] h-full rounded-xl DarkBox bg-black'>
                  <img src={company3} className='w-full h-full object-cover rounded-xl mix-blend-multiply' alt="" />
                </motion.div>
              </div>
              {/* Right */}
              <div>
                <motion.div
                ref={ref17}
                initial={{x:-100,opacity:0}}
                animate={inView17 ? {x:0,opacity:1,transition:{ease:'backInOut',delay:.3,duration:.7}} : {}}
                className=' mb-5 text-[20px] font-bold text-white SubTitleStyle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quae.</motion.div>
                <motion.div
                ref={ref18}
                initial={{x:-100,opacity:0}}
                animate={inView18 ? {x:0,opacity:1,transition:{ease:'backInOut',delay:.1,duration:.7}} : {}}
                className='text-start ParagraphText text-sm text-white mb-5'>At Flash Innovations, we pride ourselves on being at the forefront of technological advancements. 
                Our commitment to excellence drives us to deliver cutting-edge software and hardware solutions that transform businesses. 
                With a focus on innovation and a track record of success, we provide tailored technology solutions that empower 
                our clients to achieve their goals and stay ahead in a rapidly evolving digital landscape.
                </motion.div>
                <motion.div
                ref={ref14}
                initial={{y:-100,opacity:0}}
                animate={inView14 ? {y:0,opacity:1,transition:{ease:'backInOut',delay:.1,duration:.7}} : {}}
                className=' flex flex-col justify-start items-baseline gap-5'>

                  <div className=' flex items-start gap-4'>
                    <div className=' p-2 bg-white rounded-lg text-[#08f]'><TiTick/></div>
                    <div>
                      <div className='mb-1 SmallTitleStyle font-bold text-white'>Excellence in Execution</div>
                      <div className=' text-sm ParagraphText text-white'>We achieve outstanding results through meticulous attention to detail and efficiency.
                      </div>
                    </div>
                  </div>

                  <div className=' flex items-center gap-4'>
                    <div className=' p-2 bg-white rounded-lg text-[#08f]'><TiTick/></div>
                    <div>
                      <div className='mb-1 SmallTitleStyle font-bold text-white'>Client-Centric Approach</div>
                      <div className=' text-sm ParagraphText text-white'>We offer innovative solutions that address current challenges and anticipate future needs.
                      </div>
                    </div>
                  </div>

                  <div className=' flex items-center gap-4'>
                    <div className=' p-2 bg-white rounded-lg text-[#08f]'><TiTick/></div>
                    <div>
                      <div className='mb-1 SmallTitleStyle font-bold text-white'>Forward-Thinking Solutions</div>
                      <div className=' text-sm ParagraphText text-white'>We tailor our services to your unique needs, ensuring a personalized and effective partnership.
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              </div>
            </div>
        </div>
      </section>

      <section className=' section'>
        <div className=' lg:max-w-[1200px] lg:mx-auto mb-20'>
          <motion.div
          ref={ref15}
          initial={{x:-100,opacity:0}}
          animate={inView15 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.7}} : {}}
          className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>Touch With Us</motion.div>
          <motion.div
          ref={ref16}
          initial={{x:-100,opacity:0}}
          animate={inView16 ? {x:0,opacity:1,transition:{ease:'backInOut',duration:.7,delay:.7}} : {}}
          className='text-center ParagraphText text-sm text-white mb-10 md:max-w-[600px] md:mx-auto'>At Flash Innovations, we guarantee top-tier customer service. We understand the value of your time, and we pledge 
          to respond to all your inquiries promptly and efficiently. Your satisfaction is our priority, and we strive to provide 
          exceptional support for all your needs. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nobis, repudiandae, eaque quia, corporis aliquam recusandae dolorem porro numquam ipsam voluptates! Consequuntur quam beatae perspiciatis alias possimus dolor, iste deleniti?</motion.div>
          <div className=' flex justify-center items-center gap-5'>
          <div>
            <button className=' px-8 py-2 GradientButton'>Contact Us</button>
          </div>
          <div></div>
        </div>
        </div>
      </section>


      <section className=' section'>
        <div className='lg:max-w-[1200px] lg:mx-auto mb-20'>
          <motion.div 
          ref={ref17}
          initial={{x:-100,opacity:0}}
          animate={inView17 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut'}} : {}}
          className='text-[42px] mb-5 text-center TitleText text-[#ffffff]'>Our Team</motion.div>
          <motion.div
          ref={ref18}
          initial={{x:-100,opacity:0}}
          animate={inView18 ? {x:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:1}} : {}}
          className='text-center ParagraphText text-sm text-white mb-10 md:max-w-[600px] md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus itaque quas dolor, sed eaque necessitatibus deserunt nulla dolore totam, aliquam cupiditate placeat porro, aliquid quo minima ab consequatur ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam molestias distinctio consequuntur voluptatem ea pariatur commodi porro quibusdam, consequatur quaerat rerum nisi aliquid a deserunt maxime perferendis corrupti. Laborum.</motion.div>
          {/* Team Members List */}
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 relative'>

            <motion.div
            ref={ref19}
            initial={{y:-100,opacity:0}}
            animate={inView19 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team1} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref20}
            initial={{y:-100,opacity:0}}
            animate={inView20 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team2} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref21}
            initial={{y:-100,opacity:0}}
            animate={inView21 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team3} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </motion.div>

            <motion.div
            ref={ref22}
            initial={{y:-100,opacity:0}}
            animate={inView22 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team4} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </motion.div>

            <motion.div 
            ref={ref23}
            initial={{y:-100,opacity:0}}
            animate={inView23 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team5} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </motion.div>

            <motion.div 
            ref={ref24}
            initial={{y:-100,opacity:0}}
            animate={inView24 ? {y:0,opacity:1,transition:{duration:.7,ease:'backInOut',delay:.3}} : {}}
            className='w-[300px] h-[350px] rounded-xl GlassBox'>
              <div className=' w-[300px] h-[350px] GlassBox rounded-xl'>
                <img src={team6} className=' w-full h-full object-cover rounded-xl' alt="" />
              </div>
              <div className='flex flex-col gap-1 justify-center items-center absolute bottom-0 w-full GradientFrame rounded-b-xl'>
                <div className='  px-8 text-lg font-black '>Team Member Name</div>
                <div className='TeamDesignation'>Designation</div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center bg-FooterBg bg-fixed bg-no-repeat bg-cover bg-center z-50'>
        <Footer/>
      </section>
    </div>
  )
}

export default About
