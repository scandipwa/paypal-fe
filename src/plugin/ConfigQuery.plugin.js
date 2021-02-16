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
// eslint-disable-next-line no-unused-vars
export const addPaypalFields = (args, callback, instance) => ([
    ...callback(...args),
    'paypal_sandbox_flag',
    'paypal_client_id'
]);

export default {
    'Query/Config': {
        'member-function': {
            _getStoreConfigFields: addPaypalFields
        }
    }
};
