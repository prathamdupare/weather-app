(()=>{"use strict";console.log("hey"),function(){const e=document.getElementById("weatherApp"),t=document.createElement("div");t.classList.add("weather-header");const d=document.createElement("h1");d.textContent="Weather App",t.appendChild(d);const n=document.createElement("div");n.classList.add("weather-content");const a=document.createElement("div");a.classList.add("weather-search");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("placeholder","Enter city"),c.setAttribute("id","city-input");const s=document.createElement("button");s.textContent="Search",s.classList.add("search-button"),a.appendChild(c),a.appendChild(s);const i=document.createElement("ul");i.classList.add("weather-display"),i.classList.add("hidden");const o=document.createElement("div");o.classList.add("start-display");const r=document.createElement("img");r.src="/Front.jpg",r.classList.add("front-image"),o.appendChild(r),document.body.appendChild(o);const l=document.createElement("li");l.classList.add("weather-properties"),l.id="cloud-pc";const p=document.createElement("i");p.classList.add("fa","fa-cloud"),l.appendChild(p);const m=document.createElement("li");m.classList.add("weather-properties"),m.id="feels-like";const u=document.createElement("i");u.classList.add("fa","fa-tree"),m.appendChild(u);const h=document.createElement("li");h.classList.add("weather-properties"),h.id="humidity";const C=document.createElement("i");C.classList.add("fa","fa-tint"),h.appendChild(C);const f=document.createElement("li");f.classList.add("weather-properties"),f.id="max-temp";const y=document.createElement("i");y.classList.add("fa","fa-fire"),f.appendChild(y);const L=document.createElement("li");L.classList.add("weather-properties"),L.id="min-temp";const E=document.createElement("i");E.classList.add("fa","fa-snowflake-o"),L.appendChild(E);const w=document.createElement("li");w.classList.add("weather-properties"),w.id="sunrise";const S=document.createElement("i");S.classList.add("fa","fa-sun-o"),w.appendChild(S);const x=document.createElement("li");x.classList.add("weather-properties"),x.id="sunset";const T=document.createElement("i");T.classList.add("fa","fa-sun"),x.appendChild(T);const g=document.createElement("li");g.classList.add("weather-properties"),g.id="temperature";const q=document.createElement("i");q.classList.add("fa","fa-thermometer-three-quarters"),g.appendChild(q);const b=document.createElement("li");b.classList.add("weather-properties"),b.id="wind-degrees";const $=document.createElement("i");$.classList.add("fa","fa-leaf"),b.appendChild($);const N=document.createElement("li");N.classList.add("weather-properties"),N.id="wind-speed";const v=document.createElement("i");v.classList.add("fa","fa-camera-retro"),N.appendChild(v),i.appendChild(g),i.appendChild(m),i.appendChild(l),i.appendChild(h),i.appendChild(N),i.appendChild(b),i.appendChild(f),i.appendChild(L),i.appendChild(w),i.appendChild(x),n.appendChild(a),n.appendChild(i),n.appendChild(o),e.appendChild(t),e.appendChild(n)}(),document.querySelector(".search-button").addEventListener("click",(function(){const e=document.querySelector("#city-input");!async function(e){const t=`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${e}`,d={method:"GET",headers:{"X-RapidAPI-Key":"03f5fbe969msh043c25856eb57b7p1b3303jsnacb8943f62fd","X-RapidAPI-Host":"weather-by-api-ninjas.p.rapidapi.com"}},n=document.querySelector("#cloud-pc"),a=document.querySelector("#feels-like"),c=document.querySelector("#humidity"),s=document.querySelector("#max-temp"),i=document.querySelector("#min-temp"),o=document.querySelector("#sunrise"),r=document.querySelector("#sunset"),l=document.querySelector("#temperature"),p=document.querySelector("#wind-degrees"),m=document.querySelector("#wind-speed");try{const e=await fetch(t,d),u=await e.json();console.log(u),console.log(u.cloud_pct);const h=document.createTextNode(`Temperature: ${u.temp}`);l.appendChild(h);const C=document.createTextNode(`Cloud pct: ${u.cloud_pct}`);n.appendChild(C);const f=document.createTextNode(`Feels Like: ${u.feels_like}`);a.appendChild(f);const y=document.createTextNode(`Humidity: ${u.humidity}`);c.appendChild(y);const L=document.createTextNode(`Max Temperature: ${u.max_temp}`);s.appendChild(L);const E=document.createTextNode(`Min Temperature: ${u.min_temp}`);i.appendChild(E);const w=1e3*`${u.sunrise}`,S=1e3*`${u.sunset}`,x=new Date(w),T=new Date(S),g=x.toLocaleTimeString(),q=T.toLocaleTimeString();console.log("Sunrise:",g),console.log("Sunset:",q);const b=document.createTextNode(`Sunrise: ${g}`);o.appendChild(b);const $=document.createTextNode(`Sunset: ${q}`);r.appendChild($);const N=document.createTextNode(`Wind Degrees: ${u.wind_degrees}`);p.appendChild(N);const v=document.createTextNode(`Wind Speed: ${u.wind_speed}`);m.appendChild(v)}catch(e){console.error(e)}}(e.value),e.value="",document.querySelector(".start-display").classList.add("hidden"),document.querySelector(".weather-display").classList.remove("hidden")}))})();