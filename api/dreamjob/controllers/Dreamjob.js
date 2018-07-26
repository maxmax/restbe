'use strict';

/**
 * Dreamjob.js controller
 *
 * @description: A set of functions called "actions" for managing `Dreamjob`.
 */

module.exports = {

  /**
   * Retrieve dreamjob records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.dreamjob.search(ctx.query);
    } else {
      return strapi.services.dreamjob.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a dreamjob record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.dreamjob.fetch(ctx.params);
  },

  /**
   * Count dreamjob records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dreamjob.count(ctx.query);
  },

  /**
   * Create a/an dreamjob record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dreamjob.add(ctx.request.body);
  },

  /**
   * Update a/an dreamjob record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dreamjob.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dreamjob record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dreamjob.remove(ctx.params);
  }
};
