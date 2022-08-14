let object=[{person:"John",age:30,company:"Google"},
{person:"Mohn",age:37,company:"Flipkart"},
{person:"Kohn",age:38,company:"Amazon"},
{person:"Sohan",age:40,company:"Myntra"},
{person:"Jenny",age:70,company:"Apple"}]
 console.log("output of for")
// for
for(let i=0;i<object.length;i++){
      console.log(`
      Person:${object[i].person}
      Age: ${object[i].age} 
      Company: ${object[i].company}
     `);
}
console.log("output of for in")
// for in
for(let i in object){
   console.log(`
      Person:${object[i].person}
      Age: ${object[i].age} 
      Company: ${object[i].company}
   `)
}
console.log("output of for of")
// for of
for(let i of object){
    console.log(`
      Person: ${i.person}
      Age: ${i.age}
      Company: ${i.company}
    `)
}
console.log("output of for Each")
// for Each
object.forEach(i => {
    console.log(`
      Person: ${i.person}
      Age: ${i.age}
      Company: ${i.company}
    `)
});