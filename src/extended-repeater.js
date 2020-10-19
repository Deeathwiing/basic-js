

module.exports = ( str, options ) => {
 let result = [];

 str = String(str);
let {addition,separator,additionSeparator,repeatTimes,additionRepeatTimes} = options;

  addition = (addition !== undefined) ? String(addition) : '';
   separator = (separator !== undefined) ? String(separator) : '+';
   additionSeparator = (additionSeparator !== undefined) ? String(additionSeparator) : '|';
   repeatTimes = (  Number(repeatTimes) > 0) ? Number(repeatTimes) : 1;
   additionRepeatTimes = ( Number(additionRepeatTimes) > 0) ? additionRepeatTimes : 1;

   for(let i = 0; i < repeatTimes; i++) {
		let arr = [];
		for(let j = 0; j < additionRepeatTimes; j++) {
			arr.push(addition);
		}
		result.push(str + arr.join(additionSeparator));
  }
  
   return result.join(separator);
};
  