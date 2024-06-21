import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { GridModele } from '../models/grid.model';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input('props') props!: GridModele.IGrid;

  @Output('cellClicked') cellClicked = new EventEmitter<any>();

  @Output('rowDoubleClicked') rowDoubleClicked = new EventEmitter<any>();

  @Output('toolbarClicked') toolbarClicked = new EventEmitter<GridModele.IGridToolbar>();

  @Output('cellFinishEdited') cellFinishEdited = new EventEmitter<any>();

  defaultColDef: ColDef = {
      sortable: true,
      filter: true,
      resizable: true
  };

  gridApi!: GridApi;

  gridColumnApi!: ColumnApi;

  gridToolbar: GridModele.IGridToolbar[] = [];

  constructor(
      // private _documentService: DocumentService,
  ) { };

  onGridReady(args: GridReadyEvent): void {
    this.gridApi = args.api;

    this.gridColumnApi = args.columnApi;

    const column = this.props.column.map((item) => {
        return {
            id: item.field,
            ...item
        }
    });

    this.props.column = column;

    if (this.props.toolbar?.length) {
        this.props.toolbar.forEach((item) => {
            let icon = "";

            switch (item) {
                case 'Add':
                    icon = 'pi pi-plus';
                    break;
                case 'Edit':
                    icon = 'pi pi-file-edit';
                    break;
                case 'Delete':
                    icon = 'pi pi-trash';
                    break;
                case 'Detail':
                    icon = 'pi pi-info-circle';
                    break;
                default:
                    break;
            }

            this.gridToolbar.push({
                id: item.toLowerCase(),
                title: item,
                icon: icon
            });
        });
    };
}

onCellClicked(args: any): void {
    this.cellClicked.emit(args.data);
}

onRowDoubleClicked(args: any): void {
    this.rowDoubleClicked.emit(args.data);
}

onToolbarClicked(args: GridModele.IGridToolbar): void {
    if (args.id == 'excel') {
        this.handleExportExcel();
    } else {
        this.toolbarClicked.emit(args);
    }
}

private handleExportExcel(): void {
    const dataSource: any[] = this.props.dataSource;

    const worksheetName = this.props.id ? this.props.id : 'mini-erp';

    if (dataSource.length) {
        let column = [];

        for (const data of Object.keys(dataSource[0])) {
            column.push({
                header: data.replace(/_/g, " ").toUpperCase(),
                key: data,
                width: 20,
            });
        }

        console.log("Exporting to excel...");

        // this._documentService.exportToExcel({
        //     worksheetName: worksheetName,
        //     columns: column,
        //     dataSource: dataSource
        // });
    }
}
}
