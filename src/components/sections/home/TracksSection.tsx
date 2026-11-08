import { apiFetch } from "@/lib/api";
import type { Track } from "@/types/track";
import TracksSectionContent from "./TracksSectionContent";

export default async function TracksSection() {
  const result = await apiFetch<Track[]>("/tracks");
  const tracks = result.data;

  return <TracksSectionContent tracks={tracks} />;
}