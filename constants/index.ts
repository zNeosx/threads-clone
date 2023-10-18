export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "#",
    // route: "/search",
    label: "Search",
    title: "Coming soon...",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "#",
    // route: "/activity",
    label: "Activity",
    title: "Coming soon...",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/community.svg",
    route: "#",
    // route: "/communities",
    label: "Communities",
    title: "Coming soon...",
  },
  {
    imgURL: "/assets/user.svg",
    route: "#",
    // route: "/profile",
    label: "Profile",
    title: "Coming soon...",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
