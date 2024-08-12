import { useEffect, useState } from "react";
const SplashScreen = ({ setHasVisited }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Start the timer for the splash screen
    const timer = setTimeout(() => {
      setActive(true); // Activate the animation
      setTimeout(() => {
        setHasVisited(); // Mark the splash screen as completed after animation
      }, 7500); // Adjust this timeout to match your animation duration
    }, 3000); //

    return () => clearTimeout(timer);
  }, [setHasVisited]);
  return (
    <div className="bg-red-700 w-full min-h-screen flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="468"
        height="174"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 668 374"
        className={active ? "active" : ""}
      >
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M301.437 47.75l3.372-.078c3.559.366 5.354 1.187 8.191 3.328l2 3 2.812.313c4.432.955 5.654 3.027 8.188 6.687 2.356 3.962 2.225 7.458 1.617 11.91-.948 3.212-2.802 4.442-5.617 6.09-6.775 3.388-16.435.626-23.435-.933-11.986-2.642-11.986-2.642-23.43.618-2.769 1.811-5.418 3.739-8.035 5.762-3.73 2.758-7.78 4.979-11.788 7.303-37.758 22.565-74.498 47.323-110.32 72.835a1560.722 1560.722 0 01-6.176 4.36C124.003 179.361 109.288 189.871 95 201c-2.164 1.67-4.332 3.335-6.5 5l-3.219 2.477c-2.27 1.746-4.54 3.49-6.812 5.234l-1.76 1.352-4.834 3.71A595.612 595.612 0 0064 225c4.401-.405 8.803-.812 13.204-1.22 3.873-.358 7.746-.714 11.62-1.068 9.605-.883 19.202-1.803 28.789-2.868C209.436 209.754 209.436 209.754 243 231c3 2.5 3 2.5 5 5l2.312 2.688c2.598 5.098 2.717 9.977 1.028 15.453-4.577 10.065-13.67 18.06-23.461 22.91-2.826.99-4.514 1.089-7.317.012-2.377-3.139-2.083-5.22-1.562-9.063 1.875-3.437 1.875-3.437 4-6h2c.122-2.341.122-2.341-1-5-7.944-6.928-19.468-9.618-29.438-12.062l-2.849-.737c-15.991-3.979-31.636-5.734-48.088-5.576l-2.625.013a357.517 357.517 0 00-44.929 3.089c-6.62.872-13.244 1.714-19.867 2.56-1.752.224-3.503.45-5.254.678-10.873 1.415-21.648 2.647-32.635 2.582-5.326.044-7.93 1.183-12.315 4.453-2.875-.25-2.875-.25-5-1l-1-5-2.25-.25c-3.425-.934-4.647-1.895-6.75-4.75-1.507-4.521-1.16-7.378.875-11.562C14.906 224.506 18.779 221.444 24 219c4.95-.874 7.637.772 12 3 2.42.488 2.42.488 5 0 2.488-1.814 2.488-1.814 4.8-4.348l2.714-2.775 2.799-2.939C57.35 205.695 63.353 199.595 70 194c1.083-.938 2.165-1.876 3.246-2.816 13.561-11.693 27.291-23.116 41.737-33.704 1.994-1.463 3.98-2.938 5.966-4.414C141.253 138.094 162.497 124.183 184 111l2.787-1.711c15.188-9.293 30.615-18.06 46.217-26.632a726.992 726.992 0 008.183-4.598l2.281-1.3c1.35-.77 2.697-1.545 4.042-2.323C251.781 72 251.781 72 254 72v-2l-2.246-.148c-6.142-.436-12.184-1.035-18.285-1.868-10.821-1.346-21.64-1.38-32.532-1.359l-3.146.002c-15.28.037-29.924.52-44.791 4.373l-2.635.65c-13.795 3.472-30.478 8.376-40.178 19.412-1.559 3.858-1.279 7.156-1.179 11.274-.01 3.316-.43 5.733-2.008 8.664-2.699 1.678-4.339 2.033-7.5 1.875-4.285-1.5-6.785-3.688-9.121-7.566-2.999-7.195-2.473-16.294.059-23.622C96.93 67.948 110.349 60.213 124 55c37.181-12.16 82.568-7.046 120.562-2l3.89.512c5.18.696 10.327 1.395 15.443 2.472 9.662 1.934 15.509-.187 23.777-5.066 4.732-2.727 8.328-3.093 13.765-3.168zM302 63h10l1-5c-3.716 0-8.015 3.01-11 5z"
          className="svg-elem-1-1"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M499.625 69.563C505.554 72.564 512.551 76.54 515 83c.488 5.955-.159 9.74-3 15-3 2-3 2-6.5 1.813-4.64-1.078-4.64-1.078-6.5-3.813v-2c-7.129-.38-12.133-.346-17.774 4.534-5.69 5.431-9.593 11.383-13.538 18.153l-1.838 3.088c-1.123 1.888-2.24 3.779-3.351 5.673A820.723 820.723 0 01458 133l3.991-.048c4.881-.054 9.762-.088 14.643-.117 2.114-.015 4.227-.035 6.341-.061 3.036-.037 6.071-.054 9.107-.067l2.87-.047 2.668-.001 2.349-.02c2.566.456 3.461 1.319 5.031 3.361.063 1.937.063 1.937-1 4-4.764 3.773-9.25 5.128-15.125 6.437l-2.723.691c-5.462 1.316-10.575 1.998-16.195 2.142-7.463.371-14.423.829-20.957 4.73-6.488 7.595-9.889 17.17-13.414 26.407-2.747 7.201-6.14 13.916-9.773 20.718l-1.725 3.302c-5.333 10.184-10.971 20.19-16.703 30.154a554.731 554.731 0 00-3.623 6.431c-13.66 24.445-31.262 51.447-59.684 59.535-7.751 1.69-14.297.43-21.078-3.547-6.2-4.293-10.269-9.817-12.375-17.063-.754-4.747-.951-8.703 1.563-12.937 1.812-1 1.812-1 4.761-.926 3.051.926 3.051.926 4.59 3.508l1.086 3.23c1.496 4.355 2.678 7.325 6.375 10.188 7.228 2.303 14.395-.502 21-3.563 16.543-8.769 26.198-24.569 35-40.437l1.108-1.974C400.601 211.068 411.947 183.149 424 156l-3.184-.332c-18.028-1.988-18.028-1.988-24.378-6.481-1.998-3.04-2.082-4.609-1.438-8.187 2.568-3.709 4.765-6.388 9-8 2.793-.211 2.793-.211 5.973-.16l3.474.033 3.616.064c2.365.035 4.731.065 7.097.09l3.176.055c2.769.042 2.769.042 5.664-1.082 1.068-1.602 1.068-1.602 1.875-3.621l1.029-2.308 1.096-2.509c9.543-20.904 22.472-44.286 44-54.562 6.055-2.018 12.707-1.876 18.625.563z"
          className="svg-elem-1-2"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M558 131c3.202 2.715 5.523 4.707 6 9l3.562.125c4.97.61 8.315 3.01 11.438 6.875.844 1.887.844 1.887 1 4-3.492 8.884-9.823 16.907-15.189 24.734-15.661 20.64-15.661 20.64-21.561 44.453L544 223c11.491-1.359 19.547-9.966 27.25-17.938l2.562-2.591c6.649-6.768 12.891-13.799 18.875-21.159l2.2-2.699a186.142 186.142 0 004.191-5.386C601 171 601 171 604.062 170.062 607 170 607 170 610 172c0 8.784-3.561 13.342-9 20l-2.145 2.723c-5.206 6.52-10.736 12.73-16.461 18.795a506.31 506.31 0 00-4.046 4.369c-8.32 8.759-19.773 18.847-32.348 20.113-8.167-.337-14.728-3.551-20.313-9.438-2.644-5.582-3.593-11.51-4.687-17.562l-1.574 1.977-2.114 2.648-2.074 2.602L513 221l-2.27 2.977c-3.057 3.651-6.791 6.149-10.73 8.773l-2.117 1.457c-7.034 4.764-12.335 6.597-20.883 5.793-7.195-1.413-13.892-4.85-18.352-10.805-4.227-7.087-4.677-14.3-3-22.281 3.561-12.57 9.799-23.123 18.352-32.914l2.016-2.348A308.166 308.166 0 01483 164l1.523-1.626C500.466 145.492 532.961 116.762 558 131zm-47.09 37.484c-2.59 2.239-5.229 4.388-7.91 6.516-1.773 1.52-1.773 1.52-3 3v2l-3 1v2h-2c-9.833 10.522-18.447 22.388-20.117 36.992.14 2.409.919 3.937 2.117 6.008 6.732.732 11.397-1.307 17-5 3.692-3.034 7.149-6.243 10.558-9.589a288.253 288.253 0 014.04-3.856c11.097-10.658 19.827-23.396 28.882-35.77a783.485 783.485 0 017.008-9.414l1.667-2.204a1224.65 1224.65 0 013.114-4.092c2.207-2.914 4.279-5.706 5.731-9.075-17.578-1.75-31.603 10.617-44.09 21.484z"
          className="svg-elem-1-3"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M361 132c2.227 2.352 4 4.637 4 8l3.563.125c4.969.61 8.314 3.01 11.437 6.875 1.028 2.552 1.136 3.642.15 6.245-5.197 9.117-11.026 17.793-16.904 26.48C350.427 198.031 350.427 198.031 344 219c.909 2.194.909 2.194 2 4 7.36-1.827 12.318-5.063 18-10l2.543-2.176c4.542-3.979 8.736-8.062 12.625-12.679 2.146-2.512 4.394-4.914 6.645-7.333 4.254-4.637 8.105-9.471 11.788-14.573 2.165-2.93 3.871-5.095 7.399-6.239 4.526.526 4.526.526 6 2 1.116 9.117-4.868 14.965-10.125 21.75a246.879 246.879 0 01-15.367 17.67 450.023 450.023 0 00-3.145 3.332C372.385 225.405 360.48 237.239 345 238c-7.225-1.376-13.138-3.892-18.187-9.375-3.201-5.142-3.753-11.765-4.813-17.625l-1.766 2.492c-8.579 11.806-19.851 24.149-34.859 27.008-8.281.414-15.495-2.666-21.812-7.875-4.137-3.894-6.48-8.044-7.563-13.625-.454-23.053 14.545-40.964 29.578-56.797C302.053 145.166 335.845 115.196 361 132zm-57 44l-1.697 1.619c-17.497 16.403-17.497 16.403-25.436 38.108l.008 2.898-.008 2.914c-.031 2.466-.031 2.466 1.133 4.461 8.243.896 14.185-2.686 20.508-7.723C304.916 212.982 310.76 207.463 316 201l3.887-4.473c5.156-5.975 9.84-12.171 14.363-18.632 3.846-5.486 7.856-10.851 11.841-16.235 6.184-6.948 6.184-6.948 9.909-14.66-20.571-2.56-38.419 15.813-52 29z"
          className="svg-elem-1-4"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M552.375 286.687c3.944 2.291 6.777 4.658 8.212 9.152 1.474 6.259 1.714 12.248 1.663 18.661l.023 2.973c-.02 7.491-.338 14.453-4.398 20.902-4.447 4.061-8.93 5.721-14.937 6-6.376-.607-11.34-2.908-15.938-7.375-1.762-3.597-2.272-6.512-2.25-10.5l-.016-2.781c.567-5.799 2.951-8.918 7.266-12.719 5.931-3.826 13.222-3.121 20-3-.255-1.628-.53-3.252-.812-4.875l-.458-2.742c-.561-2.727-.561-2.727-3.73-4.383-2.806-.428-5.123-.228-8 0-1.994 2.991-2.894 5.609-4 9-1 1-1 1-4.5 1.125C527 306 527 306 526 305c-.595-4.633-.449-8.118 1.688-12.313 6.614-7.687 15.159-10.433 24.687-6zM536.75 319.5c-2.127 3.038-2.429 4.942-2.156 8.594.344 2.094.344 2.094 1.844 4.406 3.821 2.237 7.256 2.511 11.562 1.5 2.928-2.714 3.881-4.646 4.23-8.625A93.522 93.522 0 00552 318c-7.833-.554-7.833-.554-15.25 1.5z"
          className="svg-elem-1-5"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M643.75 286.187c4.455 2.485 7.611 4.896 9.25 9.813.187 3.562.187 3.562 0 7-2 2-2 2-5 2.25-3-.25-3-.25-5-2.25-.4-2.323-.74-4.657-1-7-1.625-.027-3.25-.046-4.875-.063l-2.742-.035c-2.4-.065-2.4-.065-4.383 1.098-1.041 2.43-1.019 3.889-.563 6.5 2.347 3.754 5.59 4.777 9.563 6.5 11.405 5.019 11.405 5.019 14 11 1.522 6.475 1.442 11.263-2 17-4.454 4.454-9.173 6.055-15.375 6.375-4.892-.124-8.636-1.568-12.625-4.375-4.821-5.192-5.218-8.142-5-15 1-1 1-1 4.437-1.188C626 324 626 324 628 326a254.008 254.008 0 012 6c1.579 1.579 3.194 1.208 5.375 1.25l2.398.078c2.738-.403 3.574-1.15 5.227-3.328.667-2.457.667-2.457 0-5-3.4-3.166-6.669-4.841-11-6.438-6.018-2.422-9.28-4.892-12.813-10.375-1.693-4.545-2.135-8.547-.496-13.113 5.043-9.853 15.127-12.032 25.059-8.887z"
          className="svg-elem-1-6"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M601.277 287.813c4.954 3.415 6.14 7.131 7.317 12.732.626 3.785.692 7.493.672 11.322l.005 2.429a842.03 842.03 0 01-.01 5.026c-.011 2.568 0 5.134.013 7.701-.002 1.636-.004 3.271-.008 4.907l.012 2.32c-.034 3.786-.126 5.522-2.278 8.75-3.079.257-5.211.394-8-1l-.06-3.592c-.076-4.408-.165-8.816-.257-13.223-.039-1.906-.073-3.812-.105-5.718a1613.26 1613.26 0 00-.164-8.229l-.035-2.573c-.106-4.266-.261-7.84-2.379-11.665-2.525-1.262-4.312-1.099-7.125-1.062l-2.758.027L584 296c-.905 2.717-1.137 4.366-1.174 7.164l-.04 2.528-.032 2.718-.1 5.686c-.047 2.991-.092 5.982-.131 8.974a1785.59 1785.59 0 01-.144 8.653l-.026 2.724-.05 2.518-.031 2.22C582 341 582 341 580 343c-5.333.333-5.333.333-8-1-.099-6.12-.172-12.239-.22-18.359a865.23 865.23 0 00-.082-6.239 870.05 870.05 0 01-.089-8.996l-.062-2.791c-.002-5.99.93-10.664 4.453-15.615 7.549-6.134 16.777-7.054 25.277-2.187z"
          className="svg-elem-1-7"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M469 272.812c3 .188 3 .188 5 1.188v12l5.875-.125c3.305-.07 3.305-.07 6.125.125 2 2 2 2 2.313 5l-.313 3c-3.421 2.281-4.682 2.219-8.687 2.125l-3.012-.055L474 296c.094 4.627.2 9.253.317 13.879.039 1.574.073 3.147.105 4.72.046 2.264.104 4.528.164 6.792l.035 2.124c.108 3.593.241 6.509 2.379 9.485 2.385.665 2.385.665 5.063.688 4.869.244 4.869.244 5.937 1.312.188 2.938.188 2.938 0 6-2.744 2.744-4.422 2.331-8.25 2.375-4.071-.081-6.582-.305-10.375-1.875-6.305-6.636-5.806-14.846-5.738-23.461l-.002-3.718c.003-2.58.012-5.16.029-7.74.024-3.964.02-7.926.014-11.89.005-2.509.012-5.018.021-7.527l-.003-3.605.029-3.318.014-2.928c.421-3.731 1.619-4.273 5.261-4.501z"
          className="svg-elem-1-8"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          d="M512.563 285.812l3.503-.042C519 286 519 286 521 288c.125 3.125.125 3.125 0 6-3.878 1.825-6.761 2-11 2-3.141 1.587-3.141 1.587-3.385 3.859l-.016 2.284-.04 2.588v2.8l-.04 2.87c-.041 3.033-.063 6.066-.081 9.099-.024 3.033-.052 6.066-.092 9.099-.025 1.89-.039 3.78-.044 5.67l-.031 2.588-.013 2.284C506 341 506 341 504 343c-3 .25-3 .25-6 0-2.388-2.388-2.255-2.903-2.275-6.155l-.028-2.601.002-2.818-.013-2.901c-.005-2.03-.006-4.06-.002-6.09.004-3.093-.02-6.184-.045-9.277-.003-1.973-.003-3.946-.002-5.92l-.028-2.788c.04-5.584.732-9.509 3.391-14.45 4.146-3.887 8.038-4.157 13.563-4.188z"
          className="svg-elem-1-9"
        ></path>
      </svg>
    </div>
  );
};

export default SplashScreen;
