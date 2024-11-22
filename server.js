require('dotenv').config();
const express = require('express');   
const path = require('path');               
const fs = require('fs-extra');
const bodyParser = require('body-parser');
const formData = require('form-data');

const {GoogleGenerativeAI} = require("@google/generative-ai");
const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded( {limit: "1mb", extended: true, parameterLimit: 50000 }))
app.use(bodyParser.json({limit: "10mb", extended: true}))
app.set('trust proxy', false)
app.disable('x-powered-by');




app.get('/editor', (req, res) => {
    res.sendFile(__dirname + '/public/editor.html')
});

    

const json_structure = 

`{
  "response": {
    "introduction": {
        "explenation": " This is the introduction of your response. you should keep it shorter than 256 chars."
    }
    "javascript": {
      "code": "console.log('Hello, world!');",
      "explanation": "This code logs 'Hello, world!' to the console."
    },
    "html": {
      "code": "<p>This is a paragraph.</p>",
      "explanation": "This HTML code creates a paragraph element."
    },
    "css": {
      "code": "p { color: blue; }",
      "explanation": "This CSS code styles paragraphs to be blue."
    },
    "additional_explanations": {
      "code": "some additional code",
      "explanation": "some additional explanation"
    },
  }
}`

const additional_explanations = 

 `{
  "response": {
    "additional_explanations": {
      "code": "console.log('Hello, world!');",
      "explanation": "some additional explanation"
    },
  }
}`

const additional_explanations_no_code = 

 `{
  "response": {
    "additional_explanations": {
      "explanation": "some additional explanation"
    }
  }
}`

const system = `

`;



app.post('/get_llm_gemini' , async  (req, res) => {

    const prompt = req.body.prompt;
    const context = req.body.context;

    const html = req.body.html;
    const css = req.body.css;
    const js = req.body.js;

    const prompt_wit_context = `${prompt} for additional context here is my css html and javascript so far ${html} ${css} ${js}`

    console.log(context)

    let history = [];

    context.forEach(object => {
        history.push(object)
    })

    console.log(history)

    try{
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-pro",
            systemInstruction: system,
        });
        const chat = model.startChat({
        history: history,
        });
        let result = await chat.sendMessage(prompt);
        console.log(result.response.text());
        res.status(200).json({message: result.response.text()});
    }catch(error){
        console.log(error)
    }

    

    return
});


app.post('/get_llm_gpt' , async  (req, res) => {

    const prompt = req.body.prompt;
    const context = req.body.gpt_context;

    const html = req.body.html;
    const css = req.body.css;
    const js = req.body.js;

    const prompt_wit_context = `${prompt} for additional context here is my css html and javascript so far ${html} ${css} ${js}`

    const last_user_input = {role: "user", content: prompt};

    const messages = [
        {role: "system", content: system},
    ];

    context.forEach(object => {
        messages.push(object)
    })

    messages.push(last_user_input);

    const openai = new OpenAI();

    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: messages,
    });

    console.log(completion.choices[0].message);
    res.status(200).json({message: completion.choices[0].message.content});

    return
});

function trimQuotes(str) {
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  }
  return str;
}

app.post('/get_llm_claude' , async  (req, res) => {

    const prompt = req.body.prompt;
    const context = req.body.claude_context;

    const html = req.body.html;
    const css = req.body.css;
    const js = req.body.js;

    const prompt_wit_context = `${prompt} for additional context here is my css html and javascript so far ${html} ${css} ${js}`

    const last_user_input = {"role": "user", "content": [{ "type": "text", "text": prompt_wit_context}]};

    const messages = [
        
    ];

    context.forEach(object => {
        messages.push(object)
    })

    messages.push(last_user_input);

    const anthropic = new Anthropic();

    const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8000,
        temperature: 0,
        system: system,
        messages: messages
    });
    console.log(response)
    res.status(200).json({message: trimQuotes(response.content[0].text)});

    return
});


const server = app.listen(3200, function () {
    console.log(`Listening on port ${server.address().port}`);
});