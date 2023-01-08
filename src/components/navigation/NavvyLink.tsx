
import React from 'react';

function NavvyLink(props: any) {
  return (
    <button className="text-left hover:text-mango-yellow text-th-fgd-2 group rounded-xl transition duration-150 ease-in-out hover:bg-th-fgd-2 hover:backdrop-blur-xl hover:bg-opacity-5 p-3 hover:shadow-xl">
    <a
      href={props.url}
      className="inline-flex"
    >
      <div className="h-12 w-12 p-0 m-0">
        {props.icon}
      </div>
      <div className="ml-2">
        <p className="text-base font-medium text-th-fgd-5">
            {props.name}
          <span
            className="text-th-fgd-5 opacity-0 transition duration-150 ease-in group-hover:opacity-50 ml-2"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </p>
        <p className=" text-sm text-th-fgd-5 opacity-40 transition duration-75 ease-in group-hover:opacity-80">
            {props.description}
        </p>
      </div>
    </a>
    </button>
  );
}

export default NavvyLink;
