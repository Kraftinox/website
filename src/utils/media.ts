const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? 'https://admin.kraftinox.com';

export const toMediaUrl = (path: string): string => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `${MEDIA_BASE}/${path.replace(/^\//, '')}`;
};
