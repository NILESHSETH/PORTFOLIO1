import { codingProfiles } from "../constants/index.js";

const CodingProfiles = () => {
  return (
    <section className="c-space my-20" id="coding">
      <p className="head-text">Coding Profiles</p>
      <p className="text-white-600 mt-3 text-lg">
        Active across 4 platforms — 580+ problems solved
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {codingProfiles.map((profile) => (
          <a
            key={profile.id}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-black-300 bg-black-200 hover:-translate-y-3 transition-transform duration-300 ease-out cursor-pointer"
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
              style={{ background: profile.bg }}
            >
              <img
                src={profile.icon}
                alt={profile.platform}
                className="w-8 h-8 object-contain brightness-150 contrast-125 group-hover:brightness-200"
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-white font-semibold text-base">
                {profile.platform}
              </p>
              <p className="text-white-600 text-sm">{profile.handle}</p>
            </div>

            <div className="w-full h-px bg-black-300" />

            <div className="flex flex-col items-center gap-1">
              <p
                className="text-2xl font-bold"
                style={{ color: profile.color }}
              >
                {profile.stat}
              </p>
              <p className="text-white-600 text-xs">{profile.statLabel}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 p-5 rounded-2xl border border-black-300 bg-black-200">
        <div className="flex flex-col items-center">
          <p className="text-white text-3xl font-bold">580+</p>
          <p className="text-white-600 text-sm">
            Problems solved across all platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
