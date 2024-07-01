import { redirect } from "next/navigation";

export default function HomeHome() {
  redirect('/dashboard/main')
  return (
    <>
    <h1>Hola mundo desde Homepage</h1>
    </>
  );
}
