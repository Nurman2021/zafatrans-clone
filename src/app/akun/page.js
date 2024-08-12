import React from "react";

export default function AccountPage() {
  return (
    <div>
      <title>Akun | Zafa Trans Clone Website</title>
      <div className="relative rounded-md shadow-md bg-white p-4">
        <img
          src="https://ik.imagekit.io/nurman/account.svg?updatedAt=1723218321890"
          className=" w-1/2 mx-auto"
        />
        <br />
        <div>
          Masuk untuk nikmati mudahnya booking tiket zafatrans dan akses ke
          fitur lainnya!
        </div>
        <button
          className="rounded-lg p-1.5 pl-4 pr-4 bg-red-700 text-white hover:bg-red-900 disabled:bg-red-400 w-full mt-3 mb-3"
          type="button"
        >
          Masuk Sekarang
        </button>
        <div className="text-center mt-3 text-sm">
          Belum punya akun?
          <span className="font-bold text-red-700"> Daftar</span>
        </div>
      </div>

      <div className="relative rounded-md shadow-md bg-white mt-3 p-4">
        <span className="text-red-700" href="/bantuan">
          Bantuan
        </span>

        <hr className="mt-1 mb-1" />
        <span className="text-red-700" href="/tentang-kami">
          Tentang Kami
        </span>

        <hr className="mt-1 mb-1" />
      </div>
    </div>
  );
}
