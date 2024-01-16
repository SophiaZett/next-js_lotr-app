import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volume/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
