module.exports = [

    /**
     * 
     * it seems the popular general programming 
     * langauges have two consistent datatypes
     * 
     * booleans and strings
     * 
     * scripting languages seem to not care about space.
     * 
     * so python, ruby, and javascript use a 
     * number datatype that utilizes 64 bit space
     * 
     * other langauges allow efficient use of space
     * offering 8 bit, 16 bit, 32bit, and 64bit 
     * ints, floats, and chars
     *  
     * 
     * 
     * 
     */
{

    name: "",


    javascript: "",
    nodejs:     "",
    python:     "",
    php:        "",
    ruby:       "",
    perl:       "",
    lua:        "",
    r:          "",
    lisp:       "",
    kotlin:     "",
    swift:      "",
    go:         "",
    java:       "",
    cpp:        "",
    c:          "",
    "c#":       "",
    rust:       "",
    fortran:    "",
    x86:        "",
    arm32:      "",
    arm64:      "",
    wasm:       ""
},
{
    name: "string",


    javascript: [
        [`"<string>"`],
        [`'<string>'`],
        [`\`<string>\``]
    ],
    nodejs:[
        [`"<string>"`],
        [`'<string>'`],
        [`\`<string>\``]
    ],
    python:[
        [`"<string>"`],
        [`'<string>'`],
    ],
    php:[
        [`"<string>"`],
        [`'<string>'`],
        [`<<<<string>`],
        [`<<<'EOT'
            <string>
            EOT;    
        `]
    ],
    ruby:[
        [`"<string>"`]
    ],
    perl:[
        [`"<string>"`],
        [`'<string>'`],
        [`q//<string>/`],
        [`qq//<string>/`],
    ],
    lua:[
        [`"<string>"`],
        [`'<string>'`],
    ],
    r:[
        [`"<string>"`],
        [`'<string>'`],
    ],
    lisp:[
        [`"<string>"`],    
    ],
    kotlin:[
        [`"<string>"`],
    ],
    swift:[
        [`"<string>"`],
    ],
    go:[
        [`"<string>"`],
    ],
    java:[
        [`"<string>"`],
    ],
    cpp:[
        [`"<string>"`],
    ],
    c:[
        [`"<string>"`],
    ],
    "c#":[
        [`"<string>"`],
    ],
    rust:       [
        [`"<string>"`],
    ],
    fortran:[
        [`'<string>'`]
    ],
    x86:        "",
    arm32:      "",
    arm64:      "",
    wasm:       ""
},

]