import React from 'react';

function IphoneMockup(props: any) {
  return (
    <div>
                    {/* PHone in CSS */}
                    <div className="mt-[25px] m-auto rounded-[50px] w-[310px] shadow-[0_8px_42px_-5px_rgba(0,0,0,0.35)]">
                            <span className="h-[30px] w-1 absolute bg-th-fgd-2 mt-[120px] rounded-l-full -ml-1"></span>
                            <span className="transform translate-y-[150px] translate-x-[310px] h-[80px] w-1 absolute bg-th-fgd-2 rounded-r-full"></span>
                            <span className="h-[60px] w-1 absolute bg-th-fgd-3 mt-[160px] rounded-l-full -ml-1"></span>
                            <span className="h-[60px] w-1 absolute bg-th-fgd-3 mt-[230px] rounded-l-full -ml-1"></span>

                            <div className="bg-th-fgd-1 bg-opacity-0 h-[620px] w-[310px] rounded-[50px] backdrop-blur-xl border-[5px] border-solid border-th-bkg-4 border-opacity-10">           
                                <div className="h-[611px] border-[5px] border-solid border-th-bkg-3 rounded-[46px]">
                                    <div className="flex items-center flex-col">
                                        <ul className="absolute">
                                            <li className="bg-black bg-opacity-80 h-[20px] w-[90px] rounded-full mt-3"></li>
                                        </ul>
                                    </div>
                                     <img 
                                        className="z-0 reletive w-full h-full rounded-[41px]"
                                        src={props.src} />
                                    <div className="flex items-center flex-col">
                                        <ul className="absolute">
                                            <li className="bg-white bg-opacity-80 h-[4px] w-[66px] rounded-full -mt-6 animate-bounce"></li>
                                        </ul>
                                    </div>   
                                </div>
                                </div> 
                        </div>

    </div>
  );
}

export default IphoneMockup;