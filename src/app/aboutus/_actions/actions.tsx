"use server";
import { z } from "zod";

const phoneRegex = /^\+380(\d{2}|\d{3})\d{7}$/;

const sendMessageSchema = z.object({
  name: z.string().min(3),
  phone: z.string().regex(phoneRegex, "Невірно вказаний номер, примір: +380630000000"),
  email: z.string().email("This is not valid email"),
  service: z.string(),
  message: z.string().min(3),
});

export async function sendMessage(formData: FormData) {
  const rawFormData = sendMessageSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
//TODO:  Отправляю данные на Nodemailer а так же делаю html для отрисовки в почте 
  console.log(rawFormData);
}
