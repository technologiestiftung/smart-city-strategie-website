module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'bec3fb01ae3b4d33bd2c1582fc1eb06f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Smart City Berlin - Strategieprozess - Öffentlicher Wissensspeicher',
  domain: 'strategie.smart-city-berlin.de',
  author: 'CityLAB Berlin',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlAdditions: {
    '/prozesstermine': 'd4d81055b9ae4666a0091509afbbecbd',
    '/prozessergebnisse': '14516fd43b7d402b94ac0dccd7567462',
    '/smart-city-strategiebeirat-rollenbeschreibung': 'b119cbeb246e4f5c99adaf2eeb85a173',
    '/smart-city-strategieboard-rollenbeschreibung': '6e562a48b9fe4d3ba42fd5658a838306',
    '/beteiligungskonzept-grundlagen': 'efcee910bc7440d286a60bee5e0214fd',
    '/strategischer-rahmen-begrifflichkeiten': '77eaec7351464ce0bf3de4b517e6b836',
    '/smart-city-digitalstrategie-koordination': '75c9cd28339c46d0b83902219409fb26',
    '/Rahmenbedingungen': '8e712c767a1e47c8bb05834f9577a06d',
    '/smart-city-definition': '428941d020104d57b9ab91fcfd41ad8f',
    '/code-of-conduct': '194f66261238461d8af002952d78041b',
    '/prozessakteure': 'f6f137082ef54d35b64915501fc78603',
    '/smart-city-bibliothek': '9f354b0e8e204a97b1ec4930113e7e80',
    '/smart-city-glossar': '79d472c68ba84a79bceb9afebc1d4590',
    // '/wer-entwickelt-die-strategie': '1237978dad9e48bba137aa11ee3e3d16',
    '/events-im-netzwerk': 'b0d10ad6c8d24bd3858b0860b0d21312',
    '/wie-gehen-wir-es-an': 'abb29170ca8747e2bc3756f7dbdc0e83',
    '/was-machen-andere-staedte': 'dea199fc4db844daade74c55c31683e3',
    '/smart-city-strategieboard': 'f3f853b0ae5941b89da9c27b3248d403',
    '/smart-city-strategiebeirat': '06a8404af0dc46e2acafe04f72bbadc0',
  }
}
