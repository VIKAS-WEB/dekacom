import { redirect } from "next/navigation";

export default async function FrRedirection({ params }) {
  redirect("/");
}
