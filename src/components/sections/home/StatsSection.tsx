import { apiFetch } from "@/lib/api";
import { StatsData } from "@/types/stats";

export default async function StatsSection({
  error,
  setError,
}: {
  error?: string;
  setError?: (e: string) => void;
}) {
  let stats: StatsData;
  let errorMessage = "";

  try {
    const result = await apiFetch<StatsData>("/stats");
    stats = result.data;
  } catch (err: any) {
    errorMessage = err.message || "Failed to load stats";
    if (setError) setError(errorMessage);
    // Provide default stats so UI doesn't break
    stats = {
      community_members: 0,
      workshops_held: 0,
      projects_shipped: 0,
      active_tracks: 0,
      university: "GDGOC UGM",
      founded_year: 2025,
      tagline: "",
      social: {
        instagram: "",
        linkedin: "",
        github: "",
      },
      city: "",
      country: "",
    };
  }

  const data = stats;

  const statItems = [
    { label: "Active Members", value: `${data.community_members}+` },
    { label: "Workshops Held", value: `${data.workshops_held}+` },
    { label: "Projects Shipped", value: `${data.projects_shipped}+` },
    { label: "Learning Tracks", value: `${data.active_tracks}` },
  ];

  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${index !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                {item.value}
              </span>
              <span className="text-sm font-medium text-gray-500 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
