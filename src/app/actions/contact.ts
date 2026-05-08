'use server';

import type { ContactFormData } from '@/utils/api';

const API_BASE_URL = process.env.API_BASE_URL ?? 'https://kraftinox.prismaadmin.ro/api';
const API_KEY = process.env.API_KEY ?? '';

export async function submitContactAction(data: ContactFormData): Promise<{ id: number }> {
    const res = await fetch(`${API_BASE_URL}/contact/create.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': API_KEY,
        },
        body: JSON.stringify(data),
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`API ${res.status}: ${res.statusText}`);
    }

    const json = await res.json();
    if (!json.success) {
        throw new Error(json.message ?? 'Submission failed');
    }

    return json.data;
}
