import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { useState, useEffect } from 'react';
import { 
    BookOpen, 
    Heart, 
    Users, 
    MessageCircle, 
    Calendar, 
    MapPin, 
    ArrowRight,
    Play,
    Download,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const HERO_SLIDES = [
    {
        image: '/images/hero.png',
        tag: 'Dakwah Transformatif Modern',
        title: <>Menyebarkan Hikmah, <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Membangun Peradaban.</span></>,
        desc: 'Dewan Dakwah hadir sebagai jembatan ilmu dan amal, menginspirasi umat melalui dakwah yang sejuk, inklusif, dan berorientasi pada kemajuan.'
    },
    {
        image: '/images/hero_2.png',
        tag: 'Pusat Ilmu & Literasi',
        title: <>Cerdas Bersama <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ilmu Syar'i.</span></>,
        desc: 'Akses ribuan pustaka digital dan program pendidikan terstruktur untuk mencetak kader ulama masa depan yang berwawasan luas.'
    },
    {
        image: '/images/hero_3.png',
        tag: 'Kepedulian Sosial Ummat',
        title: <>Tangan Di Atas, <br /> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Menebar Manfaat.</span></>,
        desc: 'Melalui ZISWAF, kami menyalurkan amanah Anda untuk program kemanusiaan, pemberdayaan ekonomi, dan bantuan bencana di seluruh pelosok.'
    }
];

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
            <Head title="Dewan Dakwah - Menyebarkan Hikmah, Membangun Ummat" />

            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-primary uppercase">DEWAN DAKWAH</span>
                    </div>

                    <div className="hidden items-center gap-8 lg:flex">
                        <a href="#program" className="text-sm font-medium hover:text-secondary transition-colors">Program</a>
                        <a href="#artikel" className="text-sm font-medium hover:text-secondary transition-colors">Artikel</a>
                        <a href="#donasi" className="text-sm font-medium hover:text-secondary transition-colors">Donasi</a>
                        <a href="#tentang" className="text-sm font-medium hover:text-secondary transition-colors">Tentang Kami</a>
                    </div>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="hidden text-sm font-semibold hover:text-primary transition-colors lg:block"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section Slider */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
                {HERO_SLIDES.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'}`}
                    >
                        <img 
                            src={slide.image} 
                            alt={`Hero ${index + 1}`} 
                            className="h-full w-full object-cover opacity-40 dark:opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
                    </div>
                ))}

                <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
                    {HERO_SLIDES.map((slide, index) => (
                        <div key={index} className={index === currentSlide ? 'block' : 'hidden'}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">{slide.tag}</span>
                            </div>

                            <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight lg:text-7xl mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                                {slide.title}
                            </h1>

                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                                {slide.desc}
                            </p>
                        </div>
                    ))}

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
                        <Link
                            href="#program"
                            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            Mulai Berkontribusi
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <button className="group flex items-center gap-3 rounded-full border border-border bg-card/50 px-8 py-4 text-lg font-bold backdrop-blur-sm hover:bg-card transition-all active:scale-95">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                                <Play className="h-4 w-4 fill-current" />
                            </div>
                            Lihat Profil
                        </button>
                    </div>
                </div>

                {/* Slider Controls */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
                    <button onClick={prevSlide} className="rounded-full border border-border/50 bg-background/20 p-2 text-foreground backdrop-blur-sm hover:bg-primary hover:text-white transition-all">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    <div className="flex gap-3">
                        {HERO_SLIDES.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-primary' : 'w-2 bg-border hover:bg-primary/40'}`}
                            />
                        ))}
                    </div>

                    <button onClick={nextSlide} className="rounded-full border border-border/50 bg-background/20 p-2 text-foreground backdrop-blur-sm hover:bg-primary hover:text-white transition-all">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                    <div className="h-10 w-6 rounded-full border-2 border-primary/30 flex justify-center p-1">
                        <div className="h-2 w-1 rounded-full bg-primary"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y border-border/40 bg-muted/30 py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        {[
                            { label: 'Cabang Daerah', value: '34+' },
                            { label: 'Relawan Aktif', value: '1.2k' },
                            { label: 'Penerima Manfaat', value: '50k+' },
                            { label: 'Program Dakwah', value: '150+' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="program" className="py-32">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="mb-20 text-center">
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-secondary mb-4">Layanan & Program</h2>
                        <h3 className="text-4xl font-bold lg:text-5xl">Solusi Dakwah di Era Digital</h3>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: BookOpen,
                                title: 'Kajian & Pendidikan',
                                desc: 'Program belajar agama terstruktur mulai dari tahsin hingga fikih kontemporer.',
                                color: 'bg-blue-500/10 text-blue-500'
                            },
                            {
                                icon: Heart,
                                title: 'Donasi & ZISWAF',
                                desc: 'Salurkan kepedulian Anda melalui platform donasi yang transparan dan aman.',
                                color: 'bg-red-500/10 text-red-500'
                            },
                            {
                                icon: MessageCircle,
                                title: 'Konsultasi Syariah',
                                desc: 'Tanya jawab seputar hukum agama langsung dengan asatidz yang kompeten.',
                                color: 'bg-green-500/10 text-green-500'
                            },
                            {
                                icon: Users,
                                title: 'Kaderisasi Relawan',
                                desc: 'Bergabunglah menjadi agen perubahan dalam program dakwah lapangan.',
                                color: 'bg-purple-500/10 text-purple-500'
                            },
                            {
                                icon: Download,
                                title: 'Publikasi Digital',
                                desc: 'Akses jurnal, buletin, dan buku digital dakwah secara gratis.',
                                color: 'bg-orange-500/10 text-orange-500'
                            },
                            {
                                icon: MapPin,
                                title: 'Titik Dakwah',
                                desc: 'Temukan masjid dan komunitas dakwah terdekat di wilayah Anda.',
                                color: 'bg-cyan-500/10 text-cyan-500'
                            },
                        ].map((feature, i) => (
                            <div key={i} className="group relative rounded-3xl border border-border bg-card p-10 shadow-sm transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}>
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.desc}
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                                    Selengkapnya <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation CTA */}
            <section id="donasi" className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="relative overflow-hidden rounded-[40px] bg-primary px-10 py-20 text-center text-primary-foreground lg:px-20 lg:py-32">
                        {/* Abstract shapes */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <h2 className="text-4xl font-black lg:text-6xl mb-8">Setiap Rupiah Adalah Amal Jariyah</h2>
                            <p className="text-xl opacity-80 mb-12">
                                Bantu kami memperluas jangkauan dakwah dan memberikan manfaat lebih luas bagi saudara-saudara kita yang membutuhkan.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                                <button className="rounded-full bg-white px-10 py-5 text-xl font-black text-primary shadow-2xl transition-all hover:bg-secondary hover:text-white hover:-translate-y-1 active:scale-95">
                                    Donasi Sekarang
                                </button>
                                <div className="flex items-center gap-4 text-sm font-bold">
                                    <div className="flex -space-x-4">
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-muted"></div>
                                        ))}
                                    </div>
                                    <span>5.000+ Orang telah bergabung</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-background border-t border-border/40 pt-20 pb-10">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid gap-12 lg:grid-cols-4 mb-20">
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <span className="text-lg font-bold tracking-tight text-primary">DEWAN DAKWAH</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Lembaga dakwah independen yang berkomitmen mencetak kader pemimpin dan membangun peradaban islami.
                            </p>
                        </div>
                        
                        <div>
                            <h5 className="font-bold mb-6">Tautan Cepat</h5>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Program Utama</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Pusat Berita</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-6">Program</h5>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-primary transition-colors">Dakwah Pelosok</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Beasiswa Kader</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Pembangunan Masjid</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Siaga Bencana</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-6">Media Sosial</h5>
                            <div className="flex gap-4">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                                        <div className="h-4 w-4 bg-current rounded-sm"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-border/40 pt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-medium">
                        <p>© 2026 Dewan Dakwah. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
