import React from "react";

const Contact = () => {
  const contacts = [
    {
      title: "Facebook LazyCat Software🐱",
      description:
        "คุณสามารถติดต่อ LazyCat Software ได้ผ่านช่องทาง Facebook Page ซึ่งเป็นช่องทางที่รวดเร็วที่สุด มีแอดมินพร้อมให้บริการและช่วยเหลือแก้ไขปัญหาทันทีค่ะ",
      buttonText: "ติดต่อเรา",
      buttonLink: "https://www.facebook.com/lazycat.soft",
      bgColor: "bg-[#3725d6]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="container mx-auto px-7 py-16 space-y-16 max-lg:py-5">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className={`rounded-lg border shadow-sm overflow-hidden ${contact.bgColor} ${contact.textColor}`}
        >
          <div className="p-0">
            <div className="flex flex-col lg:flex-row items-center relative">
              <div className="w-full p-8 text-center">
                <h2 className="text-4xl font-bold mb-4">{contact.title}</h2>
                <div className="space-y-2 text-lg mb-4">
                  <p>{contact.description}</p>
                </div>
                <a href={contact.buttonLink} target="_blank" rel="noopener noreferrer">
                  <button
                    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                      contact.textColor === "text-white"
                        ? "text-white hover:bg-white/20 border"
                        : "text-[#4372EB] hover:bg-[#4372EB]/20 border border-[#4372EB]"
                    }`}
                  >
                    {contact.buttonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
