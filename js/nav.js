import React, { useState } from 'react';

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
);

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // Fungsi untuk membuka/menutup menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null); // Tutup dropdown saat menu mobile di-toggle
    };

    // Fungsi untuk membuka/menutup dropdown di tampilan mobile
    const toggleDropdown = (id) => {
        if (window.innerWidth >= 1024) return; // Hanya jalankan di mobile

        if (openDropdown === id) {
            setOpenDropdown(null); // Tutup jika sudah terbuka
        } else {
            setOpenDropdown(id); // Buka dropdown yang dipilih
        }
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #0f172a;
                    color: #ffffff;
                }
                .dropdown-content.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .dropdown-content {
                    z-index: 60;
                }
                #nav-menu {
                    z-index: 50;
                }
            `}</style>
            
            <header className="bg-slate-950 text-white p-4 lg:p-6 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold rounded-lg">Logo</a>
                    <button id="hamburger-menu" className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    
                    <div id="nav-menu" className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-full w-full left-0 lg:relative lg:top-auto lg:w-auto lg:flex lg:items-center justify-center items-center gap-x-12 p-4 lg:p-0`}>
                        <nav className="w-full lg:w-auto block items-center">
                            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 p-6 lg:p-0">
                                {/* Program Studi Dropdown */}
                                <li className="relative group w-full lg:w-auto">
                                    <a href="#" className="dropdown-link flex items-center lg:inline-flex relative py-2 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={(e) => { e.preventDefault(); toggleDropdown('studi'); }}>
                                        Program Studi <ChevronDownIcon />
                                    </a>
                                    <div className={`dropdown-content relative lg:absolute top-full mt-4 lg:mt-10 text-white bg-gray-900 border border-white/30 shadow-lg transition-all duration-300 w-full lg:w-[700px] rounded-lg ${openDropdown === 'studi' ? 'active' : 'opacity-0 invisible -translate-y-5'}`}>
                                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                            <div>
                                                <h3 className="font-bold pb-6">Sarjana (S1)</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Informatika</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Sistem Informasi</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Kalender Akademik</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Tahun ajaran 2024/2025</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Tahun ajaran 2025/2026</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Tahun ajaran 2026/2027</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Download Dokumen</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Surat dispensasi</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Surat rekomendasi</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Jurnal ilmiah</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Draft skripsi</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Profil Perguruan Tinggi Dropdown */}
                                <li className="relative group w-full lg:w-auto">
                                    <a href="#" className="dropdown-link flex items-center lg:inline-flex relative py-2 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={(e) => { e.preventDefault(); toggleDropdown('profil'); }}>
                                        Profil <ChevronDownIcon />
                                    </a>
                                    <div className={`dropdown-content relative lg:absolute top-full mt-4 lg:mt-10 text-white bg-gray-900 border border-white/30 shadow-lg transition-all duration-300 w-full lg:w-[900px] rounded-lg ${openDropdown === 'profil' ? 'active' : 'opacity-0 invisible -translate-y-5'}`}>
                                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                            <div>
                                                <h3 className="font-bold pb-6">Fasilitas</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Laboratorium Komputer</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Perpustakaan Digital</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Ruang Kelas Multimedia</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Koneksi Internet Cepat</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Kantin Modern</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Tentang Kampus</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Sejarah Singkat</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Visi & Misi</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Struktur Organisasi</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Kontak Kami</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Unit Jaminan Mutu</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Audit Mutu Internal (AMI)</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Monitoring dan Evaluasi (Monev)</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Pendampingan Akreditasi</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Kemahasiswaan Dropdown */}
                                <li className="relative group w-full lg:w-auto">
                                    <a href="#" className="dropdown-link flex items-center lg:inline-flex relative py-2 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={(e) => { e.preventDefault(); toggleDropdown('kemahasiswaan'); }}>
                                        Kemahasiswaan <ChevronDownIcon />
                                    </a>
                                    <div className={`dropdown-content relative lg:absolute top-full mt-4 lg:mt-10 text-white bg-gray-900 border border-white/30 shadow-lg transition-all duration-300 w-full lg:w-[700px] rounded-lg ${openDropdown === 'kemahasiswaan' ? 'active' : 'opacity-0 invisible -translate-y-5'}`}>
                                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                            <div>
                                                <h3 className="font-bold pb-6">Info Beasiswa</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Beasiswa Internal STB</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Beasiswa Kemendikbud</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Alumni</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Tracer Study</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Ikatan Alumni</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Lowongan Kerja</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Himpunan Mahasiswa</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">HMTIKA</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">HIMASI</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Beasiswa Dropdown */}
                                <li className="relative group w-full lg:w-auto">
                                    <a href="#" className="dropdown-link flex items-center lg:inline-flex relative py-2 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-white before:transition-all before:duration-300 hover:before:w-full" onClick={(e) => { e.preventDefault(); toggleDropdown('beasiswa'); }}>
                                        Beasiswa <ChevronDownIcon />
                                    </a>
                                    <div className={`dropdown-content relative lg:absolute top-full mt-4 lg:mt-10 text-white bg-gray-900 border border-white/30 shadow-lg transition-all duration-300 w-full lg:w-[700px] rounded-lg ${openDropdown === 'beasiswa' ? 'active' : 'opacity-0 invisible -translate-y-5'}`}>
                                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                            <div>
                                                <h3 className="font-bold pb-6">Info Beasiswa</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Beasiswa Internal STB</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Beasiswa Kemendikbud</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Alumni</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Tracer Study</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Ikatan Alumni</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">Lowongan Kerja</a>
                                            </div>
                                            <div>
                                                <h3 className="font-bold pb-6">Himpunan Mahasiswa</h3>
                                                <a href="#" className="block pb-3 hover:text-blue-500">HMTIKA</a>
                                                <a href="#" className="block pb-3 hover:text-blue-500">HIMASI</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="container mx-auto p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Halaman Utama</h1>
                <p className="text-lg">Silakan periksa responsivitas menu navigasi di atas.</p>
            </main>
        </>
    );
};

export default App;
