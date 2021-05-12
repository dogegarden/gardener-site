import { useEffect } from "react";
import { useRouter } from "next/router";

export default function error404() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  });
  return null;
}