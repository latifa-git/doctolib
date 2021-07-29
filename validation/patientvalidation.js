const Joi = require("@hapi/joi");

//register vaidation for the patient
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3), 
    email: Joi.string().min(6).email().required(),
    address: Joi.string(),
    password: Joi.string().min(3).required(),
    phone: Joi.string()
      .length(8)
      .pattern(/^[0-9]+$/)
      .messages({
        "string.length": "phone number not valid",
        "string.pattern": "phone number not valid",
      }),
  });
  return schema.validate(data);
};

//login validation for the patient
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };
