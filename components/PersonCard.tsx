import { IMG_PATH } from "@/lib/util";
import Link from "next/link";
import Image from "next/image";
import { DataProps } from "@/lib/types";
import PersonImgPlaceholder from "./PersonImgPlaceholder";

interface Props {
  data: DataProps["results"];
  type?: string | undefined;
}
// TODO: Fix this
export default function PersonCard({ data, type }: Props) {
  return (
    <article className="w-full flex flex-col relative group">
      <Link href={`/people/${data.id}`} className="relative h-72 xl:h-80">
        {data.profile_path ? (
          <Image
            src={`${IMG_PATH}${data.profile_path}`}
            alt="person image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md object-cover"
            priority={true}
          />
        ) : (
          <PersonImgPlaceholder
            className="h-full w-full absolute rounded-md"
            size={54}
          />
        )}
      </Link>
      <div>
        <Link href={`/people/${data.id}`}>
          <h5>{data.name}</h5>
        </Link>
      </div>
    </article>
  );
}
