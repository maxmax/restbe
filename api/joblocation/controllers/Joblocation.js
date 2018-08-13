'use strict';

/**
 * Joblocation.js controller
 *
 * @description: A set of functions called "actions" for managing `Joblocation`.
 */

module.exports = {

  /**
   * Retrieve joblocation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.joblocation.search(ctx.query);
    } else {
      return strapi.services.joblocation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a joblocation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.joblocation.fetch(ctx.params);
  },

  /**
   * Count joblocation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.joblocation.count(ctx.query);
  },

  /**
   * Create a/an joblocation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.joblocation.add(ctx.request.body);
  },

  /**
   * Update a/an joblocation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.joblocation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an joblocation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.joblocation.remove(ctx.params);
  }
};
