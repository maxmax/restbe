'use strict';

/**
 * Jsonexaple.js controller
 *
 * @description: A set of functions called "actions" for managing `Jsonexaple`.
 */

module.exports = {

  /**
   * Retrieve jsonexaple records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.jsonexaple.search(ctx.query);
    } else {
      return strapi.services.jsonexaple.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a jsonexaple record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.jsonexaple.fetch(ctx.params);
  },

  /**
   * Count jsonexaple records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.jsonexaple.count(ctx.query);
  },

  /**
   * Create a/an jsonexaple record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.jsonexaple.add(ctx.request.body);
  },

  /**
   * Update a/an jsonexaple record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.jsonexaple.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an jsonexaple record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.jsonexaple.remove(ctx.params);
  }
};
