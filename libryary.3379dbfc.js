function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequiref5be;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequiref5be=r),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){o.default(e,t),t.set(e,n)};var l,o=(l=r("7K24o"))&&l.__esModule?l:{default:l};var i=new WeakMap,c=new WeakMap;class u{async getMovies(e=this.page){try{return await fetch(`${this.BASE_URL}trending/movie/day${this.API_KEY}&page=${e}`).then((e=>e.json()))}catch(e){console.log(e)}}getSearchMovie(e,t){try{return fetch(`${this.BASE_URL}search/movie${this.API_KEY}&query=${e}&page=${t}`).then((e=>e.json()))}catch(e){console.log(e)}}async getGanres(){try{return await fetch(`${this.BASE_URL}genre/movie/list${this.API_KEY}`).then((e=>e.json()))}catch(e){console.log(e)}}resetPage(){this.page=1}constructor(){e(s)(this,i,{writable:!0,value:"https://api.themoviedb.org/3/"}),e(s)(this,c,{writable:!0,value:"?api_key=7a4cd4317772102a9b88ef6a54b71590"}),this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="?api_key=7a4cd4317772102a9b88ef6a54b71590"}}let d;function h(e){let t=[];e.forEach((e=>{let n=d.find((t=>t.id===e));t.push(n)}));const n=t.map((e=>e.name));let a=[];return n.map((e=>{e.length>10&&(e=e.slice(0,8)+"..."),a.push(e)})),a}(new u).getGanres().then((e=>{d=e.genres}));new u;const p=document.querySelector(".gallery-container");function g({results:e}){const t=e.map((({poster_path:e,title:t,release_date:n,vote_average:a,genre_ids:r})=>{let s=`https://image.tmdb.org/t/p/w500${e}`;const l=`${t}`,o=`${n.slice(0,4)}`;let i=h(r);return e||(s="https://i.ibb.co/JyBCdzw/sinema-empty.jpg"),i=i.length>2?i.slice(0,2).join(", ")+", Other":i.join(", "),`<li class="gallery-box">\n    <div class="gallery-card">\n      <img\n        class="gallery-img"\n        src="${s}"\n        alt="${l}"\n        loading="lazy"\n      />\n    </div>\n    <h1 class="gallery-title">${l}</h1>\n    <div class="gallery-info">\n      <p class="gallery-ganre">${i}</p>\n      <p class="gallery-year">${o}</p>\n      <p class="gallery-average">${a}</p>\n    </div>\n  </li>\n      `})).join("");p.insertAdjacentHTML("beforeend",t)}const f=document.querySelector(".header__form-search");let y="",v=1;f.addEventListener("submit",(function(e){e.preventDefault();const{elements:{search:t}}=e.currentTarget;y=t.value,v+=1,_.getSearchMovie(y,v).then((e=>{e.total_results?g(e):console.log("Please enter any text")}))}));const _=new u;
//# sourceMappingURL=libryary.3379dbfc.js.map
