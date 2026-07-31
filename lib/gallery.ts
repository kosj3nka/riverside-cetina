export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const alt = "Horseback riding along the Cetina river";

export const galleryPhotos: GalleryPhoto[] = [
  
  { src: "/images/gallery/backViewRiding.webp", width: 640, height: 800, alt },
  { src: "/images/gallery/cowboyFeel.webp", width: 1440, height: 960, alt },
  { src: "/images/gallery/frontViewRiding.jpg", width: 640, height: 591, alt },
  { src: "/images/gallery/girlAndDogRiding.webp", width: 640, height: 853, alt },
  { src: "/images/gallery/groupRifing.webp", width: 1440, height: 1440, alt },
  { src: "/images/gallery/holdingUpHeartRiding.jpg", width: 640, height: 853, alt },
  { src: "/images/gallery/littleGirlsRiding.jpg", width: 640, height: 428, alt },
  { src: "/images/gallery/peopleOnHorse.webp", width: 1440, height: 1080, alt },
  { src: "/images/gallery/peopleRiding2.webp", width: 1080, height: 1440, alt },
  { src: "/images/gallery/verticalRiding.webp", width: 640, height: 800, alt },
  { src: "/images/gallery/wavingWhileRiding.jpg", width: 640, height: 852, alt },
  { src: "/images/gallery/horsesInRiver.webp", width: 1440, height: 1920, alt },
  { src: "/images/gallery/ridingInForest.webp", width: 1440, height: 1440, alt },
  { src: "/images/gallery/aestheticSunHorse.webp", width: 1440, height: 1920, alt }
];

// Candid photos that also live elsewhere on the site (the Horses section),
// folded into the full "all photos" page so nothing is left unseen there.
const additionalPhotos: GalleryPhoto[] = [
  { src: "/images/horses/familyWithHorse.webp", width: 640, height: 427, alt },
  { src: "/images/horses/peopleRiding.webp", width: 640, height: 427, alt },
  { src: "/images/horses/skyHorse.webp", width: 1440, height: 1920, alt },
  { src: "/images/horses/wavingWhileRiding2.jpg", width: 1440, height: 1440, alt },
];

export const allGalleryPhotos: GalleryPhoto[] = [...galleryPhotos, ...additionalPhotos];

function findPhoto(filename: string): GalleryPhoto {
  const photo = galleryPhotos.find((p) => p.src.endsWith(filename));
  if (!photo) throw new Error(`Gallery photo not found: ${filename}`);
  return photo;
}

export const galleryCarouselRows: [GalleryPhoto[], GalleryPhoto[]] = [
  [
    "aestheticSunHorse.webp",
    "groupRifing.webp",
    "frontViewRiding.jpg",
    "backViewRiding.webp",
    "peopleOnHorse.webp",
  ].map(findPhoto),
  [
    "cowboyFeel.webp",
    "girlAndDogRiding.webp",
    "holdingUpHeartRiding.jpg",
    "peopleRiding2.webp",
    "wavingWhileRiding.jpg",
  ].map(findPhoto),
];

export type GalleryItem =
  | ({ kind: "photo" } & GalleryPhoto)
  | {
      kind: "video";
      src: string;
      alt: string;
      width: number;
      height: number;
      poster?: string;
    };

export const allGalleryItems: GalleryItem[] = (() => {
  const photos: GalleryItem[] = allGalleryPhotos.map((photo) => ({
    kind: "photo",
    ...photo,
  }));

  const heroVideo: GalleryItem = {
    kind: "video",
    src: "/videos/hero.mp4",
    alt: "Horseback riding along the Cetina river",
    width: 1920,
    height: 1080,
    poster: "/images/hero-poster.jpg",
  };

  const foalVideo: GalleryItem = {
    kind: "video",
    src: "/videos/foal.mp4",
    alt: "The herd's newest, curious foal",
    width: 1020,
    height: 1880,
  };

  const riverVideo: GalleryItem = {
    kind: "video",
    src: "/videos/horsesInRiver.mp4",
    alt: "Horses crossing the Cetina river",
    width: 720,
    height: 960,
  };

  const forestVideo: GalleryItem = {
    kind: "video",
    src: "/videos/videoOnHorse.mp4",
    alt: "Riding through the forest trail on horseback",
    width: 480,
    height: 856,
  };

  return [
    photos[0],
    heroVideo,
    ...photos.slice(1, 6),
    riverVideo,
    ...photos.slice(6, 11),
    forestVideo,
    ...photos.slice(11, photos.length - 1),
    foalVideo,
    photos[photos.length - 1],
  ];
})();
