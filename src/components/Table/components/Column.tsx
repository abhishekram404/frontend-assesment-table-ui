import { memo } from "react";
import { AnyObject } from "../../../shared/types/AnyObject.type";
import Text from "../../Text/Text";
import { TableColumn } from "../Table";
import { TableCellStyled } from "../Table.styled";

export type ColumnProps = TableColumn & { item: AnyObject };

export default memo(function Column(props: ColumnProps) {
  const { accessor, prefix = "", suffix = "", item, formatter } = props;

  const originalValue = item[accessor];

  const formattedValue = formatter ? formatter(originalValue) : originalValue;
  const title = `${prefix}${originalValue}${suffix}`;

  return (
    <TableCellStyled key={item.id + accessor} title={title}>
      <Text size={14} weight={500} color="#1B2D4F">
        {prefix}
        {formattedValue}
        {suffix}
      </Text>
    </TableCellStyled>
  );
});
