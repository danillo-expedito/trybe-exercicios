const techList = (array, firstName) => {
   const newArrayTech = [];
   if (array.length === 0) return 'Vazio!'

   array.forEach((element) => {
    newArrayTech.push({ tech: element, name: firstName});
   });
   return newArrayTech.sort((a, b) => {
      if(a.tech < b.tech) return -1;
      if(a.tech > b.tech) return 1;
      return 0;
   });
};

console.log(techList([], 'Lucas'));
module.exports = techList;