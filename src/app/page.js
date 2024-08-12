"use client";

import ZafaSlides from "@/components/ZafaSlides";
import { Skeleton } from "antd";
import React, { useState } from "react";
import BookingForm from "@/components/Booking";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <main className="gap-5 flex flex-col">
      <title>Home | Zafa Trans Clone Website</title>
      <Skeleton active loading={loading}>
        <ZafaSlides />
      </Skeleton>
      <BookingForm />
      <img
        src="https://zafatrans.co.id/images/ig/ig-2.png"
        alt="banner-1"
        className="rounded-md"
      />
      {/* section 1*/}
      <h2 className="font-bold text-xl text-red-700">Kenapa memilih kami</h2>
      <div className="overflow-x-scroll">
        <div className="w-[1200px] pb-2">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-3 bg-white h-full rounded-md shadow-md">
              <div className="font-bold text-red-700">Layanan Terbaik</div>
              <p className="col-span-2">
                Kami menyediakan layanan bus akap dengan kualitas terbaik untuk
                memastikan kepuasan pelanggan.
              </p>
            </div>
            <div className="p-3 bg-white h-full rounded-md shadow-md">
              <div className="font-bold text-red-700">Armada Modern</div>
              <p className="col-span-2">
                Armada bus kami terdiri dari kendaraan-kendaraan modern yang
                terawat dengan baik, memberikan kenyamanan selama perjalanan.
              </p>
            </div>
            <div className="p-3 bg-white h-full rounded-md shadow-md">
              <div className="font-bold text-red-700">Sopir Profesional</div>
              <p className="col-span-2">
                Sopir kami adalah para profesional yang terlatih, menjaga
                keamanan dan memberikan pengalaman perjalanan yang aman.
              </p>
            </div>
            <div className="p-3 bg-white h-full rounded-md shadow-md">
              <div className="font-bold text-red-700">Rute Luas</div>
              <p className="col-span-2">
                Kami memiliki jaringan rute yang luas, mencakup berbagai tujuan
                populer, memungkinkan Anda mencapai tujuan Anda dengan mudah.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://zafatrans.co.id/images/ig/ig-1.png"
        alt="banner-2"
        className="rounded-md"
      />
      {/* section 2 */}
      <h2 className="font-bold text-xl text-red-700">
        Artikel menarik untuk anda
      </h2>
      <div className="w-full overflow-x-scroll">
        <div className="w-[1200px] pb-3">
          <div className="grid grid-cols-4 gap-4">
            <a href="/blog/Keselamatan Berkendara Naik Bis: Tips dan Panduan">
              <div className="relative rounded-md shadow-md bg-white p-0 h-full">
                <img
                  className="object-cover h-48 w-96 rounded-t-md"
                  src="https://fms.zafatrans.co.id/media-uploads/safety-1695747554.png"
                  alt=""
                />
                <div className="p-4">
                  <h1 className="font-bold text-red-700">
                    Keselamatan Berkendara Naik Bis: Tips dan Panduan
                  </h1>
                  <div className="flex gap-2 text-xs text-gray-400">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-clock "
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                      September 27, 2023 1:00 AM
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-user "
                      >
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>
                      Admin
                    </div>
                  </div>
                  <p>
                    Kendaraan umum seperti bis adalah salah satu pilihan
                    transportasi yang populer di seluruh dunia. Bis.....
                  </p>
                </div>
              </div>
            </a>
            <a href="/blog/2024 TRIUMPH SPEED TRIPLE 1200 RR BREITLING LIMITED EDITION, Tampilannya Sangat Eksklusif">
              <div className="relative rounded-md shadow-md bg-white p-0 h-full">
                <img
                  className="object-cover h-48 w-96 rounded-t-md"
                  src="https://fms.zafatrans.co.id/media-uploads/lion-1720010320.jpg"
                  alt=""
                />
                <div className="p-4">
                  <h1 className="font-bold text-red-700">
                    2024 TRIUMPH SPEED TRIPLE 1200 RR BREITLING LIMITED EDITION,
                    Tampilannya Sangat Eksklusif
                  </h1>
                  <div className="flex gap-2 text-xs text-gray-400">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-clock "
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                      July 3, 2024 8:32 PM
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-user "
                      >
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>
                      Admin
                    </div>
                  </div>
                  <p>
                    Jika Anda penggemar motor, tidak ada salahnya mencoba motor
                    keluaran Triumph dan Breitling, yaitu Sp.....
                  </p>
                </div>
              </div>
            </a>
            <a href="/blog/Apa Itu Angkutan Khusus Penumpang">
              <div className="relative rounded-md shadow-md bg-white p-0 h-full">
                <img
                  className="object-cover h-48 w-96 rounded-t-md"
                  src="https://fms.zafatrans.co.id/media-uploads/1695295585.png"
                  alt=""
                />
                <div className="p-4">
                  <h1 className="font-bold text-red-700">
                    Apa Itu Angkutan Khusus Penumpang
                  </h1>
                  <div className="flex gap-2 text-xs text-gray-400">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-clock "
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                      September 24, 2023 9:04 PM
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-user "
                      >
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>
                      Admin
                    </div>
                  </div>
                  <p>
                    Akap adalah singkatan dari Angkutan Khusus Penumpang. Ini
                    adalah istilah yang digunakan di Indonesia.....
                  </p>
                </div>
              </div>
            </a>
            <a href="/blog/LionMag">
              <div className="relative rounded-md shadow-md bg-white p-0 h-full">
                <img
                  className="object-cover h-48 w-96 rounded-t-md"
                  src="https://fms.zafatrans.co.id/media-uploads/lion-1720517207.png"
                  alt=""
                />
                <div className="p-4">
                  <h1 className="font-bold text-red-700">LionMag</h1>
                  <div className="flex gap-2 text-xs text-gray-400">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-clock "
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                      July 9, 2024 5:27 PM
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-user "
                      >
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>
                      Admin
                    </div>
                  </div>
                  <p>
                    Tentang Lionmag LIONMAG adalah majalah in-flight maskapai
                    Lion Air. Mengulas tentang pariwisata dan .....
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-3 mb-5">
        <button
          className="rounded-lg p-1.5 pl-4 pr-4 bg-red-700 text-white hover:bg-red-900 disabled:bg-red-400 text-lg"
          type="button"
        >
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-news "
            >
              <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
              <path d="M8 8l4 0"></path>
              <path d="M8 12l4 0"></path>
              <path d="M8 16l4 0"></path>
            </svg>
            Selengkapnya
          </div>
        </button>
      </div>
      {/* section 3 */}
      <h2 className="font-bold text-red-700 text-xl">
        Kualitas Bus yang Unggul
      </h2>
      <img
        src="https://zafatrans.co.id/images/galery-2/FIK01240.jpg"
        className="rounded-md"
        alt=""
      />
      <p className="text-justify mt-1">
        Kami memiliki armada bus terbaru dengan standar kualitas tinggi. Setiap
        bus kami dirawat secara berkala untuk memastikan kenyamanan dan keamanan
        penumpang. Dengan desain interior yang modern, kursi yang ergonomis, dan
        ruang kaki yang lapang, kami menjamin Anda akan merasa nyaman sepanjang
        perjalanan.
      </p>
      <h2 className="font-bold text-xl text-red-700">
        Driver kami yang Berpengalaman
      </h2>
      <img
        src="https://zafatrans.co.id/images/galery-2/FIK01283.jpg"
        className="rounded-md"
        alt=""
      />
      <p className="text-justify">
        Driver kami yang berpengalaman telah menghabiskan banyak waktu di jalan
        dan mengemudi dalam berbagai situasi lalu lintas. Mereka memiliki
        keahlian mengemudi yang tinggi, termasuk dalam menghadapi lalu lintas
        yang padat, cuaca buruk, atau kondisi jalan yang menantang. Dalam
        mengemudi, mereka berperilaku bertanggung jawab, mengikuti aturan lalu
        lintas dengan ketat, dan memprioritaskan keselamatan penumpang
      </p>
    </main>
  );
}
