type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  
  // {
  //   title: "Skills",
  //   path: "/#skills", 
  // },
  // {
  //   title: "About",
  //   path: "/#about",
  // },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        // {
        //   name: "Skills",
        //   link: "/#skills",
        //   leavesWebsite: false,
        // },
        // {
        //   name: "About",
        //   link: "/#about",
        //   leavesWebsite: false,
        // },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/johnjoshua21",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/john-joshua-371764301/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/john.d.kid_?igsh=eXlsMHlqaGoycWpp",
          icon: "/static/icons/instagram-ff.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:johnjoshua2118@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Phone",
          link: "tel:+919025768910",
          icon: "/static/icons/icons8-phone.svg",
          leavesWebsite: true
        },        
      ],
    },
  ],
  support: {
    buymeacoffee: "John Joshua",
    message: "I appreciate your support very much! 💙",
  },
};
