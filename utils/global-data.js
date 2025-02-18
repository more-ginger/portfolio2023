export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Francesca Morini';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Portfolio – Francesca Morini';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

  return {
    name,
    blogTitle,
    footerText,
    months
  };
};
