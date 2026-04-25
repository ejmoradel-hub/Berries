import React from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

export function SEO({ title, description, image = "/images/hero-bg.png" }: SEOProps) {
  React.useEffect(() => {
    // Update title
    document.title = `${title} | Chinook Breeze Berries`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", title);
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.setAttribute("content", description);
    if (!ogDesc.parentNode) document.head.appendChild(ogDesc);

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.setAttribute("content", image);
    if (!ogImage.parentNode) document.head.appendChild(ogImage);

  }, [title, description, image]);

  return null;
}