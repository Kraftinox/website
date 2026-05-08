import { ServiceItemDt } from '@/types/custom-dt';
import Image from 'next/image';
import React from 'react';

interface serviceProps {
    service: ServiceItemDt
}

const HomeSingleServiceItem: React.FC<serviceProps> = ({ service }) => {
    return (
        <div className="tp-service-item mb-30 h-100 w-100 d-flex flex-column">
            <div className="tp-service-item-icon">
            {service.image && (
                <Image width={120} height={120} src={service.image} alt={service.title} />
            )}
            </div>
            <h4 className="tp-service-item-title">{service.title}</h4>
            <p className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.description }} />
        </div>
    );
};
export default HomeSingleServiceItem;
