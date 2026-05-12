import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background">
            <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/hero_2.png" 
                        alt="Auth background" 
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
                </div>
                <Link
                    href={home()}
                    className="relative z-20 flex items-center text-lg font-bold tracking-tight"
                >
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                        <AppLogoIcon className="size-6 fill-current text-white" />
                    </div>
                    <span className="uppercase">{name}</span>
                </Link>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-2xl font-medium leading-relaxed">
                            &ldquo;Dakwah adalah jembatan yang menghubungkan ilmu dengan amal, membawa cahaya hikmah ke setiap relung hati.&rdquo;
                        </p>
                        <footer className="text-sm font-semibold opacity-80 uppercase tracking-widest">— Dewan Dakwah Pusat</footer>
                    </blockquote>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center lg:hidden"
                    >
                        <AppLogoIcon className="h-10 fill-current text-black sm:h-12" />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-sm text-balance text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
