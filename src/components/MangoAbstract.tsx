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
        <svg width="1100" height="100%" viewBox="0 0 1727 993" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1727" height="993" fill="url(#paint0_linear_4975_7986)" fillOpacity="0.1"/>
          <rect x="0.5" y="0.5" width="1726" height="992" stroke="url(#paint1_linear_4975_7986)" strokeOpacity="0.5"/>
          <mask id="mask0_4975_7986" className="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1727" height="993">
          <rect width="1727" height="993" fill="url(#paint2_linear_4975_7986)"/>
          <rect x="0.5" y="0.5" width="1726" height="992" stroke="url(#paint3_linear_4975_7986)" strokeOpacity="0.5"/>
          </mask>
          <g mask="url(#mask0_4975_7986)">
          <path d="M1 930H63V992H1V930Z" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <path d="M1 928H63V1H1V928Z" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <path d="M64 656H1727V993H64V656Z" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect x="64" y="656" width="1663" height="68" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect x="64" y="723" width="1663" height="68" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect x="64" y="790" width="1663" height="68" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect width="1663" height="40" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 1727 616)" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect x="64" y="565" width="1663" height="51" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect width="552" height="503" transform="matrix(1 0 0 -1 1175 565)" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect x="1175" y="565" width="1111" height="503" transform="rotate(-180 1175 565)" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>

          <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              id="Path_1"
              data-name="Path 1"
              d="M92 465.069C99 471.5 114.189 479.641 136.278 459.76C153.525 444.236 143.088 522.907 161.785 505.606C190 479.5 196.355 514.753 203.657 505.606C222.5 482 209 405 225.795 410.053C248.943 417.017 242.132 380.412 259.966 385.441C285 392.5 291 397 294.618 385.441C299.306 370.465 317.5 393.5 345.152 402.814C400 421.288 411 340.559 460.5 380C510.636 419.948 488 496 521 323C532.671 261.817 537.993 299.803 558.988 319.022C579.696 337.98 570.923 283.99 595.802 306.905C621.017 330.13 634.941 295.31 651.246 312.569C666.405 328.615 671.331 359.114 679.16 340.559C689.099 317.003 693.598 266.24 713.812 287.957C735.495 311.252 751.963 251.173 764.827 262.862C789.96 285.699 798 232.5 810.068 211.225C822.488 189.328 831.96 270.104 869.5 273C907.04 275.896 915.468 321.738 925.574 340.559C935.681 359.38 937.125 297.126 953.489 311.604C969.852 326.082 991.991 383.028 1001.62 340.559C1011.24 298.091 1006.91 240.663 1040.6 264.31C1074.29 287.957 1062.26 200.607 1097.87 225.702C1126.36 245.778 1141.83 191.599 1146 162" 
              stroke="#FECA1A" 
              strokeWidth="3" 
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
                         }}           
          filter="url(#filter0_d_4975_7986)">
          <rect x="478" y="453" width="40" height="35" rx="9" fill="#AFD803"/>
          <rect x="478.5" y="453.5" width="39" height="34" rx="8.5" stroke="url(#paint4_linear_4975_7986)" strokeOpacity="0.6"/>
          <path d="M498.333 463H509M509 463V474.2M509 463L498.333 474.2L493 468.6L485 477" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle opacity="0.3" cx="498" cy="432" r="14" fill="#AFD803"/>
          <circle cx="498" cy="432" r="7" fill="#AFD803"/>
          </motion.g>
          <motion.g 
                         {...mainModalVariant}
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{
                           delay: 3.5,
                           duration: .2,
                           ease: "easeInOut"
                         }} 
          filter="url(#filter1_d_4975_7986)">
          <rect x="796" y="153" width="40" height="35" rx="10" fill="#E54033"/>
          <rect x="796.5" y="153.5" width="39" height="34" rx="9.5" stroke="url(#paint5_linear_4975_7986)" strokeOpacity="0.3"/>

          <path d="M816.222 177H826M826 177V167.4M826 177L816.222 167.4L811.333 172.2L804 165" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle opacity="0.3" cx="815" cy="210" r="14" fill="#E54033"/>
          <circle cx="815" cy="210" r="7" fill="#E54033"/>
          </motion.g>

          <rect width="1111" height="62" transform="matrix(-1 0 0 1 1175 0)" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <path d="M1175 0H1727V62H1175V0Z" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <rect x="64" y="565" width="113" height="51" fill="#2F293F" stroke="#443E52" strokeWidth="2"/>
          <g filter="url(#filter2_d_4975_7986)">
          <rect x="87" y="16" width="66" height="10" rx="5" fill="#443E52"/>
          <rect x="87.5" y="16.5" width="65" height="9" rx="4.5" stroke="url(#paint6_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter3_d_4975_7986)">
          <rect x="87" y="32" width="13" height="13" rx="6.5" fill="#2F293F"/>
          </g>
          <g filter="url(#filter4_d_4975_7986)">
          <rect x="104" y="32" width="49" height="13" rx="6.5" fill="#443E52"/>
          <rect x="104.5" y="32.5" width="48" height="12" rx="6" stroke="url(#paint7_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter5_d_4975_7986)">
          <rect x="1199" y="10" width="193" height="42" rx="15" fill="#443E52"/>
          <rect x="1199.5" y="10.5" width="192" height="41" rx="14.5" stroke="url(#paint8_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter6_d_4975_7986)">
          <rect x="1218" y="25" width="153" height="13" rx="6.5" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="1218.5" y="25.5" width="152" height="12" rx="6" stroke="url(#paint9_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter7_d_4975_7986)">
          <rect x="1422" y="32" width="98" height="13" rx="6.5" fill="#443E52"/>
          <rect x="1422.5" y="32.5" width="97" height="12" rx="6" stroke="url(#paint10_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter8_d_4975_7986)">
          <rect x="1465" y="16" width="55" height="9" rx="4.5" fill="#443E52"/>
          <rect x="1465.5" y="16.5" width="54" height="8" rx="4" stroke="url(#paint11_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter9_d_4975_7986)">
          <circle cx="1573.5" cy="29.5" r="19.5" fill="#443E52"/>
          <circle cx="1573.5" cy="29.5" r="19" stroke="url(#paint12_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter10_d_4975_7986)">
          <rect x="1564" y="20" width="19" height="19" rx="9.5" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="1564.5" y="20.5" width="18" height="18" rx="9" stroke="url(#paint13_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter11_d_4975_7986)">
          <rect x="1602" y="16" width="54" height="9" rx="4.5" fill="#443E52"/>
          <rect x="1602.5" y="16.5" width="53" height="8" rx="4" stroke="url(#paint14_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter12_d_4975_7986)">
          <rect x="1602" y="32" width="97" height="13" rx="6.5" fill="#443E52"/>
          <rect x="1602.5" y="32.5" width="96" height="12" rx="6" stroke="url(#paint15_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter13_d_4975_7986)">
          <rect x="1695" y="77" width="19" height="20" rx="9.5" fill="#2F293F"/>
          </g>
          <g filter="url(#filter14_d_4975_7986)">
          <rect x="1195" y="109" width="61" height="16" rx="8" fill="#443E52"/>
          <rect x="1195.5" y="109.5" width="60" height="15" rx="7.5" stroke="url(#paint16_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter15_d_4975_7986)">
          <rect x="1195" y="232" width="61" height="16" rx="8" fill="#443E52"/>
          <rect x="1195.5" y="232.5" width="60" height="15" rx="7.5" stroke="url(#paint17_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter16_d_4975_7986)">
          <rect x="1195" y="456" width="61" height="16" rx="8" fill="#443E52"/>
          <rect x="1195.5" y="456.5" width="60" height="15" rx="7.5" stroke="url(#paint18_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter17_d_4975_7986)">
          <rect x="1195" y="485" width="39" height="16" rx="8" fill="#443E52"/>
          <rect x="1195.5" y="485.5" width="38" height="15" rx="7.5" stroke="url(#paint19_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter18_d_4975_7986)">
          <rect x="1195" y="514" width="39" height="16" rx="8" fill="#443E52"/>
          <rect x="1195.5" y="514.5" width="38" height="15" rx="7.5" stroke="url(#paint20_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter19_d_4975_7986)">
          <rect x="1642" y="514" width="61" height="16" rx="8" fill="#443E52"/>
          <rect x="1642.5" y="514.5" width="60" height="15" rx="7.5" stroke="url(#paint21_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter20_d_4975_7986)">
          <rect x="1642" y="456" width="61" height="16" rx="8" fill="#443E52"/>
          <rect x="1642.5" y="456.5" width="60" height="15" rx="7.5" stroke="url(#paint22_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter21_d_4975_7986)">
          <rect x="1565" y="456" width="61" height="16" rx="8" fill="#443E52"/>
          <rect x="1565.5" y="456.5" width="60" height="15" rx="7.5" stroke="url(#paint23_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter22_d_4975_7986)">
          <rect x="1494" y="111" width="98" height="14" rx="7" fill="#443E52"/>
          <rect x="1494.5" y="111.5" width="97" height="13" rx="6.5" stroke="url(#paint24_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter23_d_4975_7986)">
          <rect x="1602" y="111" width="101" height="14" rx="7" fill="#443E52"/>
          <rect x="1602.5" y="111.5" width="100" height="13" rx="6.5" stroke="url(#paint25_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter24_d_4975_7986)">
          <rect x="1425" y="203" width="42" height="42" rx="15" fill="#443E52"/>
          <rect x="1425.5" y="203.5" width="41" height="41" rx="14.5" stroke="url(#paint26_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g opacity="0.3" filter="url(#filter25_d_4975_7986)">
          <rect x="1195" y="135" width="508" height="55" rx="15" fill="black"/>
          <rect x="1195.5" y="135.5" width="507" height="54" rx="14.5" stroke="url(#paint27_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g opacity="0.3" filter="url(#filter26_d_4975_7986)">
          <rect x="1195" y="258" width="508" height="55" rx="15" fill="black"/>
          <rect x="1195.5" y="258.5" width="507" height="54" rx="14.5" stroke="url(#paint28_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter27_d_4975_7986)">
          <rect x="1210" y="150" width="27" height="26" rx="13" fill="#443E52"/>
          <rect x="1210.5" y="150.5" width="26" height="25" rx="12.5" stroke="url(#paint29_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter28_d_4975_7986)">
          <rect x="1210" y="273" width="27" height="26" rx="13" fill="#443E52"/>
          <rect x="1210.5" y="273.5" width="26" height="25" rx="12.5" stroke="url(#paint30_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter29_d_4975_7986)">
          <rect x="1253" y="150" width="61" height="26" rx="13" fill="#443E52"/>
          <rect x="1253.5" y="150.5" width="60" height="25" rx="12.5" stroke="url(#paint31_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter30_d_4975_7986)">
          <rect x="1253" y="273" width="61" height="26" rx="13" fill="#443E52"/>
          <rect x="1253.5" y="273.5" width="60" height="25" rx="12.5" stroke="url(#paint32_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter31_d_4975_7986)">
          <rect x="1639" y="150" width="50" height="26" rx="13" fill="#443E52"/>
          <rect x="1639.5" y="150.5" width="49" height="25" rx="12.5" stroke="url(#paint33_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter32_d_4975_7986)">
          <rect x="1639" y="273" width="50" height="26" rx="13" fill="#443E52"/>
          <rect x="1639.5" y="273.5" width="49" height="25" rx="12.5" stroke="url(#paint34_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter33_d_4975_7986)">
          <rect x="1195" y="327" width="508" height="47" rx="15" fill="#332B43"/>
          <rect x="1195.5" y="327.5" width="507" height="46" rx="14.5" stroke="url(#paint35_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter34_d_4975_7986)">
          <rect x="1236" y="343" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1236.5" y="343.5" width="28" height="15" rx="7.5" stroke="url(#paint36_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter35_d_4975_7986)">
          <rect x="1332" y="343" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1332.5" y="343.5" width="28" height="15" rx="7.5" stroke="url(#paint37_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter36_d_4975_7986)">
          <rect x="1428" y="343" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1428.5" y="343.5" width="28" height="15" rx="7.5" stroke="url(#paint38_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter37_d_4975_7986)">
          <rect x="1434" y="212" width="24" height="24" rx="7" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="1434.5" y="212.5" width="23" height="23" rx="6.5" stroke="url(#paint39_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter38_d_4975_7986)">
          <rect x="1626" y="343" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1626.5" y="343.5" width="28" height="15" rx="7.5" stroke="url(#paint40_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter39_d_4975_7986)">
          <rect x="1524" y="343" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1524.5" y="343.5" width="28" height="15" rx="7.5" stroke="url(#paint41_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter40_d_4975_7986)">
          <rect x="1490" y="327" width="99" height="47" rx="15" fill="#6F64B7" fillOpacity="0.2" shapeRendering="crispEdges"/>
          <rect x="1490.5" y="327.5" width="98" height="46" rx="14.5" stroke="url(#paint42_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter41_d_4975_7986)">
          <rect x="1195" y="388" width="508" height="55" rx="15" fill="#4D4165"/>
          <rect x="1195.5" y="388.5" width="507" height="54" rx="14.5" stroke="url(#paint43_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter42_d_4975_7986)">
          <rect x="87" y="77" width="78" height="15" rx="7.5" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="87.5" y="77.5" width="77" height="14" rx="7" stroke="url(#paint44_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter43_d_4975_7986)">
          <rect x="86" y="100" width="127" height="33" rx="15" fill="#443E52"/>
          <rect x="86.5" y="100.5" width="126" height="32" rx="14.5" stroke="url(#paint45_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g opacity="0.5" filter="url(#filter44_d_4975_7986)">
          <rect x="1020" y="79" width="40" height="20" rx="10" fill="#443E52"/>
          <rect x="1020.5" y="79.5" width="39" height="19" rx="9.5" stroke="url(#paint46_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter45_d_4975_7986)">
          <rect x="1282" y="407" width="335" height="20" rx="10" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="1282.5" y="407.5" width="334" height="19" rx="9.5" stroke="url(#paint47_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter46_d_4975_7986)">
          <rect x="93" y="107" width="20" height="20" rx="10" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="93.5" y="107.5" width="19" height="19" rx="9.5" stroke="url(#paint48_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter47_d_4975_7986)">
          <rect x="119" y="107" width="83" height="20" rx="10" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="119.5" y="107.5" width="82" height="19" rx="9.5" stroke="url(#paint49_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter48_d_4975_7986)">
          <rect x="1029" y="84" width="22" height="10" rx="5" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="1029.5" y="84.5" width="21" height="9" rx="4.5" stroke="url(#paint50_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter49_d_4975_7986)">
          <rect x="1072" y="84" width="22" height="10" rx="5" fill="#443E52"/>
          <rect x="1072.5" y="84.5" width="21" height="9" rx="4.5" stroke="url(#paint51_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter50_d_4975_7986)">
          <rect x="1120" y="84" width="22" height="10" rx="5" fill="#443E52"/>
          <rect x="1120.5" y="84.5" width="21" height="9" rx="4.5" stroke="url(#paint52_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter51_d_4975_7986)">
          <rect x="87" y="142" width="74" height="13" rx="6.5" fill="#443E52"/>
          <rect x="87.5" y="142.5" width="73" height="12" rx="6" stroke="url(#paint53_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter52_d_4975_7986)">
          <rect x="87" y="163" width="54" height="13" rx="6.5" fill="#443E52"/>
          <rect x="87.5" y="163.5" width="53" height="12" rx="6" stroke="url(#paint54_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter53_d_4975_7986)">
          <rect x="87" y="582" width="68" height="16" rx="8" fill="#443E52"/>
          <rect x="87.5" y="582.5" width="67" height="15" rx="7.5" stroke="url(#paint55_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter54_d_4975_7986)">
          <rect x="87" y="628" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="87.5" y="628.5" width="46" height="15" rx="7.5" stroke="url(#paint56_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter55_d_4975_7986)">
          <rect x="859" y="628" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="628.5" width="46" height="15" rx="7.5" stroke="url(#paint57_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter56_d_4975_7986)">
          <rect x="1265" y="628" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="1265.5" y="628.5" width="46" height="15" rx="7.5" stroke="url(#paint58_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter57_d_4975_7986)">
          <rect x="1676" y="671" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1676.5" y="671.5" width="28" height="15" rx="7.5" stroke="url(#paint59_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter58_d_4975_7986)">
          <rect x="1676" y="738" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1676.5" y="738.5" width="28" height="15" rx="7.5" stroke="url(#paint60_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter59_d_4975_7986)">
          <rect x="1676" y="805" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1676.5" y="805.5" width="28" height="15" rx="7.5" stroke="url(#paint61_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter60_d_4975_7986)">
          <rect x="1283" y="671" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1283.5" y="671.5" width="28" height="15" rx="7.5" stroke="url(#paint62_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter61_d_4975_7986)">
          <rect x="1283" y="801" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1283.5" y="801.5" width="28" height="15" rx="7.5" stroke="url(#paint63_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter62_d_4975_7986)">
          <rect x="1283" y="738" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1283.5" y="738.5" width="28" height="15" rx="7.5" stroke="url(#paint64_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter63_d_4975_7986)">
          <rect x="859" y="694" width="81" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="694.5" width="80" height="15" rx="7.5" stroke="url(#paint65_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter64_d_4975_7986)">
          <rect x="859" y="824" width="81" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="824.5" width="80" height="15" rx="7.5" stroke="url(#paint66_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter65_d_4975_7986)">
          <rect x="859" y="738" width="81" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="738.5" width="80" height="15" rx="7.5" stroke="url(#paint67_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter66_d_4975_7986)">
          <rect x="1676" y="693" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1676.5" y="693.5" width="28" height="15" rx="7.5" stroke="url(#paint68_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter67_d_4975_7986)">
          <rect x="1676" y="760" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1676.5" y="760.5" width="28" height="15" rx="7.5" stroke="url(#paint69_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter68_d_4975_7986)">
          <rect x="1676" y="827" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1676.5" y="827.5" width="28" height="15" rx="7.5" stroke="url(#paint70_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter69_d_4975_7986)">
          <rect x="1283" y="693" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1283.5" y="693.5" width="28" height="15" rx="7.5" stroke="url(#paint71_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter70_d_4975_7986)">
          <rect x="1283" y="823" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1283.5" y="823.5" width="28" height="15" rx="7.5" stroke="url(#paint72_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter71_d_4975_7986)">
          <rect x="1283" y="760" width="29" height="16" rx="8" fill="#443E52"/>
          <rect x="1283.5" y="760.5" width="28" height="15" rx="7.5" stroke="url(#paint73_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter72_d_4975_7986)">
          <rect x="859" y="672" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="672.5" width="46" height="15" rx="7.5" stroke="url(#paint74_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter73_d_4975_7986)">
          <rect x="859" y="802" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="802.5" width="46" height="15" rx="7.5" stroke="url(#paint75_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter74_d_4975_7986)">
          <rect x="859" y="760" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="859.5" y="760.5" width="46" height="15" rx="7.5" stroke="url(#paint76_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter75_d_4975_7986)">
          <rect x="1658" y="628" width="47" height="16" rx="8" fill="#443E52"/>
          <rect x="1658.5" y="628.5" width="46" height="15" rx="7.5" stroke="url(#paint77_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter76_d_4975_7986)">
          <rect x="115" y="680" width="53" height="16" rx="8" fill="#443E52"/>
          <rect x="115.5" y="680.5" width="52" height="15" rx="7.5" stroke="url(#paint78_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter77_d_4975_7986)">
          <rect x="115" y="747" width="53" height="16" rx="8" fill="#443E52"/>
          <rect x="115.5" y="747.5" width="52" height="15" rx="7.5" stroke="url(#paint79_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter78_d_4975_7986)">
          <rect x="115" y="814" width="53" height="16" rx="8" fill="#443E52"/>
          <rect x="115.5" y="814.5" width="52" height="15" rx="7.5" stroke="url(#paint80_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter79_d_4975_7986)">
          <rect x="195" y="582" width="91" height="16" rx="8" fill="#443E52"/>
          <rect x="195.5" y="582.5" width="90" height="15" rx="7.5" stroke="url(#paint81_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter80_d_4975_7986)">
          <circle cx="32" cy="117" r="16" fill="#4D4165"/>
          <circle cx="32" cy="117" r="15.5" stroke="url(#paint82_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter81_d_4975_7986)">
          <circle cx="32" cy="165" r="16" fill="#443E52"/>
          <circle cx="32" cy="165" r="15.5" stroke="url(#paint83_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter82_d_4975_7986)">
          <circle cx="32" cy="213" r="16" fill="#443E52"/>
          <circle cx="32" cy="213" r="15.5" stroke="url(#paint84_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter83_d_4975_7986)">
          <rect x="24" y="205" width="16" height="16" rx="8" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="24.5" y="205.5" width="15" height="15" rx="7.5" stroke="url(#paint85_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter84_d_4975_7986)">
          <rect x="24" y="157" width="16" height="16" rx="8" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="24.5" y="157.5" width="15" height="15" rx="7.5" stroke="url(#paint86_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter85_d_4975_7986)">
          <rect x="24" y="109" width="16" height="16" rx="8" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="24.5" y="109.5" width="15" height="15" rx="7.5" stroke="url(#paint87_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter86_d_4975_7986)">
          <circle cx="32" cy="261" r="16" fill="#443E52"/>
          <circle cx="32" cy="261" r="15.5" stroke="url(#paint88_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter87_d_4975_7986)">
          <circle cx="32" cy="309" r="16" fill="#443E52"/>
          <circle cx="32" cy="309" r="15.5" stroke="url(#paint89_linear_4975_7986)" strokeOpacity="0.1"/>
          </g>
          <g filter="url(#filter88_d_4975_7986)">
          <circle cx="32" cy="357" r="16" fill="#443E52"/>
          </g>
          <g filter="url(#filter89_d_4975_7986)">
          <rect x="24" y="253" width="16" height="16" rx="8" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="24.5" y="253.5" width="15" height="15" rx="7.5" stroke="url(#paint90_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter90_d_4975_7986)">
          <rect x="24" y="301" width="16" height="16" rx="8" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="24.5" y="301.5" width="15" height="15" rx="7.5" stroke="url(#paint91_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter91_d_4975_7986)">
          <rect x="24" y="349" width="16" height="16" rx="8" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
          <rect x="24.5" y="349.5" width="15" height="15" rx="7.5" stroke="url(#paint92_linear_4975_7986)" strokeOpacity="0.1" shapeRendering="crispEdges"/>
          </g>
          <g filter="url(#filter92_d_4975_7986)">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.5628 950.488C20.9799 947.171 26.5201 947.171 29.9372 950.488L32.5 952.976L35.0628 950.488C38.4799 947.171 44.0201 947.171 47.4372 950.488C50.8543 953.805 50.8543 959.183 47.4372 962.5L32.5 977L17.5628 962.5C14.1457 959.183 14.1457 953.805 17.5628 950.488Z" fill="#AFD803"/>
          <path d="M32.1517 953.334L32.5 953.672L32.8483 953.334L35.4111 950.847C38.6342 947.718 43.8658 947.718 47.0889 950.847C50.3037 953.967 50.3037 959.021 47.0889 962.141L32.5 976.303L17.9111 962.141C14.6963 959.021 14.6963 953.967 17.9111 950.847C21.1342 947.718 26.3658 947.718 29.5889 950.847L32.1517 953.334Z" stroke="url(#paint93_linear_4975_7986)" strokeOpacity="0.5"/>
          </g>
          <g filter="url(#filter93_d_4975_7986)">
          <mask id="path-208-inside-1_4975_7986" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M43.6967 18.7905C43.736 18.7898 43.7749 18.7889 43.8136 18.7878C43.8227 18.7875 43.8315 18.7848 43.8392 18.7798V18.7798C43.8617 18.7653 43.8679 18.734 43.8543 18.7108C37.1863 7.39606 28.5015 16.169 28.3613 16.3119C28.3574 16.3158 28.3614 16.317 28.3642 16.3218L28.372 16.3356C28.3722 16.3358 28.372 16.3361 28.3717 16.3362V16.3362C28.3715 16.3362 28.3713 16.3366 28.3715 16.3368C33.2595 24.906 42.4016 19.6719 43.7182 18.8557C43.7492 18.8365 43.7332 18.7899 43.6967 18.7905V18.7905ZM31.3339 21.7865C31.334 21.7865 31.3341 21.7865 31.3342 21.7864V21.7864C31.3343 21.7863 31.3344 21.7863 31.3345 21.7864C32.4282 22.3475 33.5923 22.6567 34.7547 22.7948C35.7848 22.9172 36.8057 23.2606 37.4818 24.0475C37.9913 24.6406 38.4599 25.2703 38.9112 25.9098C39.227 26.3607 39.5118 26.8324 39.7637 27.3219C40.3461 28.4434 40.7744 29.63 41.2078 30.8306C41.3349 31.1828 41.4625 31.5361 41.5945 31.8894C41.6356 32.0397 41.6785 32.1901 41.7233 32.3406C41.7239 32.3425 41.7259 32.3436 41.7278 32.3431V32.3431C41.7298 32.3426 41.7318 32.3437 41.7323 32.3457C42.4015 34.6399 43.3782 37.0903 44.6867 39.1139C44.6873 39.1148 44.6869 39.1159 44.686 39.1163V39.1163C44.685 39.1167 44.6847 39.1178 44.6852 39.1187C45.1181 39.7831 45.6029 40.4122 46.1351 41.0002C46.2401 41.1137 46.3474 41.2261 46.4548 41.3387L46.4548 41.3387C46.9564 41.8642 47.4616 42.3934 47.7479 43.0556C48.1045 43.8807 48.0771 44.8299 47.8627 45.7031C46.8511 49.8182 42.889 50.9002 39.1016 51.0004C39.1003 51.0004 39.0993 50.9991 39.0998 50.9979V50.9979C39.1003 50.9966 39.0994 50.9953 39.098 50.9953C37.6799 51.0233 36.2718 50.9176 35.0229 50.7896C35.022 50.7895 35.0223 50.7896 35.0214 50.7895C34.992 50.7864 28.9793 50.1563 23.8793 46.4293C23.8777 46.4282 23.8758 46.4275 23.8739 46.4273V46.4273C23.8719 46.4272 23.87 46.4265 23.8684 46.4253L23.7062 46.3047C23.706 46.3046 23.706 46.3043 23.7062 46.3041V46.3041C23.7064 46.3039 23.7063 46.3037 23.7062 46.3035C23.1098 45.859 22.5408 45.3788 22.0023 44.8655C20.5725 43.5009 19.3 41.9535 18.3257 40.255C18.3216 40.2479 18.3228 40.2388 18.3286 40.2329V40.2329C18.3344 40.2271 18.3356 40.2182 18.3316 40.211C18.2187 40.0074 18.1103 39.8016 18.0065 39.5938C17.0631 37.7057 16.4881 35.6503 16.4621 33.4656C16.4177 29.8011 17.6709 26.0483 20.0531 23.3267C20.0546 23.325 20.055 23.3227 20.0542 23.3206V23.3206C20.0534 23.3184 20.0538 23.316 20.0554 23.3143C21.3457 21.9018 22.958 20.7922 24.8666 20.1603C25.6829 19.8875 26.527 19.7114 27.3815 19.6347C28.1433 19.5663 28.8526 19.9418 29.4201 20.4546C29.9979 20.9768 30.6408 21.4246 31.3339 21.7865Z"/>
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M43.6967 18.7905C43.736 18.7898 43.7749 18.7889 43.8136 18.7878C43.8227 18.7875 43.8315 18.7848 43.8392 18.7798V18.7798C43.8617 18.7653 43.8679 18.734 43.8543 18.7108C37.1863 7.39606 28.5015 16.169 28.3613 16.3119C28.3574 16.3158 28.3614 16.317 28.3642 16.3218L28.372 16.3356C28.3722 16.3358 28.372 16.3361 28.3717 16.3362V16.3362C28.3715 16.3362 28.3713 16.3366 28.3715 16.3368C33.2595 24.906 42.4016 19.6719 43.7182 18.8557C43.7492 18.8365 43.7332 18.7899 43.6967 18.7905V18.7905ZM31.3339 21.7865C31.334 21.7865 31.3341 21.7865 31.3342 21.7864V21.7864C31.3343 21.7863 31.3344 21.7863 31.3345 21.7864C32.4282 22.3475 33.5923 22.6567 34.7547 22.7948C35.7848 22.9172 36.8057 23.2606 37.4818 24.0475C37.9913 24.6406 38.4599 25.2703 38.9112 25.9098C39.227 26.3607 39.5118 26.8324 39.7637 27.3219C40.3461 28.4434 40.7744 29.63 41.2078 30.8306C41.3349 31.1828 41.4625 31.5361 41.5945 31.8894C41.6356 32.0397 41.6785 32.1901 41.7233 32.3406C41.7239 32.3425 41.7259 32.3436 41.7278 32.3431V32.3431C41.7298 32.3426 41.7318 32.3437 41.7323 32.3457C42.4015 34.6399 43.3782 37.0903 44.6867 39.1139C44.6873 39.1148 44.6869 39.1159 44.686 39.1163V39.1163C44.685 39.1167 44.6847 39.1178 44.6852 39.1187C45.1181 39.7831 45.6029 40.4122 46.1351 41.0002C46.2401 41.1137 46.3474 41.2261 46.4548 41.3387L46.4548 41.3387C46.9564 41.8642 47.4616 42.3934 47.7479 43.0556C48.1045 43.8807 48.0771 44.8299 47.8627 45.7031C46.8511 49.8182 42.889 50.9002 39.1016 51.0004C39.1003 51.0004 39.0993 50.9991 39.0998 50.9979V50.9979C39.1003 50.9966 39.0994 50.9953 39.098 50.9953C37.6799 51.0233 36.2718 50.9176 35.0229 50.7896C35.022 50.7895 35.0223 50.7896 35.0214 50.7895C34.992 50.7864 28.9793 50.1563 23.8793 46.4293C23.8777 46.4282 23.8758 46.4275 23.8739 46.4273V46.4273C23.8719 46.4272 23.87 46.4265 23.8684 46.4253L23.7062 46.3047C23.706 46.3046 23.706 46.3043 23.7062 46.3041V46.3041C23.7064 46.3039 23.7063 46.3037 23.7062 46.3035C23.1098 45.859 22.5408 45.3788 22.0023 44.8655C20.5725 43.5009 19.3 41.9535 18.3257 40.255C18.3216 40.2479 18.3228 40.2388 18.3286 40.2329V40.2329C18.3344 40.2271 18.3356 40.2182 18.3316 40.211C18.2187 40.0074 18.1103 39.8016 18.0065 39.5938C17.0631 37.7057 16.4881 35.6503 16.4621 33.4656C16.4177 29.8011 17.6709 26.0483 20.0531 23.3267C20.0546 23.325 20.055 23.3227 20.0542 23.3206V23.3206C20.0534 23.3184 20.0538 23.316 20.0554 23.3143C21.3457 21.9018 22.958 20.7922 24.8666 20.1603C25.6829 19.8875 26.527 19.7114 27.3815 19.6347C28.1433 19.5663 28.8526 19.9418 29.4201 20.4546C29.9979 20.9768 30.6408 21.4246 31.3339 21.7865Z" fill="#443E52"/>
          <path d="M38.9112 25.9098L39.7302 25.3361L39.7282 25.3333L38.9112 25.9098ZM39.7637 27.3219L38.8745 27.7795L38.8762 27.7828L39.7637 27.3219ZM41.2078 30.8306L42.1484 30.4911L42.1484 30.4911L41.2078 30.8306ZM41.5945 31.8894L42.559 31.6255L42.5471 31.5818L42.5312 31.5393L41.5945 31.8894ZM46.1351 41.0002L45.3937 41.6713L45.4009 41.679L46.1351 41.0002ZM46.4548 41.3387L45.7314 42.0291L45.7395 42.0375L45.7477 42.0458L46.4548 41.3387ZM46.4548 41.3387L47.1782 40.6482L47.1702 40.6398L47.1619 40.6316L46.4548 41.3387ZM47.7479 43.0556L48.6659 42.6589L48.6658 42.6586L47.7479 43.0556ZM47.8627 45.7031L48.8338 45.9418L48.8338 45.9416L47.8627 45.7031ZM22.0023 44.8655L21.3119 45.5889L21.3123 45.5893L22.0023 44.8655ZM18.0065 39.5938L18.9011 39.147L18.901 39.1469L18.0065 39.5938ZM16.4621 33.4656L17.462 33.4537L17.462 33.4535L16.4621 33.4656ZM24.8666 20.1603L25.1809 21.1096L25.1835 21.1087L24.8666 20.1603ZM29.4201 20.4546L28.7496 21.1965L29.4201 20.4546ZM20.0554 23.3143L19.3171 22.6399L20.0554 23.3143ZM20.0531 23.3267L19.3006 22.6681L20.0531 23.3267ZM39.098 50.9953L39.1177 51.9951L39.098 50.9953ZM44.6852 39.1187L43.8474 39.6645L44.6852 39.1187ZM44.6867 39.1139L45.5265 38.5709L44.6867 39.1139ZM18.3316 40.211L19.2061 39.726L18.3316 40.211ZM18.3257 40.255L17.4583 40.7526L18.3257 40.255ZM31.3339 21.7865L30.8712 22.673L31.3339 21.7865ZM31.3342 21.7864L30.5167 21.2105L31.3342 21.7864ZM31.3345 21.7864L30.878 22.6761L31.3345 21.7864ZM23.7062 46.3035L24.3037 45.5017L23.7062 46.3035ZM43.7182 18.8557L43.1913 18.0057L43.7182 18.8557ZM41.7323 32.3457L40.7723 32.6257L41.7323 32.3457ZM23.8684 46.4253L24.465 45.6227L23.8684 46.4253ZM28.372 16.3356L27.5027 16.8299L28.372 16.3356ZM41.7233 32.3406L40.7648 32.6258L41.7233 32.3406ZM23.8793 46.4293L23.2893 47.2367L23.8793 46.4293ZM28.3613 16.3119L27.6477 15.6113L28.3613 16.3119ZM28.3642 16.3218L29.2334 15.8274L28.3642 16.3218ZM35.0229 50.7896L34.921 51.7844L35.0229 50.7896ZM35.0214 50.7895L35.125 49.7949L35.0214 50.7895ZM43.8543 18.7108L42.9928 19.2186L43.8543 18.7108ZM23.7062 46.3047L23.1096 47.1073L23.7062 46.3047ZM28.3717 16.3362L28.1331 15.3651L28.3717 16.3362ZM28.3715 16.3368L29.2401 15.8413L28.3715 16.3368ZM39.1016 51.0004L39.128 52L39.1016 51.0004ZM43.8136 18.7878L43.7848 17.7882L43.8136 18.7878ZM43.7848 17.7882C43.7497 17.7892 43.7144 17.79 43.6787 17.7907L43.7147 19.7903C43.7576 19.7896 43.8001 19.7886 43.8423 19.7874L43.7848 17.7882ZM29.0749 17.0125C29.1215 16.965 31.1681 14.9058 33.9148 14.1817C35.257 13.8279 36.7343 13.801 38.2398 14.4588C39.7517 15.1195 41.4016 16.5186 42.9928 19.2186L44.7158 18.2031C42.9729 15.2457 41.0368 13.4984 39.0406 12.6262C37.038 11.7511 35.085 11.8049 33.405 12.2478C30.1073 13.1172 27.7413 15.516 27.6477 15.6113L29.0749 17.0125ZM29.2413 15.8412L29.2334 15.8274L27.4949 16.8161L27.5027 16.8299L29.2413 15.8412ZM27.5029 16.8323C28.8184 19.1385 30.4585 20.5753 32.2373 21.3728C34.0053 22.1653 35.8361 22.2935 37.4944 22.1097C40.7801 21.7453 43.5486 20.1374 44.2451 19.7056L43.1913 18.0057C42.5712 18.3901 40.1104 19.8073 37.2739 20.1218C35.8711 20.2774 34.4176 20.1584 33.0555 19.5478C31.7043 18.942 30.3686 17.8197 29.2401 15.8413L27.5029 16.8323ZM34.8726 21.8018C33.8055 21.675 32.7601 21.3939 31.7909 20.8966L30.878 22.6761C32.0962 23.3011 33.3791 23.6384 34.6367 23.7878L34.8726 21.8018ZM39.7282 25.3333C39.2683 24.6815 38.7792 24.0231 38.2403 23.3958L36.7233 24.6992C37.2035 25.2581 37.6514 25.859 38.0941 26.4864L39.7282 25.3333ZM40.6528 26.8643C40.3802 26.3346 40.072 25.824 39.7302 25.3361L38.0921 26.4836C38.382 26.8973 38.6434 27.3303 38.8745 27.7794L40.6528 26.8643ZM42.1484 30.4911C41.7189 29.3011 41.2693 28.0513 40.6511 26.861L38.8762 27.7828C39.4229 28.8355 39.83 29.9589 40.2672 31.1701L42.1484 30.4911ZM42.5312 31.5393C42.4015 31.1922 42.2758 30.8441 42.1484 30.4911L40.2672 31.1701C40.394 31.5214 40.5234 31.88 40.6577 32.2394L42.5312 31.5393ZM42.6818 32.0554C42.6391 31.912 42.5982 31.7686 42.559 31.6255L40.6299 32.1532C40.673 32.3107 40.718 32.4682 40.7648 32.6258L42.6818 32.0554ZM45.5265 38.5709C44.2878 36.6553 43.345 34.3032 42.6923 32.0657L40.7723 32.6257C41.4581 34.9766 42.4687 37.5253 43.847 39.6569L45.5265 38.5709ZM46.8765 40.3291C46.3797 39.7803 45.9272 39.193 45.5231 38.5728L43.8474 39.6645C44.309 40.3731 44.8261 41.0442 45.3938 41.6713L46.8765 40.3291ZM47.1782 40.6482C47.0698 40.5347 46.968 40.428 46.8694 40.3213L45.4009 41.679C45.5121 41.7994 45.6249 41.9175 45.7314 42.0291L47.1782 40.6482ZM47.1619 40.6316L47.1619 40.6315L45.7477 42.0458L45.7477 42.0458L47.1619 40.6316ZM48.6658 42.6586C48.2963 41.8043 47.6563 41.1491 47.1782 40.6482L45.7314 42.0291C46.2565 42.5793 46.6268 42.9825 46.8301 43.4525L48.6658 42.6586ZM48.8338 45.9416C49.0787 44.9445 49.1391 43.754 48.6659 42.6589L46.83 43.4522C47.0699 44.0074 47.0756 44.7152 46.8915 45.4646L48.8338 45.9416ZM39.128 52C41.0882 51.9482 43.1932 51.6428 44.9713 50.7513C46.7893 49.8397 48.2494 48.319 48.8338 45.9418L46.8916 45.4644C46.4644 47.2023 45.4376 48.2801 44.0749 48.9634C42.6721 49.6667 40.9024 49.9524 39.0751 50.0007L39.128 52ZM34.921 51.7844C36.187 51.9142 37.6409 52.0242 39.1177 51.9951L39.0783 49.9955C37.7189 50.0223 36.3566 49.9211 35.1248 49.7948L34.921 51.7844ZM23.2893 47.2367C28.6113 51.1259 34.8464 51.7767 34.9178 51.7841L35.125 49.7949C35.1376 49.7962 29.3474 49.1866 24.4693 45.622L23.2893 47.2367ZM23.1096 47.1073L23.2718 47.2278L24.465 45.6227L24.3028 45.5021L23.1096 47.1073ZM21.3123 45.5893C21.88 46.1305 22.4798 46.6367 23.1086 47.1053L24.3037 45.5017C23.7397 45.0813 23.2016 44.6272 22.6924 44.1417L21.3123 45.5893ZM17.4583 40.7526C18.4883 42.5482 19.825 44.1698 21.3119 45.5889L22.6928 44.1421C21.3201 42.832 20.1117 41.3588 19.1931 39.7575L17.4583 40.7526ZM17.1119 40.0407C17.2221 40.2614 17.3372 40.4799 17.4571 40.6961L19.2061 39.726C19.1001 39.5349 18.9984 39.3419 18.9011 39.147L17.1119 40.0407ZM15.4621 33.4776C15.4902 35.8342 16.1109 38.0374 17.1119 40.0408L18.901 39.1469C18.0152 37.374 17.486 35.4665 17.462 33.4537L15.4621 33.4776ZM19.3006 22.6681C16.7397 25.5939 15.4151 29.5929 15.4621 33.4777L17.462 33.4535C17.4203 30.0092 18.6022 26.5026 20.8055 23.9853L19.3006 22.6681ZM24.5522 19.211C22.4673 19.9013 20.7125 21.1122 19.3171 22.6399L20.7937 23.9887C21.9788 22.6914 23.4487 21.6831 25.1809 21.1096L24.5522 19.211ZM27.2921 18.6387C26.3602 18.7224 25.4398 18.9144 24.5497 19.2118L25.1835 21.1087C25.926 20.8606 26.6937 20.7005 27.471 20.6307L27.2921 18.6387ZM31.7967 20.9C31.1788 20.5774 30.6057 20.1782 30.0905 19.7127L28.7496 21.1965C29.3901 21.7754 30.1028 22.2719 30.8712 22.673L31.7967 20.9ZM27.471 20.6307C27.8408 20.5975 28.2849 20.7766 28.7496 21.1965L30.0905 19.7127C29.4204 19.107 28.4457 18.5351 27.2921 18.6387L27.471 20.6307ZM20.9897 22.9674C21.1219 23.3175 21.0462 23.7123 20.7937 23.9887L19.3171 22.6399C19.0615 22.9197 18.9848 23.3193 19.1186 23.6738L20.9897 22.9674ZM20.8055 23.9853C21.0501 23.706 21.1209 23.3147 20.9897 22.9674L19.1186 23.6738C18.9891 23.3307 19.059 22.9441 19.3006 22.6681L20.8055 23.9853ZM40.0338 51.3551C40.288 50.6905 39.7881 49.9816 39.0783 49.9955L39.1177 51.9951C38.4106 52.0091 37.9125 51.3027 38.1658 50.6406L40.0338 51.3551ZM44.2991 38.1941C43.7227 38.436 43.5062 39.1409 43.8474 39.6645L45.5231 38.5728C45.8632 39.0948 45.6474 39.7974 45.0728 40.0384L44.2991 38.1941ZM43.847 39.6569C43.5074 39.1318 43.7293 38.4332 44.2991 38.1941L45.0728 40.0384C45.6445 39.7986 45.8671 39.0977 45.5265 38.5709L43.847 39.6569ZM19.0379 40.9378C19.3578 40.6159 19.4257 40.1219 19.2061 39.726L17.4571 40.6961C17.2455 40.3145 17.311 39.8383 17.6193 39.5281L19.0379 40.9378ZM34.6367 23.7878C35.5554 23.8969 36.2824 24.1861 36.7233 24.6992L38.2403 23.3958C37.329 22.3352 36.0142 21.9374 34.8726 21.8018L34.6367 23.7878ZM19.1931 39.7575C19.4134 40.1416 19.3491 40.6247 19.0379 40.9378L17.6193 39.5281C17.2965 39.8529 17.2297 40.3541 17.4583 40.7526L19.1931 39.7575ZM30.5167 21.2105C30.8055 20.8006 31.3528 20.6683 31.7967 20.9L30.8712 22.673C31.3153 22.9048 31.8628 22.7724 32.1517 22.3624L30.5167 21.2105ZM32.1517 22.3624C31.8638 22.771 31.3201 22.9029 30.878 22.6761L31.7909 20.8966C31.3486 20.6697 30.8047 20.8017 30.5167 21.2105L32.1517 22.3624ZM24.3554 47.0647C24.844 46.6476 24.8183 45.8852 24.3037 45.5017L23.1086 47.1053C22.5944 46.7221 22.5687 45.9603 23.0569 45.5435L24.3554 47.0647ZM44.2451 19.7056C44.7011 19.4229 44.8151 18.8977 44.6808 18.4976C44.5511 18.111 44.1755 17.7826 43.6806 17.7906L43.7129 19.7904C43.2543 19.7978 42.905 19.4924 42.7847 19.1337C42.6598 18.7615 42.7662 18.2692 43.1913 18.0057L44.2451 19.7056ZM41.9859 33.3093C41.4664 33.448 40.925 33.149 40.7723 32.6257L42.6923 32.0657C42.5386 31.5385 41.9931 31.2372 41.4698 31.377L41.9859 33.3093ZM23.9528 45.4305C24.1382 45.4451 24.3157 45.5118 24.465 45.6227L23.2718 47.2278C23.4243 47.3412 23.6056 47.4092 23.7949 47.4242L23.9528 45.4305ZM27.5027 16.8299C27.175 16.2535 27.4889 15.5234 28.1331 15.3651L28.6104 17.3073C29.2551 17.1489 29.5693 16.4181 29.2413 15.8412L27.5027 16.8299ZM40.7648 32.6258C40.9198 33.1465 41.461 33.4495 41.9859 33.3093L41.4698 31.377C41.9908 31.2378 42.528 31.5385 42.6818 32.0554L40.7648 32.6258ZM24.4693 45.622C24.3196 45.5125 24.141 45.4454 23.9528 45.4305L23.7949 47.4242C23.6106 47.4096 23.4359 47.3439 23.2893 47.2367L24.4693 45.622ZM27.6477 15.6113C27.5876 15.6726 27.4234 15.8529 27.3736 16.1483C27.3169 16.4847 27.4439 16.7381 27.5142 16.8497C27.5612 16.9242 27.633 17.006 27.5938 16.9589C27.5814 16.9441 27.5379 16.8918 27.4949 16.8161L29.2334 15.8274C29.1891 15.7494 29.144 15.6951 29.1303 15.6786C29.0896 15.6298 29.1601 15.7102 29.2063 15.7833C29.2757 15.8936 29.4022 16.1457 29.3458 16.4806C29.2963 16.7744 29.133 16.9532 29.0749 17.0125L27.6477 15.6113ZM35.1248 49.7948L35.125 49.7949L34.9178 51.7841C34.9184 51.7842 34.9197 51.7843 34.9213 51.7845C34.9218 51.7845 34.9212 51.7845 34.921 51.7844L35.1248 49.7948ZM44.3806 19.6205C44.8913 19.2917 44.9793 18.6502 44.7158 18.2031L42.9928 19.2186C42.7566 18.8177 42.8322 18.2389 43.2977 17.9391L44.3806 19.6205ZM24.3028 45.5021C24.8181 45.8852 24.8438 46.6478 24.3554 47.0647L23.0569 45.5435C22.5682 45.9607 22.5939 46.7239 23.1096 47.1073L24.3028 45.5021ZM28.1331 15.3651C27.4282 15.5383 27.2049 16.3099 27.5029 16.8323L29.2401 15.8413C29.5378 16.3633 29.3147 17.1342 28.6104 17.3073L28.1331 15.3651ZM39.0751 50.0007C39.7893 49.9818 40.2866 50.6943 40.0338 51.3551L38.1658 50.6406C37.9121 51.3039 38.4112 52.019 39.128 52L39.0751 50.0007ZM43.8423 19.7874C44.0343 19.7818 44.2203 19.7238 44.3806 19.6205L43.2977 17.9391C43.4427 17.8457 43.611 17.7932 43.7848 17.7882L43.8423 19.7874Z" fill="url(#paint94_linear_4975_7986)" fillOpacity="0.1" mask="url(#path-208-inside-1_4975_7986)"/>
          </g>
          </g>
          <defs>
          <filter id="filter0_d_4975_7986" x="444" y="423" width="108" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter1_d_4975_7986" x="762" y="123" width="108" height="103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter2_d_4975_7986" x="53" y="-14" width="134" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter3_d_4975_7986" x="53" y="2" width="81" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter4_d_4975_7986" x="70" y="2" width="117" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter5_d_4975_7986" x="1165" y="-20" width="261" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter6_d_4975_7986" x="1184" y="-5" width="221" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter7_d_4975_7986" x="1388" y="2" width="166" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter8_d_4975_7986" x="1431" y="-14" width="123" height="77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter9_d_4975_7986" x="1520" y="-20" width="107" height="107" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter10_d_4975_7986" x="1530" y="-10" width="87" height="87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter11_d_4975_7986" x="1568" y="-14" width="122" height="77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter12_d_4975_7986" x="1568" y="2" width="165" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter13_d_4975_7986" x="1661" y="47" width="87" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter14_d_4975_7986" x="1161" y="79" width="129" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter15_d_4975_7986" x="1161" y="202" width="129" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter16_d_4975_7986" x="1161" y="426" width="129" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter17_d_4975_7986" x="1161" y="455" width="107" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter18_d_4975_7986" x="1161" y="484" width="107" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter19_d_4975_7986" x="1608" y="484" width="129" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter20_d_4975_7986" x="1608" y="426" width="129" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter21_d_4975_7986" x="1531" y="426" width="129" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter22_d_4975_7986" x="1460" y="81" width="166" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter23_d_4975_7986" x="1568" y="81" width="169" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter24_d_4975_7986" x="1391" y="173" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter25_d_4975_7986" x="1161" y="105" width="576" height="123" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter26_d_4975_7986" x="1161" y="228" width="576" height="123" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter27_d_4975_7986" x="1176" y="120" width="95" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter28_d_4975_7986" x="1176" y="243" width="95" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter29_d_4975_7986" x="1219" y="120" width="129" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter30_d_4975_7986" x="1219" y="243" width="129" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter31_d_4975_7986" x="1605" y="120" width="118" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter32_d_4975_7986" x="1605" y="243" width="118" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter33_d_4975_7986" x="1161" y="297" width="576" height="115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter34_d_4975_7986" x="1202" y="313" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter35_d_4975_7986" x="1298" y="313" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter36_d_4975_7986" x="1394" y="313" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter37_d_4975_7986" x="1400" y="182" width="92" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter38_d_4975_7986" x="1592" y="313" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter39_d_4975_7986" x="1490" y="313" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter40_d_4975_7986" x="1456" y="297" width="167" height="115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter41_d_4975_7986" x="1161" y="358" width="576" height="123" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter42_d_4975_7986" x="53" y="47" width="146" height="83" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter43_d_4975_7986" x="52" y="70" width="195" height="101" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter44_d_4975_7986" x="986" y="49" width="108" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter45_d_4975_7986" x="1248" y="377" width="403" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter46_d_4975_7986" x="59" y="77" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter47_d_4975_7986" x="85" y="77" width="151" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter48_d_4975_7986" x="995" y="54" width="90" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter49_d_4975_7986" x="1038" y="54" width="90" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter50_d_4975_7986" x="1086" y="54" width="90" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter51_d_4975_7986" x="53" y="112" width="142" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter52_d_4975_7986" x="53" y="133" width="122" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter53_d_4975_7986" x="53" y="552" width="136" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter54_d_4975_7986" x="53" y="598" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter55_d_4975_7986" x="825" y="598" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter56_d_4975_7986" x="1231" y="598" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter57_d_4975_7986" x="1642" y="641" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter58_d_4975_7986" x="1642" y="708" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter59_d_4975_7986" x="1642" y="775" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter60_d_4975_7986" x="1249" y="641" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter61_d_4975_7986" x="1249" y="771" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter62_d_4975_7986" x="1249" y="708" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter63_d_4975_7986" x="825" y="664" width="149" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter64_d_4975_7986" x="825" y="794" width="149" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter65_d_4975_7986" x="825" y="708" width="149" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter66_d_4975_7986" x="1642" y="663" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter67_d_4975_7986" x="1642" y="730" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter68_d_4975_7986" x="1642" y="797" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter69_d_4975_7986" x="1249" y="663" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter70_d_4975_7986" x="1249" y="793" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter71_d_4975_7986" x="1249" y="730" width="97" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter72_d_4975_7986" x="825" y="642" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter73_d_4975_7986" x="825" y="772" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter74_d_4975_7986" x="825" y="730" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter75_d_4975_7986" x="1624" y="598" width="115" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter76_d_4975_7986" x="81" y="650" width="121" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter77_d_4975_7986" x="81" y="717" width="121" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter78_d_4975_7986" x="81" y="784" width="121" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter79_d_4975_7986" x="161" y="552" width="159" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter80_d_4975_7986" x="-18" y="71" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter81_d_4975_7986" x="-18" y="119" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter82_d_4975_7986" x="-18" y="167" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter83_d_4975_7986" x="-10" y="175" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter84_d_4975_7986" x="-10" y="127" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter85_d_4975_7986" x="-10" y="79" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter86_d_4975_7986" x="-18" y="215" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter87_d_4975_7986" x="-18" y="263" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter88_d_4975_7986" x="-18" y="311" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter89_d_4975_7986" x="-10" y="223" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter90_d_4975_7986" x="-10" y="271" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter91_d_4975_7986" x="-10" y="319" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter92_d_4975_7986" x="-19" y="918" width="103" height="97" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <filter id="filter93_d_4975_7986" x="-17.5391" y="-17.0649" width="99.5586" height="106.065" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="17"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4975_7986"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4975_7986" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_4975_7986" x1="1612.66" y1="-106.812" x2="1292.04" y2="1681.52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B6A5FF"/>
          <stop offset="1" stopColor="#5B48AD"/>
          </linearGradient>
          <linearGradient id="paint1_linear_4975_7986" x1="-47.315" y1="-58.6879" x2="146.277" y2="1356.39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0D9FF" stopOpacity="0.98"/>
          <stop offset="1" stopColor="#BDAEFF" stopOpacity="0.52"/>
          </linearGradient>
          <linearGradient id="paint2_linear_4975_7986" x1="1612.66" y1="-106.812" x2="1292.04" y2="1681.52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B6A5FF"/>
          <stop offset="1" stopColor="#5B48AD"/>
          </linearGradient>
          <linearGradient id="paint3_linear_4975_7986" x1="-47.315" y1="-58.6879" x2="146.277" y2="1356.39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0D9FF" stopOpacity="0.98"/>
          <stop offset="1" stopColor="#BDAEFF" stopOpacity="0.52"/>
          </linearGradient>
          <linearGradient id="paint4_linear_4975_7986" x1="498" y1="453" x2="498" y2="488" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint5_linear_4975_7986" x1="816" y1="153" x2="816" y2="188" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint6_linear_4975_7986" x1="120" y1="16" x2="120" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint7_linear_4975_7986" x1="128.5" y1="32" x2="128.5" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint8_linear_4975_7986" x1="1295.5" y1="10" x2="1295.5" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint9_linear_4975_7986" x1="1294.5" y1="25" x2="1294.5" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint10_linear_4975_7986" x1="1471" y1="32" x2="1471" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint11_linear_4975_7986" x1="1492.5" y1="16" x2="1492.5" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint12_linear_4975_7986" x1="1573.5" y1="10" x2="1573.5" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint13_linear_4975_7986" x1="1573.5" y1="20" x2="1573.5" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint14_linear_4975_7986" x1="1629" y1="16" x2="1629" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint15_linear_4975_7986" x1="1650.5" y1="32" x2="1650.5" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint16_linear_4975_7986" x1="1225.5" y1="109" x2="1225.5" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint17_linear_4975_7986" x1="1225.5" y1="232" x2="1225.5" y2="248" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint18_linear_4975_7986" x1="1225.5" y1="456" x2="1225.5" y2="472" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint19_linear_4975_7986" x1="1214.5" y1="485" x2="1214.5" y2="501" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint20_linear_4975_7986" x1="1214.5" y1="514" x2="1214.5" y2="530" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint21_linear_4975_7986" x1="1672.5" y1="514" x2="1672.5" y2="530" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint22_linear_4975_7986" x1="1672.5" y1="456" x2="1672.5" y2="472" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint23_linear_4975_7986" x1="1595.5" y1="456" x2="1595.5" y2="472" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint24_linear_4975_7986" x1="1543" y1="111" x2="1543" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint25_linear_4975_7986" x1="1652.5" y1="111" x2="1652.5" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint26_linear_4975_7986" x1="1446" y1="203" x2="1446" y2="245" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint27_linear_4975_7986" x1="1449" y1="135" x2="1449" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint28_linear_4975_7986" x1="1449" y1="258" x2="1449" y2="313" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint29_linear_4975_7986" x1="1223.5" y1="150" x2="1223.5" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint30_linear_4975_7986" x1="1223.5" y1="273" x2="1223.5" y2="299" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint31_linear_4975_7986" x1="1283.5" y1="150" x2="1283.5" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint32_linear_4975_7986" x1="1283.5" y1="273" x2="1283.5" y2="299" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint33_linear_4975_7986" x1="1664" y1="150" x2="1664" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint34_linear_4975_7986" x1="1664" y1="273" x2="1664" y2="299" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint35_linear_4975_7986" x1="1449" y1="327" x2="1449" y2="374" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint36_linear_4975_7986" x1="1250.5" y1="343" x2="1250.5" y2="359" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint37_linear_4975_7986" x1="1346.5" y1="343" x2="1346.5" y2="359" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint38_linear_4975_7986" x1="1442.5" y1="343" x2="1442.5" y2="359" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint39_linear_4975_7986" x1="1446" y1="212" x2="1446" y2="236" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint40_linear_4975_7986" x1="1640.5" y1="343" x2="1640.5" y2="359" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint41_linear_4975_7986" x1="1538.5" y1="343" x2="1538.5" y2="359" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint42_linear_4975_7986" x1="1539.5" y1="327" x2="1539.5" y2="374" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint43_linear_4975_7986" x1="1449" y1="388" x2="1449" y2="443" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint44_linear_4975_7986" x1="126" y1="77" x2="126" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint45_linear_4975_7986" x1="149.5" y1="100" x2="149.5" y2="133" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint46_linear_4975_7986" x1="1040" y1="79" x2="1040" y2="99" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint47_linear_4975_7986" x1="1449.5" y1="407" x2="1449.5" y2="427" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint48_linear_4975_7986" x1="103" y1="107" x2="103" y2="127" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint49_linear_4975_7986" x1="160.5" y1="107" x2="160.5" y2="127" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint50_linear_4975_7986" x1="1040" y1="84" x2="1040" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint51_linear_4975_7986" x1="1083" y1="84" x2="1083" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint52_linear_4975_7986" x1="1131" y1="84" x2="1131" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint53_linear_4975_7986" x1="124" y1="142" x2="124" y2="155" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint54_linear_4975_7986" x1="114" y1="163" x2="114" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint55_linear_4975_7986" x1="121" y1="582" x2="121" y2="598" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint56_linear_4975_7986" x1="110.5" y1="628" x2="110.5" y2="644" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint57_linear_4975_7986" x1="882.5" y1="628" x2="882.5" y2="644" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint58_linear_4975_7986" x1="1288.5" y1="628" x2="1288.5" y2="644" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint59_linear_4975_7986" x1="1690.5" y1="671" x2="1690.5" y2="687" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint60_linear_4975_7986" x1="1690.5" y1="738" x2="1690.5" y2="754" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint61_linear_4975_7986" x1="1690.5" y1="805" x2="1690.5" y2="821" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint62_linear_4975_7986" x1="1297.5" y1="671" x2="1297.5" y2="687" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint63_linear_4975_7986" x1="1297.5" y1="801" x2="1297.5" y2="817" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint64_linear_4975_7986" x1="1297.5" y1="738" x2="1297.5" y2="754" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint65_linear_4975_7986" x1="899.5" y1="694" x2="899.5" y2="710" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint66_linear_4975_7986" x1="899.5" y1="824" x2="899.5" y2="840" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint67_linear_4975_7986" x1="899.5" y1="738" x2="899.5" y2="754" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint68_linear_4975_7986" x1="1690.5" y1="693" x2="1690.5" y2="709" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint69_linear_4975_7986" x1="1690.5" y1="760" x2="1690.5" y2="776" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint70_linear_4975_7986" x1="1690.5" y1="827" x2="1690.5" y2="843" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint71_linear_4975_7986" x1="1297.5" y1="693" x2="1297.5" y2="709" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint72_linear_4975_7986" x1="1297.5" y1="823" x2="1297.5" y2="839" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint73_linear_4975_7986" x1="1297.5" y1="760" x2="1297.5" y2="776" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint74_linear_4975_7986" x1="882.5" y1="672" x2="882.5" y2="688" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint75_linear_4975_7986" x1="882.5" y1="802" x2="882.5" y2="818" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint76_linear_4975_7986" x1="882.5" y1="760" x2="882.5" y2="776" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint77_linear_4975_7986" x1="1681.5" y1="628" x2="1681.5" y2="644" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint78_linear_4975_7986" x1="141.5" y1="680" x2="141.5" y2="696" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint79_linear_4975_7986" x1="141.5" y1="747" x2="141.5" y2="763" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint80_linear_4975_7986" x1="141.5" y1="814" x2="141.5" y2="830" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint81_linear_4975_7986" x1="240.5" y1="582" x2="240.5" y2="598" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint82_linear_4975_7986" x1="32" y1="101" x2="32" y2="133" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint83_linear_4975_7986" x1="32" y1="149" x2="32" y2="181" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint84_linear_4975_7986" x1="32" y1="197" x2="32" y2="229" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint85_linear_4975_7986" x1="32" y1="205" x2="32" y2="221" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint86_linear_4975_7986" x1="32" y1="157" x2="32" y2="173" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint87_linear_4975_7986" x1="32" y1="109" x2="32" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint88_linear_4975_7986" x1="32" y1="245" x2="32" y2="277" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint89_linear_4975_7986" x1="32" y1="293" x2="32" y2="325" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint90_linear_4975_7986" x1="32" y1="253" x2="32" y2="269" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint91_linear_4975_7986" x1="32" y1="301" x2="32" y2="317" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint92_linear_4975_7986" x1="32" y1="349" x2="32" y2="365" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint93_linear_4975_7986" x1="32.5" y1="948" x2="32.5" y2="977" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint94_linear_4975_7986" x1="32.2408" y1="12.9351" x2="32.2408" y2="51.0004" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      </div>

    );
  };
  
  export default MangoAbstract;
  