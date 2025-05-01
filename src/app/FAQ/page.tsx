import React from "react";

const FAQ = () => {
  return (
    <section className="px-8 md:px-16 py-16 text-gray-800">
      {/* FAQ Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        คำถามที่พบบ่อย (FAQ)
      </h2>
      <p className="text-lg text-center mb-12 text-gray-600">
        ตอบทุกคำถามที่คุณสงสัย
      </p>
      <div className="space-y-2">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            ระบบ POS ของคุณต้องติดตั้งโปรแกรมเพิ่มไหม?
          </div>
          <div className="collapse-content text-sm">
            ไม่จำเป็นครับ ระบบของเราเป็น Web-based ใช้งานผ่านเบราว์เซอร์ได้ทันที
            ไม่ต้องติดตั้งโปรแกรมใด ๆ รองรับทั้งคอมพิวเตอร์ แท็บเล็ต และมือถือ
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            ถ้าร้านไม่มีอุปกรณ์ POS มาก่อน จะใช้งานได้ไหม?
          </div>
          <div className="collapse-content text-sm">
            ได้แน่นอนครับ ระบบสามารถใช้งานผ่านอุปกรณ์ที่คุณมีอยู่ เช่น
            คอมพิวเตอร์ทั่วไป หรือ iPad ก็สามารถเปิดบิลและจัดการร้านได้ครบถ้วน{" "}
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            จ่ายรายเดือนได้ไหม หรือมีสัญญาผูกมัดหรือไม่?
          </div>
          <div className="collapse-content text-sm">
            คุณสามารถเลือก จ่ายแบบรายเดือน ได้โดยไม่มีสัญญาผูกมัดระยะยาว
            เรายึดหลักความยืดหยุ่นและให้ลูกค้ารู้สึกสบายใจในการใช้งาน{" "}
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            มีระบบสำรองข้อมูลหรือไม่?{" "}
          </div>
          <div className="collapse-content text-sm">
            ระบบของเรามี การสำรองข้อมูลอัตโนมัติรายวัน
            เพื่อให้มั่นใจว่าข้อมูลของคุณปลอดภัยตลอดเวลา
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            หากใช้ไม่เป็นหรือมีปัญหา จะมีคนช่วยหรือไม่?{" "}
          </div>
          <div className="collapse-content text-sm">
            แน่นอนครับ! เรามีทีม Support
            พร้อมดูแลและแนะนำการใช้งานตลอดการเป็นลูกค้า ทั้งทาง Facebook,
            โทรศัพท์ หรือ Remote ช่วยเหลือ
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            ใช้เวลาทำเว็บไซต์นานแค่ไหน?{" "}
          </div>
          <div className="collapse-content text-sm">
            ระยะเวลาขึ้นอยู่กับความซับซ้อนของเว็บไซต์
            โดยทั่วไปเว็บไซต์ทั่วไปใช้เวลา ประมาณ 7-14 วันทำการ
            หากเป็นระบบที่ซับซ้อนจะใช้เวลามากขึ้นตามขอบเขตงาน
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            มีบริการดูแลเว็บไซต์หลังส่งงานไหม?{" "}
          </div>
          <div className="collapse-content text-sm">
            มีครับ เรามีแพ็กเกจดูแลรายเดือน เช่น อัปเดตข้อมูล ปรับแต่งเล็กน้อย
            แก้ไขบั๊ก รองรับการเติบโตของธุรกิจคุณในระยะยาว
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
