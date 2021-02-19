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
export const addBaseFields = (args, callback) => [
    ...callback(...args),
    'base_grand_total',
    'base_currency_code'
];

export default {
    'Query/Cart': {
        'member-function': {
            _getCartTotalsFields: addBaseFields
        }
    }
};
