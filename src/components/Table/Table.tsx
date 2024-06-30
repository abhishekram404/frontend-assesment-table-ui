import React, { Fragment } from "react";
import {
  TableBodyStyled,
  TableCellStyled,
  TableHeadItemLeft,
  TableHeadItemRight,
  TableHeadItemStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from "./Table.styled";
import { Icon } from "@iconify/react";

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
          <TableHeadItemStyled>
            <TableHeadItemLeft>
              <Icon icon="ph:text-a-underline" color="#606B81" fontSize={20} />
              Product name
            </TableHeadItemLeft>
            <TableHeadItemRight>
              <Icon icon="bi:filter" color="#606B81" fontSize={20} />
            </TableHeadItemRight>
          </TableHeadItemStyled>
          <TableHeadItemStyled>
            <TableHeadItemLeft>
              <Icon icon="ph:text-a-underline" color="#606B81" fontSize={20} />
              Price
            </TableHeadItemLeft>
            <TableHeadItemRight>
              <Icon icon="bi:filter" color="#606B81" fontSize={20} />
            </TableHeadItemRight>
          </TableHeadItemStyled>
          <TableHeadItemStyled>
            <TableHeadItemLeft>
              <Icon icon="ph:text-a-underline" color="#606B81" fontSize={20} />
              Rating
            </TableHeadItemLeft>
            <TableHeadItemRight>
              <Icon icon="bi:filter" color="#606B81" fontSize={20} />
            </TableHeadItemRight>
          </TableHeadItemStyled>
          <TableHeadItemStyled>
            <TableHeadItemLeft>
              <Icon icon="ph:text-a-underline" color="#606B81" fontSize={20} />
              Brand
            </TableHeadItemLeft>
            <TableHeadItemRight>
              <Icon icon="bi:filter" color="#606B81" fontSize={20} />
            </TableHeadItemRight>
          </TableHeadItemStyled>
          <TableHeadItemStyled>
            <TableHeadItemLeft>
              <Icon icon="ph:text-a-underline" color="#606B81" fontSize={20} />
              Availability
            </TableHeadItemLeft>
            <TableHeadItemRight>
              <Icon icon="bi:filter" color="#606B81" fontSize={20} />
            </TableHeadItemRight>
          </TableHeadItemStyled>
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
