import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data";

export default function BookPage() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return <p>Book not found...</p>;
  }

  return (
    <>
      <h1>{volume.title}</h1>
    </>
  );
}
