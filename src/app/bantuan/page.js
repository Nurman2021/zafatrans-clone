import React from "react";

export default function BantuanPage() {
  return (
    <div className="relative rounded-md shadow-md bg-white p-4">
      <title>Bantuan | Zafa Trans Clone Website</title>
      <img
        src="https://ik.imagekit.io/nurman/chat-bot.svg?updatedAt=1723168616877"
        className=" w-1/2 mx-auto"
      />
      <div className="font-bold text-red-700 text-xl mb-2 text-center mt-4">
        Ada Pertanyaan
      </div>
      <div className="text-center">
        Kami siap menjawab pertanyaan terkait info Zafa Trans
      </div>
      <div className="p-5 bg-gray-100 rounded mt-4">
        <a
          href="https://lnk.bio/zafatrans"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-bold text-red-700">Kunjungi Bio Kami</div>
          <div className="text-sm text-gray-500">
            Di Zafa trans anda dapat mengunjungi link bio kami untuk mendapatkan
            info detail contact kami
          </div>
        </a>
      </div>
      <div className="p-5 border rounded mt-4">
        <a
          href="https://api.whatsapp.com/send/?phone=6282117666690"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-bold text-red-700">
            Hubungi Kami Via WhatsApp
          </div>
          <div className="text-sm text-gray-500">
            Hubungi kami via WhatsApp langsung terhubung ke Customer Service
            kami
          </div>
        </a>
      </div>
      <div className="mt-4">
        <div className="font-bold">PT. Mekarza Jaring Nusantara</div>
        <div className="text-sm mt-3">
          Transportasi Bus AKAP Layanan tiket &amp; jasa titipan
        </div>
        <div className="text-sm">
          Jl. Perintis Kemerdekaan, Tamalanrea Jaya, Kec. Tamalanrea, Kota
          Makassar, Sulawesi Selatan Telepon: 0821-1766-6690
        </div>
      </div>
    </div>
  );
}
