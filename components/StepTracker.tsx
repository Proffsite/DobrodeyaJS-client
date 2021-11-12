import React from 'react';

interface StepTrackerProps {
    activeStep: number;
}

const steps = ['Информация о животном', 'Загрузите фотографию', 'Загрузите сам звук']

const StepTracker: React.FC<StepTrackerProps> = ({ activeStep, children }) => {

    const className = (step) =>
        activeStep === step ? 'is-active-step' : step < activeStep ? 'is-done-step' : '';
    return (

        <div className="checkout-header">
            <ul className="checkout-header-menu">
                <li className={`checkout-header-list ${className(1)}`}>
                    <div className="checkout-header-item">
                        <div className="checkout-header-icon">
                            <h4 className="checkout-header-step">1</h4>
                        </div>
                        <h6 className="checkout-header-subtitle"> Order Summary</h6>
                    </div>
                </li>
                <li className={`checkout-header-list ${className(2)}`}>
                    <div className="checkout-header-item">
                        <div className="checkout-header-icon">
                            <h4 className="checkout-header-step">2</h4>
                        </div>
                        <h6 className="checkout-header-subtitle">
                            Shipping Details and Confirm Order
                        </h6>
                    </div>
                </li>
                <li className={`checkout-header-list ${className(3)}`}>
                    <div className="checkout-header-item">
                        <div className="checkout-header-icon">
                            <h4 className="checkout-header-step">3</h4>
                        </div>
                        <h6 className="checkout-header-subtitle">Оплата заказа</h6>
                        {children}
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default StepTracker;