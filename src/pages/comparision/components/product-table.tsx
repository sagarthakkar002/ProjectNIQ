import { TableUI } from "../../../shared/components/ui/table";
import { ProductTableColumns, ProductTableRows } from "../../../shared/defaults-data/table/product-table"

export const ProductTable = () => {
    const columns = ProductTableColumns;
    const rows = ProductTableRows;
    return (
        <TableUI columns={columns} rows={rows} />
    )
}