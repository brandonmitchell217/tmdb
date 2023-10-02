import React from "react";
import { usePersonSocialQuery } from "@/app/GlobalRedux/api/personSlice";
import { spawn } from "child_process";
import Link from "next/link";
import { FacebookIcon } from "lucide-react";
import {
  FaFacebookSquare,
  FaImdb,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function PersonSocial({ id }: any) {
  const { data, error, isLoading, isSuccess } = usePersonSocialQuery(id);

  if (error) return null;

  //   console.log(data);
  return (
    <div className="flex items-center gap-4">
      {isLoading ? <span>Loading...</span> : null}

      {isSuccess ? (
        <>
          {data.facebook_id ? (
            <Link href={`https://www.facebook.com/${data.facebook_id}`}>
              <FaFacebookSquare size={32} />
            </Link>
          ) : null}

          {data.imdb_id ? (
            <Link href={`https://imdb.com/name/${data.imdb_id}`}>
              <FaImdb size={32} />
            </Link>
          ) : null}

          {data.instagram_id ? (
            <Link href={`https://instagram.com/${data.instagram_id}`}>
              <FaInstagram size={32} />
            </Link>
          ) : null}

          {data.twitter_id ? (
            <Link href={`https://twitter.com/${data.twitter_id}`}>
              <FaTwitterSquare size={32} />
            </Link>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
