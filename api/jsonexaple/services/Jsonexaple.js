'use strict';

/**
 * Jsonexaple.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all jsonexaples.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('jsonexaple', params);
    // Select field to populate.
    const populate = Jsonexaple.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Jsonexaple
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  },

  /**
   * Promise to fetch a/an jsonexaple.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Jsonexaple.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Jsonexaple
      .findOne(_.pick(params, _.keys(Jsonexaple.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count jsonexaples.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('jsonexaple', params);

    return Jsonexaple
      .count()
      .where(filters.where);
  },

  /**
   * Promise to add a/an jsonexaple.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Jsonexaple.associations.map(ast => ast.alias));
    const data = _.omit(values, Jsonexaple.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Jsonexaple.create(data);

    // Create relational data and return the entry.
    return Jsonexaple.updateRelations({ id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an jsonexaple.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Jsonexaple.associations.map(a => a.alias));
    const data = _.omit(values, Jsonexaple.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Jsonexaple.update(params, data, { multi: true });

    // Update relational data and return the entry.
    return Jsonexaple.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an jsonexaple.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Jsonexaple.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Jsonexaple
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Jsonexaple.associations.map(async association => {
        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an jsonexaple.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('jsonexaple', params);
    // Select field to populate.
    const populate = Jsonexaple.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Jsonexaple.attributes).reduce((acc, curr) => {
      switch (Jsonexaple.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Jsonexaple
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
