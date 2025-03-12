import React from 'react'

const Footer = () => {
   return (
      <section id='contact' className='c-space  pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
         <div className="text-white-500 flex gap-2">
            <p>@Suprateek {new Date().getFullYear()}</p>

         </div>
         <div className="flex gap-3">
            <div className="social-icon">
               <a href="https://github.com/Prateeksen27" className='cursor-pointer' target='_blank'>
                  <img src="/assets/github.svg"  className='w-8 h-8' alt="" cursor="pointer" />
                  </a>
            </div>
            <div className="social-icon">

               <a href="https://www.instagram.com/i_am_prateek29/" className='cursor-pointer' target='_blank'>
                  <img src="/assets/instagram.svg"  className='w-8 h-8'alt="" cursor="pointer" />
               </a>
            </div>
          
            <div className="social-icon">

               <a href="https://www.linkedin.com/in/suprateek-sen-48b85724a/" className='cursor-pointer' target='_blank'>
                  <img src="/assets/linkedin-brands.svg"  className='w-8 h-8' alt="" cursor="pointer" /></a>
            </div>
         </div>
      </section>
   )
}

export default Footer