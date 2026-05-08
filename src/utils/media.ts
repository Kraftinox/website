const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? 'https://kraftinox.prismaadmin.ro';

export const toMediaUrl = (path: string): string => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `${MEDIA_BASE}/${path.replace(/^\//, '')}`;
};
