'use strict';

/**
 * Listed.js controller
 *
 * @description: A set of functions called "actions" for managing `Listed`.
 */

module.exports = {

  /**
   * Retrieve listed records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.listed.search(ctx.query);
    } else {
      return strapi.services.listed.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a listed record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.listed.fetch(ctx.params);
  },

  /**
   * Count listed records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.listed.count(ctx.query);
  },

  /**
   * Create a/an listed record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.listed.add(ctx.request.body);
  },

  /**
   * Update a/an listed record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.listed.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an listed record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.listed.remove(ctx.params);
  }
};
