import styled from "styled-components";

export const TableStyled = styled.table`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`;

export const TableHeadStyled = styled.thead`
  background: #dce2f0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  > tr {
    background: transparent !important;
  }
`;

export const TableHeadItemStyled = styled.th`
  display: flex;
`;

export const TableBodyStyled = styled.tbody``;

export const TableRowStyled = styled.tr`
  display: flex;
  padding: 14px 32px;
  margin-right: 8px;

  &:nth-child(odd) {
    background-color: #f6f5fb;
  }

  > * {
    flex: 1;
  }
`;

export const TableCellStyled = styled.td``;
