import { redirect } from "next/navigation";

export default async function AbonnementDigitalRedirection({ params }) {
  redirect(process.env.NEXT_PUBLIC_BACK_BASE_URL + "abonnement-digital.pdf");
}
