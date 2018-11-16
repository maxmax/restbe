'use strict';

/**
 * Messages.js controller
 *
 * @description: A set of functions called "actions" for managing `Messages`.
 */

module.exports = {

  /**
   * Retrieve messages records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.messages.search(ctx.query);
    } else {
      return strapi.services.messages.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a messages record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.messages.fetch(ctx.params);
  },

  /**
   * Count messages records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.messages.count(ctx.query);
  },

  /**
   * Create a/an messages record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.messages.add(ctx.request.body);
  },

  /**
   * Update a/an messages record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.messages.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an messages record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.messages.remove(ctx.params);
  }
};
