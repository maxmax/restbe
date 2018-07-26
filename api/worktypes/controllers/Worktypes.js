'use strict';

/**
 * Worktypes.js controller
 *
 * @description: A set of functions called "actions" for managing `Worktypes`.
 */

module.exports = {

  /**
   * Retrieve worktypes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.worktypes.search(ctx.query);
    } else {
      return strapi.services.worktypes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a worktypes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.worktypes.fetch(ctx.params);
  },

  /**
   * Count worktypes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.worktypes.count(ctx.query);
  },

  /**
   * Create a/an worktypes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.worktypes.add(ctx.request.body);
  },

  /**
   * Update a/an worktypes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.worktypes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an worktypes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.worktypes.remove(ctx.params);
  }
};
