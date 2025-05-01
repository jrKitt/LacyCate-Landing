'use client';
import React from "react";

const Pricing = () => {
    const plans = [
        {
            name: "Starter Package",
            price: "3,500",
            features: [
                { text: "3 หน้าเว็บธุรกิจ", included: true },
                { text: "รองรับระบบ POS / เช่าสินค้า / ห้องพัก", included: false },
                { text: "ระบบจัดการหลังบ้าน: พื้นฐาน", included: true },
                { text: "ระบบออกใบกำกับเงินภาษี ใบสั่งซื้อ ใบเสร็จรับเงินต่างๆ", included: true },
                { text: "Template สำเร็จรูป", included: true },
                { text: "ปรับ SEO / Google Search", included: false },
                { text: "ซัพพอร์ต: แชตอีเมลเท่านั้น", included: true },
                { text: "อัปเดตฟีเจอร์ใหม่: รายปี", included: true },
                { text: "พื้นที่เว็บไซต์: 1GB", included: true },
                { text: "ฟรี SSL / Hosting", included: true },
                { text: "ฟรี ซัพพอร์ต On-site ในระแวกภาคอีสาน", included: true },
            ],
            addons: [
                { name: "เพิ่มภาษาเว็บไซต์", price: 1500 },
                { name: "เชื่อมต่อ Facebook / Google Login", price: 2000 },
            ],
        },
        {
            name: "Medium Package",
            price: "6,500",
            features: [
                { text: "5 หน้าเว็บธุรกิจ", included: true },
                { text: "รองรับระบบ POS / เช่าสินค้า / ห้องพัก (เลือก 1)", included: true },
                { text: "ระบบจัดการหลังบ้าน: ขั้นกลาง", included: true },
                { text: "ระบบออกใบกำกับเงินภาษี ใบสั่งซื้อ ใบเสร็จรับเงินต่างๆ", included: true },
                { text: "ปรับ SEO / Google Search (พื้นฐาน)", included: true },
                { text: "ซัพพอร์ต: Line / Email", included: true },
                { text: "อัปเดตฟีเจอร์ใหม่: ราย 6 เดือน", included: true },
                { text: "พื้นที่เว็บไซต์: 5GB", included: true },
                { text: "ฟรี SSL / Hosting", included: true },
                { text: "ฟรี ซัพพอร์ต On-site ในระแวกภาคอีสาน", included: true },
            ],
            addons: [
                { name: "เพิ่มภาษาเว็บไซต์", price: 1500 },
                { name: "เชื่อมต่อ Facebook / Google Login", price: 2000 },
                { name: "สร้างร้านค้าออนไลน์ (E-Commerce)", price: 3000 },
            ],
        },
        {
            name: "Professional Package",
            price: "9,900",
            features: [
                { text: "ไม่จำกัดหน้าเว็บธุรกิจ", included: true },
                { text: "รองรับระบบ POS / เช่าสินค้า / ห้องพัก (รวมทุกระบบ)", included: true },
                { text: "ระบบจัดการหลังบ้าน: ขั้นสูง + รายงาน", included: true },
                { text: "ระบบออกใบกำกับเงินภาษี ใบสั่งซื้อ ใบเสร็จรับเงินต่างๆ", included: true },
                { text: "ปรับเต็มรูปแบบ", included: true },
                { text: "ปรับ SEO / Google Search (พร้อมจัดแคมเปญ)", included: true },
                { text: "อัปเดตฟีเจอร์ใหม่: รายเดือน", included: true },
                { text: "พื้นที่เว็บไซต์: 10GB", included: true },
                { text: "ฟรี SSL / Hosting", included: true },
                { text: "ฟรี ซัพพอร์ต On-site ในระแวกภาคอีสาน", included: true },
            ],
            addons: [
                { name: "เพิ่มภาษาเว็บไซต์", price: 1500 },
                { name: "เชื่อมต่อ Facebook / Google Login", price: 2000 },
                { name: "สร้างร้านค้าออนไลน์ (E-Commerce)", price: 3000 },
                { name: "เชื่อมต่อ API LINE Notify", price: 800 },
            ],
        },
    ];

    return (
        <section className="animate-jump-in animate-once animate-ease-out  py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    ราคาเริ่มต้นเพียง 3,500 บาท
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-lg shadow-md border ${
                                index === 1 ? "border-[#3725d6]" : "border-gray-200"
                            }`}
                        >
                            <h3 className="text-xl font-bold text-center mb-4">{plan.name}</h3>
                            <div className="text-center mb-6">
                                <span className="text-3xl font-bold text-[#3725d6]">
                                    ฿{plan.price}
                                </span>
                                <span className="text-sm text-gray-500"> บาท</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="text-gray-700 text-sm flex items-center"
                                    >
                                        {feature.included ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-red-500 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <div className="mb-6">
                                <h4 className="text-lg font-bold mb-2">Add-ons</h4>
                                <ul className="space-y-2">
                                    {plan.addons.map((addon, addonIndex) => (
                                        <li key={addonIndex} className="text-gray-700 text-sm flex justify-between">
                                            <span>{addon.name}</span>
                                            <span>+฿{addon.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <button className="bg-[#3725d6] text-white py-2 px-4 rounded-lg font-bold hover:bg-[#2a1e9c]">
                                    สมัครใช้งาน
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
