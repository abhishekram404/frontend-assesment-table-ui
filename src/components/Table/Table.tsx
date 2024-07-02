import { Icon } from "@iconify/react";
import Text from "../Text/Text";
import { Row } from "./components/Row";
import {
  TableBodyStyled,
  TableHeadItemLeft,
  TableHeadItemRight,
  TableHeadItemStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from "./Table.styled";

export type TableItem = any;

export type TableColumn = {
  name: string;
  accessor: string;
  prefix?: string;
  suffix?: string;
  formatter?: <T>(value: T) => any;
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
          <Row key={item.id} item={item} columns={columns} />
        ))}
      </TableBodyStyled>
    </TableStyled>
  );
}
