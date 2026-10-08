import { useEffect, useRef, useState } from "react";

import {
  Map as MapLibreMap,
  NavigationControl,
  AttributionControl,
  setWorkerUrl,
  type Map as MapInstance,
} from "maplibre-gl";

import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";

import "maplibre-gl/dist/maplibre-gl.css";

// ------------------------------------------------------
// MapLibre Vite worker setup
// ------------------------------------------------------

setWorkerUrl(workerUrl);

// ------------------------------------------------------
// Types
// ------------------------------------------------------

type Destination = {
  id: string;
  name: string;
  duration: string;
  position: [number, number];
};

// ------------------------------------------------------
// Locations
// ------------------------------------------------------

const PUDUCHERRY: [number, number] = [79.8083, 11.9416];

const destinations: Destination[] = [
  {
    id: "chennai",
    name: "Chennai",
    duration: "~3 hrs",
    position: [80.2707, 13.0827],
  },
  {
    id: "bangalore",
    name: "Bangalore",
    duration: "~6 hrs",
    position: [77.5946, 12.9716],
  },
  {
    id: "kerala",
    name: "Kerala",
    duration: "~9 hrs",
    position: [76.2711, 10.8505],
  },
  {
    id: "goa",
    name: "Goa",
    duration: "~14 hrs",
    position: [74.124, 15.2993],
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    duration: "~12 hrs",
    position: [78.4867, 17.385],
  },
];

// ------------------------------------------------------
// Component
// ------------------------------------------------------

const WhereWeGo = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const mapRef = useRef<MapInstance | null>(null);

  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  // ----------------------------------------------------
  // Initialize map
  // ----------------------------------------------------

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) {
      return;
    }

    const map = new MapLibreMap({
      container: mapContainer.current,

      // Clean OpenFreeMap style
      style: "https://tiles.openfreemap.org/styles/liberty",

      center: [78.2, 13.5],

      zoom: 5.6,

      minZoom: 5,

      maxZoom: 9,

      // We add attribution manually
      attributionControl: false,

      dragRotate: false,

      pitchWithRotate: false,

      touchPitch: false,
    });

    mapRef.current = map;

    // --------------------------------------------------
    // Controls
    // --------------------------------------------------

    map.addControl(
      new NavigationControl({
        showCompass: false,
        showZoom: true,
      }),
      "bottom-right"
    );

    map.addControl(
      new AttributionControl({
        compact: true,
      }),
      "bottom-right"
    );

    // Prevent page scrolling when mouse is over map
    map.scrollZoom.disable();

    // --------------------------------------------------
    // Map loaded
    // --------------------------------------------------

    map.on("load", () => {
      // ------------------------------------------------
      // ROUTES
      // ------------------------------------------------

      const routeFeatures = destinations.map((destination) => ({
        type: "Feature" as const,

        properties: {
          id: destination.id,
        },

        geometry: {
          type: "LineString" as const,

          coordinates: [PUDUCHERRY, destination.position],
        },
      }));

      map.addSource("karai-routes", {
        type: "geojson",

        data: {
          type: "FeatureCollection",

          features: routeFeatures,
        },
      });

      // ------------------------------------------------
      // Normal route lines
      // ------------------------------------------------

      map.addLayer({
        id: "karai-route-lines",

        type: "line",

        source: "karai-routes",

        layout: {
          "line-cap": "round",
          "line-join": "round",
        },

        paint: {
          "line-color": "#0797a0",

          "line-width": 2.2,

          "line-opacity": 0.28,

          "line-dasharray": [2, 2],
        },
      });

      // ------------------------------------------------
      // Active highlighted route
      // ------------------------------------------------

      map.addLayer({
        id: "karai-active-route",

        type: "line",

        source: "karai-routes",

        filter: ["==", ["get", "id"], ""],

        layout: {
          "line-cap": "round",
          "line-join": "round",
        },

        paint: {
          "line-color": "#009fa8",

          "line-width": 4,

          "line-opacity": 1,

          "line-dasharray": [1, 0],
        },
      });

      // ------------------------------------------------
      // Destination points
      // ------------------------------------------------

      map.addSource("karai-destinations", {
        type: "geojson",

        data: {
          type: "FeatureCollection",

          features: destinations.map((destination) => ({
            type: "Feature" as const,

            properties: {
              id: destination.id,

              name: destination.name,
            },

            geometry: {
              type: "Point" as const,

              coordinates: destination.position,
            },
          })),
        },
      });

      // Outer destination circle
      map.addLayer({
        id: "destination-halo",

        type: "circle",

        source: "karai-destinations",

        paint: {
          "circle-radius": 8,

          "circle-color": "#ffffff",

          "circle-opacity": 0.95,

          "circle-stroke-width": 1.5,

          "circle-stroke-color": "#0797a0",
        },
      });

      // Destination dot
      map.addLayer({
        id: "destination-points",

        type: "circle",

        source: "karai-destinations",

        paint: {
          "circle-radius": 4.5,

          "circle-color": "#0797a0",

          "circle-opacity": 1,
        },
      });

      // ------------------------------------------------
      // Puducherry source
      // ------------------------------------------------

      map.addSource("puducherry", {
        type: "geojson",

        data: {
          type: "Feature",

          properties: {},

          geometry: {
            type: "Point",

            coordinates: PUDUCHERRY,
          },
        },
      });

      // Puducherry outer ring
      map.addLayer({
        id: "puducherry-ring",

        type: "circle",

        source: "puducherry",

        paint: {
          "circle-radius": 12,

          "circle-color": "#ffffff",

          "circle-opacity": 0.95,

          "circle-stroke-width": 2,

          "circle-stroke-color": "#0797a0",
        },
      });

      // Puducherry center
      map.addLayer({
        id: "puducherry-point",

        type: "circle",

        source: "puducherry",

        paint: {
          "circle-radius": 6.5,

          "circle-color": "#0797a0",

          "circle-stroke-width": 2,

          "circle-stroke-color": "#ffffff",
        },
      });

      // ------------------------------------------------
      // Map destination hover
      // ------------------------------------------------

      map.on("mouseenter", "destination-points", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "destination-points", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    // --------------------------------------------------
    // Cleanup
    // --------------------------------------------------

    return () => {
      map.remove();

      mapRef.current = null;
    };
  }, []);

  // ----------------------------------------------------
  // Update active route
  // ----------------------------------------------------

  useEffect(() => {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    if (!map.isStyleLoaded()) {
      return;
    }

    if (!map.getLayer("karai-route-lines")) {
      return;
    }

    if (!map.getLayer("karai-active-route")) {
      return;
    }

    // Fade normal routes when one is active
    map.setPaintProperty(
      "karai-route-lines",
      "line-opacity",
      activeRoute ? 0.08 : 0.28
    );

    // Highlight selected route
    map.setFilter("karai-active-route", [
      "==",
      ["get", "id"],
      activeRoute ?? "",
    ]);
  }, [activeRoute]);

  // ----------------------------------------------------
  // Handle left-side route hover
  // ----------------------------------------------------

  const handleRouteEnter = (id: string) => {
    setActiveRoute(id);
  };

  const handleRouteLeave = () => {
    setActiveRoute(null);
  };

  // ----------------------------------------------------
  // Render
  // ----------------------------------------------------

  return (
    <section
      id="where-we-go"
      className="w-full overflow-hidden bg-[#f7f5f1] text-[#111518]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-[64px] sm:px-6 lg:px-0 lg:py-[72px]">
        <div className="grid grid-cols-1 items-stretch gap-[36px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-[50px]">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="flex min-h-[520px] flex-col">
            {/* Eyebrow */}

            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#008c95]">
                Reach
              </p>

              {/* Heading */}

              <h2 className="max-w-[620px] text-[44px] font-medium leading-[1.02] tracking-[-0.04em] text-[#111518] sm:text-[50px] lg:text-[54px]">
                Go beyond the map.
              </h2>

              {/* Description */}

              <p className="mt-7 max-w-[610px] text-[16px] leading-[1.65] text-[#60748a] sm:text-[17px]">
                From Puducherry, the whole of South India opens up. Hover a
                destination to see the route — and wherever else you're
                headed, we'll plan it with you.
              </p>

              {/* Routes */}

              <div className="mt-10">
                {destinations.map((destination) => {
                  const isActive = activeRoute === destination.id;

                  return (
                    <button
                      key={destination.id}
                      type="button"
                      onMouseEnter={() =>
                        handleRouteEnter(destination.id)
                      }
                      onMouseLeave={handleRouteLeave}
                      onFocus={() =>
                        handleRouteEnter(destination.id)
                      }
                      onBlur={handleRouteLeave}
                      className={`group flex w-full items-center justify-between border-b border-[#dedbd5] px-0 py-[17px] text-left transition-all duration-300 ${
                        isActive
                          ? "bg-[#e8f4f3] px-3"
                          : "hover:bg-[#f0f5f4] hover:px-3"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "scale-125 bg-[#0797a0] shadow-[0_0_0_6px_rgba(7,151,160,0.12)]"
                              : "bg-[#0797a0]"
                          }`}
                        />

                        <span
                          className={`text-[15px] font-medium transition-colors duration-300 ${
                            isActive
                              ? "text-[#008b94]"
                              : "text-[#182027]"
                          }`}
                        >
                          Puducherry → {destination.name}
                        </span>
                      </span>

                      <span
                        className={`text-[13px] transition-colors duration-300 ${
                          isActive
                            ? "text-[#008b94]"
                            : "text-[#788796]"
                        }`}
                      >
                        {destination.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom */}

            <div className="mt-auto pt-8">
              <p className="font-serif text-[18px] italic text-[#65727d]">
                And wherever else you're headed.
              </p>

              <button
                type="button"
                onClick={() => {
                const bookingSection = document.getElementById("booking");

                if (bookingSection) {
                  bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
                className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#078d96] px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#067b83] hover:shadow-[0_10px_25px_rgba(7,141,150,0.18)]"
              >
                Plan your journey
                <span className="text-[18px]">→</span>
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT MAP
          ================================================= */}

          <div className="relative min-h-[520px] w-full">
            <div className="relative h-full min-h-[520px] w-full overflow-hidden rounded-[20px] border border-[#dedbd5] bg-[#e9e7e2] shadow-[0_12px_35px_rgba(17,21,24,0.06)]">
              {/* Map */}

              <div
                ref={mapContainer}
                className="absolute inset-0 h-full w-full"
              />

              {/* South India badge */}

              <div className="pointer-events-none absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/95 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#008b94] shadow-[0_4px_15px_rgba(0,0,0,0.08)] backdrop-blur">
                South India
              </div>

              {/* Active route badge */}

              <div
                className={`pointer-events-none absolute right-5 top-5 z-10 rounded-full border border-white/70 bg-white/95 px-5 py-3 text-[11px] font-semibold text-[#008b94] shadow-[0_4px_15px_rgba(0,0,0,0.08)] backdrop-blur transition-all duration-300 ${
                  activeRoute
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                Puducherry →{" "}
                {
                  destinations.find(
                    (destination) => destination.id === activeRoute
                  )?.name
                }
              </div>

              {/* Puducherry badge */}

              <div className="pointer-events-none absolute bottom-5 left-5 z-10 flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2.5 text-[11px] font-medium text-[#243039] shadow-[0_4px_15px_rgba(0,0,0,0.08)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#0797a0]" />
                Puducherry
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeGo;