export const yupOption = () => {
  return { abortEarly: false }
}
export const validateForm = (schema, form) => {
  return schema.validate(form, yupOption()).catch((err) => {
    return Promise.reject(err)
  })
}
