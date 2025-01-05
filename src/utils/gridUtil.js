// const formatPrice = (price: number, currencyId: string): string => {
//     switch (currencyId) {
//       case 'BRL':
//         return price.toFixed(2).replace('.', ',');
//       default:
//         return price.toFixed(2);
//     }
//   };

 const getGridSaveData = function(dataProvider , listName){
    // 모든 변경 상태 데이터 가져오기
      var state = dataProvider.getAllStateRows();
      var local_dp = [];
      
      if(state.created.length > 0){
        // 추가
        for(var val in state.created){
          var data = dataProvider.getJsonRow(state.created[val]);
          data.iudFlag = 'I'; 
          local_dp.push(data);
        }
      }
      
      if(state.updated.length > 0){
        // 수정
        for(var val in state.updated){
          var data = dataProvider.getJsonRow(state.updated[val]);
          data.iudFlag = 'U';
          local_dp.push(data);
        }          
      }
      
      if(state.deleted.length > 0){
        // 삭제
        for(var val in state.deleted){
          var data = dataProvider.getJsonRow(state.deleted[val]);
          data.iudFlag = 'D';
          local_dp.push(data);
        }
      }
      
      if(state.createAndDeleted.length > 0){
        // 추가 후 바로 삭제
      }
      
      if(listName){     
        var local_input = {};
        local_input[listName] = local_dp;
        local_input[listName + 'Cnt'] = local_dp.length;
        return local_input;
       }
      return local_dp;
  }

  
  export  default getGridSaveData;