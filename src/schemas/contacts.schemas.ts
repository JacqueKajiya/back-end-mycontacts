import { z } from "zod"

const contactSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
})

const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()

const contactsSchemaResponse = z.array(contactSchema)

export { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactsSchemaResponse }