
import { useEffect } from 'react';

export function useMetaTags({ title, description, keywords, image, url }) {
  useEffect(() => {
    if (title) document.title = title;
    
    const setMetaTag = (name, content, property = false) => {
      if (!content) return;
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    
  }, [title, description, keywords, image, url]);
}
