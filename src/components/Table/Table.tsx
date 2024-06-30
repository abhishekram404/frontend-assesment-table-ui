import { Icon } from "@iconify/react";
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
import Text from "../Text/Text";

export type TableItem = any;

export type TableColumn = {
  name: string;
  accessor: string;
  prefix?: string;
  suffix?: string;
};

export type TableProps = {
  columns: TableColumn[];
  items: TableItem[];
};

export default function Table(props: TableProps) {
  const { columns, items } = props;
  return (
    <TableStyled>
      <TableHeadStyled>
        <TableRowStyled>
          {columns.map((column) => (
            <TableHeadItemStyled key={column.accessor}>
              <TableHeadItemLeft>
                <Icon
                  icon="ph:text-a-underline"
                  color="#606B81"
                  fontSize={20}
                />
                <Text size={14} weight={700} color="#1B2D4F">
                  {column.name}
                </Text>
              </TableHeadItemLeft>
              <TableHeadItemRight>
                <Icon icon="bi:filter" color="#606B81" fontSize={20} />
              </TableHeadItemRight>
            </TableHeadItemStyled>
          ))}
        </TableRowStyled>
      </TableHeadStyled>

      <TableBodyStyled>
        {items.map((item) => (
          <TableRowStyled>
            {columns.map((column) => (
              <TableCellStyled>
                <Text size={14} weight={500} color="#1B2D4F">
                  {column.prefix}
                  {item[column.accessor]}
                  {column.suffix}
                </Text>
              </TableCellStyled>
            ))}
          </TableRowStyled>
        ))}
      </TableBodyStyled>
    </TableStyled>
  );
}
