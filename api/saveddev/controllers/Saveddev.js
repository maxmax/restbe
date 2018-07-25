'use strict';

/**
 * Saveddev.js controller
 *
 * @description: A set of functions called "actions" for managing `Saveddev`.
 */

module.exports = {

  /**
   * Retrieve saveddev records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.saveddev.search(ctx.query);
    } else {
      return strapi.services.saveddev.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a saveddev record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.saveddev.fetch(ctx.params);
  },

  /**
   * Count saveddev records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.saveddev.count(ctx.query);
  },

  /**
   * Create a/an saveddev record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.saveddev.add(ctx.request.body);
  },

  /**
   * Update a/an saveddev record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.saveddev.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an saveddev record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.saveddev.remove(ctx.params);
  }
};
