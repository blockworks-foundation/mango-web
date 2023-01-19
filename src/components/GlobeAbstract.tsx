import {motion, AnimationProps} from 'framer-motion';

const mainPathVariant: AnimationProps = {
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
    variants: {
      visible: {
        pathLength: 1,
      },
      hidden: {
        pathLength: 0,
      },
    },
  };
  const mainModalVariant: AnimationProps = {
    transition: {
      delay: 0,
      duration: 2,
      ease: "easeIn",
    },
    variants: {
      visible: {
        fillOpacity: 1,
        pathLength: 1,
        transition: {
          delay: 0,
          duration: 2,
        },
      },
      hidden: {
        fillOpacity: 0,
        pathLength: 0,
      },
    },
  };
const GlobalAbstract = () => {
    
    return (
      <div className="">
            <svg width="338" height="444" viewBox="0 0 538 444" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.g 
                    {...mainModalVariant}
                          initial='hidden'
                          whileInView='visible'
                          transition={{
                            duration: 2,
                            ease: "easeIn"
                          }} >
               <circle opacity="0.2" cx="293" cy="10" r="10" fill="#559600"/>
                  <circle opacity="0.2" cx="293" cy="10" r="10" fill="#559600"/>
                  <circle opacity="0.2" cx="199" cy="110" r="10" fill="#559600"/>
                  <circle cx="293" cy="10" r="5" fill="#559600"/>
                  <circle cx="199" cy="110" r="5" fill="#559600"/>
                  <motion.path {...mainPathVariant}
                          whileInView="visible"
                          initial="hidden"
                          transition={{
                            delay: 0,
                            duration: 2,
                            ease: "easeInOut"
                          }}  d="M199.094 110.251C199.097 110.251 204.95 67.7575 235 38.5C264.323 9.95009 292.827 10.1719 292.827 10.1719" stroke="#6CBF00" strokeWidth="5" strokeLinecap="round"/>
              </motion.g>

              <motion.g 
                    {...mainModalVariant}
                         initial='hidden'
                         whileInView='visible'
                          transition={{
                            duration: 2,
                            ease: "easeIn"
                          }} >
                <ellipse opacity="0.2" rx="11.333" ry="11.0969" transform="matrix(0.999971 0.00767888 0.00767888 -0.999971 204.719 310.635)" fill="#FECA1A"/>
                  <ellipse opacity="0.2" rx="11.333" ry="11.0969" transform="matrix(0.999971 0.00767888 0.00767888 -0.999971 53.0858 136.748)" fill="#FECA1A"/>
                  <ellipse rx="5.66648" ry="5.90258" transform="matrix(0.999971 0.00767888 0.00767888 -0.999971 204.719 310.636)" fill="#FECA1A"/>
                  <ellipse rx="5.66648" ry="5.90258" transform="matrix(0.999971 0.00767888 0.00767888 -0.999971 53.0866 136.75)" fill="#FECA1A"/>
                  <motion.path {...mainPathVariant}
                          whileInView="visible"
                          initial="hidden"
                          transition={{
                            delay: 0,
                            duration: 2,
                            ease: "easeInOut"
                          }}  d="M52.5916 137.214C52.597 137.214 38.3073 170.512 76.5243 227.785C125.677 301.446 204.695 310.773 204.695 310.773" stroke="#E2AF00" strokeWidth="5" strokeLinecap="round"/>
                </motion.g>

                <motion.g 
                    {...mainModalVariant}
                          initial='hidden'
                          whileInView='visible'
                          transition={{
                            duration: 2,
                            ease: "easeIn"
                          }} >
                  <ellipse opacity="0.2" rx="11.333" ry="11.0969" transform="matrix(0.973499 -0.228693 -0.228693 -0.973499 253.311 430.292)" fill="#E54033"/>
                  <ellipse opacity="0.2" rx="11.333" ry="11.0969" transform="matrix(0.973499 -0.228693 -0.228693 -0.973499 511.139 73.3047)" fill="#E54033"/>
                  <ellipse rx="5.66648" ry="5.90258" transform="matrix(0.973499 -0.228693 -0.228693 -0.973499 253.315 430.292)" fill="#E54033"/>
                  <ellipse rx="5.66648" ry="5.90258" transform="matrix(0.973499 -0.228693 -0.228693 -0.973499 511.143 73.3046)" fill="#E54033"/>
                  <motion.path {...mainPathVariant}
                          whileInView="visible"
                          initial="hidden"
                          transition={{
                            delay: 0,
                            duration: 2,
                            ease: "easeInOut"
                          }} d="M253.672 429.967C253.671 429.957 331.12 413.826 410.919 322.456C517.966 199.89 511.739 72.8958 511.739 72.8958" stroke="#FF5B4E" strokeWidth="5" strokeLinecap="round"/>
                </motion.g>

                </svg>
      </div>
    );
  };
  
  export default GlobalAbstract;
  