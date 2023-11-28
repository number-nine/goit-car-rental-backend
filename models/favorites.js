const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const { handleMongooseError } = require("../helpers");

const favoriteSchema = new Schema(
  {
    vehicle_id: {
      type: Schema.Types.ObjectId,
      ref: "advert",
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

favoriteSchema.post("save", handleMongooseError);

const Favorite = model("favorite", favoriteSchema);

const addFavorite = Joi.object({
  id: Joi.objectId().required(),
});

const schemas = {
  addFavorite,
};

module.exports = {
  schemas,
  Favorite,
};
