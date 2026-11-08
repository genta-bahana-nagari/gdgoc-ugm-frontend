import { apiFetch } from "@/lib/api";
import type { Track } from "@/types/track";
import TracksSectionContent from "./TracksSectionContent";

export default async function TracksSection({
  error,
  setError,
}: {
  error?: string;
  setError?: (e: string) => void;
}) {
  let tracks: Track[] = [];
  let errorMessage = "";

  try {
    const result = await apiFetch<Track[]>("/tracks");
    tracks = result.data;
  } catch (err: any) {
    errorMessage = err.message || "Failed to load tracks";
    if (setError) setError(errorMessage);
  }

  return <TracksSectionContent tracks={tracks} error={errorMessage} />;
}