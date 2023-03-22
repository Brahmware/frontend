import { styled } from "@mui/material";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { colors } from "../../muiTheme/theme";


const DataGrid = styled(MuiDataGrid)(({ headerColor }) => (
    {
        "& .MuiDataGrid-row:hover": {
            backgroundColor: colors.primary__hover_bg,
            // color: "red"
        },

        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        },

        '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none',
        },

        "& .MuiTablePagination-displayedRows": {
            padding: 0,
            margin: 0
        },

        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: headerColor,
            border: 0,

            '& *:focus, *:focus-within': {
                border: '0 !important',
                outline: '0 !important'
            }
        },

        "& .MuiDataGrid-footerContainer": {
            display: 'none'
        },

        "& .MuiDataGrid-cell": {
            padding: 0,
        },

        "& .MuiDataGrid-menuIcon": {
            display: 'none'
        },

        '& .MuiDataGrid-toolbarContainer': {
            position: 'absolute',
            zIndex: 2,
            top: '1em',
            right: 0,

            '& button': {
                minWidth: 'unset',
                textIndent: '-9999em',
                textTransform: 'uppercase',
                borderRadius: '50%',

                '& span': {
                    margin: '0 !important'
                }
            }
        }

    }));

export default DataGrid;