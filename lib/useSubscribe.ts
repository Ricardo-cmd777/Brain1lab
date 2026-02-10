"use client";

import { useCallback, useMemo, useState } from "react";
import type { KitTagKey } from "@/lib/kit-tags";

type Status = "idle" | "loading" | "success" | "error";

export function useSubscribe(tag: KitTagKey) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const placeholder = useMemo(() => {
    if (status === "loading") return "Subscribing…";
    if (status === "success") return "Done ✓";
    return "Email Address";
  }, [status]);

  const submit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();

      const trimmed = email.trim().toLowerCase();
      if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
        setStatus("error");
        setMessage("Please enter a valid email address.");
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

        const data = (await res.json().catch(() => ({}))) as {
          ok?: boolean;
          code?: string;
          error?: string;
          message?: string;
        };

        if (!res.ok || !data.ok) {
          setStatus("error");
          setMessage(data.error || data.message || "Subscription failed. Try again.");
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

  return { email, setEmail, status, message, placeholder, submit };
}
