import { memo } from "react";
import { AnyObject } from "../../../shared/types/AnyObject.type";
import { TableColumn } from "../Table";
import { TableRowStyled } from "../Table.styled";
import Column from "./Column";

export type RowProps = {
  item: AnyObject;
  columns: TableColumn[];
};

export default memo(function Row(props: RowProps) {
  const { item, columns } = props;

  return (
    <TableRowStyled key={item.id}>
      {columns.map((column) => (
        <Column {...column} item={item} />
      ))}
    </TableRowStyled>
  );
});
