import axios from "axios";

class API {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }

  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayEntities) {
    arrayEntities.forEach(this.createEntity.bind(this));
  }

  createBasicCRUDEndpoints({ name }) {
    let endpoints = {};
    const resourceUrl = `${this.url}/${name}`;

    endpoints.findAll = ({ query } = {}) =>
      axios.get(resourceUrl, { params: { query } });

    endpoints.findOne = ({ id }) => axios.get(`${resourceUrl}/${id}`);

    endpoints.create = ({ toCreate }) => axios.post(`${resourceUrl}`, toCreate);

    endpoints.update = ({ toUpdate }) =>
      axios.put(`${resourceUrl}/${toUpdate.id}`, toUpdate);

    endpoints.delete = ({ id }) => axios.delete(`${resourceUrl}/${id}`);

    return endpoints;
  }
}

export default API;
