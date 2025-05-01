import React from "react";

const ChooseOur = () => {
  return (
    <section className="px-8 md:px-16 py-16  text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        ทำไมถึงเลือกใช้ของพวกเรา
      </h2>
      <p className="text-lg text-center mb-12 text-gray-600 bg-info-100 ">
        เราช่วยให้คุณเริ่มต้นธุรกิจได้ง่าย รวดเร็ว และมีระบบที่ดูเป็นมืออาชีพ
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 w-12 text-[#3725d6]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            เริ่มต้นง่าย ใช้งานได้ทันที
          </h3>
          <p className="text-gray-600">
            ไม่ต้องติดตั้งซับซ้อน ใช้ได้บนอุปกรณ์ที่มีอยู่
            พร้อมระบบหลังบ้านที่เข้าใจง่าย แม้ไม่ใช่สายเทค
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 w-12 text-[#3725d6]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            ระบบรักษาความปลอดภัยระดับสูง
          </h3>
          <p className="text-gray-600">
            เซิร์ฟเวอร์ทุกเครื่องของเราตั้งอยู่ใน Data Center ที่ได้มาตรฐาน
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 w-12 text-[#3725d6]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            ราคายุติธรรม ไม่มีพันธะสัญญายาว
          </h3>
          <p className="text-gray-600">
            จ่ายรายเดือนสบายใจ ไม่มีข้อผูกมัดระยะยาว เหมาะกับธุรกิจเล็ก-กลาง
            ที่ต้องการความยืดหยุ่น
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-12 w-12 text-[#3725d6]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

          </div>
          <h3 className="text-xl font-semibold mb-2">
          ระบบครบ พร้อมเติบโตไปกับธุรกิจคุณ
          </h3>
          <p className="text-gray-600">
          ไม่ใช่แค่ POS แต่เรามีระบบจัดการร้านค้า การเช่า การตลาด และเว็บไซต์ ให้คุณต่อยอดธุรกิจได้ในที่เดียว


          </p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-12 w-12 text-[#3725d6]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

          </div>
          <h3 className="text-xl font-semibold mb-2">
            บริการซัพพอร์ตที่คุณวางใจได้
          </h3>
          <p className="text-gray-600">
          มีทีมงานพร้อมให้คำปรึกษา ดูแลทุกปัญหาที่คุณเจอ เราไม่ทิ้งลูกค้าไว้ข้างหลัง
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-12 w-12 text-[#3725d6]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

          </div>
          <h3 className="text-xl font-semibold mb-2">
          พัฒนาโดยทีมคนไทย เข้าใจเจ้าของธุรกิจไทย
          </h3>
          <p className="text-gray-600">
          เรารู้ปัญหาหน้างานจริงและพัฒนาระบบเพื่อให้ตอบโจทย์ผู้ใช้งานในไทยโดยเฉพาะ


          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseOur;
