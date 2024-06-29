import React, { Fragment } from "react";
import {
  TableBodyStyled,
  TableCellStyled,
  TableHeadItemStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from "./Table.styled";

const items = Array(100).fill(
  <TableRowStyled>
    <TableCellStyled>Product 1</TableCellStyled>
    <TableCellStyled>100</TableCellStyled>
    <TableCellStyled>4.5</TableCellStyled>
    <TableCellStyled>Brand 1</TableCellStyled>
    <TableCellStyled>Available</TableCellStyled>
  </TableRowStyled>
);

export default function Table() {
  return (
    <TableStyled>
      <TableHeadStyled>
        <TableRowStyled>
          <TableHeadItemStyled>Product name</TableHeadItemStyled>
          <TableHeadItemStyled>Price</TableHeadItemStyled>
          <TableHeadItemStyled>Rating</TableHeadItemStyled>
          <TableHeadItemStyled>Brand</TableHeadItemStyled>
          <TableHeadItemStyled>Availability</TableHeadItemStyled>
        </TableRowStyled>
      </TableHeadStyled>

      <TableBodyStyled>
        {items.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </TableBodyStyled>
    </TableStyled>
  );
}
