
const ai_wrapper = document.getElementById('ai_wrapper');
const ai_answers_wrapper = document.getElementById('ai_answers_wrapper');
const user_input_field = document.getElementById('ai_questions_textarea');
const ai_questions_btn = document.getElementById('ai_questions_btn');
const selectElement = document.getElementById('ai_model_select');

ai_questions_btn.addEventListener('click', get_llm)

function formatText(text) {
  // Check if the text is a string
  if (typeof text !== 'string') {
    // If not, convert it to a string
    text = String(text);
  }

  // First, handle the backtick-surrounded words
  let formattedText = text.replace(/`([^`]+)`/g, '<span class="ai_mark">$1</span>');
  // Handle asterisk at the beginning of a line and double-asterisk surrounded words
  formattedText = formattedText.replace(/^\*/gm, '<br>');
  formattedText = formattedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Escape < and > that aren't part of our HTML tags
  formattedText = formattedText.replace(/(&lt;)(?!(?:\/(?:span|strong|br)[^>]*&gt;))/g, '&lt;');
  formattedText = formattedText.replace(/(?!(?:span|strong|br)[^>]*&gt;)(&gt;)/g, '&gt;');
  return formattedText;
}


function formatText2(text) {
  // Check if the text is a string
  if (typeof text !== 'string') {
    // If not, convert it to a string
    text = String(text);
  }

  // First, handle the backtick-surrounded words
  let formattedText = text.replace(/`([^`]+)`/g, '<span class="ai_mark">$1</span>');
  // Handle asterisk at the beginning of a line and double-asterisk surrounded words
  formattedText = formattedText.replace(/^\*/gm, '<br>');
  formattedText = formattedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Escape < and > that aren't part of our HTML tags
  formattedText = formattedText.replace(/(&lt;)(?!(?:\/(?:span|strong|br)[^>]*&gt;))/g, '&lt;');
  formattedText = formattedText.replace(/(?!(?:span|strong|br)[^>]*&gt;)(&gt;)/g, '&gt;');

  // Remove leading spaces from each line
  formattedText = formattedText.split('\n')
    .map(line => line.trimStart())
    .join('\n');

  // Trim the entire string to remove any extra spaces
  formattedText = formattedText.trim();

  return formattedText;
}


function toggle_ai_wrapper(){
	ai_wrapper.classList.toggle('active'); 
}

let context = [];
let claude_context = [];
let gpt_context = [];


async function get_llm(){
	console.log('Started Request')

	const prompt = user_input_field.value;
	if(prompt === ''){
		return
	}
	user_input_field.value = '';

	const html = html_code.innerText;
	const css = css_code.innerText
	const js = js_code.innerText;

	console.log(prompt)
	console.log(context)

	const aiPromptDiv = document.createElement('div');
	aiPromptDiv.classList.add('ai_prompt_div');
	aiPromptDiv.textContent = prompt;
	ai_answers_wrapper.appendChild(aiPromptDiv);

	const aiWaitDiv = document.createElement('div');
	aiWaitDiv.classList.add('ai_loader_div');
	const svgLoader = document.createElement('img');
	svgLoader.classList.add('ai_loader_svg');
	svgLoader.src = './images/3-dots-bounce.svg'

	aiWaitDiv.appendChild(svgLoader);
	ai_answers_wrapper.appendChild(aiWaitDiv);

	ai_answers_wrapper.scrollTop = ai_answers_wrapper.scrollHeight;

	if (context.length > 0){
		await delay(1000);
		ai_answers_wrapper.scrollTop += 100;
	}

	
  const ai_model = selectElement.value;


	try{
			const formData = {
				prompt,
				context,
				gpt_context,
				claude_context,
				html,
				css,
				js,
				
				
			}
			const response = await fetch(`${window.location.origin}/get_llm_${ai_model}`, {
				method: 'post',
				headers: {
					"Content-Type": 'application/json'
				},
				body: JSON.stringify(formData)
			});
			const response_data = await response;
			console.log(response_data)
			const data = await response.json();
			console.log(data)
			if (response_data.status === 200){
				aiWaitDiv.remove();
				let user_input = { role: "user", parts: [{ text: prompt }],};
				
				context.push(user_input);
				
				let system_response = {role: "model", parts: [{ text: data.message }],};

				context.push(system_response)

				let user_input_gpt = {role: "user", content: prompt};
						
				gpt_context.push(user_input_gpt);
				
				let system_response_gpt = {role: "assistant", content: data.message}

				gpt_context.push(system_response_gpt)

				let user_input_claude =  { role: 'user', content: [{ type: 'text', text: prompt }]}

				claude_context.push(user_input_claude);

  			let system_response_claude = { role: 'assistant', content: [{ type: 'text', text: data.message }] }

  			claude_context.push(system_response_claude)
				
				

  			parse_response(
  			data.message
				.trim()
				.replaceAll('```json', '')
				.replaceAll('```', '')
				.trim()
				)
				//document.querySelector('.ai_answers_wrapper').innerText += data.message.replaceAll('\\n', '\n').replaceAll('\\t', '\t').replaceAll('\\"', '\"');
				
				/*if(ai_model === 'claude'){
					const system_response = data.message
						/*.trim()
						.replaceAll('\n', '\\n')
						/*.replaceAll('\n', '\\n')
						//.replaceAll('\"', "'")
						//.replace('{\n', '{')
						//.replaceAll("\'", "\\'")

					parse_response(system_response.replaceAll('```json', '').replaceAll('```', '').trim())
				}else{
					
				}*/
				
				await delay(500);
				ai_answers_wrapper.scrollTop += 100;
			}else {
				
			}
	}catch(error){
			aiWaitDiv.remove();
			const aiErrorDiv = document.createElement('div');
			aiErrorDiv.classList.add('ai_error_div');
			aiErrorDiv.textContent = 'An error occurred, please try again.';
			ai_answers_wrapper.appendChild(aiErrorDiv);

			let user_input = { role: "user", parts: [{ text: prompt }],};
				
			context.push(user_input);

			let user_input_gpt = {role: "user", content: prompt};
						
			gpt_context.push(user_input_gpt);

			let user_input_claude =  { role: 'user', content: [{ type: 'text', text: prompt }]}

			claude_context.push(user_input_claude);


			console.log(error)
	}
}

function parse_response(responseString) {
	console.log(responseString)
  // Parse the JSON string
  const response_string = JSON.parse(responseString);

  /*try{
  	response = JSON.parse(responseString); // JSON5.parse(responseString); //JSON.parse(responseString);
  }catch(error){
  	console.log(error)
  }*/

  // Access the 'response' object
  const { response: apiResponse } = response_string;

  // Check for specific keys and values
  if (apiResponse.introduction && apiResponse.introduction.explanation) {
    process_explenation(apiResponse.introduction.explanation); // Call your function to process HTML code
  }
  
  if (apiResponse.html && apiResponse.html.code) {
    process_code(apiResponse.html.code, 'html'); // Call your function to process HTML code
  }

  if (apiResponse.html && apiResponse.html.explanation) {
    process_explenation(apiResponse.html.explanation); // Call your function to process HTML code
  }

  if (apiResponse.css && apiResponse.css.code) {
    process_code(apiResponse.css.code, 'css'); // Call your function to process CSS code
  }

  if (apiResponse.css && apiResponse.css.explanation) {
    process_explenation(apiResponse.css.explanation); // Call your function to process CSS code
  }

  if (apiResponse.javascript && apiResponse.javascript.code) {
    process_code(apiResponse.javascript.code, 'javascript'); // Call your function to process JavaScript code
  }

  if (apiResponse.javascript && apiResponse.javascript.explanation) {
    process_explenation(apiResponse.javascript.explanation); // Call your function to process JavaScript code
  }

  if (apiResponse.additional_explanations && apiResponse.additional_explanations.code) {
    process_additional_code(apiResponse.additional_explanations.code, 'html'); // Call your function to process additional explanations
  }

  if (apiResponse.additional_explanations && apiResponse.additional_explanations.explanation) {
    process_explenation(apiResponse.additional_explanations.explanation); // Call your function to process additional explanations
  }
}

// Function to process the code (customize as needed)
async function process_code(code, language) {
	// Create the code element
	const codeElement = document.createElement('code');
	codeElement.classList.add(`language-${language}`); // Adjust language class as needed
	codeElement.classList.add(`ai_code_box`); // Adjust language class as needed

	// Create the pre element and append the code element to it
	const preElement = document.createElement('pre');
	preElement.id = 'ai_pre_code_element';
	preElement.appendChild(codeElement);

	// Set the code content
	codeElement.textContent = code;

	const heading = document.createElement('h2');
	heading.classList.add('ai_code_heading');
	heading.textContent = language;

	const copy_btn = document.createElement('button');
	copy_btn.classList.add('ai_copy_btn');
	copy_btn.textContent = 'Copy Code';
	copy_btn.dataset.code = code;

	copy_btn.addEventListener('touchstart', copy_ai_code);

	copy_btn.addEventListener('click', copy_ai_code);
	
	/*const gestureHandler = useGesture({
	  onTap: ({ event }) => {
	    copy_ai_code(event);
	  },
	});*/

	//copy_btn.addEventListener('pointerdown', copy_ai_code);
	//copy_btn.onpointerup = copy_ai_code;
	

	// Create the ai_code_div element and append the pre element to it
	const aiCodeDiv = document.createElement('div');
	aiCodeDiv.classList.add('ai_code_div');
	aiCodeDiv.appendChild(heading);
	aiCodeDiv.appendChild(preElement);
	aiCodeDiv.appendChild(copy_btn);

	// Append the ai_code_div to the parent element

	ai_answers_wrapper.appendChild(aiCodeDiv);

	// Highlight the code using Prism.js
	//Prism.highlightAll();

	Prism.highlightElement(codeElement);

    console.log(code); // You can perform specific actions here, like rendering the code, executing it, or further processing
    //ai_answers_wrapper.scrollTop = ai_answers_wrapper.scrollHeight;
    console.log(ai_answers_wrapper.scrollHeight)
}

async function process_additional_code(code, language) {
	// Create the code element
	const codeElement = document.createElement('code');
	codeElement.classList.add(`language-${language}`); // Adjust language class as needed
	codeElement.classList.add(`ai_code_box`); // Adjust language class as needed

	// Create the pre element and append the code element to it
	const preElement = document.createElement('pre');
	preElement.id = 'ai_pre_code_element';
	preElement.appendChild(codeElement);

	// Set the code content
	codeElement.textContent = code;

	const heading = document.createElement('h2');
	heading.classList.add('ai_code_heading');
	heading.textContent = 'Additional Code';

	const copy_btn = document.createElement('button');
	copy_btn.classList.add('ai_copy_btn');
	copy_btn.textContent = 'Copy Code';
	copy_btn.dataset.code = code;

	copy_btn.addEventListener('touchstart', copy_ai_code);

	copy_btn.addEventListener('click', copy_ai_code);
	
	/*const gestureHandler = useGesture({
	  onTap: ({ event }) => {
	    copy_ai_code(event);
	  },
	});*/

	//copy_btn.addEventListener('pointerdown', copy_ai_code);
	//copy_btn.onpointerup = copy_ai_code;
	

	// Create the ai_code_div element and append the pre element to it
	const aiCodeDiv = document.createElement('div');
	aiCodeDiv.classList.add('ai_code_div');
	aiCodeDiv.appendChild(heading);
	aiCodeDiv.appendChild(preElement);
	aiCodeDiv.appendChild(copy_btn);

	// Append the ai_code_div to the parent element

	ai_answers_wrapper.appendChild(aiCodeDiv);

	// Highlight the code using Prism.js
	//Prism.highlightAll();

	Prism.highlightElement(codeElement);

    console.log(code); // You can perform specific actions here, like rendering the code, executing it, or further processing
    //ai_answers_wrapper.scrollTop = ai_answers_wrapper.scrollHeight;
    console.log(ai_answers_wrapper.scrollHeight)
}

function process_explenation(text) {
    console.log(text); // You can perform specific actions here, like rendering the code, executing it, or further processing
    const aiTextDiv = document.createElement('div');
	aiTextDiv.classList.add('ai_text_div');
	aiTextDiv.innerHTML = formatText(text);
	ai_answers_wrapper.appendChild(aiTextDiv);
}



/*function copy_ai_code(event){
	const code = event.target.dataset.code;

	console.log(code);
	navigator.clipboard.writeText(code)
    .then(() => {
      console.log('Text copied to clipboard:', code);
    })
    .catch(err => {
      console.error('Error in copying text: ', err);  

    });

  event.target.innerHTML = `<i class="fa-solid fa-check"></i> &nbsp; Copied`;
	setTimeout(() => {
	  event.target.innerHTML = `Copy Code`;
	}, 1500);
}*/

function copy_ai_code(event) {
  const code = event.target.dataset.code;
  console.log(code);

  // Fallback to document.execCommand('copy')
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log('Text copied to clipboard:', code);
        event.target.innerHTML = `<i class="fa-solid fa-check"></i> &nbsp; Copied`;
        setTimeout(() => {
          event.target.innerHTML = `Copy Code`;
        }, 1500);
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
        const textArea = document.createElement('textarea');
			  textArea.value = text;
			  document.body.appendChild(textArea);
			  textArea.select();
			  document.execCommand('copy');
			  document.body.removeChild(textArea);

			  console.log('Text copied to clipboard:', text);
			  event.target.innerHTML = `<i class="fa-solid fa-check"></i> &nbsp; Copied`;
			  setTimeout(() => {
			    event.target.innerHTML = `Copy Code`;
			  }, 1500);
      });
  } else {
    const textArea = document.createElement('textarea');
	  textArea.value = text;
	  document.body.appendChild(textArea);
	  textArea.select();
	  document.execCommand('copy');
	  document.body.removeChild(textArea);

	  console.log('Text copied to clipboard:', text);
	  event.target.innerHTML = `<i class="fa-solid fa-check"></i> &nbsp; Copied`;
	  setTimeout(() => {
	    event.target.innerHTML = `Copy Code`;
	  }, 1500);
  }
}







document.addEventListener('paste', (event) => {
  // Call your function here
   handlePaste(event);
	/*runJsHeavy();
	runCssHeavy();
	runHtmlHeavy();*/
});

async function handlePaste(event) {
	const pastedText = event.clipboardData.getData('text/plain');
	event.preventDefault()
	
  // Access the pasted text
	/*navigator.clipboard.writeText(pastedText)
	  .then(() => {
	    // Trigger a paste event
	    activeElement.dispatchEvent(new Event('paste'));
	  })
	  .catch(err => console.error('Failed to write to clipboard:', err));*/
  
  //document.execCommand('paste');
  // Do something with the pasted text
  console.log('Pasted text:', pastedText);
  // Get the currently focused element
	const activeElement = document.activeElement;
	console.log(activeElement)
	
	// Create a KeyboardEvent object representing an Enter keypress
	/*const event_ = new KeyboardEvent('keydown', {
	  key: 'Enter',
	  code: 'Enter',
	  keyCode: 13,
	  which: 13
	});

	const event_back = new KeyboardEvent('keydown', {
	  key: 'Backspace',
	  code: 'Backspace',
	  keyCode: 8,
	  which: 8
	});

	const event_delete = new KeyboardEvent('keydown', {
	  key: 'Delete',
	  code: 'Delete',
	  keyCode: 46,
	  which: 46
	});

	const event_space = new KeyboardEvent('keydown', {
	  key: ' ',
	  code: 'Space',
	  keyCode: 32,
	  which: 32
	});

	// Dispatch the event on the active element
	await delay(5);
	activeElement.dispatchEvent(event_space);
	await delay(5);*/
	//activeElement.dispatchEvent(event_back);
  if(activeElement.className === "htmlCodeBlock"){
  	runHtml()
  	//document.execCommand('insertText', false, pastedText);
  	insertTextAtCursor(pastedText)
  }else if(activeElement.className === "cssCodeBlock"){
  	runCss()
  	//document.execCommand('insertText', false, pastedText);
  	insertCssTextAtCursor(pastedText)

  }else if(activeElement.className === "jsCodeBlock"){
  	runJs()
  	//document.execCommand('insertText', false, pastedText);
  	insertJsTextAtCursor(pastedText)
  }else{
  	//const clipboardText = await navigator.clipboard.readText();
    /*const pasteEvent = new ClipboardEvent('paste', { clipboardData: { 'text/plain': pastedText } });
    activeElement.dispatchEvent(pasteEvent);*/

    document.execCommand('insertText', false, pastedText);
  	//activeElement.dispatchEvent(new Event('paste'));
  }

  // Call your specific function
  //yourSpecificFunction(pastedText);*/
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

