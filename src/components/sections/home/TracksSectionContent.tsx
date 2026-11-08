"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiSearch } from "react-icons/fi"; 
import type { Track } from "@/types/track";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsLaptop, BsPaletteFill } from "react-icons/bs";

export default function TracksSectionContent({
  tracks,
  error,
}: { tracks: Track[]; error?: string }) {
  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    tracks.forEach((track) => track.skills.forEach((s) => skills.add(s)));
    return skills;
  }, [tracks]);

  const [selectedSkill, setSelectedSkill] = useState(() => {
    if (typeof window !== "undefined") {
      const persisted = localStorage.getItem("selectedTrackSkill");
      return persisted || undefined;
    }
    return undefined;
  });

  useEffect(() => {
    if (selectedSkill) {
      localStorage.setItem("selectedTrackSkill", selectedSkill);
    } else {
      localStorage.removeItem("selectedTrackSkill");
    }
  }, [selectedSkill]);

  const filteredTracks = selectedSkill
    ? tracks.filter((track) => track.skills.includes(selectedSkill))
    : tracks;

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
  };

  const handleClearFilter = () => {
    setSelectedSkill(undefined);
  };

  const trackConfig: Record<
    string,
    {
      icon: React.ReactNode;
    }
  > = {
    "research-discovery": {
      icon: <FaMagnifyingGlass size={24} />,
    },
    "design-creativity": {
      icon: <BsPaletteFill size={24} />,
    },
    development: {
      icon: <BsLaptop size={24} />,
    },
  };

  if (error) {
    return (
      <section id="tracks" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Tracks Section</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-google-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  if (!tracks || tracks.length === 0) {
    return (
      <section id="tracks" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center shadow-lg border border-gray-200">
          <div className="mb-8">
            <FiSearch
              className="w-12 h-12 mx-auto text-google-blue mb-4"
              size={48}
            />
          </div>

          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            No tracks found
          </h2>
          <p className="text-gray-500">
            No tracks are currently available. Please check back later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-google-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="tracks" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          - FIND YOUR STARTING POINT
        </span>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
          Many interests. One shared journey.
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Follow what excites you. Explore a track, then connect the dots with
          others.
        </p>

        {allSkills.size > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 align-middle justify-center">
            <span
              className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs rounded-md cursor-pointer"
              onClick={handleClearFilter}
              title="Clear filter"
            >
              See All
            </span>
            {Array.from(allSkills).map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer"
                style={{
                  backgroundColor:
                    skill.includes("Research") ||
                    skill.includes("Data analysis") ||
                    skill.includes("User research")
                      ? "rgba(66, 133, 244, 0.15)"
                      : skill.includes("UI/UX") ||
                        skill.includes("Visual design") ||
                        skill.includes("Prototyping") ||
                        skill.includes("Figma")
                          ? "rgba(251, 187, 4, 0.15)"
                          : skill.includes("Web development") ||
                              skill.includes("Mobile development") ||
                              skill.includes("Backend systems") ||
                              skill.includes("Cloud & APIs")
                                ? "rgba(52, 168, 83, 0.15)"
                                : "rgba(128, 128, 128, 0.15)",
                  borderColor:
                    skill.includes("Research") ||
                    skill.includes("Data analysis") ||
                    skill.includes("User research")
                      ? "rgba(66, 133, 244, 0.4)"
                      : skill.includes("UI/UX") ||
                        skill.includes("Visual design") ||
                        skill.includes("Prototyping") ||
                        skill.includes("Figma")
                          ? "rgba(251, 187, 4, 0.4)"
                          : skill.includes("Web development") ||
                              skill.includes("Mobile development") ||
                              skill.includes("Backend systems") ||
                              skill.includes("Cloud & APIs")
                                ? "rgba(52, 168, 83, 0.4)"
                                : "rgba(128, 128, 128, 0.4)",
                }}
                onClick={() => handleSkillSelect(skill)}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTracks.map((track, i) => {
          const config = trackConfig[track.id] || {
            icon: <FiBookOpen size={24} />,
          };
          return (
            <div
              key={track.id || i}
              className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${track.color}12`, color: track.color }}
              >
                {config.icon}
              </div>
              <span className="text-xs font-bold tracking-wider text-gray-400 mb-2">
                {track.tagline}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {track.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {track.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {track.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 font-medium text-sm hover:underline mt-auto"
                style={{ color: track.color }}
              >
                Explore this track <FiArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}