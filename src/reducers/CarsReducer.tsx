const initialState={
    data:[ 
        {
            brand: "Porsche",
            color: "Gray",
            model: "911 Turbo S",
            price_per_day: 725,
            slug: "porsche-911-turbo-s-white"
            
        },
        {
            brand: "Porsche",
            color: "Gray",
            model: "911 Turbo S",
            price_per_day: 725,
            slug: "porsche-911-turbo-s-white"
            
        },
    
    
    ]
    
 }
 
 export default (state = initialState, action:any) => {
    let newList = {...state.data};
 
     switch(action.type) {
         case 'ADD_NOTE':
            console.log(action.type)
          console.log(action.type.data)
          console.log('action.typeyhj.daut5a')
          return {...state, data: action.payload.data}
          break;
 
     }
     
     return {...state, list:newList};
 }