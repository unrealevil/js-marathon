
const r = () => document.location.reload();
const l = (...args) => console.log(...args);

const floatVar = 1.0;
const stringVar = '1.000';
l(typeof floatVar, floatVar);
l(typeof '' + floatVar, '' + floatVar);
l(typeof stringVar, stringVar);
l(typeof  +stringVar, +stringVar);

