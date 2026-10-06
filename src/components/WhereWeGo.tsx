import { useEffect, useRef, useState } from "react";
import {
  Map as MapLibreMap,
  NavigationControl,
  type MapLayerMouseEvent,
} from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

type Destination = {
  id: string;
  name: string;
  duration: string;
  position: [number, number];
};

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

const WhereWeGo = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) {
      return;
    }

    const map = new MapLibreMap({
      container: mapContainer.current,

      /*
       * Real OpenStreetMap raster tiles.
       * No API key required.
       */
      style: {
        version: 8,

        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            ],
            tileSize: 256,

            attribution:
              "&copy; OpenStreetMap contributors",
          },
        },

        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",

            paint: {
              "raster-opacity": 0.88,
            },
          },
        ],
      },

      center: [78.2, 13.5],
      zoom: 5.7,

      minZoom: 5,
      maxZoom: 9,

      attributionControl: {
        compact: true,
      },

      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
    });

    mapRef.current = map;

    /*
     * Zoom controls
     */
    map.addControl(
      new NavigationControl({
        showCompass: false,
        showZoom: true,
      }),
      "bottom-right"
    );

    /*
     * Prevent scroll wheel from taking over
     * the whole page.
     */
    map.scrollZoom.disable();

    map.on("load", () => {
      /*
       * =====================================================
       * ROUTES
       * =====================================================
       */

      const routeFeatures = destinations.map((destination) => ({
        type: "Feature" as const,

        properties: {
          id: destination.id,
          name: destination.name,
        },

        geometry: {
          type: "LineString" as const,

          coordinates: [
            PUDUCHERRY,
            destination.position,
          ],
        },
      }));

      map.addSource("karai-routes", {
        type: "geojson",

        data: {
          type: "FeatureCollection",
          features: routeFeatures,
        },
      });

      /*
       * Normal routes
       */

      map.addLayer({
        id: "karai-route-lines",

        type: "line",

        source: "karai-routes",

        layout: {
          "line-cap": "round",
          "line-join": "round",
        },

        paint: {
          "line-color": "#008b91",
          "line-width": 2.5,
          "line-opacity": 0.7,
          "line-dasharray": [2, 2],
        },
      });

      /*
       * Active route
       */

      map.addLayer({
        id: "karai-active-route",

        type: "line",

        source: "karai-routes",

        filter: [
          "==",
          ["get", "id"],
          "",
        ],

        layout: {
          "line-cap": "round",
          "line-join": "round",
        },

        paint: {
          "line-color": "#00a6ad",
          "line-width": 4,
          "line-opacity": 1,
        },
      });

      /*
       * =====================================================
       * DESTINATION POINTS
       * =====================================================
       */

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

      /*
       * Outer destination circles
       */

      map.addLayer({
        id: "destination-halo",

        type: "circle",

        source: "karai-destinations",

        paint: {
          "circle-radius": 9,

          "circle-color": "#ffffff",

          "circle-opacity": 0.95,

          "circle-stroke-width": 2,

          "circle-stroke-color": "#008b91",
        },
      });

      /*
       * Destination dots
       */

      map.addLayer({
        id: "destination-points",

        type: "circle",

        source: "karai-destinations",

        paint: {
          "circle-radius": 5,

          "circle-color": "#008b91",

          "circle-opacity": 1,

          "circle-stroke-width": 1,

          "circle-stroke-color": "#ffffff",
        },
      });

      /*
       * =====================================================
       * PUDUCHERRY
       * =====================================================
       */

      map.addSource("puducherry", {
        type: "geojson",

        data: {
          type: "Feature",

          properties: {
            name: "Puducherry",
          },

          geometry: {
            type: "Point",

            coordinates: PUDUCHERRY,
          },
        },
      });

      /*
       * Puducherry outer ring
       */

      map.addLayer({
        id: "puducherry-ring",

        type: "circle",

        source: "puducherry",

        paint: {
          "circle-radius": 15,

          "circle-color": "#ffffff",

          "circle-opacity": 0.95,

          "circle-stroke-width": 2,

          "circle-stroke-color": "#007d83",
        },
      });

      /*
       * Puducherry center
       */

      map.addLayer({
        id: "puducherry-point",

        type: "circle",

        source: "puducherry",

        paint: {
          "circle-radius": 7,

          "circle-color": "#007d83",

          "circle-stroke-width": 2,

          "circle-stroke-color": "#ffffff",
        },
      });

      /*
       * =====================================================
       * DESTINATION HOVER
       * =====================================================
       */

      map.on(
        "mouseenter",
        "destination-points",
        () => {
          map.getCanvas().style.cursor = "pointer";
        }
      );

      map.on(
        "mouseleave",
        "destination-points",
        () => {
          map.getCanvas().style.cursor = "";
        }
      );

      map.on(
        "mousemove",
        "destination-points",
        (event: MapLayerMouseEvent) => {
          const feature = event.features?.[0];

          if (!feature) {
            return;
          }

          const id = feature.properties?.id;

          if (id) {
            setActiveRoute(String(id));
          }
        }
      );

      map.on(
        "click",
        "destination-points",
        (event: MapLayerMouseEvent) => {
          const feature = event.features?.[0];

          if (!feature) {
            return;
          }

          const id = feature.properties?.id;

          if (id) {
            setActiveRoute(String(id));
          }
        }
      );
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  /*
   * =====================================================
   * ACTIVE ROUTE UPDATE
   * =====================================================
   */

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

    /*
     * Fade all routes when one is active.
     */

    map.setPaintProperty(
      "karai-route-lines",
      "line-opacity",
      activeRoute ? 0.18 : 0.7
    );

    /*
     * Highlight selected route.
     */

    if (map.getLayer("karai-active-route")) {
      map.setFilter(
        "karai-active-route",
        [
          "==",
          ["get", "id"],
          activeRoute ?? "",
        ]
      );
    }
  }, [activeRoute]);

  return (
    <section
      id="where-we-go"
      className="w-full overflow-hidden bg-[#f7f5f1] text-[#111518]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-[56px] sm:px-6 sm:py-[64px] lg:px-0 lg:py-[68px]">

        <div className="grid grid-cols-1 items-stretch gap-[36px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[52px]">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="flex min-h-[520px] flex-col justify-between lg:min-h-[540px]">

            <div>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] text-[#087f83]">
                REACH
              </p>

              <h2 className="max-w-[560px] text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[46px] lg:text-[50px]">
                Go beyond the map.
              </h2>

              <p className="mt-6 max-w-[570px] text-[15px] leading-7 text-[#667075]">
                From Puducherry, the whole of South India opens up. Hover a
                destination to see the route — and wherever else you're headed,
                we'll plan it with you.
              </p>
            </div>

            {/* ROUTES */}

            <div className="mt-10">

              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onMouseEnter={() =>
                    setActiveRoute(destination.id)
                  }
                  onMouseLeave={() =>
                    setActiveRoute(null)
                  }
                  onClick={() =>
                    setActiveRoute(destination.id)
                  }
                  className={`group flex w-full items-center justify-between border-b border-[#ddd9d2] py-[15px] text-left transition-all duration-300 ${
                    activeRoute === destination.id
                      ? "px-3"
                      : "px-0"
                  }`}
                >
                  <span className="flex items-center gap-3">

                    <span
                      className={`h-[7px] w-[7px] rounded-full transition-all duration-300 ${
                        activeRoute === destination.id
                          ? "scale-125 bg-[#00a6ad]"
                          : "bg-[#087f83]"
                      }`}
                    />

                    <span
                      className={`text-[14px] font-medium transition-colors ${
                        activeRoute === destination.id
                          ? "text-[#087f83]"
                          : "text-[#22282b]"
                      }`}
                    >
                      Puducherry → {destination.name}
                    </span>

                  </span>

                  <span className="text-[12px] text-[#8a9093]">
                    {destination.duration}
                  </span>
                </button>
              ))}

              <p className="mt-6 font-serif text-[17px] italic text-[#70777b]">
                And wherever else you're headed.
              </p>

              <button
                type="button"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#087f83] px-6 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066b6f] hover:shadow-[0_10px_25px_rgba(8,127,131,0.18)]"
              >
                Plan your journey
                <span className="text-[17px]">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* =================================================
              MAP
          ================================================= */}

          <div className="relative min-h-[520px] w-full lg:min-h-[540px]">

            <div className="relative h-full min-h-[520px] w-full overflow-hidden rounded-[20px] border border-[#dedbd5] bg-[#e9e7e2] shadow-[0_10px_35px_rgba(17,21,24,0.07)] lg:min-h-[540px]">

              <div
                ref={mapContainer}
                className="absolute inset-0"
              />

              {/* TOP BADGE */}

              <div className="pointer-events-none absolute left-5 top-5 z-10">
                <div className="rounded-full border border-white/80 bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-[#087f83] shadow-sm backdrop-blur-md">
                  SOUTH INDIA
                </div>
              </div>

              {/* PUDUCHERRY BADGE */}

              <div className="pointer-events-none absolute bottom-5 left-5 z-10">
                <div className="rounded-full border border-white/80 bg-white/90 px-4 py-2 text-[11px] font-medium text-[#22282b] shadow-sm backdrop-blur-md">
                  <span className="mr-2 inline-block h-[6px] w-[6px] rounded-full bg-[#087f83]" />
                  Puducherry
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhereWeGo;