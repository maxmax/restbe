'use strict';

/**
 * Employers.js controller
 *
 * @description: A set of functions called "actions" for managing `Employers`.
 */

module.exports = {

  /**
   * Retrieve employers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.employers.search(ctx.query);
    } else {
      return strapi.services.employers.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a employers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.employers.fetch(ctx.params);
  },

  /**
   * Count employers records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.employers.count(ctx.query);
  },

  /**
   * Create a/an employers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.employers.add(ctx.request.body);
  },

  /**
   * Update a/an employers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.employers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an employers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.employers.remove(ctx.params);
  }
};
