// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-in-our-new-studies-icwsm-2024-icwsm-2023-we-uncover-media-bias-in-1-8-million-headlines-across-the-political-spectrum-our-findings-suggest-that-media-bias-is-growing-the-work-is-also-covered-by-studyfinds-and-shared-by-scienceblog-realclearscience-nation-mirage-news-phys-org-the-horizons-tracker-and-the-american-association-for-the-advancement-of-science-aaas-via-eurekalert",
          title: 'In our new studies (ICWSM 2024, ICWSM 2023), we uncover media bias in...',
          description: "",
          section: "News",},{id: "news-our-work-on-the-discrepancy-in-emoji-understanding-and-usage-between-lmms-and-humans-is-accepted-at-icwsm-24",
          title: 'Our work on the discrepancy in emoji understanding and usage between LMMs and...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-be-selected-to-receive-the-travel-award-from-the-diversity-community-of-the-society-for-political-methodology-i-will-be-attending-polmeth-24-in-riverside-california-from-july-18-to-20",
          title: 'I am honored to be selected to receive the travel award from the...',
          description: "",
          section: "News",},{id: "news-our-latest-study-telematics-and-informatics-analyzes-public-opinions-on-emerging-artificial-intelligence-technologies-this-work-has-been-featured-by-media-outlets-including-tech-xplore-quantum-zeitgeist-and-digital-information-world",
          title: 'Our latest study (Telematics and Informatics) analyzes public opinions on emerging artificial intelligence...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%71%33@%69%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/weihongq", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/weihong-erika-qi-b53691143", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cyyYHHEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
