module.exports = [
{

name: "",

// none, ??, ???

// case sensitive


javascript: 
[    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`var`, `var <name> = <value>`,    `post`, `re`,            `re`,             `global`, `hoisted`],
    [`let`, `let <name> = <value>`,    `post`, `non`,           `re`,             `block`,  `stagnant`],
    [`cont`,`const <name> = <value>`   `init`, `non`,           `sub values only`,`block`,  `stagnant`],
],
nodejs:
[    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`var`, `<decl> <name> = <value>`,    `post`,       `re`,         `re`,             `global`, `hoisted`],
    [`let`, `<decl> <name> = <value>`,    `post`,       `non`,        `re`,             `block`,  `stagnant`],
    [`cont`,`<decl> <name> = <value>`,    `init`,       `non`,        `sub values only`,`block`,  `stagnant`],
],
python:[    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`none`, `<decl> <name> = <value>`,    `init`,      `re`,        `re`,              `block`, `stagnant`],
    [`global`,`<decl> <name> = <value>`,   `post`,      `re`,        `re`,              `global`,`stagnant`]
],
php:[    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`none`,  `<decl> $<name> = <value>`,    `init`,      `re`,        `re`,              `block`, `stagnant`],
    [`const`, `<decl> $<name> = <value>`,    `init`,      `no`,        `no`,              `block`, `stagnant`],   
    [`define`,`<decl>('<name>', <value>)`,   `init`,      `??`,        `??`,              `block`, `stagnant`],    
],
ruby:[    
    // declaration // syntax      // assignable stage // redeclarable // reassignable // scope   // hoisted
    [`none`,  `$<name> = <value>`,       `init`,      `no`,        `re`,              `global`, `stagnant`],
    [`@@`, `<decl> <name> = <value>`,    `init`,      `no`,        `re`,              `class`, `stagnant`],   
    // [`define`,`<decl>('<name>', <value>)`,   `init`,      `??`,        `??`,              `block`, `stagnant`],    
],
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
}
]