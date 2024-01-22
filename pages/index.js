import Link from "next/link";
import { introduction, volumes } from "../resources/lib/data";
import BookPage from "./volumes/[slug]";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href={`/volume/${volumes.slug}`}>{volumes.title}</Link>
        </li>
      </ul>
    </div>
  );
}
