import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kalkan Doctor",
    short_name: "Kalkan Doctor",
    description:
      "24/7 English-speaking private medical assistance in Kalkan, Kaş, Patara and Kaputaş.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e00016",
    orientation: "portrait-primary",
    categories: ["medical", "health", "business"],
    lang: "en",
  };
}
