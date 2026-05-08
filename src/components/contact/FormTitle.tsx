"use client";
import { useDictionary } from '@/provider/DictionaryProvider';

export default function FormTitle() {
    const { form } = useDictionary();
    return (
        <h3 className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel">
            {form.title}
        </h3>
    );
}
