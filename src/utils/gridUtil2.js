// const formatPrice = (price: number, currencyId: string): string => {
//     switch (currencyId) {
//       case 'BRL':
//         return price.toFixed(2).replace('.', ',');
//       default:
//         return price.toFixed(2);
//     }
//   };

  const deleteGridData = function (_grid, _dp, isCommit) {
    if (isCommit != false) {
      _grid.commit();
    }

    var list = _grid.getCheckedItems();
    for (var id in list) {
      var idx = list[id];
      var rowIdx = _grid.getDataRow(idx);
      // debugger
      console.log(_grid._dataProvider);
      if (_dp.getRowState(rowIdx) == 'deleted') {
        var prevState = _grid.stateHistoryMap[rowIdx];
        _dp.setRowState(rowIdx, prevState);
        delete _grid.stateHistoryMap[rowIdx];
      } else {
        if (_grid.stateHistoryMap == undefined) {
          _grid.stateHistoryMap = {};
        }
        _grid.stateHistoryMap[rowIdx] = _dp.getRowState(rowIdx);
        if (_grid.stateHistoryMap[rowIdx] == 'created') {
          _dp.setRowState(rowIdx, 'createAndDeleted');
        } else if (_grid.stateHistoryMap[rowIdx] == 'createAndDeleted') {
          _dp.setRowState(rowIdx, 'created');
        } else {
          _dp.setRowState(rowIdx, 'deleted');
        }
      }
      _grid.checkItem(idx, false);
    }
  };
  
  export default deleteGridData ;