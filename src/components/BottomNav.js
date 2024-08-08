import React from "react";

const BottomNav = () => {
  return (
    <nav className="fixed h-16 bottom-0 w-full bg-gray-100 border-t-2 z-50 grid items-center">
      <div className="w-full sm:w-[400px] mx-auto">
        <div className="grid grid-cols-5">
          <a href="/">
            <div className="flex items-center justify-center flex-col text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-home text-red-700"
              >
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
              </svg>
              <div className="text-red-700 font-bold">Home</div>
            </div>
          </a>
          <a href="/blog">
            <div className="flex items-center justify-center flex-col text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-news text-gray-400"
              >
                <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
                <path d="M8 8l4 0"></path>
                <path d="M8 12l4 0"></path>
                <path d="M8 16l4 0"></path>
              </svg>
              <div className="text-gray-400">Blog</div>
            </div>
          </a>
          <a href="/bantuan">
            <div className="flex items-center justify-center flex-col text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-help text-gray-400"
              >
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 17l0 .01"></path>
                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
              </svg>
              <div className="text-gray-400">Bantuan</div>
            </div>
          </a>
          <a href="/bus-tracking">
            <div className="flex items-center justify-center flex-col text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-location text-gray-400"
              >
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
              </svg>
              <div className="text-gray-400">Tracking</div>
            </div>
          </a>
          <a href="/akun">
            <div className="flex items-center justify-center flex-col text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-user text-gray-400"
              >
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              <div className="text-gray-400">Akun</div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
