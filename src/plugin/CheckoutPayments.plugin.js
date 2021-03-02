/* eslint-disable */
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
import PayPal from '../component/PayPal';
import { PAYPAL_EXPRESS, PAYPAL_EXPRESS_CREDIT } from '../component/PayPal/PayPal.config';

export const renderPayPal = (instance) => {
    const {
        selectedPaymentCode,
        setLoading,
        setDetailsStep
    } = instance.props;

    return (
        <PayPal
          setLoading={ setLoading }
          setDetailsStep={ setDetailsStep }
          selectedPaymentCode={ selectedPaymentCode }
        />
    );
};

export const paymentRenderMap = (originalMember, instance) => ({
    ...originalMember,
    [PAYPAL_EXPRESS_CREDIT]: instance.renderNotSupported.bind(instance),
    [PAYPAL_EXPRESS]: () => renderPayPal(instance)
});

export const componentDidUpdate = (args, callback = () => {}, instance) => {
    const [prevProps] = args;
    const { selectedPaymentCode, setOrderButtonVisibility } = instance.props;
    const { selectedPaymentCode: prevSelectedPaymentCode } = prevProps;

    if (selectedPaymentCode !== prevSelectedPaymentCode) {
        if (selectedPaymentCode === PAYPAL_EXPRESS) {
            setOrderButtonVisibility(false);
        }

        if (prevSelectedPaymentCode === PAYPAL_EXPRESS) {
            setOrderButtonVisibility(true);
        }
    }

    callback.apply(instance, args);
};

export const componentDidMount = (args, callback, instance) => {
    const { selectedPaymentCode, setOrderButtonVisibility } = instance.props;

    callback(...args);

    if (selectedPaymentCode === PAYPAL_EXPRESS) {
        setOrderButtonVisibility(false);
    }
};

export const config = {
    'Component/CheckoutPayments/Component': {
        'member-function': {
            componentDidUpdate,
            componentDidMount
        },
        'member-property': {
            paymentRenderMap
        }
    }
};

export default config;
