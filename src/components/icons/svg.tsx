import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const SearchGlassSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export const HalfArrowDownSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const LatestIconSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      baseProfile="full"
      enableBackground="new 0 0 76.00 76.00"
      xmlSpace="preserve"
      fill="currentColor"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill="currentColor"
          fillOpacity={1}
          strokeWidth="0.2"
          strokeLinejoin="round"
          d="M 44.4832,15.8147L 38.0245,32.9939L 37.8017,32.9939L 31.6771,15.8147L 21.7662,21.578L 33.4588,35.6539L 33.4588,35.8755L 16.087,32.3289L 16.087,43.523L 33.5702,40.4197L 33.6815,40.6414L 21.7662,54.4955L 31.343,60.148L 37.6904,43.0797L 37.9131,43.0797L 44.3718,60.148L 54.1713,54.4955L 42.1447,40.7522L 42.1447,40.5305L 60.0713,43.523L 60.0713,32.3289L 42.256,35.8755L 42.256,35.6539L 54.1713,21.4672L 44.4832,15.8147 Z "
        />{" "}
      </g>
    </svg>
  );
};

export const TrendingIconSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      fill="currentColor"
      width="64px"
      height="64px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M244.002 56.005V120a12 12 0 01-24 0V84.97l-75.514 75.515a12 12 0 01-16.97 0l-31.516-31.514-63.514 63.514a12 12 0 01-16.97-16.97l72-72a12 12 0 0116.97 0l31.514 31.514L203.032 68h-35.03a12 12 0 010-24h63.996c.397 0 .795.02 1.191.06.167.016.33.048.494.071.223.032.446.058.667.102.192.038.378.091.567.138.19.048.383.09.573.148.185.056.364.126.545.19.188.067.378.13.563.206.169.07.33.153.494.23.191.09.384.174.57.274.156.084.303.179.455.269.185.11.372.215.552.335.164.11.319.234.478.352.155.115.313.223.464.347.284.234.556.481.818.74.019.018.04.034.059.053s.034.04.053.059c.259.262.507.534.74.819.12.146.225.3.337.45.122.163.248.322.361.492.12.177.222.36.33.542.092.155.19.306.274.464.1.184.183.374.271.562.079.167.162.331.233.503.076.183.138.37.204.556.066.183.136.364.193.551.057.189.099.38.146.57.048.19.1.376.14.57.043.22.07.443.101.665.024.166.055.328.071.496q.06.594.06 1.191z" />
    </svg>
  );
};
export const PostSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#a)"
        stroke="#292929"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 4v14a2 2 0 002 2h14a2 2 0 002-2V8h-4" />
        <path d="M3 4h14v14a2 2 0 002 2v0M13 8H7M13 12H9" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ChevronLeftSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export const ChevronRightSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export const VerifiedSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#f4d402"
      strokeWidth="0.00024000000000000003"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z"
          fill="#f4d402"
        ></path>{" "}
      </g>
    </svg>
  );
};
export const DiscordSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 -28.5 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
            fill="#ffff"
            fillRule="nonzero"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const TwitterXSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 512"
      {...props}
    >
      <g clipPath="url(#clip0_84_15698)">
        <rect width="512" height="512" fill="none" rx="60"></rect>
        <path
          fill="currentColor"
          d="M355.904 100h52.928L293.2 232.16 429.232 412H322.72l-83.424-109.072L143.84 412H90.88l123.68-141.36L84.065 100H193.28l75.408 99.696L355.904 100zm-18.576 280.32h29.328L177.344 130.016h-31.472L337.328 380.32z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_84_15698">
          <path fill="#fff" d="M0 0H512V512H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const PlusFilledSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 32 32"
    >
      <path d="M15.5 29.5c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm6.438-13.562a1 1 0 00-1-1h-4v-4a1 1 0 00-1-1h-1a1 1 0 00-1 1v4h-4a1 1 0 00-1 1v1a1 1 0 001 1h4v4a1 1 0 001 1h1a1 1 0 001-1v-4h4a1 1 0 001-1v-1z"></path>
    </svg>
  );
};

export const TickFilledSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
    >
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5.676 8.237l-6 5.5a1 1 0 01-1.383-.03l-3-3a1 1 0 111.414-1.414l2.323 2.323 5.294-4.853a1 1 0 111.352 1.474z"></path>
    </svg>
  );
};

export const TagsFilledSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
      />
    </svg>
  );
};
export const TriagleFilledSvg: React.FC<IconProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
      <g>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="currentColor" transform="translate(32 42.667)">
            <path d="M246.313 5.629a42.667 42.667 0 0115.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.667 42.667 0 01-21.169 5.622H42.667C19.103 404.677 0 385.574 0 362.01a42.667 42.667 0 015.622-21.169L188.099 21.505C199.79 1.046 225.854-6.062 246.313 5.63z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
export const HamburgerMenuSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export const SearchSvg: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const CrossSvg: React.FC<IconProps> = (props) => {
  return (
     <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            {...props}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
      />
      </svg>
  );
};

