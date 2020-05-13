"use strict";

/**
 * Validate the configuration options and throw errors when the
 * config is not valid.
 */
class ConfigValidator
{
    static validateConfig(config)
    {
        if (config.gtmContainerId === undefined ||
            config.gtmContainerId === null) {
            throw "GTM container ID not set";
        }
    }
}

module.exports = ConfigValidator;
