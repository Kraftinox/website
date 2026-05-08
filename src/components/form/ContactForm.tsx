"use client";
import { useId, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDictionary } from '@/provider/DictionaryProvider';
import { ArrowIconTwo } from '@/svg';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { submitContactAction } from '@/app/actions/contact';

interface FormValues {
    name: string;
    email: string;
    phone: string;
    company: string;
    installationType: string;
    message: string;
    gdpr: boolean;
}

const ContactForm = () => {
    const { form } = useDictionary();
    const uid = useId();
    const id = (field: string) => `${uid}-${field}`;
    const params = useParams();
    const locale = (params?.locale as string) ?? 'ro';
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true);
        try {
            await submitContactAction({
                name: data.name,
                email: data.email,
                phone: data.phone,
                company: data.company || undefined,
                installationType: data.installationType || undefined,
                message: data.message,
                locale,
            });
            router.push(`/${locale}/thank-you`);
        } catch {
            setIsSubmitting(false);
        }
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">

                <div className="col-lg-6">
                    <div className="tp-contact-us-form-input mb-30">
                        <label htmlFor={id('name')}>{form.name.label}</label>
                        <input
                            id={id('name')}
                            type="text"
                            placeholder={form.name.placeholder}
                            aria-describedby={errors.name ? id('name-err') : undefined}
                            {...register('name', { required: form.name.error })}
                        />
                        {errors.name && <p id={id('name-err')} className="error-text" role="alert">{errors.name.message}</p>}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tp-contact-us-form-input mb-30">
                        <label htmlFor={id('email')}>{form.email.label}</label>
                        <input
                            id={id('email')}
                            type="email"
                            placeholder={form.email.placeholder}
                            aria-describedby={errors.email ? id('email-err') : undefined}
                            {...register('email', {
                                required: form.email.errorRequired,
                                pattern: { value: /^\S+@\S+$/i, message: form.email.errorInvalid },
                            })}
                        />
                        {errors.email && <p id={id('email-err')} className="error-text" role="alert">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tp-contact-us-form-input mb-30">
                        <label htmlFor={id('phone')}>{form.phone.label}</label>
                        <input
                            id={id('phone')}
                            type="tel"
                            placeholder={form.phone.placeholder}
                            aria-describedby={errors.phone ? id('phone-err') : undefined}
                            {...register('phone', {
                                required: form.phone.errorRequired,
                                minLength: { value: 7, message: form.phone.errorShort },
                            })}
                        />
                        {errors.phone && <p id={id('phone-err')} className="error-text" role="alert">{errors.phone.message}</p>}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tp-contact-us-form-input mb-30">
                        <label htmlFor={id('company')}>{form.company.label}</label>
                        <input
                            id={id('company')}
                            type="text"
                            placeholder={form.company.placeholder}
                            {...register('company')}
                        />
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="tp-contact-us-form-input mb-30">
                        <label htmlFor={id('type')}>{form.installationType.label}</label>
                        <select
                            id={id('type')}
                            {...register('installationType')}
                        >
                            <option value="">{form.installationType.placeholder}</option>
                            {form.types.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="tp-contact-us-form-input mb-30">
                        <label htmlFor={id('message')}>{form.message.label}</label>
                        <textarea
                            id={id('message')}
                            placeholder={form.message.placeholder}
                            aria-describedby={errors.message ? id('message-err') : undefined}
                            {...register('message', {
                                required: form.message.errorRequired,
                                minLength: { value: 10, message: form.message.errorShort },
                            })}
                        />
                        {errors.message && <p id={id('message-err')} className="error-text" role="alert">{errors.message.message}</p>}
                    </div>

                    <div className="kf-gdpr-wrap mb-25">
                        <label className="kf-gdpr-label" htmlFor={id('gdpr')}>
                            <input
                                id={id('gdpr')}
                                type="checkbox"
                                aria-describedby={errors.gdpr ? id('gdpr-err') : undefined}
                                {...register('gdpr', {
                                    validate: (v) => v === true || form.gdpr.error,
                                })}
                            />
                            <span className="kf-gdpr-text">
                                {form.gdpr.text}{' '}
                                <Link
                                    href={`/${locale}/termeni-si-conditii`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="kf-gdpr-link"
                                >
                                    {form.gdpr.linkText}
                                </Link>
                                .
                            </span>
                        </label>
                        {errors.gdpr && (
                            <p id={id('gdpr-err')} className="error-text" role="alert">
                                {errors.gdpr.message}
                            </p>
                        )}
                    </div>

                    <div className="tp-contact-us-form-btn">
                        <button type="submit" className="tp-btn-green tp-btn-anim" disabled={isSubmitting}>
                            <span className="tp-btn-text">{isSubmitting ? '...' : form.submit}</span>
                            <span><ArrowIconTwo width="11" height="12" /></span>
                        </button>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default ContactForm;
