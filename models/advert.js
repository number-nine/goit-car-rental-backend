const { Schema, model } = require("mongoose");
const Joi = require("joi");

const advertSchema = new Schema(
  {
    year: {
      type: Date,
      require: [true, "Define production year"],
    },
    make: {
      type: String,
      required: [true, "make is required"],
    },
    model: {
      type: String,
      required: [true, "Define model"],
    },
    type: {
      type: String,
      required: [true, "Define type"],
    },
    img: {
      type: String,
      required: [true, "Define car image"],
    },
    description: {
      type: String,
      required: [true, "Define car description"],
    },
    fuelConsumption: {
      type: String,
      required: [true, "Define car fuel consumption"],
    },
    engineSize: {
      type: String,
      required: [true, "Define car's engine size"],
    },
    rentalPrice: {
      type: Number,
      required: [true, "Define rental price"],
    },
    rentalCompany: {
      type: String,
      required: [true, "Define rental company"],
    },
    address: {
      type: String,
      required: [true, "Define adress"],
    },
    rentalConditions: {
      type: String,
      required: [true, "Define rental conditions"],
    },
    mileage: {
      type: Number,
      required: [true, "Define car mileage"],
    },
    accessories: {
      type: [String],
      required: [true, "Define car accessories"],
    },
    functionalities: {
      type: [String],
      required: [true, "Define car functionalities"],
    },
  },
  { versionKey: false, timestamps: false }
);


const Advert = model("advert", advertSchema);

const queryFilters = Joi.object({
  rentalPrice: Joi.number().greater(0),
  mileageFrom: Joi.number().greater(0),
  mileageTo: Joi.number().greater(0),
  page: Joi.number().greater(0),
});

const schemas = {
  queryFilters,
};

module.exports = {
  schemas,
  Advert,
};
