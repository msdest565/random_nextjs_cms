'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");
/**
 * writer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::writer.writer',({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
        };
        const { data } = await super.find(ctx);
        return removeAttrsAndId(removeTime(data));
    },
}));
