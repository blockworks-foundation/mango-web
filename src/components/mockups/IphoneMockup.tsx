import React from 'react';

function IphoneMockup(props: any) {
  return (
    <div>
                    {/* PHone in CSS */}
                    <div className="-mt-24 m-auto rounded-[50px] w-450 shadow-[0_8px_42px_-5px_rgba(0,0,0,0.35)]">
                            <span className="h-[30px] w-1 absolute bg-th-fgd-3 mt-[150px] rounded-l-full -ml-1"></span>
                            <span className="transform translate-y-56 translate-x-[450px] h-[110px] w-1 absolute bg-th-fgd-3 rounded-r-full"></span>
                            <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[200px] rounded-l-full -ml-1"></span>
                            <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[300px] rounded-l-full -ml-1"></span>

                            <div className="bg-th-fgd-1 bg-opacity-0 h-900 w-450 rounded-[50px] backdrop-blur-xl border-[5px] border-solid border-th-bkg-4 border-opacity-10">           
                                <div className="h-901 border-[5px] border-solid border-th-bkg-3 rounded-[46px]">
                                    <div className="flex items-center flex-col">
                                        <ul className="absolute">
                                            <li className="bg-black bg-opacity-80 h-[30px] w-[130px] rounded-full mt-6"></li>
                                        </ul>
                                    </div>
                                     <img 
                                        className="z-0 reletive w-full h-full rounded-[41px]"
                                        src={props.src} />
                                    <div className="flex items-center flex-col">
                                        <ul className="absolute">
                                            <li className="bg-white bg-opacity-80 h-[6px] w-[125px] rounded-full -mt-6 animate-bounce"></li>
                                        </ul>
                                    </div>   
                                </div>
                                </div> 
                        </div>

    </div>
  );
}

export default IphoneMockup;