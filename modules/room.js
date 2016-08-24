module.exports = {

  setThinky: function(thinky) {
    this.thinky = thinky;
    return this;
  },

  setType: function(type) {
    this.type = type;
    return this;
  },

  createModel: function() {
    return this.setModel(this.thinky.createModel("interest_room", {
      id: this.type.string(),
      name: this.type.number(),
      range: this.type.string(),
      status: this.type.boolean(),
      location: this.type.point()
    }));
  },

  setModel: function(model) {
    this.model = model;
    return this;
  },

  Model: function() {
    return this.model;
  }

};