"use client";

import { useCallback, useState } from "react";
import type { KitTagKey } from "@/lib/kit-tags";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

export function useSubscribe(tag?: KitTagKey) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [message, setMessage] = useState("");

  const submit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();

      const trimmed = email.trim();
      if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
        setStatus("error");
        setMessage("Please enter a valid email.");
        return;
      }

      setStatus("loading");
      setMessage("");

      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed, tag }),
        });

        const data = (await res.json().catch(() => ({}))) as { error?: string };

        if (!res.ok) {
          setStatus("error");
          setMessage(data?.error ?? "Subscription failed.");
          return;
        }

        setStatus("success");
        setMessage("You're in! Check your inbox.");
        setEmail("");
      } catch {
        setStatus("error");
        setMessage("Network error. Please try again.");
      }
    },
    [email, tag]
  );

  return { email, setEmail, status, message, submit };
}
