import { IMG_PATH } from "@/lib/util";
import Link from "next/link";
import Image from "next/image";
import { DataProps } from "@/lib/types";

interface Props {
  data: DataProps["results"];
  type?: string | undefined;
}

export default function PersonCard({ data, type }: Props) {
  return (
    <article className="w-full flex flex-col relative group">
      <Link href={`/people/${data.id}`} className="relative h-72 xl:h-80">
        <Image
          src={`${IMG_PATH}${data.profile_path}`}
          alt="person image"
          fill
          sizes="100vw"
          className="rounded-md object-cover"
        />
      </Link>
      <div>
        <Link href={`/people/${data.id}`}>
          <h5>{data.name}</h5>
        </Link>
      </div>
    </article>
  );
}
