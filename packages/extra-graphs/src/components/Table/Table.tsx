import React from 'react';
import { Container } from './Table.style';

export type TableProps = {};

export function Table(_props: TableProps) {
    return (
        <Container className="Table-container" data-testid="Table-container">
            Table
        </Container>
    );
}

export default Table;
