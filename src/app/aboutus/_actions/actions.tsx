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
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactMessage(
  prevState: unknown,
  formData: FormData
) {
  const rawFormData = sendMessageSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  const data = rawFormData.data;
  if (!rawFormData.success) {
    console.log(rawFormData.error.formErrors.fieldErrors);
    return rawFormData.error.formErrors.fieldErrors;
  } else {
    if (data !== undefined) {
      let mailOptions = {
        from: "hi@demomailtrap.com",
        to: "leparker2024@gmail.com",
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
  const data = rawFormData.data;
  if (!rawFormData.success) {
    return rawFormData.error.formErrors.fieldErrors;
  } else {
    if (data !== undefined) {
      let mailOptions = {
        from: "hi@demomailtrap.com",
        to: "leparker2024@gmail.com",
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
