export default async function (root) {

  const module = await import('./write-text.js')
  module.default(root, 'COMPONENT JS HAS LOADED');

  root.style.cssText = "background: red";
}