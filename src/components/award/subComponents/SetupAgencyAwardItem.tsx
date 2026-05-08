import { awardDt } from '@/types/custom-dt';
import React from 'react';

const SetupAgencyAwardItem: React.FC<awardDt> = ({ label, title, description }) => {
    return (
        <div className="sa-award-item d-flex align-items-center justify-content-between">
            <div className="sa-award-item-left d-flex align-items-start">
                <span>{label}</span>
                <div>
                    <h4 className="sa-award-item-title">{title}</h4>
                    {description && <p className="sa-award-item-desc">{description}</p>}
                </div>
            </div>
        </div>
    );
};

export default SetupAgencyAwardItem;
