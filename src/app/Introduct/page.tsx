"use client";
import Image from "next/image";

export default function Introduct() {
  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 "
        style={{
          background: `
            radial-gradient(circle, #efeff4 10%, transparent 11%),
            radial-gradient(circle at bottom left, #efeff4 5%, transparent 6%),
            radial-gradient(circle at bottom right, #efeff4 5%, transparent 6%),
            radial-gradient(circle at top left, #efeff4 5%, transparent 6%),
            radial-gradient(circle at top right, #efeff4 5%, transparent 6%)
          `,
          backgroundSize: "2em 2em",
          backgroundColor: "#ffffff",
          opacity: 1,
        }}
      >
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <div className="flex items-center space-x-2 alert alert-info alert-soft w-70 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0-1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <span>ส่วนลด 15% สำหรับลูกค้าใหม่</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            ให้เราช่วยดูและเว็บไซต์ของคุณ
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            จะดีกว่าไหม?
          </h2>
          <p className="text-xl leading-relaxed">
            เราให้บริการสร้างและพัฒนาเว็บไซต์ที่ตอบโจทย์ธุรกิจทุกประเภท
            ไม่ว่าจะเป็นเว็บไซต์ขายของออนไลน์ (e-Commerce),
            เว็บไซต์สำหรับองค์กร, ระบบจอง, POS หรือเว็บไซต์เช่าใช้งาน
            พร้อมออกแบบให้สวยงาม รองรับมือถือ โหลดไว และใช้งานง่าย
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#"
              className="inline-block bg-[#3725d6] text-white px-6 py-3 rounded-lg font-bold"
            >
              บริการของเรา
            </a>
            <a
              href="#"
              className="inline-block bg-[#dbdbdb] text-[#4a4a4a] px-6 py-3 rounded-lg font-bold"
            >
              ดูแพ็กเกจราคา
            </a>
          </div>
        </div>
        <div className="md:w-1/2 text-center relative">
          <div className="relative inline-block">
            <Image
              src="/products1.png"
              alt="ระบบ POS UI"
              className="rounded-2xl shadow-xl mx-auto w-full max-w-lg animate-float"
              width={1200}
              height={1200}
            />
            <Image
              src="/products2.png"
              alt="ระบบ POS UI ซ้อน"
              className="absolute top-[-30px] right-[-30px] rounded-2xl shadow-lg w-1/2 animate-float"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
}
