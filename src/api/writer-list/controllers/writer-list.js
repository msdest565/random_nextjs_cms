'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");
/**
 * writer-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::writer-list.writer-list', ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: "deep",
      };
      const { data } = await super.find(ctx);
      return removeAttrsAndId(removeTime(data[0]));
    },
  }));
