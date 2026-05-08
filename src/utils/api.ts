import 'server-only';

const API_BASE_URL = process.env.API_BASE_URL ?? 'https://admin.kraftinox.com/api';
const API_KEY = process.env.API_KEY ?? '';

// Types
export interface ServiceItem {
    id: number;
    image_path: string;
    title: string;
    description: string;
}

export interface ProjectItem {
    id: number;
    image_path: string;
    date: string;
    city: string;
    title: string;
    location: string;
}

export interface CertificateItem {
    id: number;
    image_path: string;
    alt_text: string | null;
}

export interface PartnerItem {
    id: number;
    image_path: string;
    link: string | null;
    title: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    installationType?: string;
    message: string;
    locale: string;
}

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

type ApiFetchOptions = Omit<RequestInit, 'next'> & {
    tags?: string[];
    revalidate?: number;
};

async function apiFetch<T>(endpoint: string, options?: ApiFetchOptions): Promise<T> {
    const { tags, revalidate = 300, ...fetchOptions } = options ?? {};
    const url = `${API_BASE_URL}${endpoint}`;

    const res = await fetch(url, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': API_KEY,
            ...fetchOptions.headers,
        },
        next: { revalidate, tags },
    });

    if (!res.ok) {
        throw new Error(`API ${res.status}: ${res.statusText} — ${url}`);
    }

    const json: ApiResponse<T> = await res.json();
    if (!json.success) {
        throw new Error(json.message ?? 'API request failed');
    }

    return json.data;
}

export function getServices(locale: string): Promise<ServiceItem[]> {
    return apiFetch<ServiceItem[]>(`/services/get.php?locale=${locale}`, {
        tags: ['services'],
    });
}

export function getProjects(locale: string): Promise<ProjectItem[]> {
    return apiFetch<ProjectItem[]>(`/projects/get.php?locale=${locale}`, {
        tags: ['projects'],
    });
}

export function getCertificates(): Promise<CertificateItem[]> {
    return apiFetch<CertificateItem[]>('/certificates/get.php', {
        tags: ['certificates'],
    });
}

export function getPartners(locale: string): Promise<PartnerItem[]> {
    return apiFetch<PartnerItem[]>(`/partners/get.php?locale=${locale}`, {
        tags: ['partners'],
    });
}
