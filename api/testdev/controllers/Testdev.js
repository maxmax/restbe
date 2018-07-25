'use strict';

/**
 * Testdev.js controller
 *
 * @description: A set of functions called "actions" for managing `Testdev`.
 */

module.exports = {

  /**
   * Retrieve testdev records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testdev.search(ctx.query);
    } else {
      return strapi.services.testdev.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testdev record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.testdev.fetch(ctx.params);
  },

  /**
   * Count testdev records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testdev.count(ctx.query);
  },

  /**
   * Create a/an testdev record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testdev.add(ctx.request.body);
  },

  /**
   * Update a/an testdev record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testdev.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testdev record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testdev.remove(ctx.params);
  }
};
