'use strict';

/**
 * Jobs.js controller
 *
 * @description: A set of functions called "actions" for managing `Jobs`.
 */

module.exports = {

  /**
   * Retrieve jobs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.jobs.search(ctx.query);
    } else {
      return strapi.services.jobs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a jobs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.jobs.fetch(ctx.params);
  },

  /**
   * Count jobs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.jobs.count(ctx.query);
  },

  /**
   * Create a/an jobs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.jobs.add(ctx.request.body);
  },

  /**
   * Update a/an jobs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.jobs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an jobs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.jobs.remove(ctx.params);
  }
};
