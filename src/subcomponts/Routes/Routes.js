let Routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/shop",
    title: "Shop",
  },
  {
    path: "/pages",
    title: "Pages",
  },
  {
    path: "/features",
    title: "Features",
    subMenu: [
        {
            path: "/features/feature1",
            title: "Feature 1",
        },
        {
            path: "/features/feature2",
            title: "Feature 2",
        },
        {
            path: "/features/feature3",
            title: "Feature 3",
        },
        {
            path: "/features/feature4",
            title: "Feature 4",
        },
    ]
  },
  {
    path: "/blog",
    title: "Blog",
    
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export default Routes;