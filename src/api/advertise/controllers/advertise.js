'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");
/**
 * advertise controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::advertise.advertise',({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: "deep",
        };
        const { data } = await super.find(ctx);
        return removeAttrsAndId(removeTime(data));
    },
}));
