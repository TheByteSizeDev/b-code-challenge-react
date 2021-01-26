import React from 'react';

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'


class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: 'Type', field: 'type', editable: true},
                {headerName: 'Name', field: 'name', editable: true, cellValueChanged: 'onCellValueChanged($event)'},
                {headerName: 'Budget Amount', field: 'budget', editable: true},
                {headerName: '% Progress', field: 'progress'},
                {headerName: 'Funded To Date', field: 'funded', editable: true},
                {headerName: 'Remaining', field: 'remaining'}
            ],
            // TODO: This is not loading for some reason unless I delete it and save then put it back in and save
            rowData: this.props.budget.items,
        };
        // TODO: Where does this go? Why doesn't this class component want to recongnize it?
        // const onCellValueChanged = (event) => {
        //     debugger
        // };
    }

    render() {
        return (
            <div className='ag-theme-balham'style={{
                width:1200,
                height:700
            }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        // TODO: Why is this on
                        // CellValueChanged={onCellValueChanged($event)}
                    ></AgGridReact>
            </div>
        )
    }
}

export default Grid