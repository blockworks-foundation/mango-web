
import GradientText from '@/components/GradientText';
import ButtonNew from '@/components/ButtonNew';
import MangoPill from '@/components/MangoPill';
import MangoBlob from '@/components/MangoBlob';
import { 
  PhoneIcon,
  CurrencyDollarIcon,
  KeyIcon,
  PaperAirplaneIcon,

  } from '@heroicons/react/20/solid';
import GlobalAbstract from './GlobeAbstract';

const PhoneSectionOne = () => {
  return (
    <>
      <div className="z-20 max-w-7xl m-auto px-8 border-l-[4px] border-th-fgd-2 border-solid h-auto -mt-[32px]">
      <div className="w-1/3 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-3"></div>
      <p className="font-phone text-2xl mb-3 text-left">
          <span className="type-phone font-mono text-th-fgd-3"></span>
        </p>
        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] my-3"></div>

        <h2 className="font-display text-6xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
          Pay anyone, anywhere. <br  /><GradientText>Digital global payments<br  /> without borders.</GradientText>
        </h2>
        <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
          <li className="mb-2 inline-flex">
            <KeyIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"/>
              Your keys, your money, you&apos;re in control.
          </li>
          <li className="mb-2 inline-flex">
            <CurrencyDollarIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"   />
            Fiat to crypto, crypto to fiat.
          </li>
          <li className="mb-2 inline-flex">
            <PhoneIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4" />
            Pay with your number, forget wallet addresses.
          </li>
        </ul>
        <div className="group">
          <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>
            <div className="inline-flex">
                  <div className="z-20 w-[175px]">
                    <div className="-ml-8"> 
                      <ButtonNew className="opacity-50 hover:opacity-100 transition duration-150 ease-in-out ">
                        <a
                          className="group py-6 cursor-pointer"
                          rel="noreferrer"
                          target="_blank"
                          href="#"
                        >
                        <svg width="117" height="31" viewBox="0 0 117 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.541 14.4182C18.5121 10.9907 21.3657 9.32489 21.491 9.2483C19.8714 6.91229 17.3648 6.58678 16.4876 6.55806C14.3859 6.33786 12.3421 7.81223 11.272 7.81223C10.1826 7.81223 8.52446 6.58678 6.7506 6.6155C4.46578 6.6538 2.31594 7.96541 1.14943 10.0142C-1.27035 14.1788 0.532439 20.3061 2.85581 23.676C4.02232 25.3227 5.372 27.1705 7.1555 27.1035C8.8908 27.0364 9.54636 26.0025 11.6384 26.0025C13.7207 26.0025 14.3281 27.1035 16.1405 27.0652C18.0108 27.0364 19.1773 25.4089 20.3052 23.7431C21.6453 21.857 22.1851 19.9901 22.2044 19.8944C22.1562 19.8752 18.5796 18.5158 18.541 14.4182ZM15.1186 4.34651C16.0537 3.18808 16.69 1.6084 16.5165 0C15.1668 0.0574429 13.4701 0.92866 12.4964 2.06794C11.6384 3.07319 10.8671 4.71032 11.0599 6.2517C12.5831 6.36658 14.1449 5.48579 15.1186 4.34651ZM43.7221 26.8641H41.2927L39.9623 22.7091H35.3348L34.0719 26.8641H31.71L36.2893 12.7236H39.1236L43.7221 26.8641ZM39.5671 20.9666L38.362 17.2807C38.2367 16.8978 37.9956 16.017 37.6486 14.6192H37.6004C37.4558 15.2224 37.234 16.1127 36.9255 17.2807L35.7397 20.9666H39.5671ZM55.4932 21.6464C55.4932 23.3792 55.0209 24.7483 54.0664 25.7536C53.2181 26.6535 52.1576 27.0939 50.9043 27.0939C49.545 27.0939 48.5713 26.6152 47.9736 25.6482V31H45.6888V20.0188C45.6888 18.9274 45.6599 17.8169 45.602 16.668H47.6073L47.7326 18.286H47.7712C48.5328 17.0701 49.6896 16.4574 51.2321 16.4574C52.4468 16.4574 53.4494 16.9361 54.2593 17.8839C55.0883 18.8413 55.4932 20.0859 55.4932 21.6464ZM53.1699 21.723C53.1699 20.7273 52.9481 19.9135 52.495 19.2721C52.0034 18.6019 51.3382 18.2668 50.5091 18.2668C49.9499 18.2668 49.439 18.4583 48.9762 18.8221C48.5231 19.1955 48.2146 19.6742 48.0797 20.2773C48.0122 20.555 47.9736 20.7847 47.9736 20.9666V22.6708C47.9736 23.408 48.205 24.0398 48.6581 24.5473C49.1112 25.0547 49.7089 25.3132 50.4416 25.3132C51.2996 25.3132 51.9648 24.9781 52.4468 24.3271C52.9289 23.6665 53.1699 22.8048 53.1699 21.723ZM67.2933 21.6464C67.2933 23.3792 66.8209 24.7483 65.8665 25.7536C65.0181 26.6535 63.9577 27.0939 62.7044 27.0939C61.3451 27.0939 60.3714 26.6152 59.7737 25.6482V31H57.4888V20.0188C57.4888 18.9274 57.4599 17.8169 57.4021 16.668H59.4073L59.5326 18.286H59.5712C60.3328 17.0701 61.4897 16.4574 63.0322 16.4574C64.2469 16.4574 65.2495 16.9361 66.0593 17.8839C66.8884 18.8413 67.2933 20.0859 67.2933 21.6464ZM64.9699 21.723C64.9699 20.7273 64.7482 19.9135 64.2951 19.2721C63.8034 18.6019 63.1382 18.2668 62.3091 18.2668C61.75 18.2668 61.239 18.4583 60.7763 18.8221C60.3232 19.1955 60.0243 19.6742 59.8797 20.2773C59.8122 20.555 59.7737 20.7847 59.7737 20.9666V22.6708C59.7737 23.408 60.005 24.0398 60.4581 24.5473C60.9112 25.0547 61.509 25.3132 62.2416 25.3132C63.0996 25.3132 63.7745 24.9781 64.2469 24.3271C64.7385 23.6665 64.9699 22.8048 64.9699 21.723ZM80.5008 22.9006C80.5008 24.1069 80.0767 25.0834 79.2379 25.8397C78.3124 26.6631 77.0206 27.0747 75.3624 27.0747C73.8296 27.0747 72.6052 26.778 71.6797 26.1939L72.21 24.3079C73.2126 24.8919 74.3116 25.1887 75.507 25.1887C76.3651 25.1887 77.0399 24.9972 77.5123 24.6143C77.9943 24.2313 78.2353 23.7143 78.2353 23.0729C78.2353 22.4985 78.0329 22.0198 77.6472 21.6272C77.252 21.2347 76.5964 20.8709 75.6806 20.5358C73.1644 19.6072 71.9208 18.2573 71.9208 16.4861C71.9208 15.3277 72.3642 14.3799 73.2415 13.6331C74.1188 12.8959 75.2853 12.5225 76.741 12.5225C78.0329 12.5225 79.1126 12.7427 79.9706 13.1927L79.3922 15.0309C78.5824 14.6001 77.6762 14.3799 76.6543 14.3799C75.8541 14.3799 75.2178 14.5809 74.7647 14.9639C74.3887 15.3181 74.1959 15.7393 74.1959 16.2468C74.1959 16.802 74.4177 17.2712 74.8515 17.6254C75.2275 17.9605 75.9216 18.3243 76.9242 18.7168C78.1486 19.2051 79.0451 19.7795 79.6236 20.4401C80.2116 21.1007 80.5008 21.924 80.5008 22.9006ZM88.059 18.3721H85.5429V23.3218C85.5429 24.576 85.9863 25.2078 86.8733 25.2078C87.2782 25.2078 87.6156 25.1696 87.8855 25.1025L87.953 26.8258C87.4999 26.9886 86.9118 27.0747 86.1791 27.0747C85.2729 27.0747 84.5788 26.7971 84.0679 26.2514C83.5569 25.7057 83.3062 24.7866 83.3062 23.5037V18.3626H81.812V16.668H83.3062V14.8011L85.5429 14.1309V16.668H88.059V18.3721ZM99.3771 21.6847C99.3771 23.2548 98.924 24.5377 98.0274 25.5429C97.0826 26.5769 95.8293 27.0939 94.2676 27.0939C92.7636 27.0939 91.5586 26.596 90.662 25.6099C89.7654 24.6238 89.322 23.3697 89.322 21.857C89.322 20.2773 89.7847 18.9849 90.7006 17.9796C91.6261 16.9744 92.8697 16.467 94.4315 16.467C95.9354 16.467 97.1501 16.9648 98.0659 17.9605C98.9432 18.9179 99.3771 20.1624 99.3771 21.6847ZM97.0151 21.7326C97.0151 20.7943 96.8127 19.9997 96.4078 19.3295C95.9257 18.5158 95.2413 18.1137 94.3543 18.1137C93.4385 18.1137 92.7347 18.5158 92.2623 19.3295C91.8478 19.9997 91.655 20.8135 91.655 21.7804C91.655 22.7187 91.8574 23.5229 92.2623 24.1834C92.754 24.9972 93.4481 25.3993 94.335 25.3993C95.2027 25.3993 95.8872 24.9876 96.3885 24.1643C96.803 23.475 97.0151 22.6708 97.0151 21.7326ZM106.8 18.6594C106.579 18.6211 106.338 18.6019 106.077 18.6019C105.277 18.6019 104.65 18.8987 104.217 19.5019C103.841 20.0284 103.648 20.7082 103.648 21.5124V26.8641H101.363V19.8752C101.363 18.6977 101.344 17.6254 101.296 16.668H103.281L103.368 18.6211H103.436C103.677 17.9509 104.053 17.4052 104.573 17.0031C105.084 16.6393 105.634 16.4574 106.222 16.4574C106.434 16.4574 106.627 16.4765 106.791 16.4957L106.8 18.6594ZM117 21.2826C117 21.6847 116.971 22.0293 116.913 22.307H110.068C110.097 23.3122 110.425 24.0877 111.061 24.6143C111.64 25.0834 112.382 25.3227 113.298 25.3227C114.31 25.3227 115.236 25.16 116.065 24.844L116.422 26.4141C115.448 26.8354 114.301 27.046 112.98 27.046C111.389 27.046 110.136 26.5769 109.23 25.6482C108.323 24.7196 107.87 23.4654 107.87 21.9049C107.87 20.3731 108.295 19.0902 109.143 18.0658C110.03 16.9744 111.225 16.4287 112.729 16.4287C114.204 16.4287 115.332 16.9744 116.084 18.0658C116.691 18.9466 117 20.0093 117 21.2826ZM114.821 20.6986C114.841 20.0284 114.686 19.4444 114.378 18.9561C113.983 18.3243 113.375 18.0083 112.565 18.0083C111.823 18.0083 111.216 18.3147 110.753 18.9274C110.377 19.4157 110.146 20.0093 110.078 20.689L114.821 20.6986Z" fill="white"/>
                          <path d="M38.9493 7.87629H37.7458L37.0859 5.68041H34.7955L34.1646 7.87629H33L35.2613 0.391753H36.6588L38.9493 7.87629ZM36.8821 4.75258L36.29 2.79381C36.2318 2.59794 36.1154 2.12371 35.931 1.38144H35.9115C35.8339 1.70103 35.7369 2.16495 35.5719 2.79381L34.9896 4.75258H36.8821ZM44.6171 2.47423L42.6955 7.87629H41.5988L39.7354 2.47423H40.9485L41.8123 5.3299C41.9579 5.80412 42.084 6.25773 42.1811 6.69072H42.2102C42.2975 6.29897 42.4237 5.84536 42.579 5.3299L43.433 2.47423H44.6171ZM48.7127 7.87629L48.6253 7.25773H48.5962C48.2468 7.75258 47.7518 8 47.1113 8C46.199 8 45.5585 7.31959 45.5585 6.41237C45.5585 5.08247 46.6455 4.39175 48.5283 4.39175V4.28866C48.5283 3.57732 48.1692 3.2268 47.4704 3.2268C46.9657 3.2268 46.529 3.36082 46.1408 3.62887L45.9079 2.84536C46.3737 2.53608 46.9657 2.38144 47.6548 2.38144C48.9844 2.38144 49.6541 3.12371 49.6541 4.61856V6.60825C49.6541 7.15464 49.6735 7.57732 49.7317 7.89691L48.7127 7.87629ZM48.5574 5.18557C47.3054 5.18557 46.6746 5.50516 46.6746 6.27835C46.6746 6.84536 46.9948 7.12371 47.451 7.12371C48.0236 7.12371 48.5574 6.65979 48.5574 6.02062V5.18557ZM52.1677 1.58763C51.7892 1.58763 51.498 1.27835 51.498 0.865979C51.498 0.453608 51.7989 0.154639 52.1871 0.154639C52.5753 0.154639 52.8859 0.453608 52.8762 0.865979C52.8762 1.29897 52.585 1.58763 52.1677 1.58763ZM51.6242 2.47423H52.75V7.86598H51.6242V2.47423ZM54.759 0H55.8848V7.86598H54.759V0ZM60.6791 7.87629L60.5918 7.25773H60.5627C60.2133 7.75258 59.7183 8 59.0778 8C58.1655 8 57.5249 7.31959 57.5249 6.41237C57.5249 5.08247 58.6119 4.39175 60.4947 4.39175V4.28866C60.4947 3.57732 60.1356 3.2268 59.4369 3.2268C58.9322 3.2268 58.4955 3.36082 58.1073 3.62887L57.8743 2.83505C58.3402 2.52577 58.9322 2.37113 59.6213 2.37113C60.9509 2.37113 61.6205 3.1134 61.6205 4.60825V6.59794C61.6205 7.14433 61.6399 7.56701 61.6885 7.8866H60.6791V7.87629ZM60.5238 5.18557C59.2719 5.18557 58.641 5.50516 58.641 6.27835C58.641 6.84536 58.9613 7.12371 59.4174 7.12371C59.9901 7.12371 60.5238 6.65979 60.5238 6.02062V5.18557ZM66.2014 8C65.4832 8 64.9494 7.68041 64.6 7.04124H64.5806L64.5127 7.87629H63.5518C63.581 7.4433 63.5907 6.95876 63.5907 6.42268V0H64.7262V3.26804H64.7456C65.0853 2.6701 65.619 2.37113 66.3663 2.37113C67.5892 2.37113 68.4432 3.48454 68.4432 5.10309C68.4432 6.7732 67.4921 8 66.2014 8ZM65.9684 3.30928C65.3182 3.30928 64.7262 3.90722 64.7262 4.74227V5.69072C64.7262 6.43299 65.26 7.04124 65.949 7.04124C66.7934 7.04124 67.298 6.30928 67.298 5.14433C67.298 4.05155 66.774 3.30928 65.9684 3.30928ZM70.1125 0H71.2383V7.86598H70.1125V0ZM77.3817 5.46392H73.9946C74.014 6.48454 74.6545 7.06186 75.5959 7.06186C76.1006 7.06186 76.5568 6.96907 76.9644 6.80412L77.1391 7.63918C76.6635 7.86598 76.1006 7.96907 75.4407 7.96907C73.849 7.96907 72.9076 6.90722 72.9076 5.24742C72.9076 3.59794 73.8684 2.35052 75.3145 2.35052C76.6053 2.35052 77.4302 3.37113 77.4302 4.91753C77.4302 5.13402 77.4205 5.31959 77.3817 5.46392ZM76.353 4.60825C76.353 3.7732 75.955 3.18557 75.2369 3.18557C74.5866 3.18557 74.0819 3.7835 74.0043 4.60825H76.353ZM84.2238 8C82.7389 8 81.7781 6.82474 81.7781 5.2268C81.7781 3.5567 82.7584 2.37113 84.3112 2.37113C85.7767 2.37113 86.7569 3.49485 86.7569 5.13402C86.7569 6.81443 85.7475 8 84.2238 8ZM84.2724 3.24742C83.4571 3.24742 82.9331 4.06186 82.9331 5.18557C82.9331 6.29897 83.4668 7.10309 84.2627 7.10309C85.0585 7.10309 85.5923 6.23711 85.5923 5.15464C85.5826 4.06186 85.0682 3.24742 84.2724 3.24742ZM92.8226 7.87629H91.6968V4.7732C91.6968 3.81443 91.3474 3.34021 90.6681 3.34021C89.9984 3.34021 89.5423 3.94845 89.5423 4.65979V7.86598H88.4165V4.02062C88.4165 3.54639 88.4068 3.03093 88.3776 2.47423H89.3676L89.4161 3.30928H89.4452C89.7461 2.73196 90.3672 2.36082 91.0563 2.36082C92.1238 2.36082 92.8226 3.2268 92.8226 4.63917V7.87629ZM100.208 3.38144H98.966V6C98.966 6.6701 99.1892 7 99.6259 7C99.82 7 99.9947 6.97938 100.131 6.94845L100.16 7.85567C99.9365 7.94845 99.6453 7.98969 99.2862 7.98969C98.3934 7.98969 97.8693 7.46392 97.8693 6.10309V3.38144H97.1317V2.48454H97.8693V1.49485L98.9757 1.13402V2.47423H100.218V3.38144M106.187 7.87629H105.061V4.79381C105.061 3.82474 104.711 3.34021 104.032 3.34021C103.45 3.34021 102.906 3.76289 102.906 4.61856V7.86598H101.78V0H102.906V3.23711H102.926C103.285 2.64948 103.789 2.36082 104.449 2.36082C105.527 2.36082 106.187 3.24742 106.187 4.65979V7.87629ZM111.951 5.46392H108.564C108.584 6.48454 109.224 7.06186 110.166 7.06186C110.67 7.06186 111.127 6.96907 111.534 6.80412L111.709 7.63918C111.233 7.86598 110.67 7.96907 110.01 7.96907C108.419 7.96907 107.477 6.90722 107.477 5.24742C107.477 3.59794 108.438 2.35052 109.884 2.35052C111.175 2.35052 112 3.37113 112 4.91753C112 5.13402 111.99 5.31959 111.951 5.46392ZM110.923 4.60825C110.923 3.7732 110.525 3.18557 109.807 3.18557C109.156 3.18557 108.642 3.7835 108.574 4.60825H110.923Z" fill="white"/>
                        </svg>

                        </a>
                      </ButtonNew>
                      </div>
                      </div>
                        <button className="border-l-[4px] border-th-fgd-2 border-solid px-16 py-6 cursor-not-allowed opacity-50 ml-[11px]">
                          <svg width="124" height="29" viewBox="0 0 124 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.4457 3.72581C39.4457 4.62903 39.2343 5.41935 38.706 5.98387C38.072 6.66129 37.3323 7 36.3812 7C35.4302 7 34.6905 6.66129 34.0565 5.98387C33.4225 5.30645 33.1055 4.51613 33.1055 3.5C33.1055 2.48387 33.4225 1.69355 34.0565 1.01613C34.6905 0.33871 35.4302 0 36.3812 0C36.8039 0 37.2266 0.112903 37.6493 0.338709C38.072 0.564516 38.389 0.790323 38.6003 1.12903L38.072 1.69355C37.6493 1.12903 37.1209 0.903225 36.3812 0.903225C35.7472 0.903225 35.1132 1.12903 34.6905 1.69355C34.1622 2.14516 33.9508 2.82258 33.9508 3.6129C33.9508 4.40323 34.1622 5.08065 34.6905 5.53226C35.2189 5.98387 35.7472 6.32258 36.3812 6.32258C37.1209 6.32258 37.6493 6.09677 38.1776 5.53226C38.4946 5.19355 38.706 4.74194 38.706 4.17742H36.3812V3.27419H39.4457V3.72581ZM44.3065 0.903225H41.4534V3.04839H44.0952V3.83871H41.4534V5.98387H44.3065V6.8871H40.608V0.112903H44.3065V0.903225ZM47.7936 6.8871H46.9483V0.903225H45.1519V0.112903H49.59V0.903225H47.7936V6.8871ZM52.6544 6.8871V0.112903H53.4998V6.8871H52.6544ZM57.0926 6.8871H56.2472V0.903225H54.4508V0.112903H58.7833V0.903225H56.9869V6.8871H57.0926ZM67.1312 5.98387C66.4972 6.66129 65.7575 7 64.8065 7C63.8555 7 63.1158 6.66129 62.4818 5.98387C61.8477 5.30645 61.5307 4.51613 61.5307 3.5C61.5307 2.48387 61.8477 1.69355 62.4818 1.01613C63.1158 0.33871 63.8555 0 64.8065 0C65.7575 0 66.4972 0.33871 67.1312 1.01613C67.7653 1.69355 68.0823 2.48387 68.0823 3.5C68.0823 4.51613 67.7653 5.30645 67.1312 5.98387ZM63.1158 5.41935C63.5385 5.87097 64.1725 6.20968 64.8065 6.20968C65.4405 6.20968 66.0745 5.98387 66.4972 5.41935C66.9199 4.96774 67.2369 4.29032 67.2369 3.5C67.2369 2.70968 67.0256 2.03226 66.4972 1.58065C66.0745 1.12903 65.4405 0.790322 64.8065 0.790322C64.1725 0.790322 63.5385 1.01613 63.1158 1.58065C62.6931 2.03226 62.3761 2.70968 62.3761 3.5C62.3761 4.29032 62.5874 4.96774 63.1158 5.41935ZM69.2446 6.8871V0.112903H70.1957L73.2601 5.41935V0.112903H74.1055V6.8871H73.2601L69.9843 1.35484V6.8871H69.2446Z" fill="white"/>
                            <path d="M61.8289 16.0059C59.2757 16.0059 57.2544 17.9231 57.2544 20.5858C57.2544 23.142 59.2757 25.1657 61.8289 25.1657C64.3821 25.1657 66.4033 23.2485 66.4033 20.5858C66.4033 17.8166 64.3821 16.0059 61.8289 16.0059ZM61.8289 23.2485C60.4459 23.2485 59.2757 22.0769 59.2757 20.4793C59.2757 18.8817 60.4459 17.7101 61.8289 17.7101C63.2119 17.7101 64.3821 18.7751 64.3821 20.4793C64.3821 22.0769 63.2119 23.2485 61.8289 23.2485ZM51.9353 16.0059C49.3821 16.0059 47.3608 17.9231 47.3608 20.5858C47.3608 23.142 49.3821 25.1657 51.9353 25.1657C54.4884 25.1657 56.5097 23.2485 56.5097 20.5858C56.5097 17.8166 54.4884 16.0059 51.9353 16.0059ZM51.9353 23.2485C50.5523 23.2485 49.3821 22.0769 49.3821 20.4793C49.3821 18.8817 50.5523 17.7101 51.9353 17.7101C53.3182 17.7101 54.4884 18.7751 54.4884 20.4793C54.4884 22.0769 53.3182 23.2485 51.9353 23.2485ZM40.1267 17.3905V19.3077H44.7012C44.5948 20.3728 44.1693 21.2249 43.6374 21.7574C42.9991 22.3965 41.9353 23.142 40.1267 23.142C37.2544 23.142 35.1267 20.9053 35.1267 18.0296C35.1267 15.1538 37.3608 12.9172 40.1267 12.9172C41.6161 12.9172 42.7863 13.5562 43.6374 14.3018L45.0204 12.9172C43.8502 11.8521 42.3608 11 40.2331 11C36.4033 11 33.1055 14.1953 33.1055 18.0296C33.1055 21.8639 36.4033 25.0592 40.2331 25.0592C42.3608 25.0592 43.8502 24.4201 45.1267 23.0355C46.4033 21.7574 46.8289 19.9467 46.8289 18.5621C46.8289 18.1361 46.8289 17.7101 46.7225 17.3905H40.1267ZM88.4246 18.8817C87.9991 17.8166 86.9353 16.0059 84.5948 16.0059C82.2544 16.0059 80.3395 17.8166 80.3395 20.5858C80.3395 23.142 82.2544 25.1657 84.8076 25.1657C86.8289 25.1657 88.1055 23.8876 88.531 23.142L87.0416 22.0769C86.5097 22.8225 85.8714 23.355 84.8076 23.355C83.7438 23.355 83.1055 22.929 82.5736 21.9704L88.6374 19.4142L88.4246 18.8817ZM82.2544 20.3728C82.2544 18.6686 83.6374 17.7101 84.5948 17.7101C85.3395 17.7101 86.0842 18.1361 86.297 18.6686L82.2544 20.3728ZM77.2544 24.7396H79.2757V11.426H77.2544V24.7396ZM74.0629 16.9645C73.531 16.432 72.6799 15.8994 71.6161 15.8994C69.3821 15.8994 67.2544 17.9231 67.2544 20.4793C67.2544 23.0355 69.2757 24.9527 71.6161 24.9527C72.6799 24.9527 73.531 24.4201 73.9565 23.8876H74.0629V24.5266C74.0629 26.2308 73.1055 27.1893 71.6161 27.1893C70.4459 27.1893 69.5948 26.3373 69.3821 25.5917L67.6799 26.3373C68.2119 27.5089 69.4885 29 71.7225 29C74.0629 29 75.9778 27.6154 75.9778 24.3136V16.2189H74.0629V16.9645ZM71.7225 23.2485C70.3395 23.2485 69.1693 22.0769 69.1693 20.4793C69.1693 18.8817 70.3395 17.7101 71.7225 17.7101C73.1055 17.7101 74.1693 18.8817 74.1693 20.4793C74.1693 22.0769 73.1055 23.2485 71.7225 23.2485ZM97.6799 11.426H92.8927V24.7396H94.914V19.7337H97.6799C99.914 19.7337 102.042 18.1361 102.042 15.5799C102.042 13.0237 99.914 11.426 97.6799 11.426ZM97.7863 17.8166H94.914V13.2367H97.7863C99.2757 13.2367 100.127 14.5148 100.127 15.4734C100.02 16.645 99.1693 17.8166 97.7863 17.8166ZM110.02 15.8994C108.531 15.8994 107.042 16.5385 106.51 17.9231L108.318 18.6686C108.744 17.9231 109.382 17.7101 110.127 17.7101C111.191 17.7101 112.148 18.3491 112.254 19.4142V19.5207C111.935 19.3077 111.084 18.9882 110.233 18.9882C108.318 18.9882 106.403 20.0533 106.403 21.9704C106.403 23.7811 107.999 24.9527 109.701 24.9527C111.084 24.9527 111.722 24.3136 112.254 23.6746H112.361V24.7396H114.276V19.6272C114.063 17.284 112.254 15.8994 110.02 15.8994ZM109.808 23.2485C109.169 23.2485 108.212 22.929 108.212 22.0769C108.212 21.0118 109.382 20.6923 110.34 20.6923C111.191 20.6923 111.616 20.9053 112.148 21.1183C111.935 22.3964 110.871 23.2485 109.808 23.2485ZM120.978 16.2189L118.744 21.9704H118.637L116.297 16.2189H114.169L117.68 24.3136L115.659 28.787H117.68L123.105 16.2189H120.978ZM103.105 24.7396H105.127V11.426H103.105V24.7396Z" fill="white"/>
                            <path d="M0.424741 0.84375C0.106185 1.16231 0 1.69323 0 2.33034V25.7973C0 26.4344 0.212371 26.9653 0.530926 27.2839L0.637112 27.3901L13.8041 14.2231V14.0107L0.424741 0.84375Z" fill="url(#paint0_linear_5020_8801)"/>
                            <path d="M18.0528 18.682L13.6992 14.3284V14.0098L18.0528 9.65625L18.159 9.76243L23.3621 12.7356C24.8487 13.5851 24.8487 14.9655 23.3621 15.815L18.0528 18.682Z" fill="url(#paint1_linear_5020_8801)"/>
                            <path d="M18.1587 18.577L13.6989 14.1172L0.425781 27.3903C0.956708 27.9213 1.70001 27.9213 2.65567 27.4965L18.1587 18.577Z" fill="url(#paint2_linear_5020_8801)"/>
                            <path d="M18.1587 9.65853L2.65567 0.845152C1.70001 0.314225 0.956708 0.420411 0.425781 0.951337L13.6989 14.1183L18.1587 9.65853Z" fill="url(#paint3_linear_5020_8801)"/>
                            <path opacity="0.2" d="M18.0525 18.4688L2.65567 27.1759C1.80619 27.7069 1.06289 27.6007 0.531967 27.1759L0.425781 27.2821L0.531967 27.3883C1.06289 27.8131 1.80619 27.9192 2.65567 27.3883L18.0525 18.4688Z" fill="black"/>
                            <path opacity="0.12" d="M0.424741 27.178C0.106185 26.8594 0 26.3285 0 25.6914V25.7976C0 26.4347 0.212371 26.9656 0.530926 27.2842V27.178H0.424741ZM23.3608 15.4976L18.0515 18.4708L18.1577 18.577L23.3608 15.6038C24.1041 15.179 24.4226 14.6481 24.4226 14.1172C24.4226 14.6481 23.9979 15.0729 23.3608 15.4976Z" fill="black"/>
                            <path opacity="0.25" d="M2.65463 0.949567L23.3608 12.7361C23.9979 13.1609 24.4226 13.5856 24.4226 14.1165C24.4226 13.5856 24.1041 13.0547 23.3608 12.63L2.65463 0.843382C1.16804 -0.0061006 0 0.631011 0 2.32998V2.43616C0 0.843382 1.16804 0.100085 2.65463 0.949567Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_5020_8801" x1="12.5299" y1="2.12859" x2="-5.29121" y2="19.9486" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00A0FF"/>
                            <stop offset="0.007" stopColor="#00A1FF"/>
                            <stop offset="0.26" stopColor="#00BEFF"/>
                            <stop offset="0.512" stopColor="#00D2FF"/>
                            <stop offset="0.76" stopColor="#00DFFF"/>
                            <stop offset="1" stopColor="#00E3FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_5020_8801" x1="25.3095" y1="14.1171" x2="-0.384138" y2="14.1171" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE000"/>
                            <stop offset="0.409" stopColor="#FFBD00"/>
                            <stop offset="0.775" stopColor="#FFA500"/>
                            <stop offset="1" stopColor="#FF9C00"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_5020_8801" x1="15.7451" y1="16.5552" x2="-8.42051" y2="40.7209" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF3A44"/>
                            <stop offset="1" stopColor="#C31162"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_5020_8801" x1="-2.86915" y1="-6.93186" x2="7.92246" y2="3.85975" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#32A071"/>
                            <stop offset="0.069" stopColor="#2DA771"/>
                            <stop offset="0.476" stopColor="#15CF74"/>
                            <stop offset="0.801" stopColor="#06E775"/>
                            <stop offset="1" stopColor="#00F076"/>
                            </linearGradient>
                            </defs>
                          </svg>
                        </button>
                        <div className="z-10 transform -translate-y-[37px] -translate-x-[80px]"><MangoPill>SOON</MangoPill></div>
                      </div>
                      <div className="w-1/3 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] -mt-[6px]"></div>
                      <div className="tranform translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-100 ease-in-out">
                        <p className="w-[220px] group animate-pulse ml-1 mt-5 flex flex-row text-sm font-mono text-th-fgd-4 group-hover:text-opacity-100 transition duration-150 ease-in-out">
                          Join the testflight! <PaperAirplaneIcon className="w-4 h-4 m-1 rotate-0 group-hover:-rotate-45 transistion delay-100 duration-150 text-mango-yellow" />
                        </p>
                      </div>
        </div>

      </div>
        <div className="z-10 transform -translate-y-[750px] translate-x-[600px]">
        <MangoBlob />
       </div> 
     <div className="flex flex-col z-0 reletive transform translate-x-[700px] -translate-y-[666px]">
      <div className="h-0 z-10 transform translate-x-[300px] translate-y-[50px]">
          <GlobalAbstract />
       </div>
       <div className="z-0 h-0">
         <img
           className="w-auto h-[900px]"
           src={`/assets/images/phonelights.svg`}          
           alt="iphone"
           />
       </div>
     </div>        
    </>
  );
};

export default PhoneSectionOne;
