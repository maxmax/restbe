'use strict';

/**
 * Paying.js controller
 *
 * @description: A set of functions called "actions" for managing `Paying`.
 */

module.exports = {

  /**
   * Retrieve paying records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.paying.search(ctx.query);
    } else {
      return strapi.services.paying.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a paying record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.paying.fetch(ctx.params);
  },

  /**
   * Count paying records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.paying.count(ctx.query);
  },

  /**
   * Create a/an paying record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.paying.add(ctx.request.body);
  },

  /**
   * Update a/an paying record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.paying.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an paying record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.paying.remove(ctx.params);
  }
};
