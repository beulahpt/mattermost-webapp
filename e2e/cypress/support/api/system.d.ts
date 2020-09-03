// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/// <reference types="cypress" />

// ***************************************************************
// Each command should be properly documented using JSDoc.
// See https://jsdoc.app/index.html for reference.
// Basic requirements for documentation are the following:
// - Meaningful description
// - Specific link to https://api.mattermost.com
// - Each parameter with `@params`
// - Return value with `@returns`
// - Example usage with `@example`
// Custom command should follow naming convention of having `api` prefix, e.g. `apiLogin`.
// ***************************************************************

declare namespace Cypress {
    interface Chainable<Subject = any> {

        /**
         * Get a subset of the server license needed by the client.
         * See https://api.mattermost.com/#tag/system/paths/~1license~1client/get
         * @returns {ClientLicense} `out.license` as `ClientLicense`
         *
         * @example
         *   cy.apiGetClientLicense().then(({license}) => {
         *       // do something with license
         *   });
         */
        apiGetClientLicense(): Chainable<ClientLicense>;

        /**
         * Verify if server has license for a certain feature and fail test if not found.
         * Upload a license if it does not exist.
         * @param {string} feature - feature to check, e.g. 'LDAP'
         * @returns {ClientLicense} `out.license` as `ClientLicense`
         *
         * @example
         *   cy.apiRequireLicenseForFeature('LDAP');
         */
        apiRequireLicenseForFeature(feature: string): Chainable<ClientLicense>;

        /**
         * Verify if server has license and fail test if not found.
         * Upload a license if it does not exist.
         * @returns {ClientLicense} `out.license` as `ClientLicense`
         *
         * @example
         *   cy.apiRequireLicense();
         */
        apiRequireLicense(): Chainable<ClientLicense>;

        /**
         * Upload a license to enable enterprise features.
         * See https://api.mattermost.com/#tag/system/paths/~1license/post
         * @param {String} filePath - path of the license file relative to fixtures folder
         * @returns {Response} response: Cypress-chainable response which should have successful HTTP status of 200 OK to continue or pass.
         *
         * @example
         *   const filePath = 'mattermost-license.txt';
         *   cy.apiUploadLicense(filePath);
         */
        apiUploadLicense(filePath: string): Chainable<Response>;

        /**
         * Remove the license file from the server. This will disable all enterprise features.
         * See https://api.mattermost.com/#tag/system/paths/~1license/delete
         * @returns {Response} response: Cypress-chainable response which should have successful HTTP status of 200 OK to continue or pass.
         *
         * @example
         *   cy.apiDeleteLicense();
         */
        apiDeleteLicense(): Chainable<Response>;

        /**
         * Update configuration.
         * See https://api.mattermost.com/#tag/system/paths/~1config/put
         * @param {AdminConfig} newConfig - new config
         * @returns {AdminConfig} `out.config` as `AdminConfig`
         *
         * @example
         *   cy.apiUpdateConfig().then(({config}) => {
         *       // do something with config
         *   });
         */
        apiUpdateConfig(newConfig: AdminConfig): Chainable<AdminConfig>;

        /**
         * Reload the configuration file to pick up on any changes made to it.
         * See https://api.mattermost.com/#tag/system/paths/~1config~1reload/post
         * @returns {AdminConfig} `out.config` as `AdminConfig`
         *
         * @example
         *   cy.apiReloadConfig().then(({config}) => {
         *       // do something with config
         *   });
         */
        apiReloadConfig(): Chainable<AdminConfig>;

        /**
         * Get configuration.
         * See https://api.mattermost.com/#tag/system/paths/~1config/get
         * @returns {AdminConfig} `out.config` as `AdminConfig`
         *
         * @example
         *   cy.apiGetConfig().then(({config}) => {
         *       // do something with config
         *   });
         */
        apiGetConfig(): Chainable<AdminConfig>;

        /**
         * Get analytics.
         * See https://api.mattermost.com/#tag/system/paths/~1analytics~1old/get
         * @returns {AnalyticsRow[]} `out.analytics` as `AnalyticsRow[]`
         *
         * @example
         *   cy.apiGetAnalytics().then(({analytics}) => {
         *       // do something with analytics
         *   });
         */
        apiGetAnalytics(): Chainable<AnalyticsRow[]>;

        /**
         * Invalidate all the caches.
         * See https://api.mattermost.com/#tag/system/paths/~1caches~1invalidate/post
         * @returns {Object} `out.data` as response status
         *
         * @example
         *   cy.apiInvalidateCache();
         */
        apiInvalidateCache(): Chainable<Record<string, any>>;

        /**
         * Delete the custom brand image.
         * See https://api.mattermost.com/#tag/brand/paths/~1brand~1image/delete
         * @returns {Response} response: Cypress-chainable response which should have either a successful HTTP status of 200 OK
         * or a 404 Not Found in case that the image didn't exists to continue or pass.
         *
         * @example
         *   cy.apiDeleteBrandImage();
         */
        apiDeleteBrandImage(): Chainable<Record<string, any>>;
    }
}
