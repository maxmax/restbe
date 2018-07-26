'use strict';

/**
 * Countries.js controller
 *
 * @description: A set of functions called "actions" for managing `Countries`.
 */

module.exports = {

  /**
   * Retrieve countries records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.countries.search(ctx.query);
    } else {
      return strapi.services.countries.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a countries record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.countries.fetch(ctx.params);
  },

  /**
   * Count countries records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.countries.count(ctx.query);
  },

  /**
   * Create a/an countries record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.countries.add(ctx.request.body);
  },

  /**
   * Update a/an countries record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.countries.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an countries record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.countries.remove(ctx.params);
  }
};
