import { apiFetch } from "@/lib/api";
import type { Track } from "@/types/track";
import TracksSectionContent from "./TracksSectionContent";

export default async function TracksSection({
  setError,
}: {
  setError?: (e: string) => void;
}) {
  let tracks: Track[] = [];

  try {
    const result = await apiFetch<Track[]>("/tracks");
    tracks = result.data;
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to load tracks";
    if (setError) setError(errorMessage);
  }

  return <TracksSectionContent tracks={tracks} />;
}