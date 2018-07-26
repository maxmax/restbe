'use strict';

/**
 * Sendmessage.js controller
 *
 * @description: A set of functions called "actions" for managing `Sendmessage`.
 */

module.exports = {

  /**
   * Retrieve sendmessage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sendmessage.search(ctx.query);
    } else {
      return strapi.services.sendmessage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sendmessage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.sendmessage.fetch(ctx.params);
  },

  /**
   * Count sendmessage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sendmessage.count(ctx.query);
  },

  /**
   * Create a/an sendmessage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sendmessage.add(ctx.request.body);
  },

  /**
   * Update a/an sendmessage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sendmessage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sendmessage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sendmessage.remove(ctx.params);
  }
};
