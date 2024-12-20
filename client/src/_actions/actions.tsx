"use server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const phoneRegex = /^\+380(\d{2}|\d{3})\d{7}$/;

const sendMessageSchema = z.object({
  name: z.string().min(3),
  phone: z
    .string()
    .regex(phoneRegex, "Невірно вказаний номер, примір: +380630000000"),
  email: z.string().email("This is not valid email"),
  service: z.string(),
  message: z.string().min(3),
});

const sendCallBackMessSchema = z.object({
  name: z.string().min(3),
  phone: z
    .string()
    .regex(phoneRegex, "Невірно вказаний номер, примір: +380630000000"),
});

let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM_SEND,
    pass: process.env.APP_PASSWORD,
  },
});

export async function sendContactMessage(
  prevState: unknown,
  formData: FormData
) {
  const rawFormData = sendMessageSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!rawFormData.success) {
    return rawFormData.error.formErrors.fieldErrors;
  } else {
    const data = rawFormData.data;
    if (data !== undefined) {
      let mailOptions = {
        from: "Udocument",
        to: process.env.EMAIL_TO_SEND,
        subject: `Надіслано від ${data?.name} тема ${data?.service}`,
        html: `<h1>Надіслано від ${data.name}</h1>
              <h3>Email: ${data.email}</h3>
              <h3>Телефон: ${data.phone}</h3>
              <h3>Повідомлення: ${data.message}</h3>`,
      };
      transport.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
    revalidatePath("/aboutus");
    redirect("/thankyou");
  }
}

export async function sendCallBackMessage(
  prevState: unknown,
  formData: FormData
) {
  const rawFormData = sendCallBackMessSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!rawFormData.success) {
    return rawFormData.error.formErrors.fieldErrors;
  } else {
    const data = rawFormData.data;
    if (data !== undefined) {
      let mailOptions = {
        from: "Udocument",
        to: process.env.EMAIL_TO_SEND,
        subject: `Надіслано від ${data?.name} замовлення зворотній звонок`,
        html: `<h1>Надіслано від ${data.name}</h1>
              <h3>Телефон: ${data.phone}</h3>
              <h3>Повідомлення: Клієнт запросив зворотній дзвінок</h3>`,
      };
      try {
        transport.sendMail(mailOptions, function (error, info) {
          if (error) {
            throw new Error(`${error}`);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      } catch (error) {
        throw new Error(`${error}`);
      }
    }

    revalidatePath("/");
    revalidatePath("/aboutus");
    redirect("/thankyou");
  }
}
