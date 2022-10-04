export const staticPagesMap = {
  "/prozesstermine": "d4d81055b9ae4666a0091509afbbecbd",
  "/prozessergebnisse": "14516fd43b7d402b94ac0dccd7567462",
  "/smart-city-strategiebeirat-rollenbeschreibung":
    "b119cbeb246e4f5c99adaf2eeb85a173",
  "/smart-city-strategieboard-rollenbeschreibung":
    "6e562a48b9fe4d3ba42fd5658a838306",
  "/beteiligungskonzept-grundlagen": "efcee910bc7440d286a60bee5e0214fd",
  "/strategischer-rahmen-begrifflichkeiten": "77eaec7351464ce0bf3de4b517e6b836",
  "/smart-city-digitalstrategie-koordination":
    "75c9cd28339c46d0b83902219409fb26",
  "/rahmenbedingungen": "8e712c767a1e47c8bb05834f9577a06d",
  "/smart-city-definition": "428941d020104d57b9ab91fcfd41ad8f",
  "/code-of-conduct": "194f66261238461d8af002952d78041b",
  "/prozessakteure": "f6f137082ef54d35b64915501fc78603",
  "/smart-city-bibliothek": "9f354b0e8e204a97b1ec4930113e7e80",
  "/smart-city-glossar": "79d472c68ba84a79bceb9afebc1d4590",
  // "/wer-entwickelt-die-strategie": "1237978dad9e48bba137aa11ee3e3d16",
  // "/events-im-netzwerk": "b0d10ad6c8d24bd3858b0860b0d21312",
  "/wie-gehen-wir-es-an": "abb29170ca8747e2bc3756f7dbdc0e83",
  "/was-machen-andere-staedte": "dea199fc4db844daade74c55c31683e3",
  "/smart-city-strategieboard": "f3f853b0ae5941b89da9c27b3248d403",
  "/smart-city-strategiebeirat": "06a8404af0dc46e2acafe04f72bbadc0",
};

export const isStaticPage = (pageId: string): boolean =>
  Object.values(staticPagesMap).includes(pageId.replace(/^\//, ""));

export const getSlugById = (pageId: string): string | undefined =>
  Object.keys(staticPagesMap).find((key: string) => {
    const val = staticPagesMap[key as keyof typeof staticPagesMap];
    return val === pageId;
  });

export const getStaticPagesPaths = (): Array<{
  params: {
    pageId: string;
  };
}> =>
  Object.values(staticPagesMap).map(pageId => ({
    params: {
      pageId,
    },
  }));
