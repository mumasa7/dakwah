import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <>
            <Head title="Log in" />

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border shadow-sm">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="font-bold text-primary px-1">Alamat Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="email@contoh.com"
                                        className="rounded-xl border-border focus:ring-primary h-12 px-4"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center px-1">
                                        <Label htmlFor="password" className="font-bold text-primary">Kata Sandi</Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="ml-auto text-xs font-bold text-secondary hover:text-primary transition-colors"
                                                tabIndex={5}
                                            >
                                                Lupa password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        className="rounded-xl border-border focus:ring-primary h-12 px-4"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3 px-1">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                        className="rounded-md border-primary text-primary"
                                    />
                                    <Label htmlFor="remember" className="text-sm font-medium">Ingat saya</Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-4 w-full h-12 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && <Spinner />}
                                    Masuk Ke Akun
                                </Button>
                            </div>

                            {canRegister && (
                                <div className="text-center text-sm text-muted-foreground mt-4">
                                    Belum punya akun?{' '}
                                    <TextLink href={register()} tabIndex={5} className="font-bold text-primary hover:text-secondary underline underline-offset-4">
                                        Daftar Sekarang
                                    </TextLink>
                                </div>
                            )}
                        </>
                    )}
                </Form>
            </div>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
