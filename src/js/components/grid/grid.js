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
                {headerName: 'Name', field: 'name', editable: true},
                {headerName: 'Budget Amount', field: 'budget', editable: true},
                {headerName: '% Progress', field: 'progress'},
                {headerName: 'Funded To Date', field: 'funded', editable: true},
                {headerName: 'Remaining', field: 'remaining'}
            ],
            rowData: [
                { type: 'soft', name: 'Permits', budget: 50000, progress: 0, funded: 0, remaining: 50000},
                { type: 'soft', name: 'Permits', budget: 50000, progress: 0, funded: 0, remaining: 50000},
                { type: 'soft', name: 'Permits', budget: 50000, progress: 0, funded: 0, remaining: 50000}
            ]

        };
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
                    ></AgGridReact>
            </div>
        )
    }
}

export default Grid