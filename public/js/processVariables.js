let variables_js_array=[],variables_css_array=[],variables_html_array=[],get_var_counter=1;function get_variables(a){get_var_counter>0&&a.classList.contains("htmlCodeBlock")?getHtml_variables():get_var_counter>0&&a.classList.contains("cssCodeBlock")?getCss_variables():get_var_counter>0&&a.classList.contains("jsCodeBlock")&&getJs_variables()}async function getJs_variables(){variables_js_array=[],jsCodeEdit.textContent.split("\n").forEach((a=>{let s=a.trim();if(s.startsWith("let ")){let a=s.replace("let ","").trim().split("=")[0];variables_js_array.push(a.trim())}else if(s.startsWith("const ")){let a=s.replace("const ","").trim().split("=")[0];variables_js_array.push(a.trim())}else{if(!s.startsWith("var "))return;{let a=s.replace("var ","").trim().split("=")[0];variables_js_array.push(a.trim())}}})),jsVars=[...new Set(variables_js_array.sort(((a,s)=>a.length-s.length)))]}async function getCss_variables(){variables_css_array=[],cssCodeEdit.textContent.split("\n").forEach((a=>{let s=a.trim();if(s.startsWith("--")){let a=s.split(":")[0].split(" ")[0].replaceAll(";","");variables_css_array.push(a.trim())}})),cssVars=[...new Set(variables_css_array.sort(((a,s)=>a.length-s.length)))]}async function getHtml_variables(){variables_html_array=[],htmlCodeEdit.innerHTML.replaceAll("<","").toString().split("\n").forEach((a=>{let s=a.trim();if(""!=s&&" "!=s&&null!=s){if(s.includes("id=")){let a=s.split('id="')[1].split('"')[0];variables_html_array.push(a.trim())}if(s.includes("class=")){let a=s.split('class="')[1].split('"')[0];a.includes(" ")?(variable_names=a.split(" "),variable_names.forEach((a=>{variables_html_array.push(a.trim())}))):variables_html_array.push(a.trim())}}})),htmlVars=[...new Set(variables_html_array.sort(((a,s)=>a.length-s.length)))]}getJs_variables(),getCss_variables(),getHtml_variables();