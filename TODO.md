# TODO: Implement Language Detection and Switching

## Tasks
- [x] Configure Astro i18n in astro.config.mjs for locales: en, fr, pt, es, de, ja, it
- [x] Add language detection script in MainLayout.astro to redirect / to detected locale
- [ ] Create translations for categories in index.astro and [slug].astro
- [ ] Translate the about section in index.astro
- [ ] Update GameDescription.astro to use currentLocale prop instead of navigator.language
- [ ] Pass currentLocale to GameDescription in [slug].astro
- [ ] Test the implementation by running the site and checking language switching
