import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { observer } from 'mobx-react'
import { realFlightStore } from '../store/flight.store';

interface Column {
    id: 'flightNumber' | 'status' | 'takeoffTime' | 'landingTime' | 'takeoffAirport' | 'landingAirport' | 'updates';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: string) => string;
}

const columns: readonly Column[] = [
    { id: 'flightNumber', label: 'FlightNumber', minWidth: 70 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'takeoffTime', label: 'TakeoffTime', minWidth: 170, },
    { id: 'landingTime', label: 'LandingTime', minWidth: 170, },
    { id: 'takeoffAirport', label: 'TakeoffAirport', minWidth: 170, },
    { id: 'landingAirport', label: 'LandingAirport', minWidth: 170 },
    { id: 'updates', label: 'Updates', minWidth: 150 },
];


function StickyHeadTable() {
    const getCorrectcolor = (value: string) => {
        if (value.includes('Flight delayed by')) value = 'update'
        switch (value) {
            case 'hangar':
                return 'blue';
            case 'airborne':
                return 'green';
            case 'malfunction':
                return 'red';
            case 'update':
                return 'red';
            default:
                return 'yello';
        }

    }
    const rows = realFlightStore.filteredFlights
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontWeight: 600 }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows!
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.flightNumber}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}
                                                    style={(value === 'malfunction' || value === 'airborne' || value === 'hangar' || value?.includes('Flight delayed by'))
                                                        ? { color: getCorrectcolor(value) } : { color: 'black' }

                                                    }
                                                >
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows!.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export default observer(StickyHeadTable)