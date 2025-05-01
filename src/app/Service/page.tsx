import React from 'react';

const Service = () => {
    const services = [
        { 
            title: "LZCRentX - ระบบเช่าสินค้า", 
            description: "ระบบสำหรับบริหารจัดการธุรกิจให้เช่าสินค้าทุกประเภท เช่น ชุด, รถ, กล้อง, เครื่องมือ ฯลฯ เหมาะสำหรับร้านเช่าขนาดเล็ก-กลาง ที่ต้องการระบบมืออาชีพ ใช้งานง่าย พร้อมรายงานสรุปแบบเรียลไท", 
            icon: "🏠", 
            image: "/products1.png" 
        },
        { 
            title: "EZS (Easy School) - ระบบบริหารจัดการสถานศึกษา", 
            description: "ระบบออนไลน์ที่ช่วยให้โรงเรียนและวิทยาลัยจัดการข้อมูลครู นักเรียน และการเรียนการสอนได้อย่างมีประสิทธิภาพลดงานเอกสาร ใช้งานง่าย รองรับมือถือ พร้อมรายงานสรุปครบทุกมิติยกระดับการจัดการสถานศึกษาให้ทันสมัยและเป็นระบบมากยิ่งขึ้น", 
            icon: "🏫", 
            image: "/ezc.png" 
        },
        { 
            title: "LZCPOS - ระบบขายหน้าร้าน", 
            description: "ระบบ POS ของเราออกแบบมาเพื่อช่วยให้ร้านค้าขนาดเล็กไปจนถึงขนาดกลางสามารถจัดการการขายสินค้าได้อย่างเป็นระบบ รองรับการเปิดบิลขาย บันทึกยอดขายแบบเรียลไทม์ ออกใบเสร็จ พร้อมระบบจัดการสินค้า สต็อกสินค้า และรายงานสรุปยอดขายประจำวัน/เดือนใช้งานง่ายผ่านเว็บ ไม่ต้องติดตั้งซอฟต์แวร์เพิ่มเติม", 
            icon: "🛒", 
            image: "/products2.png" 
        },
    ];

    return (
        <section className="px-8 md:px-16 py-16  text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                ระบบที่ให้บริการ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 image-full w-full shadow-sm"
                    >
                        <figure>
                            <img src={service.image} alt={service.title} className="object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{service.title}</h2>
                            <p>{service.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    ดูตัวอย่างระบบ →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
