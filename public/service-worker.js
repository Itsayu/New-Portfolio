if (!self.define) {
  let e,
    i = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, t) => {
    const s =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[s]) return;
    let n = {};
    const r = (e) => a(e, s),
      f = { module: { uri: s }, exports: n, require: r };
    i[s] = Promise.all(c.map((e) => f[e] || r(e))).then((e) => (t(...e), n));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/LICENSE.md", revision: "1279deb31371f052675cc2a91f353fd0" },
        { url: "/README.md", revision: "d41d8cd98f00b204e9800998ecf8427e" },
        {
          url: "/_next/static/7TUzwPWUN0aF9kEpTSxT-/_buildManifest.js",
          revision: "c035683db666af19fb0239a5162b0339",
        },
        {
          url: "/_next/static/7TUzwPWUN0aF9kEpTSxT-/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1023.d8fdf8992bf5c2cf.js",
          revision: "d8fdf8992bf5c2cf",
        },
        {
          url: "/_next/static/chunks/1367.4599c70fa4674354.js",
          revision: "4599c70fa4674354",
        },
        {
          url: "/_next/static/chunks/1379.fa8927dd0a0a0be8.js",
          revision: "fa8927dd0a0a0be8",
        },
        {
          url: "/_next/static/chunks/2295.883649c24bba911f.js",
          revision: "883649c24bba911f",
        },
        {
          url: "/_next/static/chunks/2491.3f8b051a64e97455.js",
          revision: "3f8b051a64e97455",
        },
        {
          url: "/_next/static/chunks/2fbf9dd2.26488128a0adfa50.js",
          revision: "26488128a0adfa50",
        },
        {
          url: "/_next/static/chunks/3095.5c74b0df0d567579.js",
          revision: "5c74b0df0d567579",
        },
        {
          url: "/_next/static/chunks/3340.ec38dd70c672a600.js",
          revision: "ec38dd70c672a600",
        },
        {
          url: "/_next/static/chunks/3787-a2565f187ea4b13a.js",
          revision: "a2565f187ea4b13a",
        },
        {
          url: "/_next/static/chunks/455.5657c9ac6b5b9800.js",
          revision: "5657c9ac6b5b9800",
        },
        {
          url: "/_next/static/chunks/4598.72c38581a6f77871.js",
          revision: "72c38581a6f77871",
        },
        {
          url: "/_next/static/chunks/4851.c5823d5996598bbd.js",
          revision: "c5823d5996598bbd",
        },
        {
          url: "/_next/static/chunks/5162.b172b51b8bc92f26.js",
          revision: "b172b51b8bc92f26",
        },
        {
          url: "/_next/static/chunks/5675-27117e432f15e6c1.js",
          revision: "27117e432f15e6c1",
        },
        {
          url: "/_next/static/chunks/5690.9d12b70fd0fc0e6e.js",
          revision: "9d12b70fd0fc0e6e",
        },
        {
          url: "/_next/static/chunks/6506.749e35a85b43629b.js",
          revision: "749e35a85b43629b",
        },
        {
          url: "/_next/static/chunks/6818.6322fbf0b8ea62e9.js",
          revision: "6322fbf0b8ea62e9",
        },
        {
          url: "/_next/static/chunks/7012.05eb474e7113c2a2.js",
          revision: "05eb474e7113c2a2",
        },
        {
          url: "/_next/static/chunks/7109.5abf831527d34f6f.js",
          revision: "5abf831527d34f6f",
        },
        {
          url: "/_next/static/chunks/7321.cf7fb0fa0210b39f.js",
          revision: "cf7fb0fa0210b39f",
        },
        {
          url: "/_next/static/chunks/7781.14b6229c117b6343.js",
          revision: "14b6229c117b6343",
        },
        {
          url: "/_next/static/chunks/8928.329edab60bd7de8b.js",
          revision: "329edab60bd7de8b",
        },
        {
          url: "/_next/static/chunks/9054.423aa2efe7f4ad7d.js",
          revision: "423aa2efe7f4ad7d",
        },
        {
          url: "/_next/static/chunks/9653.785567400aee854e.js",
          revision: "785567400aee854e",
        },
        {
          url: "/_next/static/chunks/c16184b3-99d2c2d38a12cdef.js",
          revision: "99d2c2d38a12cdef",
        },
        {
          url: "/_next/static/chunks/cb355538-61cf29e52f4bc2a9.js",
          revision: "61cf29e52f4bc2a9",
        },
        {
          url: "/_next/static/chunks/d9067523-d4cfb8cbf8bfbe4e.js",
          revision: "d4cfb8cbf8bfbe4e",
        },
        {
          url: "/_next/static/chunks/framework-0e8d27528ba61906.js",
          revision: "0e8d27528ba61906",
        },
        {
          url: "/_next/static/chunks/main-bc0664c5dd22bc90.js",
          revision: "bc0664c5dd22bc90",
        },
        {
          url: "/_next/static/chunks/pages/404-1c8759faa4fcc381.js",
          revision: "1c8759faa4fcc381",
        },
        {
          url: "/_next/static/chunks/pages/500-b2bfc8c02b2fbd5d.js",
          revision: "b2bfc8c02b2fbd5d",
        },
        {
          url: "/_next/static/chunks/pages/SkillsExperience-7c386ed020667105.js",
          revision: "7c386ed020667105",
        },
        {
          url: "/_next/static/chunks/pages/_error-eb74a452056fea13.js",
          revision: "eb74a452056fea13",
        },
        {
          url: "/_next/static/chunks/pages/articles-efc49cd5c7eda995.js",
          revision: "efc49cd5c7eda995",
        },
        {
          url: "/_next/static/chunks/pages/articles/title.articles-f723807f39621446.js",
          revision: "f723807f39621446",
        },
        {
          url: "/_next/static/chunks/pages/community-39cf8b61034245d6.js",
          revision: "39cf8b61034245d6",
        },
        {
          url: "/_next/static/chunks/pages/contact-2ab5dc1d9d8d1203.js",
          revision: "2ab5dc1d9d8d1203",
        },
        {
          url: "/_next/static/chunks/pages/docs-e7189310f8c39347.js",
          revision: "e7189310f8c39347",
        },
        {
          url: "/_next/static/chunks/pages/docs/title.docs-787aa13dfb3e3ffa.js",
          revision: "787aa13dfb3e3ffa",
        },
        {
          url: "/_next/static/chunks/pages/icons-ed46c57f01caf458.js",
          revision: "ed46c57f01caf458",
        },
        {
          url: "/_next/static/chunks/pages/index-3f5c6582a828cb65.js",
          revision: "3f5c6582a828cb65",
        },
        {
          url: "/_next/static/chunks/pages/projects-1ae86ed85d5a0bee.js",
          revision: "1ae86ed85d5a0bee",
        },
        {
          url: "/_next/static/chunks/pages/projects/title.projects-ebd71b8d0fe8ff6f.js",
          revision: "ebd71b8d0fe8ff6f",
        },
        {
          url: "/_next/static/chunks/pages/signin-cfa5d2af789958db.js",
          revision: "cfa5d2af789958db",
        },
        {
          url: "/_next/static/chunks/pages/signin/title.signin-f52515b8b22fe24b.js",
          revision: "f52515b8b22fe24b",
        },
        {
          url: "/_next/static/chunks/pages/title.404-ae18da9b26094e1f.js",
          revision: "ae18da9b26094e1f",
        },
        {
          url: "/_next/static/chunks/pages/title.500-1e05131abcdc6b43.js",
          revision: "1e05131abcdc6b43",
        },
        {
          url: "/_next/static/chunks/pages/title.index-aa7c7ab3b71940aa.js",
          revision: "aa7c7ab3b71940aa",
        },
        {
          url: "/_next/static/chunks/pages/tools-226cc5e5bcbdc20d.js",
          revision: "226cc5e5bcbdc20d",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-6243c49bf9d3401e.js",
          revision: "6243c49bf9d3401e",
        },
        {
          url: "/_next/static/css/14267d8de707fd3e.css",
          revision: "14267d8de707fd3e",
        },
        {
          url: "/_next/static/css/3a55d0f5ec15835f.css",
          revision: "3a55d0f5ec15835f",
        },
        {
          url: "/_next/static/css/57a1414b1be6f335.css",
          revision: "57a1414b1be6f335",
        },
        {
          url: "/_next/static/css/6be932387f980d63.css",
          revision: "6be932387f980d63",
        },
        {
          url: "/_next/static/css/767b75a71a854fdc.css",
          revision: "767b75a71a854fdc",
        },
        {
          url: "/_next/static/css/7ea173c722e54563.css",
          revision: "7ea173c722e54563",
        },
        {
          url: "/_next/static/css/8288031b02e193cb.css",
          revision: "8288031b02e193cb",
        },
        {
          url: "/_next/static/css/8578d5a9580f17da.css",
          revision: "8578d5a9580f17da",
        },
        {
          url: "/_next/static/css/8848afc9033596f7.css",
          revision: "8848afc9033596f7",
        },
        {
          url: "/_next/static/css/d48b4f6198353244.css",
          revision: "d48b4f6198353244",
        },
        {
          url: "/_next/static/css/e3cfccb987724df7.css",
          revision: "e3cfccb987724df7",
        },
        {
          url: "/_next/static/css/ec7a96c6606f573d.css",
          revision: "ec7a96c6606f573d",
        },
        {
          url: "/_next/static/media/devicon.0f1d8fef.ttf",
          revision: "0f1d8fef",
        },
        {
          url: "/_next/static/media/devicon.1f06a7d0.svg",
          revision: "1f06a7d0",
        },
        {
          url: "/_next/static/media/devicon.5abb2ba1.woff",
          revision: "5abb2ba1",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-400-normal.6086e63f.woff2",
          revision: "6086e63f",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-400-normal.f71d35d9.woff",
          revision: "f71d35d9",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-600-normal.7ed7feaf.woff2",
          revision: "7ed7feaf",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-600-normal.f763b0db.woff",
          revision: "f763b0db",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-ext-400-normal.b1f07e82.woff2",
          revision: "b1f07e82",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-ext-400-normal.ef7fdcef.woff",
          revision: "ef7fdcef",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-ext-600-normal.268f7242.woff2",
          revision: "268f7242",
        },
        {
          url: "/_next/static/media/fira-code-cyrillic-ext-600-normal.c9bdaa09.woff",
          revision: "c9bdaa09",
        },
        {
          url: "/_next/static/media/fira-code-greek-400-normal.6fc14851.woff",
          revision: "6fc14851",
        },
        {
          url: "/_next/static/media/fira-code-greek-400-normal.95d4e83c.woff2",
          revision: "95d4e83c",
        },
        {
          url: "/_next/static/media/fira-code-greek-600-normal.17a4f747.woff2",
          revision: "17a4f747",
        },
        {
          url: "/_next/static/media/fira-code-greek-600-normal.bb7ea979.woff",
          revision: "bb7ea979",
        },
        {
          url: "/_next/static/media/fira-code-greek-ext-400-normal.0e1cf7e2.woff",
          revision: "0e1cf7e2",
        },
        {
          url: "/_next/static/media/fira-code-greek-ext-400-normal.707deac8.woff2",
          revision: "707deac8",
        },
        {
          url: "/_next/static/media/fira-code-greek-ext-600-normal.8abe59f1.woff2",
          revision: "8abe59f1",
        },
        {
          url: "/_next/static/media/fira-code-greek-ext-600-normal.ef2e4be3.woff",
          revision: "ef2e4be3",
        },
        {
          url: "/_next/static/media/fira-code-latin-400-normal.1f45a4c0.woff2",
          revision: "1f45a4c0",
        },
        {
          url: "/_next/static/media/fira-code-latin-400-normal.46f7536f.woff",
          revision: "46f7536f",
        },
        {
          url: "/_next/static/media/fira-code-latin-600-normal.9ed64187.woff2",
          revision: "9ed64187",
        },
        {
          url: "/_next/static/media/fira-code-latin-600-normal.c65d4f1a.woff",
          revision: "c65d4f1a",
        },
        {
          url: "/_next/static/media/fira-code-latin-ext-400-normal.544f78b8.woff2",
          revision: "544f78b8",
        },
        {
          url: "/_next/static/media/fira-code-latin-ext-400-normal.95d3893b.woff",
          revision: "95d3893b",
        },
        {
          url: "/_next/static/media/fira-code-latin-ext-600-normal.6f2021a1.woff",
          revision: "6f2021a1",
        },
        {
          url: "/_next/static/media/fira-code-latin-ext-600-normal.b836a3c5.woff2",
          revision: "b836a3c5",
        },
        {
          url: "/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",
          revision: "5156ecf9",
        },
        {
          url: "/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",
          revision: "a1abbbeb",
        },
        {
          url: "/_next/static/media/inter-cyrillic-700-normal.1f104cec.woff",
          revision: "1f104cec",
        },
        {
          url: "/_next/static/media/inter-cyrillic-700-normal.f005fff5.woff2",
          revision: "f005fff5",
        },
        {
          url: "/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",
          revision: "2ab892f6",
        },
        {
          url: "/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",
          revision: "e12b115f",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",
          revision: "4879ddc8",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",
          revision: "a4fe2f88",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-700-normal.925ff1c6.woff2",
          revision: "925ff1c6",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-700-normal.e3c37258.woff",
          revision: "e3c37258",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",
          revision: "635988ed",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",
          revision: "c396a18b",
        },
        {
          url: "/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",
          revision: "0c589a4f",
        },
        {
          url: "/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",
          revision: "fe3df9bb",
        },
        {
          url: "/_next/static/media/inter-greek-700-normal.7135e036.woff",
          revision: "7135e036",
        },
        {
          url: "/_next/static/media/inter-greek-700-normal.eb758e2b.woff2",
          revision: "eb758e2b",
        },
        {
          url: "/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",
          revision: "3ae4b10a",
        },
        {
          url: "/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",
          revision: "aa3c4563",
        },
        {
          url: "/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",
          revision: "8225c735",
        },
        {
          url: "/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",
          revision: "e1f02a99",
        },
        {
          url: "/_next/static/media/inter-greek-ext-700-normal.28c94827.woff",
          revision: "28c94827",
        },
        {
          url: "/_next/static/media/inter-greek-ext-700-normal.5d97dee4.woff2",
          revision: "5d97dee4",
        },
        {
          url: "/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",
          revision: "aaf8c68e",
        },
        {
          url: "/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",
          revision: "c1dbd103",
        },
        {
          url: "/_next/static/media/inter-latin-400-normal.779487c6.woff",
          revision: "779487c6",
        },
        {
          url: "/_next/static/media/inter-latin-400-normal.ac374088.woff2",
          revision: "ac374088",
        },
        {
          url: "/_next/static/media/inter-latin-700-normal.cc2a1044.woff",
          revision: "cc2a1044",
        },
        {
          url: "/_next/static/media/inter-latin-700-normal.eb892c4c.woff2",
          revision: "eb892c4c",
        },
        {
          url: "/_next/static/media/inter-latin-800-normal.7da978cc.woff",
          revision: "7da978cc",
        },
        {
          url: "/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",
          revision: "f15de3ac",
        },
        {
          url: "/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",
          revision: "0cc0c669",
        },
        {
          url: "/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",
          revision: "c500b98e",
        },
        {
          url: "/_next/static/media/inter-latin-ext-700-normal.bc11109e.woff",
          revision: "bc11109e",
        },
        {
          url: "/_next/static/media/inter-latin-ext-700-normal.d446f0d4.woff2",
          revision: "d446f0d4",
        },
        {
          url: "/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",
          revision: "04eca372",
        },
        {
          url: "/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",
          revision: "2dc591bf",
        },
        {
          url: "/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",
          revision: "51fad319",
        },
        {
          url: "/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",
          revision: "feb85dd6",
        },
        {
          url: "/_next/static/media/inter-vietnamese-700-normal.73666dc9.woff",
          revision: "73666dc9",
        },
        {
          url: "/_next/static/media/inter-vietnamese-700-normal.9ead7545.woff2",
          revision: "9ead7545",
        },
        {
          url: "/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",
          revision: "850d1593",
        },
        {
          url: "/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",
          revision: "e9acfdc6",
        },
        {
          url: "/favicon/browserconfig.xml",
          revision: "882ec3bbe43efaf87e3e9d7e2eb9cdc2",
        },
        {
          url: "/favicon/favicon-org.ico",
          revision: "ff4fc7292ce1dd803c91bfe3763ef172",
        },
        {
          url: "/favicon/favicon.ico",
          revision: "cedaa9e7614d06bad32274bf453e57d7",
        },
        {
          url: "/favicon/favicon.jpg",
          revision: "4c6106c357ec5701eecb0e98a9d71fbf",
        },
        {
          url: "/favicon/safari-pinned-tab.svg",
          revision: "378a916e4ac7925c7f20e231b3162392",
        },
        {
          url: "/gif/hireme.gif",
          revision: "ba00f2c9421c481e58d0c3344862b01e",
        },
        { url: "/gif/yes.gif", revision: "d45d61516f65616a40bfdde88150a4d5" },
        {
          url: "/img/dataism-24-black.svg",
          revision: "3e43f89f61ac977a22e4b529aa9ff534",
        },
        {
          url: "/img/dataism-24.svg",
          revision: "cf22b8801a9289aeb3b4ecbcabb063f5",
        },
        {
          url: "/img/github_icon.png",
          revision: "ec3a60c8c6539a07eb70b52f6737ea6e",
        },
        {
          url: "/img/google_icon.png",
          revision: "4100c1990034b377da8f7e7ce946bc11",
        },
        {
          url: "/img/img-mock.png",
          revision: "bc119830751ae1458c1db91229f4950f",
        },
        { url: "/img/jobs.png", revision: "784a706919b46d338d528f7644b5934d" },
        { url: "/img/logly.png", revision: "eb1d0437f2fb0fbb6e18f593ebd2964e" },
        { url: "/img/logo.jpg", revision: "4c6106c357ec5701eecb0e98a9d71fbf" },
        {
          url: "/img/logo_rounded.png",
          revision: "04148444c916aa0e474772df776689af",
        },
        {
          url: "/img/noimageavailable.jpg",
          revision: "0eecdd9b234ec23a9557de074c622979",
        },
        { url: "/img/user.jpg", revision: "9f6de95c7c2717a54608b98ac3b6dc58" },
        { url: "/img/user2.jpg", revision: "802f160a48ef08e445ed5527df4eba5a" },
        {
          url: "/logos/bbt.jpeg",
          revision: "588175985c11479b79f79bc4d5167492",
        },
        {
          url: "/logos/coderscanteen.png",
          revision: "bff502c091cca4fc4228c3847a002d74",
        },
        {
          url: "/logos/gravity.jpeg",
          revision: "965281cc8a862a8a374379dcacb3633f",
        },
        {
          url: "/logos/niwi.jpeg",
          revision: "ee15f6296cd8166f63b6318b87602303",
        },
        {
          url: "/logos/zymo.jpeg",
          revision: "d642ac466a2ac80a8f091f78a5340538",
        },
        {
          url: "/lottie/boysearching.json",
          revision: "84ae6ede1ca72c8f7faef58a99cb5544",
        },
        {
          url: "/lottie/codingdev.json",
          revision: "ec4ddf9d89c827d54302fb68765b4cd6",
        },
        {
          url: "/lottie/constuction.json",
          revision: "dc97ef2653e2f53a89be90095f8c079b",
        },
        {
          url: "/lottie/ghost.json",
          revision: "7ff73ac129bcad6974681cdf20740f63",
        },
        {
          url: "/lottie/github.json",
          revision: "24dec41d23206e051d06df24466854ea",
        },
        {
          url: "/lottie/laptop.json",
          revision: "a78d3c24364a1710a9bfc954dc0b4aed",
        },
        {
          url: "/lottie/loadcode.json",
          revision: "e1f6af84158aec91b5d3721b1fd246f1",
        },
        {
          url: "/lottie/looking.json",
          revision: "365936cd93bf3525b57b4c90e3259476",
        },
        {
          url: "/lottie/serverboot.json",
          revision: "c9f67668d3137f02708cc4af41e71bab",
        },
        {
          url: "/lottie/ufo.json",
          revision: "eb08f3cb74bc32a2d01bf7f51e0fbc12",
        },
        { url: "/manifest.json", revision: "dfa9620808d40ed76e1a6f7cfcd925c4" },
        { url: "/robots.txt", revision: "d41d8cd98f00b204e9800998ecf8427e" },
        { url: "/sitemap-0.xml", revision: "d41d8cd98f00b204e9800998ecf8427e" },
        { url: "/sitemap.xml", revision: "d41d8cd98f00b204e9800998ecf8427e" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: a,
              state: c,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
