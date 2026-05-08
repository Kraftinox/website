import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

// Fallback: middleware handles this, but just in case
export default function RootPage() {
    redirect(`/${defaultLocale}`);
}
