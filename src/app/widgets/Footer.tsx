'use client';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal text-base-content p-10">
            <aside>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
                <p>
                    LazyCat Software (LZC Soft)
                    <br />
                    Copyright © 2024 LazyCat Software | by LZCTH
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">บริการ</h6>
                <a className="link link-hover">LZCRentX</a>
                <a className="link link-hover">Easy School (EZS)</a>
                <a className="link link-hover">LZCPOS</a>
            </nav>
            <nav>
                <h6 className="footer-title">ติดต่อ</h6>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Line</a>
                <a className="link link-hover">Email</a>
                <a className="link link-hover">0959611962</a>
            </nav>
            <nav>
                <h6 className="footer-title">Privacy</h6>
                <a className="link link-hover">Terms of use</a>
            </nav>
        </footer>
    );
}
