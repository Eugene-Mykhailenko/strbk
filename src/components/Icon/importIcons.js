export default function() {
  function importAllIcons(r) {
    r.keys().forEach(r);
  }

  const icons = require.context('../../assets/icons/', true, /.+\.svg$/);

  importAllIcons(icons);

  return icons
    .keys()
    .map((a) => a.replace('./', ''))
    .map((a) => a.replace('.svg', ''));
}
