# Sending a Form: an Older Approach

[//]: # ( University of Helsinki                                               )
[//]: # ( Full Stack Open, Excercice 0.4                                       )
[//]: # ( Ville Jorma <vjorma> 2026                                            )

The following diagram shows what happens when a new note is added from
<https://studies.cs.helsinki.fi/exampleapp/notes> by entering a new value to
the input field of the form and clicking Save-button.


```mermaid
sequenceDiagram

    %% Set aliases to make source code shorter
    %%
    participant B as Browser
    participant S as Server

    %% Arrows with + and - equal to activate and deactivate
    %%
    B ->>+ S: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    S -->>- B: html with 302 Redirect to location /xampleapp/notes
        
    B ->>+ S: GET https://studies.cs.helsinki.fi/exampleapp/notes
    S -->>- B: html with heading and form only
    
    B ->>+ S: GET stylesheet https://studies.cs.helsinki.fi/exampleapp/main.css
    S -->>- B: The stylesheet
    Note right of B: Browser re-renders html with style
    
    B ->>+ S: GET JS file https://studies.cs.helsinki.fi/exampleapp/main.js
    S -->>- B: The Javascript file
    Note right of B: JS file has instructions to fetch data file

    B ->>+ S: GET data file https://studies.cs.helsinki.fi/exampleapp/data.json
    S -->>- B: The data file
    Note right of B: Browser injects data from json file to DOM
```
