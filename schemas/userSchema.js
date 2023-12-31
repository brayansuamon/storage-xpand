const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const createdAt = Joi.string().isoDate();
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  id,
  email: email.required(),
  password: password.required(),
  createdAt,
  role: role.required(),
});

const updateUserSchema = Joi.object({
  email,
  password,
  createdAt,
  role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
