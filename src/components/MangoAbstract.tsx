import {motion, AnimationProps} from 'framer-motion';

const mainPathVariant: AnimationProps = {
  transition: {
    duration: 6,
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
    delay: 4,
    duration: 1,
    ease: "easeIn",
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 2,
        duration: 3,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
};

const MangoAbstract = () => {
    return (

      <div>
        <svg width="700" height="403" viewBox="0 0 1056 403" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_1"
              data-name="Path 1"
            d="M1 342.069C8 348.5 23.1895 356.641 45.2776 336.76C62.5254 321.236 52.0879 399.907 70.7854 382.606C99 356.5 105.355 391.753 112.657 382.606C131.5 359 118 282 134.795 287.053C157.943 294.017 151.132 257.412 168.966 262.441C186.801 267.47 192.833 271 204.5 257C217 242 241.184 310.614 260 287.053C284 257 267 162 369.5 257C416.517 300.576 397 373 430 200C441.671 138.817 446.993 176.803 467.988 196.022C488.696 214.98 479.923 160.99 504.802 183.905C530.017 207.13 543.941 172.31 560.246 189.569C575.405 205.615 580.331 236.114 588.16 217.559C598.099 194.003 602.598 143.24 622.812 164.957C644.495 188.252 660.963 128.173 673.827 139.862C698.96 162.699 707 109.5 719.068 88.2247C731.488 66.3279 740.96 147.104 778.5 150C816.04 152.896 824.468 198.738 834.574 217.559C844.681 236.38 846.125 174.126 862.489 188.604C878.852 203.082 900.991 260.028 910.616 217.559C920.242 175.091 915.91 117.663 949.6 141.31C983.289 164.957 971.257 77.6074 1006.87 102.702C1035.36 122.778 1050.83 68.599 1055 39" 
            stroke="#FECA1A" 
            strokeWidth="2" 
            strokeLinecap="round"
            />
            <motion.g 
                         {...mainModalVariant}
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{
                           delay: 2.5,
                           duration: .2,
                           ease: "easeInOut"
                         }}           filter="url(#filter0_d_5081_21047)">
            <rect x="387" y="330" width="40" height="35" rx="9" fill="#AFD803"/>
            <rect x="387.5" y="330.5" width="39" height="34" rx="8.5" stroke="url(#paint0_linear_5081_21047)" strokeOpacity="0.6"/>

            <path d="M407.333 340H418M418 340V351.2M418 340L407.333 351.2L402 345.6L394 354" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle opacity="0.3" cx="407" cy="309" r="14" fill="#AFD803"/>
            <circle cx="407" cy="309" r="7" fill="#AFD803"/>
            </motion.g>
            <motion.g 
                         {...mainModalVariant}
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{
                           delay: 3.5,
                           duration: .2,
                           ease: "easeInOut"
                         }}  filter="url(#filter1_d_5081_21047)">
            <rect x="705" y="30" width="40" height="35" rx="10" fill="#E54033"/>
            <rect x="705.5" y="30.5" width="39" height="34" rx="9.5" stroke="url(#paint1_linear_5081_21047)" strokeOpacity="0.3"/>

            <path d="M725.222 54H735M735 54V44.4M735 54L725.222 44.4L720.333 49.2L713 42" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle opacity="0.3" cx="724" cy="87" r="14" fill="#E54033"/>
            <circle cx="724" cy="87" r="7" fill="#E54033"/>
            </motion.g>
            <defs>
            <filter id="filter0_d_5081_21047" x="353" y="300" width="108" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="17"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5081_21047"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5081_21047" result="shape"/>
            </filter>
            <filter id="filter1_d_5081_21047" x="671" y="0" width="108" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="17"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5081_21047"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5081_21047" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_5081_21047" x1="407" y1="330" x2="407" y2="365" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_5081_21047" x1="725" y1="30" x2="725" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            </defs>
            </svg>
      </div>

    );
  };
  
  export default MangoAbstract;
  