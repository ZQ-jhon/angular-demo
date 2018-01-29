function find(day,date){
				if(day>7||day<=0){alert('Please Input Number:0<Number<8,int')}

				else{
					var newDay = day+date%7;
			        newDay = newDay%7;
			        if(newDay == 0){return "天"}
					else{return newDay } 
				}
			}