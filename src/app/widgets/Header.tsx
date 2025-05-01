'use client';
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="shadow-xl text-dark px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                        className="h-10"
                    />
                </div>
                <div className="space-x-6 hidden md:block">
                    <a href="#" className="hover:underline">หน้าแรก</a>
                    <a href="#services" className="hover:underline">บริการ</a>
                    <a href="#pricing" className="hover:underline">แพ็กเกจ</a>
                    <a href="#contact" className="hover:underline">ติดต่อเรา</a>
                </div>
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
                    <a href="#" className="block hover:underline">หน้าแรก</a>
                    <a href="#services" className="block hover:underline">บริการ</a>
                    <a href="#pricing" className="block hover:underline">แพ็กเกจ</a>
                    <a href="#contact" className="block hover:underline">ติดต่อเรา</a>
                </div>
            )}
        </>
    );
}
