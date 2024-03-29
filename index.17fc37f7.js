function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var n=document.querySelector("table"),t=document.querySelectorAll("th"),a=n.querySelector("tbody");t.forEach(function(e){e.dataset.name=e.innerHTML.toLowerCase()});var r="";function o(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",o=Array.from(a.rows);switch(t){case"name":case"position":case"office":"asc"===r?o.sort(function(e,t){return e.cells[n].innerHTML.localeCompare(t.cells[n].innerHTML)}):o.sort(function(e,t){return t.cells[n].innerHTML.localeCompare(e.cells[n].innerHTML)});break;case"age":"asc"===r?o.sort(function(e,t){return Number(e.cells[n].innerHTML)-Number(t.cells[n].innerHTML)}):o.sort(function(e,t){return Number(t.cells[n].innerHTML)-Number(e.cells[n].innerHTML)});break;case"salary":"asc"===r?o.sort(function(e,t){return i(e.cells[n].innerHTML)-i(t.cells[n].innerHTML)}):o.sort(function(e,t){return i(t.cells[n].innerHTML)-i(e.cells[n].innerHTML)})}a.append.apply(a,function(n){if(Array.isArray(n))return e(n)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(n,t){if(n){if("string"==typeof n)return e(n,void 0);var a=Object.prototype.toString.call(n).slice(8,-1);if("Object"===a&&n.constructor&&(a=n.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(n,void 0)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}function i(e){return Number(e.slice(1).split(",").join(""))}n.querySelector("thead").addEventListener("click",function(e){if("TH"===e.target.tagName){var n=e.target,t=n.cellIndex,a=n.dataset.name;r===a?(r="",o(t,a,"desc")):(r=a,o(t,a,"asc"))}}),a.addEventListener("click",function(e){var n=e.target.closest("tr"),t=a.querySelector(".active");t&&t.classList.remove("active"),n.classList.add("active")});var l=document.createElement("form");l.className="new-employee-form",l.name="employee",l.action="/",l.method="post",l.insertAdjacentHTML("afterbegin",'\n  <label>\n    Name:\n    <input\n      data-qa="name"\n      name="name"\n      type="text"\n      required\n    >\n  </label>\n\n  <label>\n    Position:\n    <input\n      data-qa="position"\n      name="position"\n      type="text"\n      required\n    >\n  </label>\n\n  <label>\n    Office:\n    <select data-qa="office" name="office">\n      <option value="Tokyo">\n        Tokyo\n      </option>\n\n      <option value="Singapore">\n        Singapore\n      </option>\n\n      <option value="London">\n        London\n      </option>\n\n      <option value="New York">\n        New York\n      </option>\n\n      <option value="Edinburgh">\n        Edinburgh\n      </option>\n\n      <option value="San Francisco">\n        San Francisco\n      </option>\n    </select>\n  </label>\n\n  <label>\n    Age:\n    <input\n      data-qa="age"\n      name="age"\n      type="number"\n      min="18"\n      max="90"\n      required\n    >\n  </label>\n\n  <label>\n    Salary:\n    <input\n      data-qa="salary"\n      name="salary"\n      type="number"\n      min="0"\n      required\n    >\n  </label>\n\n  <button type="submit">Save to table</button>\n'),n.after(l);var c=function(e,n){var t=document.createElement("div"),a=document.createElement("h2"),r=document.createElement("p");t.className="notification ".concat(n),t.dataset.qa="notification",t.style.cssText="\n    top: 10px;\n    right: 10px;\n  ",a.textContent=n,a.className="title",r.textContent=e,t.append(a,r),document.body.append(t),setTimeout(function(){return t.remove()},2e3)};l.addEventListener("submit",function(e){e.preventDefault();var n=l.elements.name.value,t=l.elements.position.value,r=l.elements.office.value,o=l.elements.age.value,i=l.elements.salary.value,s=n.replace(/\s/g,"").length>=4,u=t.replace(/\s/g,"").length>=4,m=o>=18&&o<=90;if(s&&u&&m&&i&&o){var d="\n      <tr>\n        <td>".concat(n,"</td>\n        <td>").concat(t,"</td>\n        <td>").concat(r,"</td>\n        <td>").concat(o,"</td>\n        <td>").concat("$".concat(Number(i).toLocaleString("en-US")),"</td>\n      </tr>\n    ");a.insertAdjacentHTML("beforeend",d),c("Your changes has been saved","success"),l.reset()}else m||s||u?(m||c("Age must be between 18 and 90","error"),s&&u||c("Name and position must at least than 4 letters","error")):c("Age must be between 18 and 90.\n         Name and position must at least than 4 letters","error")});
//# sourceMappingURL=index.17fc37f7.js.map
