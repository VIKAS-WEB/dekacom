import { redirect } from "next/navigation";

export default async function AbonnementDigitalRedirection({ params }) {
  redirect(process.env.NEXT_PUBLIC_FRONT_BASE_URL + "CGV");
}
