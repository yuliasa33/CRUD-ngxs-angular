import { ColDef } from "ag-grid-community";

export namespace GridModele{
    export interface IGridToolbar {
        id: string;
        title: string;
        icon: string;
    }

    export interface IGrid {
        id?: string;
        column: ColDef[];
        dataSource: any[];
        height: any;
        showPaging: boolean;
        paginationSize:number;
        toolbar?: string[];
    }
}