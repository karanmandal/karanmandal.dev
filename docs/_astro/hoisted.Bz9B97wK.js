import"./hoisted.QUEs4qBY.js";class o extends HTMLSpanElement{constructor(){super(),this.classList.add("post-datetime")}connectedCallback(){const s=JSON.parse(this.dataset.data||"");delete this.dataset.data;const{pubDatetime:a,modDatetime:t}=s,e=new Date(t&&t>a?t:a),n=e.toLocaleDateString(["en-EN"],{year:"numeric",month:"short",day:"numeric"}),i=e.toLocaleTimeString(["en-EN"],{hour:"2-digit",minute:"2-digit"});this.innerHTML=`
            <span class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                    <path
                        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z">
                    </path>
                </svg>
            </span>
            <time datetime="${e.toISOString()}">${n}</time>
            <span aria-hidden="true"> | </span>
            <span class="sr-only">&nbsp;at&nbsp;</span>
            <span class="text-nowrap">${i}</span>
        	`}}customElements.define("post-datetime",o,{extends:"span"});
