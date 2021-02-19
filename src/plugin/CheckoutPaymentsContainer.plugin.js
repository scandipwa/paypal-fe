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
import { PAYPAL_EXPRESS_CREDIT } from '../component/PayPal/PayPal.config';

export const selectPaymentMethod = (args, callback, instance) => {
    const { setOrderButtonEnableStatus } = instance.props;
    const [something] = args;
    const { code } = something;

    callback.apply(instance, args);

    if (code === PAYPAL_EXPRESS_CREDIT) {
        setOrderButtonEnableStatus(false);
    }
};

export const config = {
    'Component/CheckoutPayments/Container': {
        'member-function': {
            selectPaymentMethod
        }
    }
};

export default config;
