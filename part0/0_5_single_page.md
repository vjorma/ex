# Loading a Single Page App

[//]: # ( University of Helsinki                                               )
[//]: # ( Full Stack Open, Excercice 0.5                                       )
[//]: # ( Ville Jorma <vjorma> 2026                                            )

The following diagram shows what happens when page
<https://studies.cs.helsinki.fi/exampleapp/spa> is loaded.

```mermaid
sequenceDiagram

    %% Set aliases to make source code shorter
    %%
    participant B as Browser
    participant S as Server

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/spa

    S -->> B: html spa
    Note right of B: The html initiates fetching of css and javascript.
    
    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    S -->> B: The stylesheet main.css
    Note right of B: The browser re-renders html with css
    
    S -->> B: The javascript psa.js
    Note right of B: The js initiates fething of data.
    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    S -->> B: The data data.json
    Note right of B: The js initiates data injection from json to DOM
    
```
