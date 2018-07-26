'use strict';

/**
 * Savedjobs.js controller
 *
 * @description: A set of functions called "actions" for managing `Savedjobs`.
 */

module.exports = {

  /**
   * Retrieve savedjobs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.savedjobs.search(ctx.query);
    } else {
      return strapi.services.savedjobs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a savedjobs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.savedjobs.fetch(ctx.params);
  },

  /**
   * Count savedjobs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.savedjobs.count(ctx.query);
  },

  /**
   * Create a/an savedjobs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.savedjobs.add(ctx.request.body);
  },

  /**
   * Update a/an savedjobs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.savedjobs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an savedjobs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.savedjobs.remove(ctx.params);
  }
};
