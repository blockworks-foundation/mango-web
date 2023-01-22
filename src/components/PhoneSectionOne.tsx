
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
import Image from 'next/image';

const PhoneSectionOne = () => {
  return (
    <>
      <div className="z-20 max-w-7xl m-auto px-8 border-l-[4px] border-th-fgd-2 border-solid h-auto -mt-[32px]">
        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] my-3"></div>

        <h2 className="font-display text-6xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
          Pay, request, &amp; discover. <br  /><GradientText>Crypto payements for<br  /> the digital nomad.</GradientText>
        </h2>
        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-8"></div>

        <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
        <li className="group mb-2 inline-flex text-th-fgd-3 hover:text-th-fgd-4 transition-all duration-100 ease-in-out cursor-default">
            <KeyIcon className="bg-th-fgd-1 group-hover:bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] group-hover:text-mango-yellow mr-3 mb-4"/>
              Your keys, your money, you&apos;re in control.
          </li>
          <li className="group mb-2 inline-flex text-th-fgd-3 hover:text-th-fgd-4 transition-all duration-100 ease-in-out cursor-default">
            <CurrencyDollarIcon className="bg-th-fgd-1 group-hover:bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] group-hover:text-mango-yellow mr-3 mb-4"   />
            Fiat to crypto, crypto to fiat.
          </li>
          <li className="group mb-2 inline-flex text-th-fgd-3 hover:text-th-fgd-4 transition-all duration-100 ease-in-out cursor-default">
            <PhoneIcon className="bg-th-fgd-1 group-hover:bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] group-hover:text-mango-yellow mr-3 mb-4" />
            Pay with your number, forget wallet addresses.
          </li>
        </ul>
        <div className="group">
          <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>
            <div className="inline-flex">
                  <div className="z-20 w-[160px] ">
                    <div className="-ml-8"> 
                      <ButtonNew className="opacity-50 hover:opacity-100 transition duration-150 ease-in-out -ml-4">
                        <a
                          className="group py-6 cursor-pointer"
                          rel="noreferrer"
                          target="_blank"
                          href="#"
                        >
                          <svg width="147" height="50" viewBox="0 0 187 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.5555 22.9834C29.5094 17.5199 34.0582 14.8644 34.258 14.7424C31.6762 11.0186 27.6806 10.4997 26.2822 10.4539C22.932 10.1029 19.6741 12.4532 17.9683 12.4532C16.2317 12.4532 13.5885 10.4997 10.7609 10.5455C7.11873 10.6066 3.69175 12.6973 1.83227 15.9632C-2.02501 22.6019 0.848739 32.3691 4.55234 37.741C6.41182 40.366 8.56329 43.3114 11.4063 43.2045C14.1725 43.0977 15.2175 41.4495 18.5522 41.4495C21.8716 41.4495 22.8398 43.2045 25.7289 43.1435C28.7102 43.0977 30.5697 40.5033 32.3677 37.8479C34.5038 34.8414 35.3644 31.8654 35.3952 31.7128C35.3183 31.6823 29.6169 29.5152 29.5555 22.9834ZM24.1 6.9286C25.5906 5.08199 26.6049 2.56389 26.3283 0C24.1768 0.0915674 21.4721 1.48034 19.92 3.29643C18.5522 4.89886 17.3228 7.50853 17.6302 9.96558C20.0583 10.1487 22.5478 8.74468 24.1 6.9286ZM69.6957 42.823H65.8231L63.7023 36.1996H56.3259L54.3127 42.823H50.5476L57.8473 20.2822H62.3653L69.6957 42.823ZM63.0723 33.4221L61.1513 27.5465C60.9515 26.9361 60.5673 25.532 60.0141 23.3039H59.9373C59.7067 24.2654 59.3533 25.6847 58.8615 27.5465L56.9713 33.4221H63.0723ZM88.4596 34.5056C88.4596 37.2679 87.7066 39.4503 86.1852 41.0527C84.8328 42.4873 83.1424 43.1893 81.1446 43.1893C78.9777 43.1893 77.4256 42.4262 76.4728 40.8848V49.4159H72.8307V31.9112C72.8307 30.1715 72.7846 28.4012 72.6924 26.5698H75.8889L76.0886 29.149H76.1501C77.3641 27.2108 79.2083 26.2341 81.6671 26.2341C83.6034 26.2341 85.2016 26.9971 86.4925 28.508C87.8141 30.0341 88.4596 32.0181 88.4596 34.5056ZM84.756 34.6277C84.756 33.0406 84.4025 31.7434 83.6802 30.7209C82.8965 29.6526 81.8361 29.1184 80.5145 29.1184C79.6232 29.1184 78.8087 29.4237 78.0711 30.0036C77.3488 30.5988 76.857 31.3618 76.6419 32.3233C76.5343 32.7659 76.4728 33.1321 76.4728 33.4221V36.1386C76.4728 37.3137 76.8416 38.321 77.5639 39.1298C78.2862 39.9386 79.239 40.3507 80.4069 40.3507C81.7747 40.3507 82.835 39.8166 83.6034 38.7788C84.3718 37.7258 84.756 36.3523 84.756 34.6277ZM107.27 34.5056C107.27 37.2679 106.517 39.4503 104.995 41.0527C103.643 42.4873 101.952 43.1893 99.9546 43.1893C97.7877 43.1893 96.2356 42.4262 95.2828 40.8848V49.4159H91.6407V31.9112C91.6407 30.1715 91.5946 28.4012 91.5024 26.5698H94.6988L94.8986 29.149H94.9601C96.1741 27.2108 98.0182 26.2341 100.477 26.2341C102.413 26.2341 104.012 26.9971 105.302 28.508C106.624 30.0341 107.27 32.0181 107.27 34.5056ZM103.566 34.6277C103.566 33.0406 103.212 31.7434 102.49 30.7209C101.706 29.6526 100.646 29.1184 99.3245 29.1184C98.4332 29.1184 97.6187 29.4237 96.881 30.0036C96.1588 30.5988 95.6824 31.3618 95.4518 32.3233C95.3443 32.7659 95.2828 33.1321 95.2828 33.4221V36.1386C95.2828 37.3137 95.6516 38.321 96.3739 39.1298C97.0962 39.9386 98.049 40.3507 99.2169 40.3507C100.585 40.3507 101.66 39.8166 102.413 38.7788C103.197 37.7258 103.566 36.3523 103.566 34.6277ZM128.323 36.5049C128.323 38.4278 127.647 39.9844 126.31 41.1901C124.835 42.5025 122.775 43.1588 120.132 43.1588C117.689 43.1588 115.737 42.6857 114.262 41.7547L115.107 38.7483C116.705 39.6792 118.457 40.1523 120.363 40.1523C121.73 40.1523 122.806 39.8471 123.559 39.2366C124.328 38.6262 124.712 37.8021 124.712 36.7796C124.712 35.8639 124.389 35.1008 123.774 34.4751C123.144 33.8494 122.099 33.2695 120.639 32.7353C116.628 31.255 114.646 29.1032 114.646 26.2798C114.646 24.4332 115.353 22.9224 116.751 21.732C118.15 20.5569 120.009 19.9617 122.33 19.9617C124.389 19.9617 126.11 20.3127 127.478 21.03L126.556 23.9601C125.265 23.2734 123.82 22.9224 122.192 22.9224C120.916 22.9224 119.902 23.2429 119.179 23.8533C118.58 24.418 118.273 25.0895 118.273 25.8983C118.273 26.7835 118.626 27.5313 119.318 28.0959C119.917 28.6301 121.024 29.21 122.622 29.8357C124.573 30.614 126.003 31.5297 126.925 32.5827C127.862 33.6358 128.323 34.9482 128.323 36.5049ZM140.371 29.2863H136.36V37.1764C136.36 39.1756 137.067 40.1828 138.481 40.1828C139.127 40.1828 139.664 40.1218 140.095 40.015L140.202 42.762C139.48 43.0214 138.543 43.1588 137.375 43.1588C135.93 43.1588 134.824 42.7162 134.009 41.8463C133.195 40.9764 132.795 39.5113 132.795 37.4663V29.271H130.413V26.5698H132.795V23.5939L136.36 22.5256V26.5698H140.371V29.2863ZM158.413 34.5667C158.413 37.0695 157.691 39.1145 156.262 40.717C154.756 42.3652 152.758 43.1893 150.268 43.1893C147.871 43.1893 145.95 42.3957 144.521 40.8238C143.091 39.2519 142.385 37.2527 142.385 34.8414C142.385 32.3233 143.122 30.263 144.582 28.6606C146.057 27.0582 148.04 26.2493 150.529 26.2493C152.927 26.2493 154.863 27.0429 156.323 28.6301C157.721 30.1562 158.413 32.1402 158.413 34.5667ZM154.648 34.643C154.648 33.1474 154.325 31.8807 153.68 30.8124C152.911 29.5152 151.82 28.8743 150.406 28.8743C148.947 28.8743 147.825 29.5152 147.072 30.8124C146.411 31.8807 146.104 33.1779 146.104 34.7193C146.104 36.2149 146.426 37.4968 147.072 38.5499C147.855 39.8471 148.962 40.488 150.376 40.488C151.759 40.488 152.85 39.8318 153.649 38.5193C154.31 37.4205 154.648 36.1386 154.648 34.643ZM170.246 29.7441C169.893 29.6831 169.508 29.6526 169.094 29.6526C167.818 29.6526 166.819 30.1257 166.128 31.0871C165.528 31.9265 165.221 33.01 165.221 34.292V42.823H161.579V31.6823C161.579 29.8052 161.548 28.0959 161.471 26.5698H164.637L164.775 29.6831H164.883C165.267 28.6148 165.866 27.7449 166.696 27.1039C167.511 26.524 168.387 26.2341 169.324 26.2341C169.662 26.2341 169.969 26.2646 170.231 26.2951L170.246 29.7441ZM186.505 33.9257C186.505 34.5667 186.459 35.1161 186.367 35.5587H175.456C175.502 37.1611 176.024 38.3973 177.039 39.2366C177.961 39.9844 179.144 40.366 180.604 40.366C182.217 40.366 183.693 40.1065 185.014 39.6029L185.583 42.1057C184.031 42.7772 182.202 43.113 180.097 43.113C177.561 43.113 175.563 42.3652 174.119 40.8848C172.674 39.4045 171.952 37.4053 171.952 34.9177C171.952 32.4759 172.628 30.4309 173.98 28.7979C175.394 27.0582 177.3 26.1883 179.697 26.1883C182.048 26.1883 183.846 27.0582 185.045 28.7979C186.013 30.202 186.505 31.896 186.505 33.9257ZM183.032 32.9948C183.063 31.9265 182.817 30.9956 182.325 30.2172C181.695 29.21 180.727 28.7064 179.436 28.7064C178.253 28.7064 177.284 29.1947 176.547 30.1715C175.947 30.9498 175.579 31.896 175.471 32.9795L183.032 32.9948Z" fill="white"/>
                          <path d="M62.0889 12.5553H60.1706L59.1186 9.05492H55.4675L54.4619 12.5553H52.6055L56.2101 0.624478H58.4379L62.0889 12.5553ZM58.7937 7.57589L57.85 4.45351C57.7572 4.14127 57.5715 3.38532 57.2776 2.2021H57.2467C57.1229 2.71155 56.9682 3.45106 56.7052 4.45351L55.7769 7.57589H58.7937ZM71.1238 3.94407L68.0606 12.5553H66.3124L63.3421 3.94407H65.2759L66.6528 8.49617C66.8848 9.25212 67.086 9.9752 67.2407 10.6654H67.2871C67.4263 10.0409 67.6274 9.31785 67.875 8.49617L69.2364 3.94407H71.1238ZM77.6524 12.5553L77.5131 11.5693H77.4667C76.9098 12.3581 76.1208 12.7525 75.0997 12.7525C73.6455 12.7525 72.6244 11.6679 72.6244 10.2217C72.6244 8.10177 74.3571 7.00072 77.3584 7.00072V6.83638C77.3584 5.70246 76.786 5.14372 75.6721 5.14372C74.8677 5.14372 74.1715 5.35736 73.5527 5.78463L73.1814 4.53568C73.924 4.04267 74.8677 3.79616 75.9661 3.79616C78.0856 3.79616 79.153 4.97938 79.153 7.36226V10.5339C79.153 11.4049 79.184 12.0787 79.2768 12.5881L77.6524 12.5553ZM77.4049 8.2661C75.4091 8.2661 74.4035 8.77555 74.4035 10.0081C74.4035 10.9119 74.9141 11.3556 75.6412 11.3556C76.554 11.3556 77.4049 10.6161 77.4049 9.59723V8.2661ZM83.1599 2.53078C82.5566 2.53078 82.0924 2.03777 82.0924 1.38042C82.0924 0.723079 82.572 0.246504 83.1909 0.246504C83.8097 0.246504 84.3047 0.723079 84.2893 1.38042C84.2893 2.07063 83.8252 2.53078 83.1599 2.53078ZM82.2936 3.94407H84.0882V12.5388H82.2936V3.94407ZM87.2906 0H89.0852V12.5388H87.2906V0ZM96.7276 12.5553L96.5884 11.5693H96.542C95.9851 12.3581 95.1961 12.7525 94.175 12.7525C92.7208 12.7525 91.6997 11.6679 91.6997 10.2217C91.6997 8.10177 93.4324 7.00072 96.4337 7.00072V6.83638C96.4337 5.70246 95.8613 5.14372 94.7474 5.14372C93.9429 5.14372 93.2468 5.35736 92.6279 5.78463L92.2566 4.51924C92.9992 4.02623 93.9429 3.77973 95.0413 3.77973C97.1608 3.77973 98.2283 4.96295 98.2283 7.34582V10.5175C98.2283 11.3885 98.2592 12.0623 98.3366 12.5717H96.7276V12.5553ZM96.4801 8.2661C94.4844 8.2661 93.4788 8.77555 93.4788 10.0081C93.4788 10.9119 93.9893 11.3556 94.7165 11.3556C95.6292 11.3556 96.4801 10.6161 96.4801 9.59723V8.2661ZM105.53 12.7525C104.386 12.7525 103.535 12.243 102.978 11.2242H102.947L102.839 12.5553H101.307C101.353 11.8651 101.369 11.0927 101.369 10.2381V0H103.179V5.20945H103.21C103.751 4.2563 104.602 3.77973 105.793 3.77973C107.743 3.77973 109.104 5.55456 109.104 8.13464C109.104 10.7969 107.588 12.7525 105.53 12.7525ZM105.159 5.27519C104.123 5.27519 103.179 6.22834 103.179 7.55946V9.07135C103.179 10.2546 104.03 11.2242 105.128 11.2242C106.474 11.2242 107.279 10.0574 107.279 8.20037C107.279 6.45841 106.443 5.27519 105.159 5.27519ZM111.765 0H113.56V12.5388H111.765V0ZM123.353 8.70981H117.953C117.984 10.3367 119.005 11.257 120.506 11.257C121.31 11.257 122.038 11.1091 122.687 10.8462L122.966 12.1773C122.208 12.5388 121.31 12.7032 120.258 12.7032C117.721 12.7032 116.221 11.0105 116.221 8.36471C116.221 5.73533 117.752 3.74686 120.057 3.74686C122.115 3.74686 123.43 5.37379 123.43 7.83883C123.43 8.18394 123.414 8.47974 123.353 8.70981ZM121.713 7.34582C121.713 6.0147 121.078 5.07798 119.934 5.07798C118.897 5.07798 118.093 6.03113 117.969 7.34582H121.713ZM134.259 12.7525C131.892 12.7525 130.361 10.879 130.361 8.33184C130.361 5.66959 131.923 3.77973 134.399 3.77973C136.735 3.77973 138.297 5.57099 138.297 8.18394C138.297 10.8626 136.688 12.7525 134.259 12.7525ZM134.337 5.17659C133.037 5.17659 132.202 6.47484 132.202 8.2661C132.202 10.0409 133.053 11.3228 134.321 11.3228C135.59 11.3228 136.441 9.94233 136.441 8.2168C136.425 6.47484 135.605 5.17659 134.337 5.17659ZM147.966 12.5553H146.172V7.60876C146.172 6.08044 145.615 5.32449 144.532 5.32449C143.464 5.32449 142.737 6.29407 142.737 7.42799V12.5388H140.943V6.40911C140.943 5.65316 140.927 4.83148 140.881 3.94407H142.459L142.536 5.27519H142.583C143.062 4.35491 144.052 3.7633 145.151 3.7633C146.852 3.7633 147.966 5.14372 147.966 7.39512V12.5553ZM159.739 5.39022H157.759V9.56436C157.759 10.6325 158.115 11.1584 158.811 11.1584C159.121 11.1584 159.399 11.1256 159.616 11.0763L159.662 12.5224C159.306 12.6703 158.842 12.736 158.27 12.736C156.846 12.736 156.011 11.8979 156.011 9.72869V5.39022H154.835V3.9605H156.011V2.38287L157.775 1.8077V3.94407H159.755V5.39022M169.269 12.5553H167.475V7.64163C167.475 6.09687 166.918 5.32449 165.835 5.32449C164.907 5.32449 164.04 5.99827 164.04 7.36226V12.5388H162.246V0H164.04V5.16015H164.071C164.644 4.22344 165.448 3.7633 166.5 3.7633C168.217 3.7633 169.269 5.17659 169.269 7.42799V12.5553ZM178.459 8.70981H173.06C173.091 10.3367 174.112 11.257 175.612 11.257C176.417 11.257 177.144 11.1091 177.794 10.8462L178.072 12.1773C177.314 12.5388 176.417 12.7032 175.365 12.7032C172.828 12.7032 171.327 11.0105 171.327 8.36471C171.327 5.73533 172.859 3.74686 175.164 3.74686C177.221 3.74686 178.536 5.37379 178.536 7.83883C178.536 8.18394 178.521 8.47974 178.459 8.70981ZM176.819 7.34582C176.819 6.0147 176.185 5.07798 175.04 5.07798C174.003 5.07798 173.183 6.03113 173.075 7.34582H176.819Z" fill="white"/>
                          </svg>


                        </a>
                      </ButtonNew>
                      </div>
                      </div>
                        <button className="px-16 py-6 cursor-not-allowed opacity-50">


                        <svg width="157" height="47" viewBox="0 0 197 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.6379 6.53291C63.6379 7.97271 63.301 9.23253 62.4588 10.1324C61.4481 11.2122 60.269 11.7522 58.753 11.7522C57.237 11.7522 56.0579 11.2122 55.0472 10.1324C54.0366 9.05255 53.5312 7.79273 53.5312 6.17296C53.5312 4.55319 54.0366 3.29337 55.0472 2.21352C56.0579 1.13367 57.237 0.59375 58.753 0.59375C59.4268 0.59375 60.1006 0.773724 60.7744 1.13367C61.4481 1.49362 61.9535 1.85357 62.2904 2.3935L61.4481 3.29337C60.7744 2.39349 59.9321 2.03355 58.753 2.03355C57.7424 2.03355 56.7317 2.39349 56.0579 3.29337C55.2157 4.01327 54.8788 5.09311 54.8788 6.35294C54.8788 7.61276 55.2157 8.6926 56.0579 9.4125C56.9001 10.1324 57.7424 10.6723 58.753 10.6723C59.9321 10.6723 60.7744 10.3124 61.6166 9.4125C62.1219 8.87258 62.4588 8.15268 62.4588 7.25281H58.753V5.81301H63.6379V6.53291ZM71.3864 2.03355H66.8384V5.45306H71.0495V6.71288H66.8384V10.1324H71.3864V11.5722H65.4908V0.773724H71.3864V2.03355ZM76.945 11.5722H75.5975V2.03355H72.7339V0.773724H79.8086V2.03355H76.945V11.5722ZM84.6935 11.5722V0.773724H86.041V11.5722H84.6935ZM91.7681 11.5722H90.4206V2.03355H87.557V0.773724H94.4633V2.03355H91.5997V11.5722H91.7681ZM107.77 10.1324C106.76 11.2122 105.581 11.7522 104.065 11.7522C102.549 11.7522 101.369 11.2122 100.359 10.1324C99.3481 9.05255 98.8428 7.79273 98.8428 6.17296C98.8428 4.55319 99.3481 3.29337 100.359 2.21352C101.369 1.13367 102.549 0.59375 104.065 0.59375C105.581 0.59375 106.76 1.13367 107.77 2.21352C108.781 3.29337 109.286 4.55319 109.286 6.17296C109.286 7.79273 108.781 9.05255 107.77 10.1324ZM101.369 9.23253C102.043 9.95243 103.054 10.4923 104.065 10.4923C105.075 10.4923 106.086 10.1324 106.76 9.23253C107.433 8.51263 107.939 7.43278 107.939 6.17296C107.939 4.91314 107.602 3.83329 106.76 3.11339C106.086 2.3935 105.075 1.85357 104.065 1.85357C103.054 1.85357 102.043 2.21352 101.369 3.11339C100.696 3.83329 100.19 4.91314 100.19 6.17296C100.19 7.43278 100.527 8.51263 101.369 9.23253ZM111.139 11.5722V0.773724H112.655L117.54 9.23253V0.773724H118.888V11.5722H117.54L112.318 2.75344V11.5722H111.139Z" fill="white"/>
                            <path d="M99.3181 26.1077C95.2481 26.1077 92.0261 29.1637 92.0261 33.4083C92.0261 37.483 95.2481 40.7089 99.3181 40.7089C103.388 40.7089 106.61 37.6528 106.61 33.4083C106.61 28.9939 103.388 26.1077 99.3181 26.1077ZM99.3181 37.6528C97.1135 37.6528 95.2481 35.7852 95.2481 33.2385C95.2481 30.6918 97.1135 28.8242 99.3181 28.8242C101.523 28.8242 103.388 30.522 103.388 33.2385C103.388 35.7852 101.523 37.6528 99.3181 37.6528ZM83.5471 26.1077C79.4771 26.1077 76.2551 29.1637 76.2551 33.4083C76.2551 37.483 79.4771 40.7089 83.5471 40.7089C87.617 40.7089 90.839 37.6528 90.839 33.4083C90.839 28.9939 87.617 26.1077 83.5471 26.1077ZM83.5471 37.6528C81.3425 37.6528 79.4771 35.7852 79.4771 33.2385C79.4771 30.6918 81.3425 28.8242 83.5471 28.8242C85.7516 28.8242 87.617 30.522 87.617 33.2385C87.617 35.7852 85.7516 37.6528 83.5471 37.6528ZM64.7236 28.3148V31.3709H72.0156C71.846 33.0687 71.1677 34.427 70.3198 35.2759C69.3023 36.2946 67.6065 37.483 64.7236 37.483C60.1449 37.483 56.7533 33.9176 56.7533 29.3335C56.7533 24.7494 60.3145 21.184 64.7236 21.184C67.0977 21.184 68.9631 22.2027 70.3198 23.3912L72.5243 21.184C70.6589 19.4862 68.2848 18.1279 64.8932 18.1279C58.7883 18.1279 53.5312 23.2214 53.5312 29.3335C53.5312 35.4456 58.7883 40.5391 64.8932 40.5391C68.2848 40.5391 70.6589 39.5204 72.6939 37.3132C74.7289 35.2759 75.4072 32.3896 75.4072 30.1824C75.4072 29.5033 75.4072 28.8242 75.2376 28.3148H64.7236ZM141.713 30.6918C141.035 28.9939 139.339 26.1077 135.608 26.1077C131.878 26.1077 128.825 28.9939 128.825 33.4083C128.825 37.483 131.878 40.7089 135.948 40.7089C139.17 40.7089 141.205 38.6715 141.883 37.483L139.509 35.7852C138.661 36.9737 137.643 37.8226 135.948 37.8226C134.252 37.8226 133.234 37.1435 132.386 35.6154L142.052 31.5407L141.713 30.6918ZM131.878 33.0687C131.878 30.3522 134.082 28.8242 135.608 28.8242C136.795 28.8242 137.983 29.5033 138.322 30.3522L131.878 33.0687ZM123.907 40.0297H127.129V18.8071H123.907V40.0297ZM118.82 27.6357C117.972 26.7868 116.615 25.9379 114.92 25.9379C111.358 25.9379 107.967 29.1637 107.967 33.2385C107.967 37.3132 111.189 40.3693 114.92 40.3693C116.615 40.3693 117.972 39.5204 118.65 38.6715H118.82V39.6902C118.82 42.4067 117.294 43.9347 114.92 43.9347C113.054 43.9347 111.697 42.5765 111.358 41.388L108.645 42.5765C109.493 44.4441 111.528 46.821 115.089 46.821C118.82 46.821 121.872 44.6139 121.872 39.3506V26.4472H118.82V27.6357ZM115.089 37.6528C112.885 37.6528 111.019 35.7852 111.019 33.2385C111.019 30.6918 112.885 28.8242 115.089 28.8242C117.294 28.8242 118.989 30.6918 118.989 33.2385C118.989 35.7852 117.294 37.6528 115.089 37.6528ZM156.467 18.8071H148.836V40.0297H152.058V32.05H156.467C160.028 32.05 163.42 29.5033 163.42 25.4285C163.42 21.3538 160.028 18.8071 156.467 18.8071ZM156.636 28.9939H152.058V21.6933H156.636C159.011 21.6933 160.367 23.7307 160.367 25.2588C160.198 27.1264 158.841 28.9939 156.636 28.9939ZM176.138 25.9379C173.764 25.9379 171.39 26.9566 170.542 29.1637L173.425 30.3522C174.103 29.1637 175.121 28.8242 176.308 28.8242C178.004 28.8242 179.53 29.8429 179.699 31.5407V31.7105C179.191 31.3709 177.834 30.8615 176.477 30.8615C173.425 30.8615 170.372 32.5594 170.372 35.6154C170.372 38.5017 172.916 40.3693 175.629 40.3693C177.834 40.3693 178.852 39.3506 179.699 38.3319H179.869V40.0297H182.921V31.8802C182.582 28.145 179.699 25.9379 176.138 25.9379ZM175.799 37.6528C174.782 37.6528 173.255 37.1435 173.255 35.7852C173.255 34.0874 175.121 33.5781 176.647 33.5781C178.004 33.5781 178.682 33.9176 179.53 34.2572C179.191 36.2946 177.495 37.6528 175.799 37.6528ZM193.605 26.4472L190.044 35.6154H189.874L186.143 26.4472H182.752L188.348 39.3506L185.126 46.4814H188.348L196.997 26.4472H193.605ZM165.115 40.0297H168.338V18.8071H165.115V40.0297Z" fill="white"/>
                            <path d="M1.43878 1.94043C0.930984 2.44823 0.761719 3.29455 0.761719 4.31015V41.7179C0.761719 42.7335 1.10025 43.5798 1.60805 44.0876L1.77731 44.2569L22.7663 23.2679V22.9294L1.43878 1.94043Z" fill="url(#paint0_linear_5020_8801)"/>
                            <path d="M29.5376 30.3768L22.5977 23.437V22.9292L29.5376 15.9893L29.7068 16.1585L38.0008 20.898C40.3706 22.2521 40.3706 24.4525 38.0008 25.8067L29.5376 30.3768Z" fill="url(#paint1_linear_5020_8801)"/>
                            <path d="M29.7088 30.2058L22.5996 23.0967L1.44141 44.2549C2.28773 45.1012 3.4726 45.1012 4.99599 44.4242L29.7088 30.2058Z" fill="url(#paint2_linear_5020_8801)"/>
                            <path d="M29.7088 15.9902L4.99599 1.94119C3.4726 1.09486 2.28773 1.26412 1.44141 2.11045L22.5996 23.0994L29.7088 15.9902Z" fill="url(#paint3_linear_5020_8801)"/>
                            <path opacity="0.2" d="M29.5395 30.0381L4.99599 43.9179C3.64186 44.7642 2.457 44.5949 1.61067 43.9179L1.44141 44.0871L1.61067 44.2564C2.457 44.9335 3.64186 45.1027 4.99599 44.2564L29.5395 30.0381Z" fill="black"/>
                            <path opacity="0.12" d="M1.43878 43.9164C0.930984 43.4086 0.761719 42.5622 0.761719 41.5466V41.7159C0.761719 42.7315 1.10025 43.5778 1.60805 44.0856V43.9164H1.43878ZM38.0002 25.2971L29.5369 30.0366L29.7062 30.2058L38.0002 25.4664C39.185 24.7893 39.6928 23.943 39.6928 23.0967C39.6928 23.943 39.0158 24.6201 38.0002 25.2971Z" fill="black"/>
                            <path opacity="0.25" d="M4.99336 2.10825L38.0002 20.8967C39.0158 21.5738 39.6928 22.2509 39.6928 23.0972C39.6928 22.2509 39.185 21.4045 38.0002 20.7275L4.99336 1.93898C2.62364 0.584856 0.761719 1.60045 0.761719 4.3087V4.47797C0.761719 1.93898 2.62364 0.754122 4.99336 2.10825Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_5020_8801" x1="20.7351" y1="3.98854" x2="-7.6728" y2="32.3947" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00A0FF"/>
                            <stop offset="0.007" stopColor="#00A1FF"/>
                            <stop offset="0.26" stopColor="#00BEFF"/>
                            <stop offset="0.512" stopColor="#00D2FF"/>
                            <stop offset="0.76" stopColor="#00DFFF"/>
                            <stop offset="1" stopColor="#00E3FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_5020_8801" x1="41.1052" y1="23.1001" x2="0.147941" y2="23.1001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE000"/>
                            <stop offset="0.409" stopColor="#FFBD00"/>
                            <stop offset="0.775" stopColor="#FFA500"/>
                            <stop offset="1" stopColor="#FF9C00"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_5020_8801" x1="25.8614" y1="26.983" x2="-12.6601" y2="65.5045" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF3A44"/>
                            <stop offset="1" stopColor="#C31162"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_5020_8801" x1="-3.81091" y1="-10.4558" x2="13.3916" y2="6.74664" gradientUnits="userSpaceOnUse">
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
                        <p className="w-[220px] group animate-pulse -ml-[20px] mt-2 flex flex-row text-sm font-mono text-th-fgd-4 group-hover:text-opacity-100 transition duration-150 ease-in-out">
                          Join the testflight! <PaperAirplaneIcon className="w-4 h-4 m-1 rotate-0 group-hover:-rotate-45 transistion delay-100 duration-150 text-mango-yellow" />
                        </p>
                      </div>
        </div>

      </div>
        <div className="z-0 transform -translate-y-[750px] translate-x-[600px]">
        <MangoBlob />
       </div> 
     <div className="flex flex-col z-0 reletive transform translate-x-[700px] -translate-y-[666px]">
      <div className="h-0 z-10 transform translate-x-[300px] translate-y-[50px]">
        <div className="absolute transform translate-x-[38px]">
          <GlobalAbstract />
        </div>

          <Image
            src="/assets/images/globe-mango.svg"
            alt="Github"
            width={450}
            height={450}
            loading="lazy"
          />

       </div>
       <div className="z-0 h-0">
           <Image
            src="/assets/images/phonelights.svg"
            alt="Github"
            width={900}
            height={900}
            loading="lazy"
          />

       </div>
     </div>        
    </>
  );
};

export default PhoneSectionOne;
